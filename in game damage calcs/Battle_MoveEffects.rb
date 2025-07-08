################################################################################
# Superclass that handles moves using a non-existent function code.
# Damaging moves just do damage with no additional effect.
# Non-damaging moves always fail.
################################################################################
class PokeBattle_UnimplementedMove < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if @basedamage > 0
      super
    else
      @battle.pbDisplay(_INTL("But it failed!"))
    end
  end
end

################################################################################
# Pseudomove for confusion damage
################################################################################
class PokeBattle_Confusion < PokeBattle_Move
  def initialize(battle, move)
    @battle = battle
    @basedamage = 40
    @type = -1
    @accuracy = 100
    @pp = -1
    @effect = 0
    @recoil = 0
    @target = 0
    @priority = 0
    @flags = 35
    @basemove = move
    @name = ""
  end

  def pbIsPhysical?(attacker, type = @type)
    return true
  end

  def pbIsSpecial?(attacker, type = @type)
    return false
  end

  def isSoundBased?
    return false
  end

  def pbEffectMessages(attacker, opponent, ignoretype = false, multipletargets = false)
    return super(attacker, opponent, true, multipletargets)
  end
end

################################################################################
# Implements the move Struggle.
# For cases where the real move named Struggle is not defined.
################################################################################
class PokeBattle_Struggle < PokeBattle_Move
  def initialize(battle, move, user, zbase = nil)
    @battle = battle
    @move = :STRUGGLE
    @data = $cache.moves[:STRUGGLE]
    @name = @data.name
    @basemove = nil # not associated with a move
    @pp = -1
    @zmove = false
    @immediate = false
    if user.is_a?(PokeBattle_Battler)
      # Move instance is serialized and sent over network for Online battles.
      # As such it can't contain Battler because it contains Battle which is not serializable.
      raise "move user needs to be PokeBattle_Pokemon"
    end
    @user = user
    @type = -1
    if @data
      @function   = @data.function
      @category   = @data.category
      @basedamage = @data.basedamage
      @accuracy   = @data.accuracy
      @maxpp      = @data.maxpp
      @target     = @data.target
      @desc       = @data.desc
      @priority   = @data.priority ? @data.priority : 0
      @effect     = @data.checkFlag?(:effect, 0)
      @moreeffect = @data.checkFlag?(:moreeffect, 0)
      @recoil     = @data.checkFlag?(:recoil, 0)
    end
  end

  def pbIsPhysical?(attacker, type = @type)
    return true
  end

  def pbIsSpecial?(attacker, type = @type)
    return false
  end

  def pbDisplayUseMessage(attacker, choice)
    @battle.pbDisplayBrief(_INTL("{1} is struggling!", attacker.pbThis))
    return 0
  end

  def pbRecoilDamage(attacker, damage, recoilmult, hitflags, numhits)
    return unless hitflags.intersect?([:Success, :MirrorMissReflect])
    recoilmult = 0.25 # the recoil cannot be given to these moves as a moveattribute as this attribute is used to check for the ability Reckless
    recoildamage = [1, (attacker.totalhp * recoilmult).floor].max
    recoildamage *= numhits
    attacker.pbReduceHP(recoildamage)
    @battle.pbDisplay(_INTL("{1} is damaged by the recoil!", attacker.pbThis))
  end
end

################################################################################
# No additional effect.
################################################################################
class PokeBattle_Move_000 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if Rejuv && @battle.FE == :SWAMP && @move == :ATTACKORDER
      stat = @battle.sample([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED])
      opponent.pbReduceStat(stat, 1, abilitymessage: true, statdropper: attacker)
    end
    if @battle.FE == :CHESS && @move == :FALSESURRENDER
      unless ((!@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? || opponent.ability == :OBLIVIOUS) && !opponent.moldbroken) || opponent.effects[:Taunt] > 0
        opponent.effects[:Taunt] = 4
        @battle.pbDisplay(_INTL("{1} fell for the taunt!", opponent.pbThis))
      end
    end
  end

  def pbRecoilDamage(attacker, damage, recoilmult, hitflags, numhits)
    recoilmult = 0.25 if @move == :WAVECRASH && [:WATERSURFACE, :UNDERWATER].include?(@battle.FE)
    super(attacker, damage, recoilmult, hitflags, numhits)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :AQUACUTTER
      @battle.pbAnimation(:RAZORSHELL, attacker, opponent, hitnum)
    elsif id == :WAVECRASH
      @battle.pbAnimation(:WATERFALL, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Does absolutely nothing (Splash).
################################################################################
class PokeBattle_Move_001 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    accdrop = false
    if @battle.FE == :WATERSURFACE
      for i in @battle.battlers
        next if i == attacker
        if i.pbReduceStat(PBStats::ACCURACY, 1, abilitymessage: false, statdropper: attacker)
          accdrop = true
        end
      end
    end

    @battle.pbDisplay(_INTL("But nothing happened!")) unless accdrop
  end
end

################################################################################
# Struggle.  Overrides the default Struggle effect above.
################################################################################
class PokeBattle_Move_002 < PokeBattle_Struggle
end

################################################################################
# Puts the target to sleep. (Dark Void / Grass Whistle / Spore / Sleep Powder /
# Relic Song / Lovely Kiss / Sing / Hypnosis)
################################################################################
class PokeBattle_Move_003 < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if @move == :DARKVOID && [:DARKNESS2, :DARKNESS3].include?(@battle.FE)
      @battle.pbDisplay(_INTL("We fall..."))
      @battle.pbDisplay(_INTL(" We fall... unto the end..."))
    end
    super
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanSleep?(showMessage)
  end

  def pbOnStartUse(attacker, targets)
    if @move == :DARKVOID && !Rejuv && !(attacker.species == :DARKRAI || (Reborn && attacker.species == :HYPNO && attacker.form == 1))
      # any non-darkrai Pokemon
      @battle.pbDisplay(_INTL("But {1} can't use the move!", attacker.pbThis(true)))
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    opponent.pbSleep
    @battle.pbDisplay(_INTL("{1} went to sleep!", opponent.pbThis))
  end

  def pbAdditionalEffect(attacker, opponent)
    return unless opponent.pbCanSleep?(false)

    opponent.pbSleep
    @battle.pbDisplay(_INTL("{1} went to sleep!", opponent.pbThis))
  end
end

################################################################################
# Makes the target drowsy.  It will fall asleep at the end of the next turn. (Yawn)
################################################################################
class PokeBattle_Move_004 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Yawn] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return opponent.pbCanStatus?(showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Yawn] = 2
    @battle.pbDisplay(_INTL("{1} made {2} drowsy!", attacker.pbThis, opponent.pbThis(true)))
  end
end

################################################################################
# Poisons the target. (Gunk Shot / Sludge Wave / Sludge Bomb / Poison Jab / Cross Poison
# / Sludge / Poison Tail / Smog / Poison Sting / Poison Gas / Poison Powder)
################################################################################
class PokeBattle_Move_005 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanPoison?(showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    if [:VOLCANICTOP, :BACKALLEY, :CITY].include?(@battle.FE) && @move == :POISONGAS
      opponent.pbPoison(attacker, true)
      @battle.pbDisplay(_INTL("{1} was badly poisoned!", opponent.pbThis))
    else
      opponent.pbPoison(attacker)
      @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
    end
  end

  def pbAdditionalEffect(attacker, opponent)
    if @battle.FE == :WASTELAND && [:GUNKSHOT, :SLUDGEBOMB, :SLUDGEWAVE, :SLUDGE].include?(@move) &&
       ((!opponent.hasType?(:POISON) && !opponent.hasType?(:STEEL)) || opponent.corroded) &&
       (opponent.ability != :IMMUNITY || opponent.moldbroken)
      rnd = @battle.pbRandom(4)
      # Poison Heal, Toxic Boost and Crested Zangoose ignore the random status and instead get poisoned.
      rnd = 3 if opponent.ability == :POISONHEAL || opponent.ability == :TOXICBOOST || opponent.crested == :ZANGOOSE
      case rnd
        when 0
          return if !opponent.pbCanBurn?(false)

          opponent.pbBurn(attacker)
          @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
        when 1
          return if !opponent.pbCanFreeze?(false)

          opponent.pbFreeze
          @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
        when 2
          return if !opponent.pbCanParalyze?(false)

          opponent.pbParalyze(attacker)
          @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
        when 3
          return if !opponent.pbCanPoison?(false)

          opponent.pbPoison(attacker)
          @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
      end
    else
      return if !opponent.pbCanPoison?(false)

      if [:BACKALLEY, :CITY].include?(@battle.FE) && @move == :SMOG
        opponent.pbPoison(attacker, true)
        @battle.pbDisplay(_INTL("{1} was badly poisoned!", opponent.pbThis))
      else
        opponent.pbPoison(attacker)
        @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
      end
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :BARBEDWEB
      @battle.pbAnimation(:TOXICTHREAD, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Badly poisons the target. (Poison Fang / Toxic)
################################################################################
class PokeBattle_Move_006 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanPoison?(showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    opponent.pbPoison(attacker, true)
    @battle.pbDisplay(_INTL("{1} was badly poisoned!", opponent.pbThis))
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanPoison?(false)

    opponent.pbPoison(attacker, true)
    @battle.pbDisplay(_INTL("{1} was badly poisoned!", opponent.pbThis))
  end
end

################################################################################
# Paralyzes the target. (Nuzzle / Dragon Breath / Bolt Strike / Zap Cannon / Thunderbolt
# / Discharge / Thunder Punch / Spark / Thunder Shock / Thunder Wave / Force Palm
# / Lick / Stun Spore / Body Slam / Glare / Wildbolt Storm / Volt Tackle)
################################################################################
class PokeBattle_Move_007 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanParalyze?(showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    opponent.pbParalyze(attacker)
    @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if opponent.effects[:Minimize] && @move == :BODYSLAM
    return damagemult
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanParalyze?(false)

    opponent.pbParalyze(attacker)
    @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
  end

  def pbRecoilDamage(attacker, damage, recoilmult, hitflags, numhits)
    recoilmult = 0 if @move == :WILDCHARGE && [:ELECTERRAIN].include?(@battle.FE)
    super(attacker, damage, recoilmult, hitflags, numhits)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :WILDBOLTSTORM
      @battle.pbAnimation(:THUNDER, attacker, opponent, hitnum)
    elsif id == :ETHEREALTEMPEST
      @battle.pbAnimation(:HURRICANE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Paralyzes the target.  (Thunder)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
# (Handled in pbAccuracyCheck): Accuracy perfect in rain, 50% in sunshine.
################################################################################
class PokeBattle_Move_008 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanParalyze?(false)

    opponent.pbParalyze(attacker)
    @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
  end
end

################################################################################
# Paralyzes the target.  May cause the target to flinch. (Thunder Fang)
################################################################################
class PokeBattle_Move_009 < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanParalyze?(false)

    opponent.pbParalyze(attacker)
    @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
  end

  def pbSecondAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end
end

################################################################################
# Burns the target. (Blue Flare / Fire Blast / Heat Wave / Inferno / Searing Shot
# / Flamethrower / Blaze Kick / Lava Plume / Fire Punch / Flame Wheel / Ember
# / Will-O-Wisp / Scald / Steam Eruption / Sandsear Storm / Flare Blitz / Scorching Sands)
################################################################################
class PokeBattle_Move_00A < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanBurn?(showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    opponent.pbBurn(attacker)
    @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
  end

  def pbAdditionalEffect(attacker, opponent)
    return false if !opponent.pbCanBurn?(false)

    opponent.pbBurn(attacker)
    @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :SLASHANDBURN
      @battle.pbAnimation(:POWERWHIP, attacker, opponent, hitnum)
    elsif id == :PYROKINESIS
      @battle.pbAnimation(:MYSTICALFIRE, attacker, opponent, hitnum)
    elsif id == :SANDSEARSTORM
      @battle.pbAnimation(:SCORCHINGSANDS, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Burns the target.  May cause the target to flinch. (Fire Fang)
################################################################################
class PokeBattle_Move_00B < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanBurn?(false)

    opponent.pbBurn(attacker)
    @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
  end

  def pbSecondAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end
end

################################################################################
# Freezes the target. (Ice Beam / Ice Punch / Powder Snow / Freeze-Dry / Freezing Glare)
################################################################################
class PokeBattle_Move_00C < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanFreeze?(showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    opponent.pbFreeze
    @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanFreeze?(false)

    opponent.pbFreeze
    @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
  end
end

################################################################################
# Freezes the target. (Blizzard)
# (Handled in pbAccuracyCheck): Accuracy perfect in hail.
################################################################################
class PokeBattle_Move_00D < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanFreeze?(false)

    opponent.pbFreeze
    @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
  end
end

################################################################################
# Freezes the target.  May cause the target to flinch. (Ice Fang)
################################################################################
class PokeBattle_Move_00E < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanFreeze?(false)

    opponent.pbFreeze
    @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
  end

  def pbSecondAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end
end

################################################################################
# Causes the target to flinch. (Flinch / Dark Pulse / Bite / Rolling Kick / Air Slash
# / Astonish / Needle Arm / Hyper Fang / Headbutt / Extrasensory / Zen Headbutt
# / Heart Stamp / Rock Slide / Iron Head / Waterfall / Zing Zap / Mountain Gale)
################################################################################
class PokeBattle_Move_00F < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :MOUNTAINGALE
      @battle.pbAnimation(:AVALANCHE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Causes the target to flinch.  Does double damage if the target is Minimized.
# (Stomp, Steamroller, Dragon Rush)
################################################################################
class PokeBattle_Move_010 < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if opponent.effects[:Minimize]
    return damagemult
  end
end

################################################################################
# Causes the target to flinch.  Fails if the user is not asleep. (Snore)
################################################################################
class PokeBattle_Move_011 < PokeBattle_Move
  def pbCanUseWhileAsleep?
    return true
  end

  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end

  def pbOnStartUse(attacker, targets)
    if attacker.status != :SLEEP && (attacker.ability != :COMATOSE || @battle.FE == :ELECTERRAIN)
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end
end

################################################################################
# Causes the target to flinch.  Fails if this isn't the user's first turn. (Fake Out)
################################################################################
class PokeBattle_Move_012 < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbOnStartUse(attacker, targets)
    if attacker.turncount != 1 || !attacker.isFirstMoveOfRound
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end
end

################################################################################
# Confuses the target. (Confusion, Signal Beam, Dynamic Punch, Chatter, Confuse Ray,
# Rock Climb, Dizzy Punch, Supersonic, Sweet Kiss, Teeter Dance, Psybeam, Water Pulse,
# Strange Steam)
################################################################################
class PokeBattle_Move_013 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanConfuse?(showMessage, inflictor: attacker)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    if @battle.FE == :FAIRYTALE && @move == :SWEETKISS
      if !opponent.damagestate.substitute && opponent.status == :SLEEP
        opponent.pbCureStatus
      end
    end
    if @battle.FE == :DANCEFLOOR && @move == :TEETERDANCE
      opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
    end
    return if !opponent.pbCanConfuse?(true, inflictor: attacker)
    opponent.pbConfuse
    @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanConfuse?(false, inflictor: attacker)
    opponent.pbConfuse
    @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
  end
end

################################################################################
# Confuses the target.  (Hurricane)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
# (Handled in pbAccuracyCheck): Accuracy perfect in rain, 50% in sunshine.
################################################################################
class PokeBattle_Move_015 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanConfuse?(false, inflictor: attacker)
    opponent.pbConfuse
    @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
  end
end

################################################################################
# Attracts the target. (Attract)
################################################################################
class PokeBattle_Move_016 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return false unless opponent.pbCanAttract?(attacker, showMessage)
    if !@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? && !opponent.moldbroken
      @battle.pbDisplay(_INTL("The Aroma Veil protects #{opponent.pbThis} from infatuation!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Attract] = attacker.index
    @battle.pbCommonAnimation("Attract", opponent, nil)
    @battle.pbDisplay(_INTL("{1} fell in love!", opponent.pbThis))
    if opponent.hasWorkingItem(:DESTINYKNOT) && attacker.ability != :OBLIVIOUS && attacker.effects[:Attract] < 0
      attacker.effects[:Attract] = opponent.index
      @battle.pbCommonAnimation("Attract", attacker, nil)
      @battle.pbDisplay(_INTL("{1}'s {2} infatuated {3}!", opponent.pbThis, getItemName(opponent.item), attacker.pbThis(true)))
    end
  end
end

################################################################################
# Burns, freezes or paralyzes the target. (Tri Attack)
################################################################################
class PokeBattle_Move_017 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    rnd = @battle.pbRandom(3)
    case rnd
      when 0
        return if !opponent.pbCanBurn?(false)

        opponent.pbBurn(attacker)
        @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
      when 1
        return if !opponent.pbCanFreeze?(false)

        opponent.pbFreeze
        @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
      when 2
        return if !opponent.pbCanParalyze?(false)

        opponent.pbParalyze(attacker)
        @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
    end
  end
end

################################################################################
# Cures user of burn, poison and paralysis. (Refresh)
################################################################################
class PokeBattle_Move_018 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.status != :BURN && attacker.status != :POISON && attacker.status != :PARALYSIS
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    t = attacker.status
    attacker.status = nil
    attacker.statusCount = 0
    if t == :BURN
      @battle.pbDisplay(_INTL("{1} was cured of its burn.", attacker.pbThis))
    elsif t == :POISON
      @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", attacker.pbThis))
    elsif t == :PARALYSIS
      @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", attacker.pbThis))
    end
  end
end

################################################################################
# Cures all party Pokémon of permanent status problems. (Aromatherapy, Heal Bell)
################################################################################
class PokeBattle_Move_019 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    party = @battle.pbParty(attacker.index)
    for pkmn in party
      next if pkmn.status == nil
      if @move == :HEALBELL
        battler = nil
        battler = attacker if pkmn == attacker.pokemon
        battler = attacker.pbPartner if pkmn == attacker.pbPartner.pokemon
        next if battler&.ability == :SOUNDPROOF && (battler != attacker || Gen < 8)
      end
      return true
    end
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @move == :AROMATHERAPY
      @battle.pbDisplay(_INTL("A soothing aroma wafted through the area!"))
    else
      @battle.pbDisplay(_INTL("A bell chimed!"))
    end
    activepkmn = []
    for i in @battle.battlers
      next if attacker.pbIsOpposing?(i.index)
      next if @move == :HEALBELL && i.ability == :SOUNDPROOF && (i != attacker || Gen < 8)

      case i.status
        when :PARALYSIS
          @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", i.pbThis))
        when :SLEEP
          @battle.pbDisplay(_INTL("{1} was woken from its sleep.", i.pbThis))
        when :POISON
          @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", i.pbThis))
        when :BURN
          @battle.pbDisplay(_INTL("{1} was cured of its burn.", i.pbThis))
        when :FROZEN
          @battle.pbDisplay(_INTL("{1} was defrosted.", i.pbThis))
        when :PETRIFIED
          @battle.pbDisplay(_INTL("{1} was released from the stone.", i.pbThis))
      end
      i.status = nil
      i.statusCount = 0
      activepkmn.push(i.pokemonIndex)
    end
    party = @battle.pbParty(attacker.index) # NOTE: Considers both parties in multi battles
    for i in 0...party.length
      next if activepkmn.include?(i)
      next if !party[i] || party[i].isEgg?

      case party[i].status
        when :PARALYSIS
          @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", party[i].name))
        when :SLEEP
          @battle.pbDisplay(_INTL("{1} was woken from its sleep.", party[i].name))
        when :POISON
          @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", party[i].name))
        when :BURN
          @battle.pbDisplay(_INTL("{1} was cured of its burn.", party[i].name))
        when :FROZEN
          @battle.pbDisplay(_INTL("{1} was defrosted.", party[i].name))
        when :PETRIFIED
          @battle.pbDisplay(_INTL("{1} was released from the stone.", party[i].name))
      end
      party[i].status = nil
      party[i].statusCount = 0
    end
  end
end

################################################################################
# Safeguards the user's side from being inflicted with status problems. (Safeguard)
################################################################################
class PokeBattle_Move_01A < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:Safeguard] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:Safeguard] = 5
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Your team became cloaked in a mystical veil!"))
    else
      @battle.pbDisplay(_INTL("The foe's team became cloaked in a mystical veil!"))
    end
  end
end

################################################################################
# User passes its status problem to the target. (Psycho Shift)
################################################################################
class PokeBattle_Move_01B < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.status.nil? ||
       (attacker.status == :PARALYSIS && !opponent.pbCanParalyze?(false)) ||
       (attacker.status == :SLEEP && !opponent.pbCanSleep?(false)) ||
       (attacker.status == :POISON && !opponent.pbCanPoison?(false)) ||
       (attacker.status == :BURN && !opponent.pbCanBurn?(false)) ||
       (attacker.status == :FROZEN && !opponent.pbCanFreeze?(false)) ||
       (attacker.status == :PETRIFIED && !opponent.pbCanPetrify?(false))
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    case attacker.status
      when :PARALYSIS
        opponent.pbParalyze(attacker)
        @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
        opponent.pbAbilityCureCheck
        @battle.synchronize = [-1, -1, 0] if opponent.status != :PARALYSIS
        attacker.status = nil
        @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", attacker.pbThis))
      when :SLEEP
        opponent.pbSleep
        @battle.pbDisplay(_INTL("{1} went to sleep!", opponent.pbThis))
        opponent.pbAbilityCureCheck
        @battle.synchronize = [-1, -1, 0] if opponent.status != :SLEEP
        attacker.status = nil
        attacker.statusCount = 0
        @battle.pbDisplay(_INTL("{1} was woken from its sleep.", attacker.pbThis))
      when :POISON
        opponent.pbPoison(attacker, attacker.statusCount != 0)
        if attacker.statusCount != 0
          @battle.pbDisplay(_INTL("{1} is badly poisoned!", opponent.pbThis))
        else
          @battle.pbDisplay(_INTL("{1} is poisoned!", opponent.pbThis))
        end
        opponent.pbAbilityCureCheck
        @battle.synchronize = [-1, -1, 0] if opponent.status != :POISON
        attacker.status = nil
        attacker.statusCount = 0
        @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", attacker.pbThis))
      when :BURN
        opponent.pbBurn(attacker)
        @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
        opponent.pbAbilityCureCheck
        @battle.synchronize = [-1, -1, 0] if opponent.status != :BURN
        attacker.status = nil
        @battle.pbDisplay(_INTL("{1} was cured of its burn.", attacker.pbThis))
      when :FROZEN
        opponent.pbFreeze
        @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
        opponent.pbAbilityCureCheck
        @battle.synchronize = [-1, -1, 0] if opponent.status != :FROZEN
        attacker.status = nil
        @battle.pbDisplay(_INTL("{1} was defrosted.", attacker.pbThis))
      when :PETRIFIED
        opponent.pbPetrify(attacker)
        @battle.pbDisplay(_INTL("{1} was petrified!", opponent.pbThis))
        opponent.pbAbilityCureCheck
        @battle.synchronize = [-1, -1, 0] if opponent.status != :PETRIFIED
        attacker.status = nil
        @battle.pbDisplay(_INTL("{1} was released from the stone.", attacker.pbThis))
    end
  end
end

################################################################################
# Increases the user's Attack by 1 stage. (Gen 7 Howl, Sharpen, Meditate, Meteor Mash, Metal Claw, Power-Up Punch)
################################################################################
class PokeBattle_Move_01C < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if @battle.FE == :PSYTERRAIN && @move == :MEDITATE
      return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], showMessage)
    end
    return attacker.pbCanIncreaseStatStage?(PBStats::ATTACK, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    if [:RAINBOW, :ASHENBEACH].include?(@battle.FE) && @move == :MEDITATE
      attacker.pbIncreaseStat(PBStats::ATTACK, 3, abilitymessage: false, statsource: attacker)
    elsif @battle.FE == :PSYTERRAIN && @move == :MEDITATE
      attacker.pbIncreaseStat(PBStats::ATTACK, 2, abilitymessage: false, statsource: attacker)
      attacker.pbIncreaseStat(PBStats::SPATK, 2, abilitymessage: false, statsource: attacker)
    elsif (@battle.FE == :COLOSSEUM || @battle.ProgressiveFieldCheck(PBFields::CONCERT)) && @move == :HOWL
      attacker.pbIncreaseStat(PBStats::ATTACK, 2, abilitymessage: false, statsource: attacker)
    else
      attacker.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: false, statsource: attacker)
    end
  end

  def pbAdditionalEffectSelf(attacker)
    attacker.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: false, statsource: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :SOLARFLARE
      @battle.pbAnimation(:FIERYDANCE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Increases the user's Defense by 1 stage. (Harden, Steel Wing, Withdraw, Psyshield Bash)
################################################################################
class PokeBattle_Move_01D < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return attacker.pbCanIncreaseStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
  end

  def pbAdditionalEffectSelf(attacker)
    attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
    if @battle.FE == :PSYTERRAIN && @move == :PSYSHIELDBASH
      attacker.pbIncreaseStat(PBStats::SPDEF, 1, abilitymessage: false, statsource: attacker)
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :PSYSHIELDBASH
      @battle.pbAnimation(:ZENHEADBUTT, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Increases the user's Defense by 1 stage.  User curls up. (Defense Curl)
################################################################################
class PokeBattle_Move_01E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return attacker.pbCanIncreaseStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    if attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
      attacker.effects[:DefenseCurl] = true
    end
  end

  def pbAdditionalEffectSelf(attacker)
    attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
  end
end

################################################################################
# Increases the user's Speed by 1 stage. (Flame Charge / Esper Wing)
################################################################################
class PokeBattle_Move_01F < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return attacker.pbCanIncreaseStatStage?(PBStats::SPEED, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbIncreaseStat(PBStats::SPEED, 1, abilitymessage: false, statsource: attacker)
  end

  def pbAdditionalEffectSelf(attacker)
    increment = 1
    increment = 2 if @move == :ESPERWING && @battle.FE == :PSYTERRAIN
    attacker.pbIncreaseStat(PBStats::SPEED, increment, abilitymessage: false, statsource: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :ESPERWING
      @battle.pbAnimation(:PSYCHOCUT, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Increases the user's Special Attack by 1 stage. (Charge Beam, Fiery Dance, Mystical Power)
################################################################################
class PokeBattle_Move_020 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return attacker.pbCanIncreaseStatStage?(PBStats::SPATK, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbIncreaseStat(PBStats::SPATK, 1, abilitymessage: false)
  end

  def pbAdditionalEffectSelf(attacker)
    increment = 1
    increment = 2 if @battle.FE == :PSYTERRAIN && @move == :MYSTICALPOWER
    attacker.pbIncreaseStat(PBStats::SPATK, increment, statsource: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :HOARFROSTMOON
      @battle.pbAnimation(:GLACIATE, attacker, opponent, hitnum)
    elsif id == :MYSTICALPOWER
      @battle.pbAnimation(:PSYCHIC, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Increases the user's Special Defense by 1 stage.  Charges up Electric attacks. (Charge)
################################################################################
class PokeBattle_Move_021 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Charge] = 2
    @battle.pbDisplay(_INTL("{1} began charging power!", attacker.pbThis))
    statchange = @battle.FE == :ELECTERRAIN ? 2 : 1
    attacker.pbIncreaseStat(PBStats::SPDEF, statchange, statsource: attacker)
  end
end

################################################################################
# Increases the user's evasion by 1 stage. (Double Team)
################################################################################
class PokeBattle_Move_022 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::EVASION, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = @battle.FE == :MIRROR ? 2 : 1
    attacker.pbIncreaseStat(PBStats::EVASION, statchange, statsource: attacker)
  end
end

################################################################################
# Increases the user's critical hit rate. (Focus Energy)
################################################################################
class PokeBattle_Move_023 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if attacker.effects[:FocusEnergy] < 2
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:FocusEnergy] = 2
    attacker.effects[:FocusEnergy] = 3 if @battle.FE == :ASHENBEACH
    @battle.pbDisplay(_INTL("{1} is getting pumped!", attacker.pbThis))
  end
end

################################################################################
# Increases the user's Attack and Defense by 1 stage each. (Bulk Up)
################################################################################
class PokeBattle_Move_024 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::DEFENSE], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = @battle.FE == :CROWD ? 2 : 1
    for stat in [PBStats::ATTACK, PBStats::DEFENSE]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack, Defense and Accuracy by 1 stage each. (Coil)
################################################################################
class PokeBattle_Move_025 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::DEFENSE, PBStats::ACCURACY], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    if @battle.FE == :GRASSY || (Rejuv && @battle.FE == :DRAGONSDEN)
      statchange = 2
    end
    for stat in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::ACCURACY]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack and Speed by 1 stage each. (Dragon Dance)
################################################################################
class PokeBattle_Move_026 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPEED], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    if [:BIGTOP, :DRAGONSDEN, :DANCEFLOOR].include?(@battle.FE) && @move == :DRAGONDANCE
      statchange = 2
    end
    for stat in [PBStats::ATTACK, PBStats::SPEED]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack and Special Attack by 1 stage each. (Work Up)
################################################################################
class PokeBattle_Move_027 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    statchange = 2 if @battle.ProgressiveFieldCheck(PBFields::CONCERT) || [:CROWD, :CITY].include?(@battle.FE)
    for stat in [PBStats::ATTACK, PBStats::SPATK]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack and Sp. Attack by 1 stage each (2 each in sunshine).
# (Growth)
################################################################################
class PokeBattle_Move_028 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = @battle.pbWeather == :SUNNYDAY && !attacker.hasWorkingItem(:UTILITYUMBRELLA) ? 2 : 1
    if [:GRASSY, :FOREST].include?(@battle.FE) || @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN) # Grassy/Forest/Flower Garden Field
      statchange = 2
      statchange = 3 if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 5)
    end
    for stat in [PBStats::ATTACK, PBStats::SPATK]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack and accuracy by 1 stage each. (Hone Claws)
################################################################################
class PokeBattle_Move_029 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::ACCURACY], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    for stat in [PBStats::ATTACK, PBStats::ACCURACY]
      attacker.pbIncreaseStat(stat, 1, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Defense and Special Defense by 1 stage each. (Cosmic Power, Defend Order)
################################################################################
class PokeBattle_Move_02A < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::DEFENSE, PBStats::SPDEF], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    if ([:MISTY, :RAINBOW, :HOLY, :STARLIGHT, :NEWWORLD, :PSYTERRAIN].include?(@battle.FE) && @move == :COSMICPOWER) ||
       (@battle.FE == :FOREST && @move == :DEFENDORDER)
      statchange = 2
    end
    for stat in [PBStats::DEFENSE, PBStats::SPDEF]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Special Attack, Special Defense and Speed  by 1 stage each. (Quiver Dance)
################################################################################
class PokeBattle_Move_02B < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    if [:BIGTOP, :DANCEFLOOR].include?(@battle.FE) && @move == :QUIVERDANCE
      statchange = 2
    end
    for stat in [PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Special Attack and Special Defense by 1 stage each. (Calm Mind)
################################################################################
class PokeBattle_Move_02C < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::SPATK, PBStats::SPDEF], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    if [:CHESS, :ASHENBEACH, :PSYTERRAIN].include?(@battle.FE) # Chess/Ashen/Psychic Field
      statchange = 2
    end
    for stat in [PBStats::SPATK, PBStats::SPDEF]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack, Defense, Speed, Special Attack and Special Defense
# by 1 stage each. (Ancient Power, Silver Wind, Ominous Wind)
################################################################################
class PokeBattle_Move_02D < PokeBattle_Move
  def pbAdditionalEffectSelf(attacker)
    for stat in 1..5
      attacker.pbIncreaseStat(stat, 1, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Attack by 2 stages. (Swords Dance)
################################################################################
class PokeBattle_Move_02E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::ATTACK, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = [:BIGTOP, :FAIRYTALE, :COLOSSEUM, :DANCEFLOOR].include?(@battle.FE) && @move == :SWORDSDANCE ? 3 : 2
    attacker.pbIncreaseStat(PBStats::ATTACK, statchange, statsource: attacker)
  end
end

################################################################################
# Increases the user's Defense by 2 stages. (Iron Defense, Acid Armor, Barrier, Diamond Storm, Shelter)
################################################################################
class PokeBattle_Move_02F < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return attacker.pbCanIncreaseStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    if (([:CORROSIVE, :CORROSIVEMIST, :MURKWATERSURFACE, :FAIRYTALE].include?(@battle.FE) || @battle.ProgressiveFieldCheck(PBFields::CONCERT)) && @move == :ACIDARMOR) || # Corro Fields
       (@battle.FE == :FACTORY && @move == :IRONDEFENSE)
      attacker.pbIncreaseStat(PBStats::DEFENSE, 3, statsource: attacker)
    else
      attacker.pbIncreaseStat(PBStats::DEFENSE, 2, statsource: attacker)
    end
    if Rejuv && @move == :SHELTER && attacker.effects[:Shelter] == false
      attacker.effects[:Shelter] = true
      @battle.pbDisplay(_INTL("{1} is sheltering itself from the surrounding!", attacker.pbThis))
    end
  end

  def pbAdditionalEffectSelf(attacker)
    attacker.pbIncreaseStat(PBStats::DEFENSE, 2, abilitymessage: false, statsource: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :SHELTER
      @battle.pbAnimation(:WITHDRAW, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Increases the user's Speed by 2 stages. (Agility, Rock Polish)
################################################################################
class PokeBattle_Move_030 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if @move == :ROCKPOLISH && @battle.FE == :CRYSTALCAVERN
      return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK, PBStats::SPEED], showMessage)
    end
    return attacker.pbCanIncreaseStatStage?(PBStats::SPEED, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.FE == :ROCKY && @move == :ROCKPOLISH # Rocky Fields
      attacker.pbIncreaseStat(PBStats::SPEED, 3, statsource: attacker)
    elsif @battle.FE == :CRYSTALCAVERN && @move == :ROCKPOLISH # Crystal Cavern
      attacker.pbIncreaseStat(PBStats::SPEED, 2, statsource: attacker)
      attacker.pbIncreaseStat(PBStats::ATTACK, 1, statsource: attacker)
      attacker.pbIncreaseStat(PBStats::SPATK, 1, statsource: attacker)
    else
      attacker.pbIncreaseStat(PBStats::SPEED, 2, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Speed by 2 stages.  Reduces the user's weight. (Autotomize)
################################################################################
class PokeBattle_Move_031 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::SPEED, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = [:FACTORY, :DEEPEARTH, :CITY].include?(@battle.FE) ? 3 : 2
    if attacker.pbIncreaseStat(PBStats::SPEED, statchange, statsource: attacker)
      attacker.effects[:WeightModifier] -= 1000
      @battle.pbDisplay(_INTL("{1} became nimble!", attacker.pbThis))
    end
  end
end

################################################################################
# Increases the user's Special Attack by 2 stages. (Nasty Plot)
################################################################################
class PokeBattle_Move_032 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::SPATK, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = [:CHESS, :PSYTERRAIN, :INFERNAL, :BACKALLEY].include?(@battle.FE) ? 3 : 2
    attacker.pbIncreaseStat(PBStats::SPATK, statchange, statsource: attacker)
  end
end

################################################################################
# Increases the user's Special Defense by 2 stages. (Amnesia)
################################################################################
class PokeBattle_Move_033 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::SPDEF, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbIncreaseStat(PBStats::SPDEF, 2, statsource: attacker)
  end
end

################################################################################
# Increases the user's evasion by 2 stages.  Minimizes the user. (Minimize)
################################################################################
class PokeBattle_Move_034 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::EVASION, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if attacker.pbIncreaseStat(PBStats::EVASION, 2, statsource: attacker)
      attacker.effects[:Minimize] = true
    end
  end
end

################################################################################
# Decreases the user's Defense and Special Defense by 1 stage each.
# Increases the user's Attack, Speed and Special Attack by 2 stages each. (Shell Smash)
################################################################################
class PokeBattle_Move_035 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for stat in [PBStats::DEFENSE, PBStats::SPDEF]
      attacker.pbReduceStat(stat, 1, statdropper: attacker)
    end
    for stat in [PBStats::ATTACK, PBStats::SPATK, PBStats::SPEED]
      attacker.pbIncreaseStat(stat, 2, statsource: attacker)
    end
  end
end

################################################################################
# Increases the user's Speed by 2 stages, and its Attack by 1 stage. (Shift Gear)
################################################################################
class PokeBattle_Move_036 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPEED], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = [:FACTORY, :CITY].include?(@battle.FE) ? 2 : 1
    attacker.pbIncreaseStat(PBStats::ATTACK, statchange, statsource: attacker)
    attacker.pbIncreaseStat(PBStats::SPEED, 2, statsource: attacker)
  end
end

################################################################################
# Increases one random stat of the target by 2 stages (except HP). (Acupressure)
################################################################################
class PokeBattle_Move_037 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.index != opponent.index && opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("{1}'s attack missed!", attacker.pbThis)) if showMessage
      return false
    end
    return opponent.pbCanIncreaseAnyStat([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED, PBStats::SPATK, PBStats::SPDEF, PBStats::ACCURACY, PBStats::EVASION], showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    stats = []
    for i in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED, PBStats::SPATK, PBStats::SPDEF, PBStats::ACCURACY, PBStats::EVASION]
      stats.push(i) if opponent.pbCanIncreaseStatStage?(i)
    end
    opponent.pbIncreaseStat(@battle.sample(stats), 2, statsource: attacker)
  end
end

################################################################################
# Increases the user's Defense by 3 stages. (Cotton Guard)
################################################################################
class PokeBattle_Move_038 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return attacker.pbIncreaseStat(PBStats::DEFENSE, 3, statsource: attacker)
  end
end

################################################################################
# Increases the user's Special Attack by 3 stages. (Tail Glow)
################################################################################
class PokeBattle_Move_039 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::SPATK, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbIncreaseStat(PBStats::SPATK, 3, statsource: attacker)
  end
end

################################################################################
# Reduces the user's HP by half of max, and sets its Attack to maximum. (Belly Drum)
################################################################################
class PokeBattle_Move_03A < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.hp <= (attacker.totalhp / 2.0).floor || !attacker.pbCanIncreaseStatStage?(PBStats::ATTACK, false)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceHP((attacker.totalhp / 2.0).floor, false, false)
    # Calling pbIncreaseStat will apply Contrary correctly.
    attacker.pbIncreaseStat(PBStats::ATTACK, 12, abilitymessage: false, statsource: attacker)
    @battle.pbDisplay(_INTL("{1} cut its own HP and maximized its Attack!", attacker.pbThis))
    if @battle.FE == :BIGTOP
      if attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
        attacker.effects[:StockpileDef] += 1
      end
      if attacker.pbIncreaseStat(PBStats::SPDEF, 1, abilitymessage: false, statsource: attacker)
        attacker.effects[:StockpileSpDef] += 1
      end
    end
  end
end

################################################################################
# Decreases the user's Attack and Defense by 1 stage each. (Superpower)
################################################################################
class PokeBattle_Move_03B < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for stat in [PBStats::ATTACK, PBStats::DEFENSE]
      attacker.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Decreases the user's Defense and Special Defense by 1 stage each.
# (Close Combat, Dragon Ascent, Headlong Rush)
################################################################################
class PokeBattle_Move_03C < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for stat in [PBStats::DEFENSE, PBStats::SPDEF]
      attacker.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :HEADLONGRUSH
      @battle.pbAnimation(:DOUBLEEDGE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Decreases the user's Defense, Special Defense and Speed by 1 stage each. (V-Create)
################################################################################
class PokeBattle_Move_03D < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for stat in [PBStats::SPDEF, PBStats::DEFENSE, PBStats::SPEED]
      attacker.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Decreases the user's Speed by 1 stage. (Hammer Arm, Ice Hammer)
################################################################################
class PokeBattle_Move_03E < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the user's Special Attack by 2 stages. (Overheat, Draco Meteor, Leaf Storm, Psycho Boost, Fleur Cannon)
################################################################################
class PokeBattle_Move_03F < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceStat(PBStats::SPATK, 2, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Increases the target's Special Attack by 1 stage.  Confuses the target. (Flatter)
################################################################################
class PokeBattle_Move_040 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if opponent.effects[:Substitute] == 0
    @battle.pbDisplay(_INTL("{1}'s attack missed!", attacker.pbThis)) if showMessage
    return false
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    boost = 1
    boost = 2 if @battle.FE == :COLOSSEUM
    opponent.pbIncreaseStat(PBStats::SPATK, boost, statsource: attacker)
    if opponent.pbCanConfuse?(true, inflictor: attacker)
      opponent.pbConfuse
      @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
    end
  end
end

################################################################################
# Increases the target's Attack by 2 stages.  Confuses the target. (Swagger)
################################################################################
class PokeBattle_Move_041 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if opponent.effects[:Substitute] == 0
    @battle.pbDisplay(_INTL("{1}'s attack missed!", attacker.pbThis)) if showMessage
    return false
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    boost = 2
    boost = 3 if @battle.FE == :COLOSSEUM
    opponent.pbIncreaseStat(PBStats::ATTACK, boost, statsource: attacker)
    if opponent.pbCanConfuse?(true, inflictor: attacker)
      opponent.pbConfuse
      @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
    end
  end
end

################################################################################
# Decreases the target's Attack by 1 stage.
# (Growl, Aurora Beam, Baby-Doll Eyes, Play Nice, Play Rough, Lunge, Trop Kick,
# Breaking Swipe, Bitter Malice, Springtide Storm)
################################################################################
class PokeBattle_Move_042 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::ATTACK, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0

    statdrop = 1
    statdrop = 2 if @battle.ProgressiveFieldCheck(PBFields::CONCERT) && @move == :GROWL
    opponent.pbReduceStat(PBStats::ATTACK, statdrop, abilitymessage: false, statdropper: attacker)
  end

  def pbAdditionalEffect(attacker, opponent)
    opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
    if @battle.FE == :HAUNTED && @move == :BITTERMALICE
      opponent.pbReduceStat(PBStats::SPATK, 1, abilitymessage: false)
    end
    if @move == :BITTERMALICE && [:ICY, :SNOWYMOUNTAIN].include?(@battle.FE)
      if @battle.pbRandom(10) == 0
        if opponent.pbCanFreeze?(false)
          opponent.pbFreeze
          @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
        end
      end
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :SPRINGTIDESTORM
      @battle.pbAnimation(:FLEURCANNON, attacker, opponent, hitnum)
    elsif id == :BITTERMALICE
      @battle.pbAnimation(:HEX, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Decreases the target's Defense by 1 stage.
# (Tail Whip, Crunch, Rock Smash, Crush Claw, Leer, Iron Tail, Razor Shell,
# Fire Lash, Liquidation, Shadow Bone)
################################################################################
class PokeBattle_Move_043 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return true if @basedamage > 0
    opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end

  def pbAdditionalEffect(attacker, opponent)
    opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the target's Speed by 1 stage.
# (Rock Tomb, Electroweb, Low Sweep, Bulldoze, Mud Shot, Glaciate, Icy Wind,
# Constrict, Bubble Beam, Bubble, Bleakwind Storm)
################################################################################
class PokeBattle_Move_044 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::SPEED, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return true if @basedamage > 0
    opponent.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker)
  end

  def pbAdditionalEffect(attacker, opponent)
    statchange = 1
    statchange = 2 if Rejuv && @battle.FE == :ELECTERRAIN && @move == :ELECTROWEB
    statchange = 2 if Rejuv && @battle.FE == :SWAMP && @move == :MUDSHOT
    opponent.pbReduceStat(PBStats::SPEED, statchange, abilitymessage: false, statdropper: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :BLEAKWINDSTORM
      @battle.pbAnimation(:HURRICANE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Decreases the target's Special Attack by 1 stage. (Snarl / Confide / Moonblast /
# Mystical Fire / Struggle Bug / Mist Ball)
################################################################################
class PokeBattle_Move_045 < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if @move == :CONFIDE && @battle.FE == :PSYTERRAIN
      @battle.pbDisplay(_INTL("Psst... This field is pretty weird, huh?"))
    end
    super
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::SPATK, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return true if @basedamage > 0
    opponent.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker)
  end

  def pbAdditionalEffect(attacker, opponent)
    statchange = 1
    statchange = 2 if Rejuv && @battle.FE == :SWAMP && @move == :STRUGGLEBUG
    statchange = 2 if [:FROZENDIMENSION, :BACKALLEY].include?(@battle.FE) && @move == :SNARL
    opponent.pbReduceStat(PBStats::SPATK, statchange, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the target's Special Defense by 1 stage. (Bug Buzz / Focus Blast /
# Shadow Ball / Energy Ball / Earth Power / Acid / Psychic / Luster Purge / Flash Cannon)
################################################################################
class PokeBattle_Move_046 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::SPDEF, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return true if @basedamage > 0
    opponent.pbReduceStat(PBStats::SPDEF, 1, abilitymessage: false, statdropper: attacker)
  end

  def pbAdditionalEffect(attacker, opponent)
    opponent.pbReduceStat(PBStats::SPDEF, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the target's accuracy by 1 stage.
# (Sand Attack, Night Daze, Leaf Tornado, Mod Bomb, Mud-Slap, Flash,
# Smokescreen, Kinesis, Mirror Shot, Muddy Water, Octazooka)
################################################################################
class PokeBattle_Move_047 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::ACCURACY, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return true if @basedamage > 0
    if ([:BURNING, :CORROSIVEMIST, :VOLCANIC, :VOLCANICTOP, :BACKALLEY, :CITY].include?(@battle.FE) && @move == :SMOKESCREEN) ||
       ([:DESERT, :ASHENBEACH].include?(@battle.FE) && @move == :SANDATTACK) ||
       ([:SHORTCIRCUIT, :DARKCRYSTALCAVERN, :MIRROR, :STARLIGHT, :NEWWORLD, :DARKNESS1].include?(@battle.FE) && @move == :FLASH) ||
       (@battle.FE == :ASHENBEACH && @move == :KINESIS)
      opponent.pbReduceStat(PBStats::ACCURACY, 2, abilitymessage: false, statdropper: attacker)
    elsif @battle.FE == :PSYTERRAIN && @move == :KINESIS
      opponent.pbReduceStat(PBStats::ACCURACY, 2, abilitymessage: false, statdropper: attacker)
      attacker.pbIncreaseStat(PBStats::ATTACK, 2, abilitymessage: false, statsource: attacker)
      attacker.pbIncreaseStat(PBStats::SPATK, 2, abilitymessage: false, statsource: attacker)
    elsif @battle.FE == :DANCEFLOOR && @move == :KINESIS
      opponent.pbReduceStat(PBStats::ACCURACY, 2, abilitymessage: false, statdropper: attacker)
      opponent.pbReduceStat(PBStats::SPDEF, 1, abilitymessage: false, statdropper: attacker)
    else
      opponent.pbReduceStat(PBStats::ACCURACY, 1, abilitymessage: false, statdropper: attacker)
    end
  end

  def pbAdditionalEffect(attacker, opponent)
    if @battle.FE == :WASTELAND && @move == :OCTAZOOKA &&
       ((!opponent.hasType?(:POISON) && !opponent.hasType?(:STEEL)) || opponent.corroded) &&
       (opponent.ability != :IMMUNITY || opponent.moldbroken)
      rnd = @battle.pbRandom(4)
      # Poison Heal, Toxic Boost and Crested Zangoose ignore the random status and instead get poisoned.
      rnd = 3 if opponent.ability == :POISONHEAL || opponent.ability == :TOXICBOOST || opponent.crested == :ZANGOOSE
      case rnd
        when 0
          return if !opponent.pbCanBurn?(false)

          opponent.pbBurn(attacker)
          @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
        when 1
          return if !opponent.pbCanFreeze?(false)

          opponent.pbFreeze
          @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
        when 2
          return if !opponent.pbCanParalyze?(false)

          opponent.pbParalyze(attacker)
          @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
        when 3
          return if !opponent.pbCanPoison?(false)

          opponent.pbPoison(attacker)
          @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
      end
    else
      opponent.pbReduceStat(PBStats::ACCURACY, 1, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Decreases the target's evasion by 1 stage. (Sweet Scent)
################################################################################
class PokeBattle_Move_048 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceStatStage?(PBStats::EVASION, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 5)
      case @battle.FE
        when :FLOWERGARDEN3
          for stat in [PBStats::EVASION, PBStats::DEFENSE, PBStats::SPDEF]
            opponent.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
          end
        when :FLOWERGARDEN4
          for stat in [PBStats::EVASION, PBStats::DEFENSE, PBStats::SPDEF]
            opponent.pbReduceStat(stat, 2, abilitymessage: false, statdropper: attacker)
          end
        when :FLOWERGARDEN5
          for stat in [PBStats::EVASION, PBStats::DEFENSE, PBStats::SPDEF]
            opponent.pbReduceStat(stat, 3, abilitymessage: false, statdropper: attacker)
          end
      end
    elsif @battle.FE == :MISTY
      for stat in [PBStats::EVASION, PBStats::DEFENSE, PBStats::SPDEF]
        opponent.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
      end
    else
      opponent.pbReduceStat(PBStats::EVASION, 1, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Decreases the target's evasion by 1 stage. Ends all barriers and entry
# hazards for the target's side. (Defog)
################################################################################
class PokeBattle_Move_049 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statchange = 1
    statchange = 2 if @battle.FE == :CLOUDS
    opponent.pbReduceStat(PBStats::EVASION, statchange, abilitymessage: false, statdropper: attacker)

    if opponent.pbOwnSide.effects[:Reflect] > 0
      opponent.pbOwnSide.effects[:Reflect] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Reflect wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Reflect wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:LightScreen] > 0
      opponent.pbOwnSide.effects[:LightScreen] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Light Screen wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Light Screen wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:AuroraVeil] > 0
      opponent.pbOwnSide.effects[:AuroraVeil] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Aurora Veil wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Aurora Veil wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:AreniteWall] > 0
      opponent.pbOwnSide.effects[:AreniteWall] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Arenite Wall wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Arenite Wall wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:Mist] > 0
      opponent.pbOwnSide.effects[:Mist] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team is no longer protected by Mist."))
      else
        @battle.pbDisplay(_INTL("Your team is no longer protected by Mist."))
      end
    end
    if opponent.pbOwnSide.effects[:Safeguard] > 0
      opponent.pbOwnSide.effects[:Safeguard] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team is no longer protected by Safeguard."))
      else
        @battle.pbDisplay(_INTL("Your team is no longer protected by Safeguard."))
      end
    end
    if attacker.pbOwnSide.effects[:Spikes] > 0
      attacker.pbOwnSide.effects[:Spikes] = 0
      if @battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The spikes disappeared from around your opponent's team's feet!"))
      else
        @battle.pbDisplay(_INTL("The spikes disappeared from around your team's feet!"))
      end
    end
    if attacker.pbOpposingSide.effects[:Spikes] > 0
      attacker.pbOpposingSide.effects[:Spikes] = 0
      if !@battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The spikes disappeared from around your opponent's team's feet!"))
      else
        @battle.pbDisplay(_INTL("The spikes disappeared from around your team's feet!"))
      end
    end
    if attacker.pbOwnSide.effects[:StealthRock]
      attacker.pbOwnSide.effects[:StealthRock] = false
      if @battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The pointed stones disappeared from around your opponent's team!"))
      else
        @battle.pbDisplay(_INTL("The pointed stones disappeared from around your team!"))
      end
    end
    if attacker.pbOpposingSide.effects[:StealthRock]
      attacker.pbOpposingSide.effects[:StealthRock] = false
      if !@battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The pointed stones disappeared from around your opponent's team!"))
      else
        @battle.pbDisplay(_INTL("The pointed stones disappeared from around your team!"))
      end
    end
    if attacker.pbOwnSide.effects[:ToxicSpikes] > 0
      attacker.pbOwnSide.effects[:ToxicSpikes] = 0
      if @battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The poison spikes disappeared from around your opponent's team's feet!"))
      else
        @battle.pbDisplay(_INTL("The poison spikes disappeared from around your team's feet!"))
      end
    end
    if attacker.pbOpposingSide.effects[:ToxicSpikes] > 0
      attacker.pbOpposingSide.effects[:ToxicSpikes] = 0
      if !@battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The poison spikes disappeared from around your opponent's team's feet!"))
      else
        @battle.pbDisplay(_INTL("The poison spikes disappeared from around your team's feet!"))
      end
    end
    if attacker.pbOwnSide.effects[:StickyWeb]
      attacker.pbOwnSide.effects[:StickyWeb] = false
      if @battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The sticky web has disappeared from beneath your opponent's team's feet!"))
      else
        @battle.pbDisplay(_INTL("The sticky web has disappeared from beneath your team's feet!"))
      end
    end
    if attacker.pbOpposingSide.effects[:StickyWeb]
      attacker.pbOpposingSide.effects[:StickyWeb] = false
      if !@battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("The sticky web has disappeared from beneath your opponent's team's feet!"))
      else
        @battle.pbDisplay(_INTL("The sticky web has disappeared from beneath your team's feet!"))
      end
    end
  end
end

################################################################################
# Decreases the target's Attack and Defense by 1 stage each. (Tickle)
################################################################################
class PokeBattle_Move_04A < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("{1}'s attack missed!", attacker.pbThis)) if showMessage
      return false
    end
    return opponent.pbCanReduceAnyStat?([PBStats::ATTACK, PBStats::DEFENSE], showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
    opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the target's Attack by 2 stages. (Charm / Feather Dance)
################################################################################
class PokeBattle_Move_04B < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceStatStage?(PBStats::ATTACK, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if @battle.FE == :BIGTOP && @move == :FEATHERDANCE
      opponent.pbReduceStat(PBStats::ATTACK, 3, abilitymessage: false, statdropper: attacker)
    else
      opponent.pbReduceStat(PBStats::ATTACK, 2, abilitymessage: false, statdropper: attacker)
    end
    if @battle.FE == :DANCEFLOOR && @move == :FEATHERDANCE
      opponent.pbReduceStat(PBStats::SPATK, 2, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Decreases the target's Defense by 2 stages. (Screech / Shadow Down)
################################################################################
class PokeBattle_Move_04C < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statdrop = 2
    statdrop = 3 if @battle.ProgressiveFieldCheck(PBFields::CONCERT)
    opponent.pbReduceStat(PBStats::DEFENSE, statdrop, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the target's Speed by 2 stages. (String Shot / Cotton Spore / Scary Face)
################################################################################
class PokeBattle_Move_04D < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if Rejuv && @battle.FE == :SWAMP && @move == :STRINGSHOT
      return opponent.pbCanReduceAnyStat?([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED])
    end
    return opponent.pbCanReduceStatStage?(PBStats::SPEED, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statdrop = 2
    statdrop = 4 if @battle.FE == :HAUNTED && @move == :SCARYFACE
    statdrop = 4 if Rejuv && @battle.FE == :GRASSY && @move == :COTTONSPORE
    opponent.pbReduceStat(PBStats::SPEED, statdrop, abilitymessage: false, statdropper: attacker)
    if Rejuv && @battle.FE == :SWAMP && @move == :STRINGSHOT
      stat = @battle.sample([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED])
      opponent.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Decreases the target's Special Attack by 2 stages.  Only works on the opposite
# gender. (Captivate)
################################################################################
class PokeBattle_Move_04E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.gender == 2 || opponent.gender == 2 || attacker.gender == opponent.gender
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if opponent.ability == :OBLIVIOUS && !opponent.moldbroken
      @battle.pbDisplay(_INTL("{1}'s {2} prevents romance!", opponent.pbThis, getAbilityName(opponent.ability))) if showMessage
      return false
    end
    return opponent.pbCanReduceStatStage?(PBStats::SPATK, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbReduceStat(PBStats::SPATK, 2, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Decreases the target's Special Defense by 2 stages. (Fake Tears / Seed Flare
# Acid Spray / Metal Sound / Uproot)
################################################################################
class PokeBattle_Move_04F < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    return opponent.pbCanReduceStatStage?(PBStats::SPDEF, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return true if @basedamage > 0
    statdrop = 2
    statdrop = 3 if @move == :METALSOUND && ([:FACTORY, :SHORTCIRCUIT].include?(@battle.FE) || @battle.ProgressiveFieldCheck(PBFields::CONCERT))
    statdrop = 3 if @move == :FAKETEARS && @battle.FE == :BACKALLEY
    opponent.pbReduceStat(PBStats::SPDEF, statdrop, abilitymessage: false, statdropper: attacker)
  end

  def pbAdditionalEffect(attacker, opponent)
    opponent.pbReduceStat(PBStats::SPDEF, 2, abilitymessage: false, statdropper: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :UPROOT
      @battle.pbAnimation(:FRENZYPLANT, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Resets all target's stat stages to 0. (Clear Smog)
################################################################################
class PokeBattle_Move_050 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if !opponent.damagestate.substitute
      opponent.stages[PBStats::ATTACK]   = 0
      opponent.stages[PBStats::DEFENSE]  = 0
      opponent.stages[PBStats::SPEED]    = 0
      opponent.stages[PBStats::SPATK]    = 0
      opponent.stages[PBStats::SPDEF]    = 0
      opponent.stages[PBStats::ACCURACY] = 0
      opponent.stages[PBStats::EVASION]  = 0
      @battle.pbDisplay(_INTL("{1}'s stat changes were removed!", opponent.pbThis))
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if @move == :HEAVENLYWING
      @battle.pbAnimation(:WINGATTACK, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Resets all stat stages for all battlers to 0. (Haze)
################################################################################
class PokeBattle_Move_051 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for i in 0...4
      @battle.battlers[i].stages[PBStats::ATTACK]   = 0
      @battle.battlers[i].stages[PBStats::DEFENSE]  = 0
      @battle.battlers[i].stages[PBStats::SPEED]    = 0
      @battle.battlers[i].stages[PBStats::SPATK]    = 0
      @battle.battlers[i].stages[PBStats::SPDEF]    = 0
      @battle.battlers[i].stages[PBStats::ACCURACY] = 0
      @battle.battlers[i].stages[PBStats::EVASION]  = 0
    end
    @battle.pbDisplay(_INTL("All stat changes were eliminated!"))
  end
end

################################################################################
# User and target swap their Attack and Special Attack stat stages. (Power Swap)
################################################################################
class PokeBattle_Move_052 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    astage = attacker.stages
    ostage = opponent.stages
    astage[PBStats::ATTACK], ostage[PBStats::ATTACK] = ostage[PBStats::ATTACK], astage[PBStats::ATTACK]
    astage[PBStats::SPATK], ostage[PBStats::SPATK] = ostage[PBStats::SPATK], astage[PBStats::SPATK]
    @battle.pbDisplay(_INTL("{1} switched all changes to its Attack and Sp. Atk with the target!", attacker.pbThis))
  end
end

################################################################################
# User and target swap their Defense and Special Defense stat stages. (Guard Swap)
################################################################################
class PokeBattle_Move_053 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    astage = attacker.stages
    ostage = opponent.stages
    astage[PBStats::DEFENSE], ostage[PBStats::DEFENSE] = ostage[PBStats::DEFENSE], astage[PBStats::DEFENSE]
    astage[PBStats::SPDEF], ostage[PBStats::SPDEF] = ostage[PBStats::SPDEF], astage[PBStats::SPDEF]
    @battle.pbDisplay(_INTL("{1} switched all changes to its Defense and Sp. Def with the target!", attacker.pbThis))
  end
end

################################################################################
# User and target swap all their stat stages. (Heart Swap)
################################################################################
class PokeBattle_Move_054 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    for i in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED, PBStats::SPATK, PBStats::SPDEF, PBStats::ACCURACY, PBStats::EVASION]
      attacker.stages[i], opponent.stages[i] = opponent.stages[i], attacker.stages[i]
    end
    @battle.pbDisplay(_INTL("{1} switched stat changes with the target!", attacker.pbThis))

    if @battle.FE == :NEWWORLD && opponent.effects[:Substitute] == 0
      olda = attacker.hp
      oldo = opponent.hp
      avhp = ((attacker.hp + opponent.hp) / 2.0).floor
      attacker.hp = [avhp, attacker.totalhp].min
      opponent.hp = [avhp, opponent.totalhp].min
      @battle.scene.pbHPChanged([attacker, opponent], [olda, oldo])
      @battle.pbDisplay(_INTL("The battlers shared their pain!"))
    end
  end
end

################################################################################
# User copies the target's stat stages. (Psych Up)
################################################################################
class PokeBattle_Move_055 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    for i in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED, PBStats::SPATK, PBStats::SPDEF, PBStats::ACCURACY, PBStats::EVASION]
      attacker.stages[i] = opponent.stages[i]
    end
    attacker.effects[:FocusEnergy] = opponent.effects[:FocusEnergy]
    @battle.pbDisplay(_INTL("{1} copied {2}'s stat changes!", attacker.pbThis, opponent.pbThis(true)))
    if @battle.FE == :ASHENBEACH
      t = attacker.status
      attacker.status = nil
      attacker.statusCount = 0
      if t == :BURN
        @battle.pbDisplay(_INTL("{1} was cured of its burn.", attacker.pbThis))
      elsif t == :POISON
        @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", attacker.pbThis))
      elsif t == :PARALYSIS
        @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", attacker.pbThis))
      end
    end
    if @battle.FE == :PSYTERRAIN
      attacker.pbIncreaseStat(PBStats::SPATK, 2, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# For 5 rounds, user's and ally's stat stages cannot be lowered by foes. (Mist)
################################################################################
class PokeBattle_Move_056 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:Mist] > 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:Mist] = 5
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Your team became shrouded in mist!"))
    else
      @battle.pbDisplay(_INTL("The foe's team became shrouded in mist!"))
    end

    if !attacker.hasWorkingItem(:EVERSTONE) && ((!Rejuv && @battle.canChangeFE?(:MISTY)) || @battle.canChangeFE?([:MISTY, :CORROSIVEMIST])) && !(@battle.state.effects[:MISTY] > 0)
      duration = 3
      duration = 6 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
      @battle.setField(:MISTY, duration)
      @battle.pbDisplay(_INTL("The terrain became misty!"))
    end
  end
end

################################################################################
# Swaps the user's Attack and Defense. (Power Trick, Power Shift)
################################################################################
class PokeBattle_Move_057 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.attack, attacker.defense = attacker.defense, attacker.attack
    if attacker.effects[:Illusion]
      attacker.effects[:Illusion].attack, attacker.effects[:Illusion].defense = attacker.effects[:Illusion].defense, attacker.effects[:Illusion].attack
    end
    attacker.effects[:PowerTrick] = !attacker.effects[:PowerTrick]
    @battle.pbDisplay(_INTL("{1} switched its Attack and Defense!", attacker.pbThis))
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :POWERSHIFT
      @battle.pbAnimation(:POWERTRICK, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Averages the user's and target's Attack and Special Attack (separately). (Power Split)
################################################################################
class PokeBattle_Move_058 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    avatk = ((attacker.attack + opponent.attack) / 2.0).floor
    avspatk = ((attacker.spatk + opponent.spatk) / 2.0).floor
    attacker.attack = avatk
    opponent.attack = avatk
    attacker.spatk = avspatk
    opponent.spatk = avspatk
    # User and target of Power Split both know the stat values they end up with
    # as such the AI wouldn't be fooled by Illusion in this regard
    if attacker.effects[:Illusion]
      attacker.effects[:Illusion].attack = avatk
      attacker.effects[:Illusion].spatk = avspatk
    end
    if opponent.effects[:Illusion]
      opponent.effects[:Illusion].attack = avatk
      opponent.effects[:Illusion].spatk = avspatk
    end
    @battle.pbDisplay(_INTL("{1} shared its power with {2}!", attacker.pbThis, opponent.pbThis(true)))
  end
end

################################################################################
# Averages the user's and target's Defense and Special Defense (separately). (Guard Split)
################################################################################
class PokeBattle_Move_059 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    avdef = ((attacker.defense + opponent.defense) / 2.0).floor
    avspdef = ((attacker.spdef + opponent.spdef) / 2.0).floor
    attacker.defense = avdef
    opponent.defense = avdef
    attacker.spdef = avspdef
    opponent.spdef = avspdef
    # User and target of Guard Split both know the stat values they end up with
    # as such the AI wouldn't be fooled by Illusion in this regard
    if attacker.effects[:Illusion]
      attacker.effects[:Illusion].defense = avdef
      attacker.effects[:Illusion].spdef = avspdef
    end
    if opponent.effects[:Illusion]
      opponent.effects[:Illusion].defense = avdef
      opponent.effects[:Illusion].spdef = avspdef
    end
    @battle.pbDisplay(_INTL("{1} shared its guard with {2}!", attacker.pbThis, opponent.pbThis(true)))
  end
end

################################################################################
# Averages the user's and target's current HP. (Pain Split)
################################################################################
class PokeBattle_Move_05A < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    olda = attacker.hp
    oldo = opponent.hp
    avhp = ((attacker.hp + opponent.hp) / 2.0).floor
    attacker.hp = [avhp, attacker.totalhp].min
    opponent.hp = [avhp, opponent.totalhp].min
    @battle.scene.pbHPChanged([attacker, opponent], [olda, oldo])
    @battle.pbDisplay(_INTL("The battlers shared their pain!"))
  end
end

################################################################################
# For 4 more rounds, doubles the Speed of all battlers on the user's side. (Tailwind)
################################################################################
class PokeBattle_Move_05B < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:Tailwind] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:Tailwind] = 4
    attacker.pbOwnSide.effects[:Tailwind] = 6 if [:MOUNTAIN, :SNOWYMOUNTAIN, :VOLCANICTOP, :CLOUDS].include?(@battle.FE)
    attacker.pbOwnSide.effects[:Tailwind] = 8 if @battle.FE == :SKY
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("The tailwind blew from behind your team!"))
    else
      @battle.pbDisplay(_INTL("The tailwind blew from behind the opposing team!"))
    end
    if [:MOUNTAIN, :SNOWYMOUNTAIN, :VOLCANICTOP, :SKY].include?(@battle.FE) && !@battle.state.effects[:HeavyRain] && !@battle.state.effects[:HarshSunlight]
      @battle.weather = :STRONGWINDS
      @battle.weatherduration = 6
      @battle.weatherduration = 8 if @battle.FE == :SKY
      @battle.pbCommonAnimation("Wind", nil, nil)
      @battle.pbDisplay(_INTL("Strong winds kicked up around the field!"))
    end
  end
end

################################################################################
# This move turns into the last move used by the target, until user switches out. (Mimic)
################################################################################
class PokeBattle_Move_05C < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    lastMove = opponent.lastMoveUsed
    if attacker.effects[:Transform] ||
       !lastMove.is_a?(Symbol) ||
       PBStuff::BLACKLISTS[:MIMIC].include?(lastMove) ||
       $cache.moves[lastMove].type == :SHADOW
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    for i in attacker.moves
      if $cache.moves[i.move].move == lastMove
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    for i in 0...attacker.moves.length
      if attacker.moves[i].move == @move
        return true
      end
    end
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    lastMove = opponent.lastMoveUsed
    for i in 0...attacker.moves.length
      if attacker.moves[i].move == @move
        newmove = PBMove.new(lastMove)
        attacker.moves[i] = PokeBattle_Move.pbFromPBMove(@battle, newmove, attacker.pokemon)
        if !(attacker.zmoves.nil? || attacker.item == :INTERCEPTZ)
          @battle.updateZMoveIndexBattler(i, attacker)
        end
        movename = getMoveName(lastMove)
        @battle.pbDisplay(_INTL("{1} learned {2}!", attacker.pbThis, movename))
        return
      end
    end
  end
end

################################################################################
# This move permanently turns into the last move used by the target. (Sketch)
################################################################################
class PokeBattle_Move_05D < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.effects[:Transform] ||
       !opponent.lastMoveUsedSketch.is_a?(Symbol) ||
       PBStuff::BLACKLISTS[:SKETCH].include?(opponent.lastMoveUsedSketch) ||
       $cache.moves[opponent.lastMoveUsedSketch].type == :SHADOW ||
       attacker.moves.any? {|i| i.move == opponent.lastMoveUsedSketch} ||
       attacker.moves.none? {|i| i.move == @move}
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    for i in 0...attacker.moves.length
      if $cache.moves[attacker.moves[i].move].move == @move
        newmove = PBMove.new(opponent.lastMoveUsedSketch)
        attacker.moves[i] = PokeBattle_Move.pbFromPBMove(@battle, newmove, attacker.pokemon)
        attacker.pokemon.moves[i] = newmove
        if !(attacker.zmoves.nil? || attacker.item == :INTERCEPTZ)
          attacker.pokemon.updateZMoveIndex(i)
          @battle.updateZMoveIndexBattler(i, attacker)
        end
        movename = getMoveName(opponent.lastMoveUsedSketch)
        @battle.pbDisplay(_INTL("{1} sketched {2}!", attacker.pbThis, movename))
        return
      end
    end
  end
end

################################################################################
# Changes user's type to that of a random move of the user, ignoring this one. (Conversion)
################################################################################
class PokeBattle_Move_05E < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.ability == :MULTITYPE || attacker.ability == :RKSSYSTEM || attacker.crested == :SILVALLY
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    types = []
    found = false
    for i in attacker.moves
      next if $cache.moves[i.move].move == @move
      next if i.type == :QMARKS || i.type == :SHADOW

      found = true
      types.push(i.type) if !types.include?(i.type)
    end
    if !found
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    newtype = types[0]
    if attacker.hasType?(newtype)
      @battle.pbDisplay(_INTL("But {1} is already {2} type!", attacker.pbThis(true), newtype.capitalize)) if showMessage
      return false
    end

    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    types = []
    # We know we find a good type here
    for i in attacker.moves
      next if $cache.moves[i.move].move == @move
      next if i.type == :QMARKS || i.type == :SHADOW

      types.push(i.type) if !types.include?(i.type)
    end
    newtype = types[0]
    attacker.type1 = newtype
    attacker.type2 = nil
    typename = newtype.capitalize
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", attacker.pbThis, typename))
    if !attacker.hasWorkingItem(:EVERSTONE) && @battle.canChangeFE?(:GLITCH)
      if @battle.field.conversion == 2 # Conversion 2
        duration = 5
        duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
        @battle.setField(:GLITCH, duration)
        @battle.pbDisplay(_INTL("TH~ R0GUE DAa/ta cor$upt?@####"))
      else
        # Conversion lingering
        @battle.field.conversion = 1 # Conversion
        @battle.pbDisplay(_INTL("Some rogue data remains..."))
      end
    end
  end
end

################################################################################
# Changes user's type to a random one that resists the last attack used by target. (Conversion2)
################################################################################
class PokeBattle_Move_05F < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if (attacker.ability == :MULTITYPE || attacker.ability == :RKSSYSTEM || attacker.crested == :SILVALLY) || !opponent.lastMoveUsed.is_a?(Symbol)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    atype = nil
    for i in opponent.moves
      if $cache.moves[i.move].move == opponent.lastMoveUsed
        atype = i.pbType(attacker)
        break
      end
    end
    if !atype
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    types = PBTypes.typeResists(atype)
    types.delete_if { |type| type == attacker.type1 && attacker.type2.nil? }
    if types.length == 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    atype = nil
    for i in opponent.moves
      if $cache.moves[i.move].move == opponent.lastMoveUsed
        atype = i.pbType(attacker)
        break
      end
    end
    types = PBTypes.typeResists(atype)
    types.delete_if { |type| type == attacker.type1 && attacker.type2.nil? }
    newtype = types[@battle.pbRandom(types.length)]
    attacker.type1 = newtype
    attacker.type2 = nil
    typename = newtype.capitalize
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", attacker.pbThis, typename))
    if !attacker.hasWorkingItem(:EVERSTONE) && @battle.canChangeFE?(:GLITCH)
      if @battle.field.conversion == 1 # Conversion
        duration = 5
        duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
        @battle.setField(:GLITCH, duration)
        @battle.pbDisplay(_INTL("TH~ R0GUE DAa/ta cor$upt?@####"))
      else
        # Conversion lingering
        @battle.field.conversion = 2 # Conversion 2
        @battle.pbDisplay(_INTL("Some rogue data remains..."))
      end
    end
  end
end

################################################################################
# Changes user's type depending on the environment. (Camouflage)
################################################################################
class PokeBattle_Move_060 < PokeBattle_Move

  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.ability == :MULTITYPE || attacker.ability == :RKSSYSTEM || attacker.crested == :SILVALLY
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    else
      type = 0
      if [:CRYSTALCAVERN, :NEWWORLD].include?(@battle.FE)
        type = @battle.field.getRoll(update_roll: @battle.phase == :attackPhase)
        @battle.field.fieldroll = nil
      else
        type = @battle.field.mimicry if @battle.field.mimicry
      end
      type = type.intern if !type.is_a?(Symbol)
      if type == 0
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      elsif attacker.hasType?(type) && attacker.type2.nil?
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    type = 0
    case @battle.FE
      when :CRYSTALCAVERN, :NEWWORLD
        type = @battle.field.getRoll(update_roll: @battle.phase == :attackPhase)
        @battle.field.fieldroll = nil
      else
        type = @battle.field.mimicry if @battle.field.mimicry
    end
    type = type.intern if !type.is_a?(Symbol)
    newtype = type
    attacker.type1 = newtype
    attacker.type2 = nil
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", attacker.pbThis, newtype.capitalize))
  end
end

################################################################################
# Target becomes Water type. (Soak)
################################################################################
class PokeBattle_Move_061 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if [:MULTITYPE, :RKSSYSTEM].include?(opponent.ability) || opponent.crested == :SILVALLY || (opponent.type1 == :WATER && opponent.type2 == nil)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.type1 = :WATER
    opponent.type2 = nil
    typename = getTypeName(:WATER)
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", opponent.pbThis, typename))
  end
end

################################################################################
# User copies target's types. (Reflect Type)
################################################################################
class PokeBattle_Move_062 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.ability == :MULTITYPE || attacker.ability == :RKSSYSTEM || attacker.crested == :SILVALLY
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    elsif attacker.hasType?(opponent.type1) &&
      attacker.hasType?(opponent.type2) &&
      opponent.hasType?(attacker.type1) &&
      opponent.hasType?(attacker.type2)

      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    attacker.type1 = opponent.type1
    attacker.type2 = opponent.type2
    @battle.pbDisplay(_INTL("{1}'s type changed to match {2}'s!", attacker.pbThis, opponent.pbThis(true)))
  end
end

################################################################################
# Target's ability becomes Simple. (Simple Beam)
################################################################################
class PokeBattle_Move_063 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if (PBStuff::FIXEDABILITIES + [:TRUANT, :SIMPLE]).include?(opponent.ability)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    @battle.pbDisplay(_INTL("{1} acquired {2}!", opponent.pbThis, getAbilityName(:SIMPLE)))
    opponent.changeAbility(:SIMPLE)
  end
end

################################################################################
# Target's ability becomes Insomnia. (Worry Seed)
################################################################################
class PokeBattle_Move_064 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    elsif [:TRUANT, :INSOMNIA].include?(opponent.ability)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if PBStuff::FIXEDABILITIES.include?(opponent.ability)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    @battle.pbDisplay(_INTL("{1} acquired {2}!", opponent.pbThis, getAbilityName(:INSOMNIA)))
    opponent.changeAbility(:INSOMNIA)
    if Rejuv && @battle.FE == :GRASSY
      opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# User copies target's ability. (Role Play)
################################################################################
class PokeBattle_Move_065 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    attability = attacker.ability.nil? ? attacker.backupability : attacker.ability
    oppability = opponent.ability.nil? ? opponent.backupability : opponent.ability
    if attability == oppability || PBStuff::ABILITYBLACKLIST.include?(oppability) || PBStuff::FIXEDABILITIES.include?(attability) || oppability.nil?
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    oppability = opponent.ability.nil? ? opponent.backupability : opponent.ability
    @battle.pbDisplay(_INTL("{1} copied {2}'s {3}!", attacker.pbThis, opponent.pbThis(true), getAbilityName(oppability)))
    attacker.changeAbility(oppability)
    attacker.pbAbilitiesOnSwitchIn(true)
  end
end

################################################################################
# Target copies user's ability. (Entrainment)
################################################################################
class PokeBattle_Move_066 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    attability = attacker.ability.nil? ? attacker.backupability : attacker.ability
    oppability = opponent.ability.nil? ? opponent.backupability : opponent.ability
    if attability == oppability || (PBStuff::FIXEDABILITIES + [:TRUANT]).include?(opponent.ability) || (PBStuff::ABILITYBLACKLIST - [:WONDERGUARD]).include?(attacker.ability) || attability.nil?
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    attability = attacker.ability.nil? ? attacker.backupability : attacker.ability
    @battle.pbDisplay(_INTL("{1} acquired {2}!", opponent.pbThis, getAbilityName(attability)))
    opponent.changeAbility(attability)
    opponent.pbAbilitiesOnSwitchIn(true)
  end
end

################################################################################
# User and target swap abilities. (Skill Swap)
################################################################################
class PokeBattle_Move_067 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    attability = attacker.ability.nil? ? attacker.backupability : attacker.ability
    oppability = opponent.ability.nil? ? opponent.backupability : opponent.ability
    if PBStuff::ABILITYBLACKLIST.include?(attability) || PBStuff::ABILITYBLACKLIST.include?(oppability) || attability.nil? || oppability.nil?
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    attability = attacker.ability.nil? ? attacker.backupability : attacker.ability
    oppability = opponent.ability.nil? ? opponent.backupability : opponent.ability
    @battle.pbDisplay(
      _INTL(
        "{1} swapped its {2} Ability with its target's {3} Ability!",
        attacker.pbThis, getAbilityName(attability), getAbilityName(oppability)
      )
    )
    attacker.changeAbility(oppability)
    opponent.changeAbility(attability)
    attacker.pbAbilitiesOnSwitchIn(true)
    opponent.pbAbilitiesOnSwitchIn(true)
  end
end

################################################################################
# Target's ability is negated. (Gastro Acid)
################################################################################
class PokeBattle_Move_068 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if PBStuff::FIXEDABILITIES.include?(opponent.ability)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    elsif opponent.effects[:GastroAcid]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    @battle.pbDisplay(_INTL("{1}'s Ability was suppressed!", opponent.pbThis))
    opponent.changeAbility(:suppress) # Cancel out ability
    opponent.effects[:GastroAcid] = true
  end
end

################################################################################
# User transforms into the target. (Transform)
################################################################################
class PokeBattle_Move_069 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.effects[:Transform] ||
       opponent.effects[:Transform] ||
       opponent.effects[:Substitute] > 0 ||
       opponent.effects[:Illusion]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    attacker.pbTransform(opponent)
    attacker.pbAbilitiesOnSwitchIn(true)
  end
end

################################################################################
# Inflicts a fixed 20HP damage. (Sonic Boom)
################################################################################
class PokeBattle_Move_06A < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    if @battle.FE == :RAINBOW
      message = _INTL("It's a Sonic Rainboom!")
      feedbackMessages.push(message) unless feedbackMessages.include?(message)
      return 140
    end
    return 20
  end
end

################################################################################
# Inflicts a fixed 40HP damage. (Dragon Rage)
################################################################################
class PokeBattle_Move_06B < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    if [:DIMENSIONAL, :FROZENDIMENSION].include?(@battle.FE)
      message = _INTL("Unstoppable Rage!")
      feedbackMessages.push(message) unless feedbackMessages.include?(message)
      return 140
    end
    return 40
  end
end

################################################################################
# Halves the target's current HP. (Super Fang / Nature's Madness)
################################################################################
class PokeBattle_Move_06C < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    if @move == :NATURESMADNESS && [:GRASSY, :FOREST].include?(@battle.FE)
      return (opponent.hp * 0.75).floor
    elsif @move == :NATURESMADNESS && @battle.FE == :HOLY
      return (opponent.hp * 0.66).floor
    elsif @move == :NATURESMADNESS && @battle.FE == :NEWWORLD
      return (opponent.totalhp * 0.5).floor
    else
      return (opponent.hp / 2.0).floor
    end
  end
end

################################################################################
# Inflicts damage equal to the user's level. (Seismic Toss / Night Shade)
################################################################################
class PokeBattle_Move_06D < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    if (@move == :NIGHTSHADE && @battle.FE == :HAUNTED) || (@move == :SEISMICTOSS && @battle.FE == :DEEPEARTH)
      if @move == :SEISMICTOSS && @battle.FE == :DEEPEARTH
        message = _INTL("Slammed into the ground!")
        feedbackMessages.push(message) unless feedbackMessages.include?(message)
      end
      return (attacker.level * 1.5).floor
    end
    return attacker.level
  end
end

################################################################################
# Inflicts damage to bring the target's HP down to equal the user's HP. (Endeavor)
################################################################################
class PokeBattle_Move_06E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.hp >= opponent.hp
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return opponent.hp - attacker.hp
  end
end

################################################################################
# Inflicts damage between 0.5 and 1.5 times the user's level. (Psywave)
################################################################################
class PokeBattle_Move_06F < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    if @battle.FE == :DEEPEARTH
      message = _INTL("The core's magical forces are immense!")
      feedbackMessages.push(message) unless feedbackMessages.include?(message)
      return (attacker.level * (@battle.pbRandom(51) + 100) / 100.0).floor
    end
    return (attacker.level * (@battle.pbRandom(101) + 50) / 100.0).floor
  end
end

################################################################################
# OHKO.  Accuracy increases by difference between levels of user and target. (Fissure/
# Sheer Cold / Guillotine / Horn Drill)
################################################################################
class PokeBattle_Move_070 < PokeBattle_Move
  def pbAccuracyCheck(attacker, opponent)
    return false if opponent.ability == :STURDY && !opponent.moldbroken
    return false if opponent.pokemon.piece == :PAWN && @battle.FE == :CHESS
    return false if opponent.level > attacker.level || (@move == :SHEERCOLD && opponent.hasType?(:ICE))
    return true if opponent.level <= attacker.level && (attacker.ability == :NOGUARD || opponent.ability == :NOGUARD) # no guard OHKO move situation.

    baseaccuracy = @accuracy
    baseaccuracy = 20 if @move == :SHEERCOLD && !attacker.hasType?(:ICE)

    acc = baseaccuracy + attacker.level - opponent.level
    return @battle.pbRandom(100) < acc
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return opponent.totalhp
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.hp <= 0
      @battle.pbDisplay(_INTL("It's a one-hit KO!"))
    end
  end
end

################################################################################
# Counters a physical move used against the user this round, with 2x the power. (Counter)
################################################################################
class PokeBattle_Move_071 < PokeBattle_Move
  def pbAddTarget(targets, target, attacker)
    if attacker.effects[:CounterTarget] >= 0 && attacker.pbIsOpposing?(attacker.effects[:CounterTarget]) &&
       !super(targets, @battle.battlers[attacker.effects[:CounterTarget]], attacker)
      attacker.pbRandomTarget(targets)
    end
  end

  def pbOnStartUse(attacker, targets)
    if attacker.effects[:Counter] <= 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return attacker.effects[:Counter] * 2
  end
end

################################################################################
# Counters a specical move used against the user this round, with 2x the power. (Mirror Coat)
################################################################################
class PokeBattle_Move_072 < PokeBattle_Move
  def pbAddTarget(targets, target, attacker)
    if attacker.effects[:MirrorCoatTarget] >= 0 && attacker.pbIsOpposing?(attacker.effects[:MirrorCoatTarget]) &&
       !super(targets, @battle.battlers[attacker.effects[:MirrorCoatTarget]], attacker)
      attacker.pbRandomTarget(targets)
    end
  end

  def pbOnStartUse(attacker, targets)
    if attacker.effects[:MirrorCoat] <= 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return attacker.effects[:MirrorCoat] * 2
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.FE == :MIRROR
      for stat in [PBStats::EVASION, PBStats::DEFENSE, PBStats::SPDEF]
        attacker.pbIncreaseStat(stat, 1, abilitymessage: false, statsource: attacker)
      end
    end
  end
end

################################################################################
# Counters the last damaging move used against the user this round, with 1.5x
# the power. (Metal Burst / Comeuppance)
################################################################################
class PokeBattle_Move_073 < PokeBattle_Move
  def pbAddTarget(targets, target, attacker)
    if attacker.lastAttacker >= 0 && attacker.pbIsOpposing?(attacker.lastAttacker) &&
       !super(targets, @battle.battlers[attacker.lastAttacker], attacker)
      attacker.pbRandomTarget(targets)
    end
  end

  def pbOnStartUse(attacker, targets)
    if attacker.lastHPLost == 0 || attacker.damagestate.substitute
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return (attacker.lastHPLost * 1.5).floor
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :COMEUPPANCE
      @battle.pbAnimation(:FOULPLAY, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Damages user's partner 1/16 Max HP (Flame Burst)
################################################################################
class PokeBattle_Move_074 < PokeBattle_Move
  #  def pbOnStartUse(attacker, targets)
  #    if @battle.FE == :CORROSIVEMIST
  #      bearer=@battle.pbCheckGlobalAbility(:DAMP)
  #      if bearer && @battle.FE == :CORROSIVEMIST #Corrosive Mist Field
  #        @battle.pbDisplay(_INTL("{1}'s {2} prevents {3} from using {4}!",
  #        bearer.pbThis,getAbilityName(bearer.ability),attacker.pbThis(true),@name))
  #        return false
  #      end
  #    end
  #    return true
  # end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.pbPartner && !opponent.pbPartner.isFainted?
      opponent.pbPartner.pbReduceHP((opponent.pbPartner.totalhp / 16.0).floor)
      @battle.pbDisplay(_INTL("The bursting flame hit {1}!", opponent.pbPartner.pbThis(true)))
      opponent.pbPartner.pbFaint if opponent.pbPartner.isFainted?
    end
  end
end

################################################################################
# Power is doubled if the target is using Dive. (Surf)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_075 < PokeBattle_Move
  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if !$cache.moves[opponent.effects[:TwoTurnAttack]].nil? &&
                         $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCB # Dive
    return damagemult
  end
end

################################################################################
# Power is doubled if the target is using Dig. (Earthquake)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_076 < PokeBattle_Move
  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if $cache.moves[opponent.effects[:TwoTurnAttack]]&.function == 0xCA # Dig
    return damagemult
  end
end

################################################################################
# Power is doubled if the target is using Bounce, Fly or Sky Drop. (Gust)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_077 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if !$cache.moves[opponent.effects[:TwoTurnAttack]].nil? &&
       ($cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xC9 || # Fly
        $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCC || # Bounce
        $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCE) # Sky Drop
      return basedmg * 2
    end

    return basedmg
  end
end

################################################################################
# Power is doubled if the target is using Bounce, Fly or Sky Drop.
# May make the target flinch. (Twister)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_078 < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    if !$cache.moves[opponent.effects[:TwoTurnAttack]].nil? &&
       ($cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xC9 || # Fly
        $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCC || # Bounce
        $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCE) # Sky Drop
      return basedmg * 2
    end

    return basedmg
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
      return true
    end
    return false
  end
end

################################################################################
# Power is doubled if Fusion Flare was used this round. (Fusion Bolt)
################################################################################
class PokeBattle_Move_079 < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    id = :FUSIONBOLT2 if @battle.previousMove == :FUSIONFLARE && @battle.fusionMove == :FUSIONFLARE
    super(id, attacker, opponent, hitnum, alltargets, showanimation)
  end

  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if @battle.previousMove == :FUSIONFLARE && @battle.fusionMove == :FUSIONFLARE
    return damagemult
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.fusionMove = :FUSIONBOLT
  end
end

################################################################################
# Power is doubled if Fusion Bolt was used this round. (Fusion Flare)
################################################################################
class PokeBattle_Move_07A < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    id = :FUSIONFLARE2 if @battle.previousMove == :FUSIONBOLT && @battle.fusionMove == :FUSIONBOLT
    super(id, attacker, opponent, hitnum, alltargets, showanimation)
  end

  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if @battle.previousMove == :FUSIONBOLT && @battle.fusionMove == :FUSIONBOLT
    return damagemult
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.fusionMove = :FUSIONFLARE
  end
end

################################################################################
# Power is doubled if the target is poisoned. (Venoshock)
################################################################################
class PokeBattle_Move_07B < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if [:CORROSIVE, :CORROSIVEMIST, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE) ||
                         (opponent.status == :POISON && opponent.effects[:Substitute] == 0)
    return damagemult
  end
end

################################################################################
# Power is doubled if the target is paralyzed.  Cures the target of paralysis. (Smelling Salts)
################################################################################
class PokeBattle_Move_07C < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if opponent.status == :PARALYSIS &&
       opponent.effects[:Substitute] == 0
      return basedmg * 2
    end
    return basedmg
  end

  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
    if !opponent.damagestate.substitute && opponent.status == :PARALYSIS
      opponent.pbCureStatus
    end
  end
end

################################################################################
# Power is doubled if the target is asleep.  Wakes the target up. (Wake-up Slap)
################################################################################
class PokeBattle_Move_07D < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if (opponent.status == :SLEEP || (opponent.ability == :COMATOSE && @battle.FE != :ELECTERRAIN)) &&
       opponent.effects[:Substitute] == 0
      return basedmg * 2
    end

    return basedmg
  end

  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
    if !opponent.damagestate.substitute && opponent.status == :SLEEP
      opponent.pbCureStatus
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :WAKEUPSHOCK
      @battle.pbAnimation(:ZINGZAP, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Power is doubled if the user is burned, poisoned or paralyzed. (Facade)
################################################################################
class PokeBattle_Move_07E < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if attacker.status == :POISON || attacker.status == :BURN || attacker.status == :PARALYSIS
    return damagemult
  end
end

################################################################################
# Power is doubled if the target has a status problem. (Hex)
################################################################################
class PokeBattle_Move_07F < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if @battle.FE == :INFERNAL ||
       ((!opponent.status.nil? || (opponent.ability == :COMATOSE && @battle.FE != :ELECTERRAIN)) &&
        opponent.effects[:Substitute] == 0)
      return basedmg * 2
    end

    return basedmg
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :IRRITATION
      @battle.pbAnimation(:INFESTATION, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Power is doubled if the target's HP is down to 1/2 or less. (Brine)
################################################################################
class PokeBattle_Move_080 < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if opponent.hp <= (opponent.totalhp / 2.0).floor
    return damagemult
  end
end

################################################################################
# Power is doubled if the user has lost HP due to the target's move this round.
# (Revenge / Avalanche)
################################################################################
class PokeBattle_Move_081 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg * 2 if attacker.lastHPLost > 0 && !attacker.damagestate.substitute && attacker.lastAttacker == opponent.index

    return basedmg
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :DELUGE
      @battle.pbAnimation(:BRINE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Power is doubled if the target has already lost HP this round. (Assurance)
################################################################################
class PokeBattle_Move_082 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg * 2 if opponent.lastHPLost > 0

    return basedmg
  end
end

################################################################################
# Power is doubled if the move has already been used this turn. (Round)
################################################################################
class PokeBattle_Move_083 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if @battle.state.effects[:Round]
      return basedmg * 2
    end

    @battle.state.effects[:Round] = true
    return basedmg
  end
end

################################################################################
# Power is doubled if the target has already moved this round. (Payback)
################################################################################
class PokeBattle_Move_084 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg * 2 if opponent.hasMovedThisRound? && !@battle.switchedOut[opponent.index]

    return basedmg
  end
end

################################################################################
# Power is doubled if a user's teammate fainted last round. (Retaliate)
################################################################################
class PokeBattle_Move_085 < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if attacker.pbOwnSide.effects[:Retaliate]
    return damagemult
  end
end

################################################################################
# Power is doubled if the user has no held item. (Acrobatics)
################################################################################
class PokeBattle_Move_086 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    movetype = pbType(attacker)
    gem = false
    if attacker.itemWorks?
      case attacker.item
        when :NORMALGEM   then gem = true if movetype == :NORMAL
        when :FIGHTINGGEM then gem = true if movetype == :FIGHTING
        when :FLYINGGEM   then gem = true if movetype == :FLYING
        when :POISONGEM   then gem = true if movetype == :POISON
        when :GROUNDGEM   then gem = true if movetype == :GROUND
        when :ROCKGEM     then gem = true if movetype == :ROCK
        when :BUGGEM      then gem = true if movetype == :BUG
        when :GHOSTGEM    then gem = true if movetype == :GHOST
        when :STEELGEM    then gem = true if movetype == :STEEL
        when :FIREGEM     then gem = true if movetype == :FIRE
        when :WATERGEM    then gem = true if movetype == :WATER
        when :GRASSGEM    then gem = true if movetype == :GRASS
        when :ELECTRICGEM then gem = true if movetype == :ELECTRIC
        when :PSYCHICGEM  then gem = true if movetype == :PSYCHIC
        when :ICEGEM      then gem = true if movetype == :ICE
        when :DRAGONGEM   then gem = true if movetype == :DRAGON
        when :DARKGEM     then gem = true if movetype == :DARK
        when :FAIRYGEM    then gem = true if movetype == :FAIRY
      end
    end
    return basedmg * 2 if attacker.item.nil? || @battle.FE == :BIGTOP || gem

    return basedmg
  end
end

################################################################################
# Power is doubled in weather.  Type changes depending on the weather. (Weather Ball)
################################################################################
class PokeBattle_Move_087 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if @battle.pbWeather != 0 || @battle.FE == :RAINBOW
      return basedmg * 2
    end

    return basedmg
  end

  def pbType(attacker, type = @type)
    weather = @battle.pbWeather
    type = :NORMAL
    if !attacker.hasWorkingItem(:UTILITYUMBRELLA)
      type = :FIRE if weather == :SUNNYDAY
      type = :WATER if weather == :RAINDANCE
      type = :ROCK if weather == :SANDSTORM
      type = :ICE if weather == :HAIL
      type = :FLYING if @battle.FE == :SKY && weather == :STRONGWINDS
      type = :SHADOW if Rejuv && weather == :SHADOWSKY
    end
    type = super(attacker, type)
    return type
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    case @battle.pbWeather
      when :RAINDANCE
        @battle.pbAnimation(:WEATHERBALLRAIN, attacker, opponent, hitnum) # Weather Ball - Rain
      when :SUNNYDAY
        @battle.pbAnimation(:WEATHERBALLSUN, attacker, opponent, hitnum) # Weather Ball - Sun
      when :HAIL
        @battle.pbAnimation(:WEATHERBALLHAIL, attacker, opponent, hitnum) # Weather Ball - Hail
      when :SANDSTORM
        @battle.pbAnimation(:WEATHERBALLSAND, attacker, opponent, hitnum) # Weather Ball - Sand
      else
        @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Power is doubled if a foe tries to switch out. (Pursuit)
# (Handled in Battle's pbAttackPhase): Makes this attack happen before switching.
################################################################################
class PokeBattle_Move_088 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg * 2 if @battle.switching

    return basedmg
  end
end

################################################################################
# Power increases with the user's happiness. (Return)
################################################################################
class PokeBattle_Move_089 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 102 if @battle.FE == :CONCERT4

    return [(attacker.happiness * 2 / 5.0).floor, 1].max
  end
end

################################################################################
# Power decreases with the user's happiness. (Frustration)
################################################################################
class PokeBattle_Move_08A < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [250 - attacker.happiness, 1].max if attacker.crested == :LUVDISC
    return 102 if @battle.FE == :CONCERT4

    return [((255 - attacker.happiness) * 2 / 5.0).floor, 1].max
  end
end

################################################################################
# Power increases with the user's HP. (Eruption / Water Spout / Dragon Energy)
################################################################################
class PokeBattle_Move_08B < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if @battle.FE == :CORROSIVEMIST
      if @move == :ERUPTION
        bearer = @battle.pbCheckGlobalAbility(:DAMP)
        if bearer
          @battle.pbDisplay(_INTL("{1}'s {2} prevents {3} from using {4}!", bearer.pbThis, getAbilityName(bearer.ability), attacker.pbThis(true), @name))
          return false
        end
      end
    end
    return true
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 150 if @battle.FE == :CONCERT4

    return [(150 * (attacker.hp.to_f) / attacker.totalhp).floor, 1].max
  end
end

################################################################################
# Power increases with the target's HP. (Wring Out / Crush Grip)
################################################################################
class PokeBattle_Move_08C < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 120 if [:DEEPEARTH, :CONCERT4].include?(@battle.FE)

    return [(120 * (opponent.hp.to_f) / opponent.totalhp).floor, 1].max
  end
end

################################################################################
# Power increases the quicker the target is than the user. (Gyro Ball)
################################################################################
class PokeBattle_Move_08D < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 150 if [:DEEPEARTH, :CONCERT4].include?(@battle.FE)

    return [[(25 * opponent.pbSpeed / attacker.pbSpeed).floor, 150].min, 1].max
  end
end

################################################################################
# Power increases with the user's positive stat changes (ignores negative ones).
# (Stored Power / Power Trip)
################################################################################
class PokeBattle_Move_08E < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    mult = 0
    for i in 1..7
      mult += attacker.stages[i] if attacker.stages[i] > 0
    end
    bp = 20
    bp = 40 if @battle.FE == :FROZENDIMENSION && @move == :POWERTRIP
    return ([attacker.happiness, 250].min) + (bp * mult) if attacker.crested == :LUVDISC

    return bp * (mult + 1)
  end
end

################################################################################
# Power increases with the target's positive stat changes (ignores negative ones).
# (Punishment)
################################################################################
class PokeBattle_Move_08F < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    mult = 0
    for i in 1...7
      mult += opponent.stages[i] if opponent.stages[i] > 0
    end
    return [([attacker.happiness, 250].min) + (20 * mult), 500].min if attacker.crested == :LUVDISC

    return [20 * (mult + 3), 200].min
  end
end

################################################################################
# Power and type depends on the user's IVs. (Hidden Power)
################################################################################
class PokeBattle_Move_090 < PokeBattle_Move
  def pbType(attacker, type = @type)
    type = pbHiddenPower(attacker.pokemon)
    type = super(attacker, type)
    return type
  end
end

def pbHiddenPower(user)
  return :QMARKS if user == nil
  return user.hptype if user.hptype != nil

  types = []
  for i in $cache.types.keys
    types.push(i) if i != :NORMAL && i != :QMARKS && i != :SHADOW
  end
  selected_index = user.personalID % types.length
  user.hptype = types[selected_index]
  return user.hptype
end

################################################################################
# Power doubles for each consecutive use. (Fury Cutter)
################################################################################
class PokeBattle_Move_091 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    basedmg = basedmg << attacker.effects[:FuryCutter] # can be 0 to 2
    return basedmg
  end
end

################################################################################
# Power doubles for each consecutive use. (Echoed Voice)
################################################################################
class PokeBattle_Move_092 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    basedmg *= @battle.echoedVoice + 1 # can be 0 to 4
    return basedmg
  end
end

################################################################################
# User rages until the start of a round in which they don't use this move. (Rage)
# Handled in Battler class: Ups rager's Attack by 1 stage each time it loses HP due to a move.
################################################################################
class PokeBattle_Move_093 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC

    if [:DIMENSIONAL, :FROZENDIMENSION].include?(@battle.FE)
      basedmg = 60
    end
    return basedmg
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if [:DIMENSIONAL, :FROZENDIMENSION].include?(@battle.FE)
      attacker.pbIncreaseStat(PBStats::ATTACK, 1, statsource: attacker)
    else
      attacker.effects[:Rage] = true
    end
  end
end

################################################################################
# Randomly damages or heals the target. (Present)
################################################################################
class PokeBattle_Move_094 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    presents = [
      0, 0,
      40, 40, 40, 40,
      80, 80, 80,
      120,
    ]
    @calcbasedmg = @battle.sample(presents)
    @calcbasedmg = [attacker.happiness, 250].min if @calcbasedmg > 0 && attacker.crested == :LUVDISC
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if @calcbasedmg == 0
    return super
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return @calcbasedmg
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @calcbasedmg != 0

    if opponent.effects[:HealBlock] > 0
      @battle.pbDisplay(_INTL("{1} was prevented from healing!", opponent.pbThis))
      return
    end
    if opponent.hp == opponent.totalhp
      @battle.pbDisplay(_INTL("{1}'s HP is full!", opponent.pbThis))
      return
    end
    opponent.pbRecoverHP([1, (opponent.totalhp / 4.0).floor].max, true)
    @battle.pbDisplay(_INTL("{1} had its HP restored.", opponent.pbThis))
  end
end

################################################################################
# Power is chosen at random.  Power is doubled if the target is using Dig. (Magnitude)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_095 < PokeBattle_Move
  @calcbasedmg = 0

  def pbOnStartUse(attacker, targets)
    basedmg = [10, 30, 50, 70, 90, 110, 150]
    magnitudes = [
      4,
      5, 5,
      6, 6, 6, 6,
      7, 7, 7, 7, 7, 7,
      8, 8, 8, 8,
      9, 9,
      10
    ]
    magni = magnitudes[@battle.pbRandom(magnitudes.length)]
    magni = magnitudes[0] if @battle.FE == :CONCERT1
    magni = magnitudes[19] if @battle.FE == :CONCERT4
    @calcbasedmg = basedmg[magni - 4]
    if attacker.crested == :LUVDISC
      @calcbasedmg = [attacker.happiness, 250].min
      magni = 11
    end
    @battle.pbDisplay(_INTL("Magnitude {1}!", magni))
    return true
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    if !$cache.moves[opponent.effects[:TwoTurnAttack]].nil? &&
       $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCA # Dig
      damagemult *= 2.0
    end

    return damagemult
  end
end

################################################################################
# Power and type depend on the user's held berry.  Destroys the berry. (Natural Gift)
################################################################################
class PokeBattle_Move_096 < PokeBattle_Move
  def initialize(battle, move, user, zbase = nil)
    super
    @berry = 0
  end

  def pbOnStartUse(attacker, targets)
    if attacker.item.nil? || !pbIsBerry?(attacker.item)
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    @berry = attacker.item
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbDisposeItem(true, true, true, true)
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 100 if @battle.FE == :CONCERT4
    berry = @berry != 0 ? @berry : attacker.item
    return !PBStuff::NATURALGIFTDAMAGE[berry].nil? ? PBStuff::NATURALGIFTDAMAGE[berry] : 1
  end

  def pbType(attacker, type = @type)
    berry = @berry != 0 ? @berry : attacker.item
    type = !PBStuff::NATURALGIFTTYPE[berry].nil? ? PBStuff::NATURALGIFTTYPE[berry] : :NORMAL
    return super(attacker, type)
  end
end

################################################################################
# Power increases the less PP this move has. (Trump Card)
################################################################################
class PokeBattle_Move_097 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC

    dmgs = [200, 80, 60, 50, 40]
    ppleft = [@pp, 4].min # PP is reduced before the move is used
    basedmg = dmgs[ppleft]
    basedmg = 200 if @battle.FE == :CONCERT4
    return basedmg
  end
end

################################################################################
# Power increases the less HP the user has. (Flail / Reversal)
################################################################################
class PokeBattle_Move_098 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC

    n = ((48 * attacker.hp.to_f) / attacker.totalhp).floor
    ret = 20
    ret = 40 if n < 33
    ret = 80 if n < 17
    ret = 100 if n < 10
    ret = 150 if n < 5
    ret = 200 if n < 2 || @battle.FE == :CONCERT4
    return ret
  end
end

################################################################################
# Power increases the quicker the user is than the target. (Electro Ball)
################################################################################
class PokeBattle_Move_099 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC

    n = (attacker.pbSpeed / opponent.pbSpeed).floor
    ret = 40
    ret = 60 if n >= 1
    ret = 80 if n >= 2
    ret = 120 if n >= 3
    ret = 150 if n >= 4 || @battle.FE == :CONCERT4
    return ret
  end
end

################################################################################
# Power increases the heavier the target is. (Low Kick / Grass Knot)
################################################################################
class PokeBattle_Move_09A < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC

    weight = opponent.weight
    weight = opponent.weight * 2 if @battle.FE == :DEEPEARTH
    ret = 20
    ret = 40 if weight >= 100
    ret = 60 if weight >= 250
    ret = 80 if weight >= 500
    ret = 100 if weight >= 1000
    ret = 120 if weight >= 2000 || @battle.FE == :CONCERT4
    return ret
  end
end

################################################################################
# Power increases the heavier the user is than the target. (heavy Slam / Heat Crash)
################################################################################
class PokeBattle_Move_09B < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC

    n = (attacker.weight / opponent.weight).floor
    n = (attacker.weight * 2 / opponent.weight).floor if @battle.FE == :DEEPEARTH
    ret = 40
    ret = 60 if n >= 2
    ret = 80 if n >= 3
    ret = 100 if n >= 4
    ret = 120 if n >= 5 || @battle.FE == :CONCERT4
    return ret
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if opponent.effects[:Minimize]
    return damagemult
  end
end

################################################################################
# Powers up the ally's attack this round by 1.5. (Helping Hand)
################################################################################
class PokeBattle_Move_09C < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.isFainted? ||
       opponent.effects[:HelpingHand] ||
       @battle.pbGetPriority(attacker) > @battle.pbGetPriority(opponent)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:HelpingHand] = true
    @battle.pbDisplay(_INTL("{1} is ready to help {2}!", attacker.pbThis, opponent.pbThis(true)))
  end
end

################################################################################
# Weakens Electric attacks. (Mud Sport)
################################################################################
class PokeBattle_Move_09D < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.state.effects[:MudSport] > 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.state.effects[:MudSport] = 5
    @battle.pbDisplay(_INTL("Electricity's power was weakened!"))
  end
end

################################################################################
# Weakens Fire attacks. (Water Sport)
################################################################################
class PokeBattle_Move_09E < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.state.effects[:WaterSport] > 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.state.effects[:WaterSport] = 5
    @battle.pbDisplay(_INTL("Fire's power was weakened!"))
  end
end

################################################################################
# Type depends on the user's held item. (Judgment / Techno Blast / Multi-Attack)
################################################################################
class PokeBattle_Move_09F < PokeBattle_Move
  def pbType(attacker, type = @type)
    if (@move == :JUDGMENT && attacker.species == :ARCEUS) ||
       (@move == :MULTIATTACK && attacker.species == :SILVALLY)
      type = $cache.pkmn[attacker.species].forms[attacker.form % 19].upcase.intern
      type = :QMARKS if type == "???".intern
    end
    if attacker.itemWorks?
      if @move == :TECHNOBLAST
        case attacker.item
          when :SHOCKDRIVE then type = :ELECTRIC
          when :BURNDRIVE then type = :FIRE
          when :CHILLDRIVE then type = :ICE
          when :DOUSEDRIVE then type = :WATER
        end
      elsif @move == :MULTIATTACK
        itemtype = $cache.items[attacker.item].checkFlag?(:memory)
        type = itemtype if itemtype
      elsif @move == :JUDGMENT || @move == :MULTIPULSE
        if PBStuff::PLATEITEMS.include?(attacker.item)
          itemtype = $cache.items[attacker.item].checkFlag?(:typeboost)
          type = itemtype if itemtype
        end
      end
    end
    return super(attacker, type)
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    @battle.pbAnimation(id, attacker, opponent, hitnum) if @move == :MULTIPULSE
    movetype = pbType(attacker)
    movetype = :GLITCH if movetype == :QMARKS && @move == :MULTIATTACK
    animmovename = (@move.to_s + movetype.to_s).to_sym
    if $cache.moves[animmovename]
      @battle.pbAnimation(animmovename, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# This attack is always a critical hit, if successful. (Storm Throw / Frost Breath)
################################################################################
class PokeBattle_Move_0A0 < PokeBattle_Move
  # Handled in superclass, do not edit!
end

################################################################################
# For 5 rounds, foes' attacks cannot become critical hits. (Lucky Chant)
################################################################################
class PokeBattle_Move_0A1 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:LuckyChant] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:LuckyChant] = 5
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("The Lucky Chant shielded your team from critical hits!"))
    else
      @battle.pbDisplay(_INTL("The Lucky Chant shielded the foe's team from critical hits!"))
    end
  end
end

################################################################################
# For 5 rounds, lowers power of physical attacks against the user's side. (Reflect)
################################################################################
class PokeBattle_Move_0A2 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:Reflect] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:Reflect] = 5
    attacker.pbOwnSide.effects[:Reflect] = 8 if attacker.hasWorkingItem(:LIGHTCLAY)
    attacker.pbOwnSide.effects[:Reflect] = 8 if [:MIRROR, :DANCEFLOOR].include?(@battle.FE)
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Reflect raised your team's Defense!"))
    else
      @battle.pbDisplay(_INTL("Reflect raised the opposing team's Defense!"))
    end
    if @battle.FE == :MIRROR
      attacker.pbIncreaseStat(PBStats::EVASION, 1, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# For 5 rounds, lowers power of special attacks against the user's side. (Light Screen)
################################################################################
class PokeBattle_Move_0A3 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:LightScreen] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:LightScreen] = 5
    attacker.pbOwnSide.effects[:LightScreen] = 8 if attacker.hasWorkingItem(:LIGHTCLAY)
    attacker.pbOwnSide.effects[:LightScreen] = 8 if [:MIRROR, :DANCEFLOOR].include?(@battle.FE)
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Light Screen raised your team's Special Defense!"))
    else
      @battle.pbDisplay(_INTL("Light Screen raised the opposing team's Special Defense!"))
    end
    if @battle.FE == :MIRROR
      attacker.pbIncreaseStat(PBStats::EVASION, 1, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# Effect depends on the environment. (Secret power)
################################################################################
class PokeBattle_Move_0A4 < PokeBattle_Move
  def canFlinch?
    return [:ROCKY, :CAVE, :MOUNTAIN, :DIMENSIONAL, :DEEPEARTH, :CONCERT1, :CONCERT2, :CONCERT3, :CONCERT4].include?(@battle.FE)
  end

  def pbAdditionalEffect(attacker, opponent)
    case @battle.FE
      when :ELECTERRAIN, :SHORTCIRCUIT
        return if !opponent.pbCanParalyze?(false)

        opponent.pbParalyze(attacker)
        @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
      when :GRASSY, :FOREST, :FAIRYTALE
        return if !opponent.pbCanSleep?(false)

        opponent.pbSleep
        @battle.pbDisplay(_INTL("{1} went to sleep!", opponent.pbThis))
      when :MISTY, :HOLY
        opponent.pbReduceStat(PBStats::SPATK, 1, abilitymessage: false, statdropper: attacker)
      when :DARKCRYSTALCAVERN, :DESERT, :ASHENBEACH, :CLOUDS
        opponent.pbReduceStat(PBStats::ACCURACY, 1, abilitymessage: false, statdropper: attacker)
      when :CHESS, :DARKNESS1, :DARKNESS2, :DARKNESS3
        opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
      when :BIGTOP, :STARLIGHT
        opponent.pbReduceStat(PBStats::SPDEF, 1, abilitymessage: false, statdropper: attacker)
      when :BURNING, :SUPERHEATED, :DRAGONSDEN, :VOLCANIC, :VOLCANICTOP, :INFERNAL, :DANCEFLOOR
        return if !opponent.pbCanBurn?(false)

        opponent.pbBurn(attacker)
        @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
      when :SWAMP, :WATERSURFACE, :GLITCH
        opponent.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker)
      when :RAINBOW, :WASTELAND, :CRYSTALCAVERN, :BEWITCHED
        rnd = 0
        loop do
          rnd = @battle.pbRandom(6)
          break if (@battle.FE == :RAINBOW && rnd != 5) || (@battle.FE == :WASTELAND && rnd < 4) || (@battle.FE == :CRYSTALCAVERN && rnd > 1) || (@battle.FE == :BEWITCHED && (rnd < 2 || rnd == 4))
        end
        case rnd
          when 0
            return if !opponent.pbCanParalyze?(false)

            opponent.pbParalyze(attacker)
            @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
          when 1
            return if !opponent.pbCanPoison?(false)

            opponent.pbPoison(attacker)
            @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
          when 2
            return if !opponent.pbCanBurn?(false)

            opponent.pbBurn(attacker)
            @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
          when 3
            return if !opponent.pbCanFreeze?(false)

            opponent.pbFreeze
            @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
          when 4
            return if !opponent.pbCanSleep?(false)

            opponent.pbSleep
            @battle.pbDisplay(_INTL("{1} fell asleep!", opponent.pbThis))
          when 5
            return if !opponent.pbCanConfuse?(false, inflictor: attacker)

            opponent.pbConfuse
            @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
        end
      when :CORROSIVE, :CORROSIVEMIST, :MURKWATERSURFACE, :CORRUPTED, :BACKALLEY, :CITY
        return if !opponent.pbCanPoison?(false)

        opponent.pbPoison(attacker)
        @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
      when :ICY, :SNOWYMOUNTAIN, :FROZENDIMENSION
        return if !opponent.pbCanFreeze?(false)

        opponent.pbFreeze
        @battle.pbDisplay(_INTL("{1} was frozen solid!", opponent.pbThis))
      when :ROCKY, :CAVE, :MOUNTAIN, :DIMENSIONAL, :DEEPEARTH, :CONCERT1, :CONCERT2, :CONCERT3, :CONCERT4
        return if opponent.ability == :INNERFOCUS || opponent.damagestate.substitute

        opponent.effects[:Flinch] = true
      when :FACTORY, :UNDERWATER
        opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
      when :MIRROR
        opponent.pbReduceStat(PBStats::EVASION, 1, abilitymessage: false, statdropper: attacker)
      when :FLOWERGARDEN1, :FLOWERGARDEN2, :FLOWERGARDEN3, :FLOWERGARDEN4, :FLOWERGARDEN5
        if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 1, 2)
          opponent.pbReduceStat(PBStats::EVASION, 1, abilitymessage: false, statdropper: attacker)
        elsif @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 4)
          opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
          opponent.pbReduceStat(PBStats::SPDEF, 1, abilitymessage: false, statdropper: attacker)
          opponent.pbReduceStat(PBStats::EVASION, 1, abilitymessage: false, statdropper: attacker)
        elsif @battle.FE == :FLOWERGARDEN5
          opponent.pbReduceStat(PBStats::DEFENSE, 2, abilitymessage: false, statdropper: attacker)
          opponent.pbReduceStat(PBStats::SPDEF, 2, abilitymessage: false, statdropper: attacker)
          opponent.pbReduceStat(PBStats::EVASION, 2, abilitymessage: false, statdropper: attacker)
        end
      when :NEWWORLD
        for i in 1...7
          opponent.pbReduceStat(i, 1, abilitymessage: false, statdropper: attacker)
        end
      when :INVERSE, :PSYTERRAIN, :SKY
        return if !opponent.pbCanConfuse?(false, inflictor: attacker)

        opponent.pbConfuse
        @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
      when :HAUNTED
        if !opponent.effects[:Curse]
          opponent.effects[:Curse] = true
          @battle.pbDisplay(_INTL("{1} laid a curse on {2}!", attacker.pbThis, opponent.pbThis(true)))
        end
      when :COLOSSEUM
        # do nothing here, will be covered in pbAdditionalEffectSelf
      else
        return if !opponent.pbCanParalyze?(false)

        opponent.pbParalyze(attacker)
        @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
    end
  end

  def pbAdditionalEffectSelf(attacker)
    if @battle.FE == :COLOSSEUM
      attacker.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: false, statsource: attacker)
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    @battle.pbAnimation(@battle.field.secretPowerAnim, attacker, opponent, hitnum)
  end
end

################################################################################
# User's attack next round against the target will definitely hit. (Lock-On / Mind Reader)
################################################################################
class PokeBattle_Move_0A6 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:LockOn] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:LockOn] = 2
    opponent.effects[:LockOnPos] = attacker.index
    @battle.pbDisplay(_INTL("{1} took aim at {2}!", attacker.pbThis, opponent.pbThis(true)))
    if @battle.FE == :PSYTERRAIN && @move == :MINDREADER
      attacker.pbIncreaseStat(PBStats::SPATK, 2, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# Target's evasion stat changes are ignored from now on. (Foresight / Odor Sleuth)
# Normal and Fighting moves have normal effectiveness against the Ghost-type target.
################################################################################
class PokeBattle_Move_0A7 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Foresight]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Foresight] = true
    @battle.pbDisplay(_INTL("{1} was identified!", opponent.pbThis))
  end
end

################################################################################
# Target's evasion stat changes are ignored from now on. (Miracle Eye)
# Psychic moves have normal effectiveness against the Dark-type target.
################################################################################
class PokeBattle_Move_0A8 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:MiracleEye]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:MiracleEye] = true
    @battle.pbDisplay(_INTL("{1} was identified!", opponent.pbThis))
    if [:HOLY, :FAIRYTALE, :PSYTERRAIN].include?(@battle.FE)
      attacker.pbIncreaseStat(PBStats::SPATK, 2, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# This move ignores target's Defense, Special Defense and evasion stat changes.
# (SacredSword / Chip Away / Darkest Lariat)
################################################################################
class PokeBattle_Move_0A9 < PokeBattle_Move
  # Handled in superclass, do not edit!
end

################################################################################
# User is protected against moves with the "B" flag this round. (Detect / Protect)
################################################################################
class PokeBattle_Move_0AA < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if @battle.pbRandom(3 ** attacker.effects[:ProtectRate]) != 0
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Protect] = :Protect
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} protected itself!", attacker.pbThis))
  end
end

################################################################################
# User's side is protected against moves with priority greater than 0 this round. (Quick Guard)
################################################################################
class PokeBattle_Move_0AB < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:QuickGuard] = true
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} protected its team!", attacker.pbThis))
  end
end

################################################################################
# User's side is protected against moves that target multiple battlers this round. (Wide Guard)
################################################################################
class PokeBattle_Move_0AC < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:WideGuard] = true
    attacker.pbPartner.effects[:WideGuardUser] = false
    attacker.effects[:WideGuardUser] = true
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} protected its team!", attacker.pbThis))
  end
end

################################################################################
# Ignores target's protections.  If successful, all other moves this round
# ignore them too. (Feint / Hyperspace Hole)
################################################################################
class PokeBattle_Move_0AD < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Protect] = false
    opponent.pbOwnSide.effects[:CraftyShield] = false
    opponent.pbOwnSide.effects[:WideGuard] = false
    opponent.pbOwnSide.effects[:QuickGuard] = false
    opponent.pbOwnSide.effects[:MatBlock] = false
  end
end

################################################################################
# Uses the last move that the target used. (Mirror Move)
################################################################################
class PokeBattle_Move_0AE < PokeBattle_Move
  # Warning: Don't trust Bulbapedia's claims on how this move is supposed to work.
  # Fal tested it on both showdown and cartridge, Bulbapedia is completely wrong.
  # It also directly contradicts itself by claiming that Mirror Move doesn't work with shadow moves
  # while at the same time having the "Affected by Mirror Move" tag on all attacking shadow moves.
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.lastMoveUsed.nil? || !opponent.lastMoveUsed.is_a?(Symbol)
      @battle.pbDisplay(_INTL("The mirror move failed!")) if showMessage
      return false
    end
    movedata = $cache.moves[opponent.lastMoveUsed]
    if movedata.checkFlag?(:nonmirror)
      @battle.pbDisplay(_INTL("The mirror move failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if @battle.FE == :MIRROR
      for stat in [PBStats::SPATK, PBStats::ATTACK, PBStats::ACCURACY]
        attacker.pbIncreaseStat(stat, 1, abilitymessage: false, statsource: attacker)
      end
    end
    if @battle.FE == :SKY
      for stat in [PBStats::SPATK, PBStats::ATTACK, PBStats::SPEED]
        attacker.pbIncreaseStat(stat, 1, abilitymessage: false, statsource: attacker)
      end
    end
    attacker.pbUseMoveSimple(opponent.lastMoveUsed, -1, opponent.index)
  end
end

################################################################################
# Uses the last move that was used. (Copycat)
################################################################################
class PokeBattle_Move_0AF < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    move = @battle.previousMove
    if !move || !move.is_a?(Symbol) || PBStuff::BLACKLISTS[:COPYCAT].include?(move)
      @battle.pbDisplay(_INTL("The copycat failed!")) if showMessage
      return false
    end
    return true
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = nil, alltargets = nil, showanimation = nil)
    opponent = @battle.battlers[@battle.previousMoveUser]
    super(id, attacker, opponent, hitnum, alltargets, showanimation)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    attacker.pbUseMoveSimple(@battle.previousMove, -1, -1)
  end
end

################################################################################
# Uses the move the target was about to use this round, with 1.5x power. (Me First)
################################################################################
class PokeBattle_Move_0B0 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    priorityAttacker = @battle.pbGetPriority(attacker)
    priorityOpponent = @battle.pbGetPriority(opponent)
    # If the opponent's priority is LOWER, that means
    # it attacks BEFORE the attacker
    if priorityOpponent < priorityAttacker
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    else
      moveid = opponent.selectedMove
      # Now we test if the move is valid
      if !moveid || PBStuff::BLACKLISTS[:MEFIRST].include?(moveid) || @battle.zMove.any? { |t1| t1.any? { |t2| t2 == opponent.index } }
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
      movedata = $cache.moves[moveid]
      # if it's equal or less than zero then it's
      # not an attack move
      if movedata.basedamage <= 0
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      else
        # It's greater than zero, so it works.
        return true
      end
    end
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    moveid = opponent.selectedMove
    attacker.effects[:MeFirst] = true
    attacker.pbUseMoveSimple(moveid, -1, opponent.index)
  end
end

################################################################################
# This round, reflects all moves with the "C" flag targeting the user back at
# their origin. (Magic Coat)
################################################################################
class PokeBattle_Move_0B1 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:MagicCoat] = true
    @battle.pbDisplay(_INTL("{1} shrouded itself with Magic Coat!", attacker.pbThis))
  end
end

################################################################################
# This round, snatches all used moves with the "D" flag. (Snatch)
################################################################################
class PokeBattle_Move_0B2 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if (@battle.pbGetPriority(attacker) == 1 && !@battle.doublebattle) || (@battle.pbGetPriority(attacker) == 3 && @battle.doublebattle)
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Snatch] = true
    @battle.pbDisplay(_INTL("{1} waits for a target to make a move!", attacker.pbThis))
  end
end

################################################################################
# Uses a different move depending on the environment. (Nature Power)
################################################################################
class PokeBattle_Move_0B3 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    move = @battle.field.naturePower
    basemovename = getMoveName(@move)
    movename = getMoveName(move)
    @battle.pbDisplay(_INTL("{1} turned into {2}!", basemovename, movename))
    attacker.pbUseMoveSimple(move, -1, opponent.index)
  end
end

################################################################################
# Uses a random move the user knows.  Fails if user is not asleep. (Sleep Talk)
################################################################################
class PokeBattle_Move_0B4 < PokeBattle_Move
  def pbCanUseWhileAsleep?
    return true
  end

  def pbOnStartUse(attacker, targets)
    if attacker.status != :SLEEP && (attacker.ability != :COMATOSE || @battle.FE == :ELECTERRAIN)
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if self.sleepTalkChoices(attacker).length == 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    choices = sleepTalkChoices(attacker)
    attacker.sleeptalkUsed = true
    choice = @battle.sample(choices)
    if attacker.moves[choice].move == :ACUPRESSURE
      attacker.pbUseMoveSimple(attacker.moves[choice].move, choice, attacker.index)
    else
      attacker.pbUseMoveSimple(attacker.moves[choice].move, choice, attacker.pbOppositeOpposing.index)
    end
    attacker.sleeptalkUsed = false
  end

  def sleepTalkChoices(attacker)
    choices = (0...4).to_a.select { |i|
      attacker.moves[i] != nil && attacker.moves[i].move.is_a?(Symbol) && !PBStuff::BLACKLISTS[:SLEEPTALK].include?(attacker.moves[i].move) && @battle.pbCanChooseMove?(attacker.index, i, false, { sleeptalk: true })
    }
    return choices
  end
end

################################################################################
# Uses a random move known by any non-user Pokémon in the user's party. (Assist)
################################################################################
class PokeBattle_Move_0B5 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    party = @battle.pbParty(attacker.index)
    for i in 0...party.length
      next if i == attacker.pokemonIndex || !party[i] || party[i].isEgg?

      for move in party[i].moves
        moveid = move.move
        next if moveid == nil || PBStuff::BLACKLISTS[:ASSIST].include?(moveid)

        return true # there is at least one eligible move
      end
    end
    @battle.pbDisplay(_INTL("But it failed!"))
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    moves = []
    party = @battle.pbParty(attacker.index) # NOTE: pbParty is common to both allies in multi battles
    for i in 0...party.length
      next if i == attacker.pokemonIndex || !party[i] || party[i].isEgg?

      for move in party[i].moves
        moveid = move.move
        next if moveid == nil || PBStuff::BLACKLISTS[:ASSIST].include?(moveid)

        moves.push(moveid)
      end
    end
    move = @battle.sample(moves)
    attacker.pbUseMoveSimple(move)
  end
end

################################################################################
# Uses a random move that exists. (Metronome)
################################################################################
class PokeBattle_Move_0B6 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    $cache.moves.each do |symbol, move|
      next if PBStuff::BLACKLISTS[:METRONOME].include?(symbol)
      next if move.type == :SHADOW
      next if @battle.FE == :GLITCH && move.basedamage < 70

      return true # there is at least one eligible move
    end
    @battle.pbDisplay(_INTL("But it failed!"))
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    possibleMoves = []
    $cache.moves.each do |symbol, move|
      next if PBStuff::BLACKLISTS[:METRONOME].include?(symbol)
      next if move.type == :SHADOW
      next if @battle.FE == :GLITCH && move.basedamage < 70

      possibleMoves.push(symbol)
    end
    move = @battle.sample(possibleMoves)
    if move == :ACUPRESSURE
      # Metronome always targets the user if it calls Acupressure.
      attacker.pbUseMoveSimple(move, -1, attacker.index)
    else
      attacker.pbUseMoveSimple(move)
    end
  end
end

################################################################################
# The target can no longer use the same move twice in a row. (Torment)
################################################################################
class PokeBattle_Move_0B7 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if opponent.effects[:Torment]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if !@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? && !opponent.moldbroken
      @battle.pbDisplay(_INTL("The Aroma Veil protects #{opponent.pbThis} from torment!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if @basedamage > 0
    opponent.effects[:Torment] = true
    @battle.pbDisplay(_INTL("{1} was subjected to torment!", opponent.pbThis))
  end

  def pbAdditionalEffect(attacker, opponent)
    if !opponent.effects[:Torment] && (@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? || opponent.moldbroken)
      opponent.effects[:Torment] = true
      @battle.pbDisplay(_INTL("{1} was subjected to torment!", opponent.pbThis))
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :COLDTRUTH
      @battle.pbAnimation(:BLIZZARD, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Disables all target's moves that the user also knows. (Imprison)
################################################################################
class PokeBattle_Move_0B8 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.effects[:Imprison]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Imprison] = true
    @battle.pbDisplay(_INTL("{1} sealed the opponent's move(s)!", attacker.pbThis))
  end
end

################################################################################
# For 5 rounds, disables the last move the target used. (Disable)
################################################################################
class PokeBattle_Move_0B9 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Disable] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if !@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? && !opponent.moldbroken
      @battle.pbDisplay(_INTL("{1} is protected by an aromatic veil!", opponent.pbThis)) if showMessage
      return false
    end
    if opponent.moves.none? { |i| i && $cache.moves[i.move].move == opponent.lastMoveUsed && (i.pp > 0 || i.totalpp == 0) }
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    lastMoveIndex = opponent.moves.find_index { |i| i && $cache.moves[i.move].move == opponent.lastMoveUsed && (i.pp > 0 || i.totalpp == 0) }
    opponent.effects[:Disable] = 4
    opponent.effects[:DisableMove] = opponent.lastMoveUsed
    @battle.pbDisplay(_INTL("{1}'s {2} was disabled!", opponent.pbThis, opponent.moves[lastMoveIndex].name))
  end
end

################################################################################
# For 4 rounds, disables the target's non-damaging moves. (Taunt)
################################################################################
class PokeBattle_Move_0BA < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.ability == :OBLIVIOUS && !opponent.moldbroken
      @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis(true))) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Taunt] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if !@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? && !opponent.moldbroken
      @battle.pbDisplay(_INTL("{1} is protected by an aromatic veil!", opponent.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Taunt] = 4
    @battle.pbDisplay(_INTL("{1} fell for the taunt!", opponent.pbThis))
  end
end

################################################################################
# For 5 rounds, disables the target's healing moves. (Heal Block)
################################################################################
class PokeBattle_Move_0BB < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:HealBlock] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if !@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? && !opponent.moldbroken
      @battle.pbDisplay(_INTL("The Aroma Veil protects #{opponent.pbThis(true)} from being blocked!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:HealBlock] = 5
    @battle.pbDisplay(_INTL("{1} was prevented from healing!", opponent.pbThis))
  end
end

################################################################################
# For 4 rounds, the target must use the same move each round. (Encore)
################################################################################
class PokeBattle_Move_0BC < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    move = opponent.lastMoveUsed
    if opponent.effects[:Encore] > 0 ||
       !move.is_a?(Symbol) ||
       PBStuff::BLACKLISTS[:ENCORE].include?(move) ||
       opponent.effects[:ShellTrap]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if !@battle.pbCheckSideAbility(:AROMAVEIL, opponent).nil? && !opponent.moldbroken
      @battle.pbDisplay(_INTL("{1} is protected by an aromatic veil!", opponent.pbThis)) if showMessage
      return false
    end
    # First check if their last choice matches the encore'd move.
    moveIndex = opponent.lastMoveChoice[1]
    # Just to be safe, if it doesn't match, find it manually.
    if opponent.moves[moveIndex].move != move
      found = false
      for i in 0...opponent.moves.length
        if move == opponent.moves[i]
          found = true
          moveIndex = i
          break
        end
      end
      if !found
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    # Once it's found, make sure it has PP.
    if opponent.moves[moveIndex].pp == 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    move = opponent.lastMoveUsed
    moveIndex = opponent.lastMoveChoice[1]
    # Search for choice manually. pbEffectValid guarantees our success.
    if opponent.moves[moveIndex].move != move
      for i in 0...opponent.moves.length
        if move == opponent.moves[i]
          moveIndex = i
          break
        end
      end
    end

    opponent.effects[:Encore] = 3
    opponent.effects[:Encore] += 1 if opponent.hasMovedThisRound?
    opponent.effects[:Encore] += 3 if @battle.FE == :BIGTOP || @battle.ProgressiveFieldCheck(PBFields::CONCERT)
    opponent.effects[:EncoreIndex] = moveIndex
    opponent.effects[:EncoreMove] = move
    @battle.pbDisplay(_INTL("{1} received an encore!", opponent.pbThis))
  end
end

################################################################################
# Hits twice. (Gear Grind / Double Hit / Double Kick / Dual Chop / Bonemerang)
################################################################################
class PokeBattle_Move_0BD < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    return 2
  end
end

################################################################################
# Hits twice.  May poison the target on each hit. (Twineedle)
################################################################################
class PokeBattle_Move_0BE < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    return 2
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanPoison?(false)

    opponent.pbPoison(attacker)
    @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
  end
end

################################################################################
# Hits 3 times.  Power is multiplied by the hit number.
# (Triple Kick, Triple Axel, Thunder Raid)
################################################################################
class PokeBattle_Move_0BF < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def checkAccuracyEachHit(attacker)
    return attacker.ability != :SKILLLINK
  end

  def pbNumHits(attacker)
    return 3
  end

  def pbOnStartUse(attacker, targets)
    @calcbasedmg = @basedamage
    @calcbasedmg = [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return true
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    ret = @calcbasedmg
    @calcbasedmg += basedmg
    return ret
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if @move == :THUNDERRAID
      case hitnum
        when 0
          @battle.pbAnimation(id, attacker, opponent, hitnum)
        when 1
          @battle.pbAnimation(:THUNDERRAID2, attacker, opponent, hitnum)
        when 2
          @battle.pbAnimation(:THUNDERRAID3, attacker, opponent, hitnum)
      end
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Hits 2-5 times. (Pin Missile / Arm Thrust / Bullet Seed / Bone Rush / Icicle Spear /
# Tail Slap / Spike Cannon / Fury Swipes / Barrage / Double Slap / Fury Attack /
# Rock Blast / Water Shuriken / Comet Punch)
################################################################################
class PokeBattle_Move_0C0 < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    hitchances = [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5]
    ret = @battle.sample(hitchances)
    ret = 5 if attacker.ability == :SKILLLINK
    ret = 5 if attacker.crested == :FEAROW && @move == :FURYATTACK
    return ret
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :MUDBARRAGE
      @battle.pbAnimation(:MUDSLAP, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Hits X times, where X is the number of unfainted status-free Pokémon in the
# user's party (the participants).  Fails if X is 0.
# Base power of each hit depends on the base Attack stat for the species of that
# hit's participant. (Beat Up)
################################################################################
class PokeBattle_Move_0C1 < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    if @participants.nil?
      @participants = @battle.pbPartySingleOwner(attacker.index).find_all { |mon|
        mon && !mon.isEgg? && mon.hp > 0 && mon.status.nil?
      }
    end
    return @participants.length
  end

  def pbOnStartUse(attacker, targets)
    @participants = @battle.pbPartySingleOwner(attacker.index).find_all { |mon|
      mon && !mon.isEgg? && mon.hp > 0 && mon.status.nil?
    }
    if @participants.length == 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    mon = @participants.shift
    atk = mon.baseStats[1]
    return 5 + (atk / 10)
  end
end

################################################################################
# Two turn attack.  Attacks first turn, skips second turn (if successful).
# (Roar of Time / Blast Burn / Frenzy Plant / Giga Impact / Hyper Beam / Rock Wrecker /
# Hydro Cannon / Prismatic Laser / Meteor Assault / Eternabeam)
################################################################################
class PokeBattle_Move_0C2 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if !(@battle.FE == :STARLIGHT && @move == :METEORASSAULT) && !(attacker.crested == :CLAYDOL && [:HYPERBEAM, :PRISMATICLASER, :ETERNABEAM].include?(@move))
      attacker.effects[:HyperBeam] = 2
      attacker.currentMove = @move
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn. (Razor Wind)
################################################################################
class PokeBattle_Move_0C3 < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if [:CLOUDS, :SKY].include?(@battle.FE) || (Rejuv && @battle.FE == :GRASSY) || @battle.state.effects[:GRASSY] > 0
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Razor Wind charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} whipped up a whirlwind!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn. (Solar Beam / Solar Blade)
# Power halved in all weather except sunshine.  In sunshine, takes 1 turn instead.
################################################################################
class PokeBattle_Move_0C4 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if @battle.FE == :DARKCRYSTALCAVERN && @battle.pbWeather != :SUNNYDAY
      @battle.pbDisplay(_INTL("But it failed..."))
      attacker.effects[:TwoTurnAttack] = 0
      return false
    end
    return true
  end

  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if @battle.pbWeather == :SUNNYDAY && !attacker.hasWorkingItem(:UTILITYUMBRELLA)
      @immediate = true if @battle.FE == :RAINBOW
      @immediate = true if attacker.crested == :CLAYDOL && @move == :SOLARBEAM
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    if @battle.pbWeather != 0 && ![:SUNNYDAY, :STRONGWINDS].include?(@battle.pbWeather)
      return (damagemult * 0.5).round
    end
    return damagemult
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Solar Beam charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} took in sunlight!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.
# May paralyze the target. (Freeze Shock)
################################################################################
class PokeBattle_Move_0C5 < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if @battle.FE == :FROZENDIMENSION
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanParalyze?(false)

    opponent.pbParalyze(attacker)
    @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Freeze Shock charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} became cloaked in a freezing light!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.
# May burn the target. (Ice Burn)
################################################################################
class PokeBattle_Move_0C6 < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if @battle.FE == :FROZENDIMENSION
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanBurn?(false)

    opponent.pbBurn(attacker)
    @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Ice Burn charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} became cloaked in freezing air!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.
# May make the target flinch. (Sky Attack)
################################################################################
class PokeBattle_Move_0C7 < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if [:CLOUDS, :SKY].include?(@battle.FE)
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Sky Attack charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} is glowing!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Two turn attack.  Ups user's Defence by 1 stage first turn, attacks second turn. (Skull Bash)
################################################################################
class PokeBattle_Move_0C8 < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if attacker.effects[:TwoTurnAttack] != 0
      attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Skull Bash charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} lowered its head!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.  (Fly)
# (Handled in Battler's pbSuccessCheck):  Is semi-invulnerable during use.
################################################################################
class PokeBattle_Move_0C9 < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if [:CLOUDS, :CAVE, :SKY].include?(@battle.FE) || (Rejuv && @battle.FE == :DRAGONSDEN)
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Fly charging", attacker, nil)
      @battle.scene.pbVanishSprite(attacker)
      @battle.pbDisplay(_INTL("{1} flew up high!", attacker.pbThis))
      return
    else
      super
      @battle.scene.pbUnVanishSprite(attacker, false)
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.  (Dig)
# (Handled in Battler's pbSuccessCheck):  Is semi-invulnerable during use.
################################################################################
class PokeBattle_Move_0CA < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if Rejuv && @battle.FE == :DESERT
      @immediate = true if [:WATERSURFACE, :MURKWATERSURFACE].include?(@battle.FE) && self.pbType(attacker, self.type) == :GROUND # for move failure on these fields
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Dig charging", attacker, nil)
      @battle.scene.pbVanishSprite(attacker)
      @battle.scene.pbDisableShadowTemp(attacker)
      @battle.pbDisplay(_INTL("{1} burrowed its way under the ground!", attacker.pbThis))
    else
      @battle.scene.pbReAbleShadow(attacker)
      super
      @battle.scene.pbUnVanishSprite(attacker, false)
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.  (Dive)
# (Handled in Battler's pbSuccessCheck):  Is semi-invulnerable during use.
################################################################################
class PokeBattle_Move_0CB < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if [:WATERSURFACE, :UNDERWATER].include?(@battle.FE)
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if attacker.effects[:TwoTurnAttack] == 0
      @battle.field.counter = 3 if Rejuv && @battle.FE == :ICY
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      if Rejuv && @battle.FE == :ICY && [:WATERSURFACE, :MURKWATERSURFACE].include?(@battle.field.backup)
        @battle.pbAnimation(:SPLASH, attacker, opponent, hitnum)
        if attacker == @battle.battlers[0] || attacker == @battle.battlers[2]
          @battle.pbApplySceneBG("playerbase", "Graphics/Battlebacks/playerbaseWater.png")
        elsif attacker == @battle.battlers[1] || attacker == @battle.battlers[3]
          @battle.pbApplySceneBG("enemybase", "Graphics/Battlebacks/enemybaseWater.png")
        end
        @battle.pbDisplay(_INTL("{1} made a hole in the ice!", attacker.pbThis))
      end
      @battle.pbCommonAnimation("Dive charging", attacker, nil)
      @battle.scene.pbVanishSprite(attacker)
      @battle.scene.pbDisableShadowTemp(attacker)
      @battle.pbDisplay(_INTL("{1} hid underwater!", attacker.pbThis))
    else
      @battle.scene.pbReAbleShadow(attacker)
      super
      @battle.scene.pbUnVanishSprite(attacker, false)
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.  (Bounce)
# May paralyze the target.
# (Handled in Battler's pbSuccessCheck):  Is semi-invulnerable during use.
################################################################################
class PokeBattle_Move_0CC < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if [:CLOUDS, :CAVE, :SKY].include?(@battle.FE) || (Rejuv && @battle.FE == :DRAGONSDEN)
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanParalyze?(false)

    opponent.pbParalyze(attacker)
    @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Bounce charging", attacker, nil)
      @battle.scene.pbVanishSprite(attacker)
      @battle.pbDisplay(_INTL("{1} sprang up!", attacker.pbThis))
    else
      super
      @battle.scene.pbUnVanishSprite(attacker, false)
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.  (Shadow Force / Phantom Force)
# Is invulnerable during use.
# If successful, negates target's Detect and Protect this round.
################################################################################
class PokeBattle_Move_0CD < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if @battle.FE == :HAUNTED || @battle.ProgressiveFieldCheck(PBFields::DARKNESS, 2, 3)
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if attacker.effects[:TwoTurnAttack] == 0
      opponent.effects[:Protect] = false
      opponent.pbOwnSide.effects[:CraftyShield] = false
      opponent.pbOwnSide.effects[:WideGuard] = false
      opponent.pbOwnSide.effects[:QuickGuard] = false
      opponent.pbOwnSide.effects[:MatBlock] = false
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Shadow Force charging", attacker, nil)
      @battle.scene.pbVanishSprite(attacker)
      @battle.pbDisplay(_INTL("{1} vanished instantly!", attacker.pbThis))
    else
      super
      @battle.scene.pbUnVanishSprite(attacker, false)
    end
  end
end

################################################################################
# Two turn attack.  Skips first turn, attacks second turn.  (Sky Drop)
# (Handled in Battler's pbSuccessCheck):  Is semi-invulnerable during use.
# Target is also semi-invulnerable during use, and can't take any action.
# Doesn't damage airborne Pokémon (but still makes them unable to move during).
################################################################################
class PokeBattle_Move_0CE < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAccuracyCheck(attacker, opponent)
    return true if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.effects[:TwoTurnAttack] != 0
      weight = opponent.weight
      weight *= 2 if @battle.FE == :DEEPEARTH
      if weight >= 2000
        if showMessage
          @battle.pbDisplay(_INTL("The opposing {1} is too heavy to be lifted!", opponent.pbThis))
          attacker.effects[:TwoTurnAttack] = 0
          attacker.effects[:SkyDroppee] = nil
        end
        return false
      end
      if opponent.effects[:Substitute] > 0
        if showMessage
          @battle.pbDisplay(_INTL("But it failed!"))
          attacker.effects[:TwoTurnAttack] = 0
          attacker.effects[:SkyDroppee] = nil
        end
        return false
      end
    else
      if opponent.hasType?(:FLYING)
        if showMessage
          @battle.scene.pbUnVanishSprite(attacker)
          @battle.scene.pbUnVanishSprite(opponent)
          attacker.effects[:SkyDroppee]    = nil
          opponent.effects[:TwoTurnAttack] = 0
          opponent.effects[:SkyDrop]       = false
          @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis))
        end
        return false
      end
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    @battle.pbClearChoices(opponent.index)
    attacker.effects[:SkyDroppee] = opponent
    opponent.effects[:FollowMe] = false
    opponent.effects[:RagePowder] = false
    opponent.effects[:SkyDrop] = true
    return if attacker.effects[:TwoTurnAttack] != 0
    @battle.pbDisplay(_INTL("{1} was freed from the Sky Drop!", opponent.pbThis))
    opponent.effects[:SkyDrop] = false
    attacker.effects[:SkyDroppee] = nil
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Sky Drop charging", attacker, opponent)
      @battle.scene.pbVanishSprite(attacker)
      @battle.scene.pbVanishSprite(opponent)
      @battle.pbDisplay(_INTL("{1} took {2} into the sky!", attacker.pbThis, opponent.pbThis))
    else
      super
      @battle.scene.pbUnVanishSprite(attacker, false)
      @battle.scene.pbUnVanishSprite(opponent, false)
    end
  end
end

################################################################################
# Trapping move.  Traps for 4 or 5 rounds.  Trapped Pokémon lose 1/8 of max HP
# at end of each round. (Magma Storm / Fire Spin / Sand Tomb / Bind / Wrap / Clamp /
# Infestation / Snap Trap / Thunder Cage)
################################################################################
class PokeBattle_Move_0CF < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if opponent.isFainted? || opponent.damagestate.substitute || opponent.effects[:MultiTurn] != 0
    # Note: The amount of turns is intentionally 1 higher, otherwise it ends sooner than intended.
    opponent.effects[:MultiTurn] = 5 + @battle.pbRandom(2)
    opponent.effects[:MultiTurn] = 8 if attacker.hasWorkingItem(:GRIPCLAW)
    opponent.effects[:MultiTurnAttack] = @move
    opponent.effects[:MultiTurnUser] = attacker.index
    opponent.effects[:BindingBand] = attacker.hasWorkingItem(:BINDINGBAND)
    case @move
      when :BIND then @battle.pbDisplay(_INTL("{1} was squeezed by {2}!", opponent.pbThis, attacker.pbThis(true)))
      when :CLAMP then @battle.pbDisplay(_INTL("{1} clamped {2}!", attacker.pbThis, opponent.pbThis(true)))
      when :FIRESPIN then @battle.pbDisplay(_INTL("{1} became trapped in the fiery vortex!", opponent.pbThis))
      when :MAGMASTORM, :SANDTOMB then @battle.pbDisplay(_INTL("{1} was trapped by {2}!", opponent.pbThis, @name))
      when :WRAP then @battle.pbDisplay(_INTL("{1} was wrapped by {2}!", opponent.pbThis, attacker.pbThis(true)))
      when :INFESTATION then @battle.pbDisplay(_INTL("{1} has been afflicted with an infestation by {2}!", opponent.pbThis, attacker.pbThis(true)))
      else
        @battle.pbDisplay(_INTL("{1} trapped {2}!", attacker.pbThis, opponent.pbThis(true)))
    end
  end
end

################################################################################
# Trapping move- Whirlpool specific.  Traps for 4 or 5 rounds.  Trapped Pokémon lose 1/8 of max HP
# at end of each round. (Whirlpool)
# Power is doubled if target is using Dive.
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_0D0 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if opponent.isFainted? || opponent.damagestate.substitute || opponent.effects[:MultiTurn] != 0
    # Note: The amount of turns is intentionally 1 higher, otherwise it ends sooner than intended.
    opponent.effects[:MultiTurn] = 5 + @battle.pbRandom(2)
    opponent.effects[:MultiTurn] = 8 if attacker.hasWorkingItem(:GRIPCLAW)
    opponent.effects[:MultiTurnAttack] = @move
    opponent.effects[:MultiTurnUser] = attacker.index
    opponent.effects[:BindingBand] = attacker.hasWorkingItem(:BINDINGBAND)
    @battle.pbDisplay(_INTL("{1} was trapped in the vortex!", opponent.pbThis))
    if (!Rejuv && @battle.FE == :WATERSURFACE) || @battle.FE == :UNDERWATER
      if opponent.pbCanConfuse?(false, inflictor: attacker)
        opponent.pbConfuse
        @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
      end
    end
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if !$cache.moves[opponent.effects[:TwoTurnAttack]].nil? &&
                         $cache.moves[opponent.effects[:TwoTurnAttack]].function == 0xCB # Dive
    return damagemult
  end
end

################################################################################
# User must use this move for 2 more rounds.  No battlers can sleep. (Uproar)
################################################################################
class PokeBattle_Move_0D1 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if attacker.effects[:Uproar] == 0
      attacker.effects[:Uproar] = 3
      @battle.pbDisplay(_INTL("{1} caused an uproar!", attacker.pbThis))
      attacker.currentMove = @move
    end
  end
end

################################################################################
# User must use this move for 1 or 2 more rounds.  At end, user becomes confused.
# (Outrage / Petal Dance / Thrash / Raging Fury)
################################################################################
class PokeBattle_Move_0D2 < PokeBattle_Move
  def pbEffectAfterMove(attacker, alltargets, hitflags)
    if attacker.effects[:Outrage] == 0 && !attacker.sleeptalkUsed # Outrage isn't locked in if it is called via sleep talk
      attacker.effects[:Outrage] = 2 + @battle.pbRandom(2)
      attacker.effects[:Outrage] = 1 if [:SUPERHEATED, :VOLCANICTOP].include?(@battle.FE)
      attacker.currentMove = @move
    end
    if attacker.effects[:Outrage] > 0
      attacker.effects[:Outrage] -= 1
      if attacker.effects[:Outrage] == 0 && attacker.pbCanConfuseSelf?(false) && !([:VOLCANIC, :VOLCANICTOP].include?(@battle.FE) && @move == :RAGINGFURY)
        attacker.pbConfuse
        @battle.pbDisplay(_INTL("{1} became confused due to fatigue!", attacker.pbThis))
      end
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :RAGINGFURY
      @battle.pbAnimation(:OUTRAGE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# User must use this move for 4 more rounds.  Power doubles each round.
# Power is also doubled if user has curled up. (Rollout / Ice Ball)
################################################################################
class PokeBattle_Move_0D3 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    shift = (4 - attacker.effects[:Rollout]) # from 0 through 4, 0 is most powerful
    shift += 1 if attacker.effects[:DefenseCurl]
    basedmg = basedmg << shift
    return basedmg
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if attacker.sleeptalkUsed # Rollout isn't locked in if it is called via sleep talk
    attacker.effects[:Rollout] = 5 if attacker.effects[:Rollout] == 0
    attacker.effects[:Rollout] -= 1
    attacker.currentMove = basemove.move
  end
end

################################################################################
# User bides its time this round and next round.  The round after, deals 2x the
# total damage it took while biding to the last battler that damaged it. (Bide)
################################################################################
class PokeBattle_Move_0D4 < PokeBattle_Move
  def pbDisplayUseMessage(attacker, choice)
    if attacker.effects[:Bide] == 0
      @battle.pbDisplayBrief(_INTL("{1} used\r\n{2}!", attacker.pbThis, getMoveUseName))
      attacker.effects[:Bide] = 2
      attacker.effects[:BideDamage] = 0
      attacker.effects[:BideTarget] = -1
      attacker.currentMove = @move
      @battle.pbCommonAnimation("Bide", attacker, nil)
      return 1
    else
      attacker.effects[:Bide] -= 1
      if attacker.effects[:Bide] == 0
        @battle.pbDisplayBrief(_INTL("{1} unleashed energy!", attacker.pbThis))
        return 0
      else
        @battle.pbDisplayBrief(_INTL("{1} is storing energy!", attacker.pbThis))
        @battle.pbCommonAnimation("Bide", attacker, nil)
        return 2
      end
    end
  end

  def pbAddTarget(targets, target, attacker)
    if attacker.effects[:BideTarget] >= 0 &&
       !super(targets, @battle.battlers[attacker.effects[:BideTarget]], attacker)
      attacker.pbRandomTarget(targets, self)
    end
  end

  def pbOnStartUse(attacker, targets)
    if attacker.effects[:BideDamage] == 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return attacker.effects[:BideDamage] * 2
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:BideDamage] = 0
  end
end

################################################################################
# Heals user by 1/2 of its max HP. (Heal Order / Milk Drink / recover / Slack Off / Soft-Boiled)
################################################################################
class PokeBattle_Move_0D5 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true unless attacker.hp == attacker.totalhp

    @battle.pbDisplay(_INTL("{1}'s HP is full!", attacker.pbThis)) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.FE == :FOREST && @move == :HEALORDER
      attacker.pbRecoverHP([(attacker.totalhp * 0.66).floor, 1].max, true)
    else
      attacker.pbRecoverHP([(attacker.totalhp / 2).floor, 1].max, true)
    end
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis))
  end
end

################################################################################
# Heals user by 1/2 of its max HP. (Roost)
# User roosts, and its Flying type is ignored for attacks used against it.
################################################################################
class PokeBattle_Move_0D6 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true unless attacker.hp == attacker.totalhp

    @battle.pbDisplay(_INTL("{1}'s HP is full!", attacker.pbThis)) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbRecoverHP([(attacker.totalhp / 2).floor, 1].max, true)
    attacker.effects[:Roost] = true
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis))
  end
end

################################################################################
# Battler in user's position is healed by 1/2 of its max HP, at the end of the
# next round. (Wish)
################################################################################
class PokeBattle_Move_0D7 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true unless attacker.effects[:Wish] > 0

    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Wish] = 2
    if [:MISTY, :RAINBOW, :HOLY, :FAIRYTALE, :STARLIGHT].include?(@battle.FE)
      attacker.effects[:WishAmount] = [(attacker.totalhp * 0.75).floor, 1].max
    else
      attacker.effects[:WishAmount] = [(attacker.totalhp / 2).floor, 1].max
    end
    attacker.effects[:WishMaker] = attacker.pokemonIndex
    if @battle.FE == :DARKNESS1
      attacker.pbRecoverHP(attacker.effects[:WishAmount], true)
      attacker.effects[:Wish] = 0
    end
  end
end

################################################################################
# Heals user by an amount depending on the weather. (Synthesis / Moonlight / Morning Sun)
################################################################################
class PokeBattle_Move_0D8 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true unless attacker.hp == attacker.totalhp

    @battle.pbDisplay(_INTL("{1}'s HP is full!", attacker.pbThis)) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    hpgain = 0
    if ([:DARKCRYSTALCAVERN, :STARLIGHT, :NEWWORLD, :BEWITCHED].include?(@battle.FE) && @move == :MOONLIGHT) || (Rejuv && @battle.FE == :GRASSY && @move == :SYNTHESIS)
      hpgain = (attacker.totalhp * 3 / 4.0).floor
    elsif @battle.FE == :DARKNESS1 && @move == :MOONLIGHT
      hpgain = (attacker.totalhp * 0.4).floor
    elsif [:DARKCRYSTALCAVERN, :DARKNESS2].include?(@battle.FE) && @move != :MOONLIGHT
      hpgain = (attacker.totalhp / 4.0).floor
    elsif @battle.FE == :DARKNESS3 && @move != :MOONLIGHT
      hpgain = (attacker.totalhp / 8.0).floor
    else
      if @battle.pbWeather == :SUNNYDAY && !attacker.hasWorkingItem(:UTILITYUMBRELLA)
        hpgain = (attacker.totalhp * 2 / 3.0).floor
      elsif @battle.pbWeather != 0 && !attacker.hasWorkingItem(:UTILITYUMBRELLA)
        hpgain = (attacker.totalhp / 4.0).floor
      else
        hpgain = (attacker.totalhp / 2.0).floor
      end
    end
    attacker.pbRecoverHP(hpgain, true)
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis))
  end
end

################################################################################
# Heals user to full HP.  User falls asleep for 2 more rounds. (Rest)
################################################################################
class PokeBattle_Move_0D9 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.status == :SLEEP && attacker.sleeptalkUsed && Rejuv && @battle.FE == :GLITCH
    # @battle.pbDisplay(_INTL("Stall is pure!"))
    elsif attacker.status == :SLEEP || (attacker.ability == :COMATOSE && @battle.FE != :ELECTERRAIN)
      @battle.pbDisplay(_INTL("{1} is already asleep!", attacker.pbThis))
      return false
    end
    if attacker.hp == attacker.totalhp
      @battle.pbDisplay(_INTL("{1}'s HP is full!", attacker.pbThis))
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    for i in 0...4
      if @battle.battlers[i].effects[:Uproar] > 0 # May want cartridge testing with attacker having Soundproof ability
        @battle.pbDisplay(_INTL("But the uproar kept {1} awake!", attacker.pbThis(true))) if showMessage
        return false
      end
    end
    if (@battle.FE == :ELECTERRAIN || @battle.state.effects[:ELECTERRAIN] > 0) && !attacker.isAirborne?
      @battle.pbDisplay(_INTL("{1} is protected by the Electric Terrain!", attacker.pbThis)) if showMessage
      return false
    end
    if (@battle.FE == :MISTY || @battle.state.effects[:MISTY] > 0) && !attacker.isAirborne?
      @battle.pbDisplay(_INTL("{1} surrounds itself with a protective mist!", attacker.pbThis)) if showMessage
      return false
    end
    if attacker.ability == :SWEETVEIL || (attacker.pbPartner.ability == :SWEETVEIL && !attacker.pbPartner.moldbroken)
      @battle.pbDisplay(_INTL("{1} is protected by Sweet Veil!", attacker.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.ProgressiveFieldCheck(PBFields::DARKNESS, 2, 3)
      attacker.pbSleepSelf(4)
    elsif @battle.FE == :CROWD
      attacker.pbSleepSelf(1)
    else
      attacker.pbSleepSelf(3)
    end
    @battle.pbDisplay(_INTL("{1} slept and became healthy!", attacker.pbThis))
    hp = attacker.pbRecoverHP(attacker.totalhp - attacker.hp, true)
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis)) if hp > 0
  end
end

################################################################################
# Rings the user.  Ringed Pokémon gain 1/16 of max HP at the end of each round. (Aqua Ring)
################################################################################
class PokeBattle_Move_0DA < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.effects[:AquaRing]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:AquaRing] = true
    @battle.pbDisplay(_INTL("{1} surrounded itself with a veil of water!", attacker.pbThis))
  end
end

################################################################################
# Ingrains the user.  Ingrained Pokémon gain 1/16 of max HP at the end of each
# round, and cannot flee or switch out. (Ingrain)
################################################################################
class PokeBattle_Move_0DB < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.effects[:Ingrain]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Ingrain] = true
    @battle.pbDisplay(_INTL("{1} planted its roots!", attacker.pbThis))
  end
end

################################################################################
# Seeds the target.  Seeded Pokémon lose 1/8 of max HP at the end of each
# round, and the Pokémon in the user's position gains the same amount. (Leech Seed)
################################################################################
class PokeBattle_Move_0DC < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:LeechSeed] >= 0
      @battle.pbDisplay(_INTL("{1} evaded the attack!", opponent.pbThis)) if showMessage
      return false
    end
    if opponent.hasType?(:GRASS)
      @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis(true))) if showMessage
      return false
    end
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:LeechSeed] = attacker.index
    @battle.pbDisplay(_INTL("{1} was seeded!", opponent.pbThis))
  end
end

################################################################################
# User gains half the HP it inflicts as damage. (Leech Life / Drain Punch / Giga Drain /
# Horn Leech / Mega Drain / Absorb / Parabolic Charge)
################################################################################
class PokeBattle_Move_0DD < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    damage = opponent.lastHPLost
    if damage > 0 && !opponent.damagestate.disguise
      hpgain = [(damage / 2).floor, 1].max
      hpgain = [(damage * 3 / 4).floor, 1].max if Rejuv && @battle.FE == :ELECTERRAIN && @move == :PARABOLICCHARGE
      hpgain = [(damage * 3 / 4).floor, 1].max if Rejuv && @battle.FE == :GRASSY && [:ABSORB, :MEGADRAIN, :GIGADRAIN, :HORNLEECH].include?(@move)
      if opponent.ability == :LIQUIDOOZE
        hpgain *= 2 if [:WASTELAND, :MURKWATERSURFACE, :CORRUPTED].include?(@battle.FE)
        if attacker.ability != :MAGICGUARD && !(attacker.ability == :WONDERGUARD && @battle.FE == :COLOSSEUM)
          attacker.pbReduceHP(hpgain, true)
          @battle.pbDisplay(_INTL("{1} sucked up the liquid ooze!", attacker.pbThis))
        end
      else
        if Rejuv && @battle.FE == :GRASSY
          hpgain = (hpgain * 1.6).floor if attacker.hasWorkingItem(:BIGROOT)
        else
          hpgain = (hpgain * 1.3).floor if attacker.hasWorkingItem(:BIGROOT)
        end
        hpgain = (hpgain * 1.3).floor if attacker.crested == :SHIINOTIC
        attacker.pbRecoverHP(hpgain, true)
        @battle.pbDisplay(_INTL("{1} had its energy drained!", opponent.pbThis))
      end
      if Rejuv && @battle.FE == :SWAMP
        stat = @battle.sample([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED])
        opponent.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
      end
    end
  end
end

################################################################################
# User gains half the HP it inflicts as damage. (Dream Eater)
# (Handled in Battler's pbSuccessCheck): Fails if target is not asleep.
################################################################################
class PokeBattle_Move_0DE < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.status != :SLEEP && (opponent.ability != :COMATOSE || @battle.FE == :ELECTERRAIN) && attacker.ability != :WORLDOFNIGHTMARES
      @battle.pbDisplay(_INTL("{1} wasn't affected!", target.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    damage = opponent.lastHPLost
    if damage > 0 && !opponent.damagestate.disguise
      hpgain = [(damage / 2).floor, 1].max
      if Rejuv && @battle.FE == :GRASSY
        hpgain = (hpgain * 1.6).floor if attacker.hasWorkingItem(:BIGROOT)
      else
        hpgain = (hpgain * 1.3).floor if attacker.hasWorkingItem(:BIGROOT)
      end
      hpgain = (hpgain * 1.3).floor if attacker.crested == :SHIINOTIC
      attacker.pbRecoverHP(hpgain, true)
      @battle.pbDisplay(_INTL("{1} had its energy drained!", opponent.pbThis))
    end
  end
end

################################################################################
# Heals target by 1/2 of its max HP. (Heal Pulse)
################################################################################
class PokeBattle_Move_0DF < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:HealBlock] > 0
      @battle.pbDisplay(_INTL("{1} was prevented from healing!", opponent.pbThis)) if showMessage
      return false
    end
    if opponent.hp == opponent.totalhp
      @battle.pbDisplay(_INTL("{1}'s HP is full!", opponent.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    hpgain = [(opponent.totalhp / 2).floor, 1].max
    if attacker.ability == :MEGALAUNCHER
      hpgain = [(opponent.totalhp * 0.75).floor, 1].max
    end
    opponent.pbRecoverHP(hpgain, true)
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", opponent.pbThis))
  end
end

################################################################################
# User faints. (Explosion / Self-Destruct / Misty Explosion)
################################################################################
class PokeBattle_Move_0E0 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    bearer = @battle.pbCheckGlobalAbility(:DAMP)
    if bearer && !bearer.moldbroken
      @battle.pbDisplay(_INTL("{1}'s {2} prevents {3} from using {4}!", bearer.pbThis, getAbilityName(bearer.ability), attacker.pbThis(true), @name))
      return false
    end
    return true
  end

  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 1.5 if @move == :MISTYEXPLOSION && (@battle.FE == :MISTY || @battle.state.effects[:MISTY] > 0) && !attacker.isAirborne?
    return damagemult
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    super
    attacker.pbReduceHP(attacker.hp)
  end
end

################################################################################
# Inflicts fixed damage equal to user's current HP.
# User faints (if successful). (Final Gambit)
################################################################################
class PokeBattle_Move_0E1 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceHP(attacker.hp)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return attacker.hp
  end
end

################################################################################
# Decreases the target's Attack and Special Attack by 2 stages each.
# User faints (even if effect does nothing). (Memento)
################################################################################
class PokeBattle_Move_0E2 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.pbCanReduceAnyStat?([PBStats::ATTACK, PBStats::SPATK], true)
      opponent.pbReduceStat(PBStats::ATTACK, 2, abilitymessage: false, statdropper: attacker)
      opponent.pbReduceStat(PBStats::SPATK, 2, abilitymessage: false, statdropper: attacker)
    end
    # User still faints even if the stat reduction is prevented by Mist or an ability.
    attacker.pbReduceHP(attacker.hp)
  end
end

################################################################################
# User faints.  The Pokémon that replaces the user is fully healed (HP and
# status).  Fails if user won't be replaced. (Healing Wish)
################################################################################
class PokeBattle_Move_0E3 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if !@battle.pbCanChooseNonActive?(attacker.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceHP(attacker.hp)
    attacker.effects[:HealingWish] = true
    attacker.pbFaint if attacker.isFainted?
  end
end

################################################################################
# User faints.  The Pokémon that replaces the user is fully healed (HP, PP and
# status).  Fails if user won't be replaced. (Lunar Dance)
################################################################################
class PokeBattle_Move_0E4 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if !@battle.pbCanChooseNonActive?(attacker.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceHP(attacker.hp)
    attacker.effects[:LunarDance] = true
    attacker.pbFaint if attacker.isFainted?
  end
end

################################################################################
# All current battlers will perish after 3 more rounds. (Perish Song)
################################################################################
class PokeBattle_Move_0E5 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:PerishSong] > 0
      @battle.pbDisplay(_INTL("{1} wasn't affected!", target.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.pbDisplay(_INTL("All Pokémon hearing the song will faint in three turns!"))
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:PerishSong] = 4
    opponent.effects[:PerishSongUser] = attacker.index
  end
end

################################################################################
# If user is KO'd before it next moves, the attack that caused it loses all PP. (Grudge)
################################################################################
class PokeBattle_Move_0E6 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Grudge] = true
    @battle.pbDisplay(_INTL("{1} wants its target to bear a grudge!", attacker.pbThis))
  end
end

################################################################################
# If user is KO'd before it next moves, the battler that caused it also faints. (Destiny Bond)
################################################################################
class PokeBattle_Move_0E7 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.previousMove == :DESTINYBOND && attacker.effects[:DestinyRate] == true && @battle.FE != :HAUNTED
      attacker.effects[:DestinyRate] = false
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    else
      attacker.effects[:DestinyRate] = true
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:DestinyBond] = true
    @battle.pbDisplay(_INTL("{1} is trying to take its foe down with it!", attacker.pbThis))
  end
end

################################################################################
# If user would be KO'd this round, it survives with 1HP instead. (Endure)
################################################################################
class PokeBattle_Move_0E8 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if @battle.pbRandom(3 ** attacker.effects[:ProtectRate]) != 0
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Endure] = true
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} braced itself!", attacker.pbThis))
  end
end

################################################################################
# If target would be KO'd by this attack, it survives with 1HP instead. (False Swipe)
################################################################################
class PokeBattle_Move_0E9 < PokeBattle_Move
  # Handled in superclass, do not edit!
end

################################################################################
# User flees from battle.  Fails in trainer battles. (Gen 7 Teleport)
################################################################################
class PokeBattle_Move_0EA < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.opponent || !@battle.pbCanRun?(attacker.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    pbSEPlay("escape", 100)
    @battle.pbDisplay(_INTL("{1} fled from battle!", attacker.pbThis))
    @battle.decision = 3
  end
end

################################################################################
# Target flees from battle. In trainer battles, target switches out instead.
# Fails if target is a higher level than the user. For status moves. (Roar / Whirlwind)
################################################################################
class PokeBattle_Move_0EB < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if @move == :ROAR && @battle.FE == :SWAMP
      @battle.pbDisplay(_INTL("What are ya doin' in my swamp?!"))
    end
    super
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if @move == :ROAR
      if @battle.FE == :COLOSSEUM
        return attacker.pbCanIncreaseStatStage?(PBStats::ATTACK, showMessage)
      end
      if @battle.ProgressiveFieldCheck(PBFields::CONCERT)
        # Roar on Concert field succeeds if either the attack increase can happen or the opponent can be switched out
        if attacker.pbCanIncreaseStatStage?(PBStats::ATTACK, showMessage)
          return true
        end
      end
    end
    return attacker.canForceSwitchOpponent?(opponent, showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @move == :ROAR && (@battle.FE == :COLOSSEUM || @battle.ProgressiveFieldCheck(PBFields::CONCERT))
      attacker.pbIncreaseStat(PBStats::ATTACK, 2, abilitymessage: false, statsource: attacker)
    end
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if @move == :ROAR
      if @battle.FE == :COLOSSEUM
        @battle.pbDisplay(_INTL("{1} stands their ground in the arena!!", opponent.pbThis))
        return
      end
      if @battle.ProgressiveFieldCheck(PBFields::CONCERT)
        return unless canForceSwitchOpponent?(attacker, opponent, true)
      end
    end
    if !@battle.opponent && !@battle.battlers.any? { |battler| battler.isbossmon } && !@battle.doublebattle
      @battle.decision = 3 # Set decision to escaped
    else
      opponent.forcedSwitch = true
    end
  end
end

################################################################################
# Target flees from battle.  In trainer battles, target switches out instead.
# Fails if target is a higher level than the user.  For damaging moves. (Dragon Tail / Circle Throw)
################################################################################
class PokeBattle_Move_0EC < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    @battle.pbCommonAnimation("Fade in", opponent, nil) if hitnum > 0
    opponent.vanished = true
    super
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if !attacker.isFainted? && !opponent.isFainted? &&
       !opponent.damagestate.substitute &&
       attacker.canForceSwitchOpponent?(opponent) &&
       @battle.FE != :COLOSSEUM
      if !@battle.opponent
        @battle.decision = 3
      else
        opponent.forcedSwitch = true
      end
    else
      opponent.vanished = false
      @battle.pbCommonAnimation("Fade in", opponent, nil)
    end
  end
end

################################################################################
# User switches out.  Various effects affecting the user are passed to the
# replacement. (Baton Pass)
################################################################################
class PokeBattle_Move_0ED < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if !@battle.pbCanChooseNonActive?(attacker.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.neutralizingGasDisable(attacker.index) if attacker.ability == :NEUTRALIZINGGAS
    newpoke = @battle.pbSwitchInBetween(attacker.index, true, false)
    @battle.pbMessagesOnReplace(attacker.index, newpoke)
    attacker.pbResetForm
    @battle.pbReplace(attacker.index, newpoke, true)
    @battle.pbOnActiveOne(attacker)
    attacker.pbAbilitiesOnSwitchIn(true)
  end
end

################################################################################
# After inflicting damage, user switches out. Ignores trapping moves.
# (U-turn, Volt Switch, Flip Turn)
################################################################################
class PokeBattle_Move_0EE < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    @battle.pbCommonAnimation("Fade in", attacker, nil) if hitnum > 0
    attacker.vanished = true
    super
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if !attacker.isFainted? && @battle.pbCanChooseNonActive?(attacker.index) && @battle.FE != :COLOSSEUM
      attacker.userSwitch = true
    else
      attacker.vanished = false
      @battle.pbCommonAnimation("Fade in", attacker, nil)
    end
  end
end

################################################################################
# Target can no longer switch out or flee, as long as the user remains active.
# (Spider Web / Block / Mean Look)
################################################################################
class PokeBattle_Move_0EF < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.hasType?(:GHOST)
      @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis(true))) if showMessage
      return false
    end
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:MeanLook] >= 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:MeanLook] = attacker.index
    @battle.pbDisplay(_INTL("{1} can't escape now!", opponent.pbThis))
    if @move == :BLOCK && @battle.FE == :CROWD
      if opponent.pbReduceStat(PBStats::SPEED, 1, statdropper: attacker)
        @battle.pbDisplay(_INTL("{1} got caught in a lock!", opponent.pbThis))
      end
    end
    if Rejuv && @move == :SPIDERWEB && @battle.FE == :SWAMP
      opponent.effects[:SwampWeb] = true
    end
  end
end

################################################################################
# Target drops its item.  It regains the item at the end of the battle. (Knock Off)
################################################################################
class PokeBattle_Move_0F0 < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 1.5 if !opponent.item.nil? && !@battle.pbIsUnlosableItem(opponent, opponent.item)
    return damagemult
  end

  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
    return if opponent.item.nil?
    return if @battle.pbIsUnlosableItem(opponent, opponent.item)
    return if opponent.damagestate.substitute
    if opponent.ability == :STICKYHOLD && !opponent.moldbroken
      abilityname = getAbilityName(opponent.ability)
      @battle.pbDisplay(_INTL("{1}'s {2} made {3} ineffective!", opponent.pbThis, abilityname, @name))
      return
    end
    opponent.effects[:ChoiceBand] = nil
    # Knocking of the item
    itemname = getItemName(opponent.item)
    opponent.item = nil
    opponent.pokemon.corrosiveGas = false
    @battle.pbDisplay(_INTL("{1} knocked off {2}'s {3}!", attacker.pbThis, opponent.pbThis(true), itemname))
  end
end

################################################################################
# User steals the target's item, if the user has none itself. (Thief / Covet)
# Items stolen from wild Pokémon are kept after the battle.
################################################################################
class PokeBattle_Move_0F1 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg if @battle.FE != :BACKALLEY
    return basedmg if opponent.effects[:Substitute] > 0 || opponent.item.nil? || !attacker.item.nil?
    return basedmg if opponent.ability == :STICKYHOLD && !opponent.moldbroken
    return basedmg if @battle.pbIsUnlosableItem(opponent, opponent.item) || @battle.pbIsUnlosableItem(attacker, opponent.item)

    return basedmg * 2
  end

  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
    return unless attacker.item.nil?
    return if opponent.item.nil?
    return if @battle.pbIsUnlosableItem(opponent, opponent.item)
    return if @battle.pbIsUnlosableItem(attacker, opponent.item)
    return if opponent.damagestate.substitute
    if opponent.ability == :STICKYHOLD && !opponent.moldbroken
      abilityname = getAbilityName(opponent.ability)
      @battle.pbDisplay(_INTL("{1}'s {2} made {3} ineffective!", opponent.pbThis, abilityname, @name))
      return
    end
    itemname = getItemName(opponent.item)
    attacker.item = opponent.item
    opponent.item = nil
    if opponent.pokemon.corrosiveGas
      opponent.pokemon.corrosiveGas = false
      attacker.pokemon.corrosiveGas = true
    end
    opponent.effects[:ChoiceBand] = nil
    # In a wild battle
    if !(@battle.opponent || @battle.battlers.any? { |battler| battler.isbossmon }) && attacker.pokemon.itemInitial.nil? && opponent != attacker.pbPartner && opponent.pokemon.itemInitial == attacker.item
      attacker.pokemon.itemInitial = attacker.item
      attacker.pokemon.itemReallyInitialHonestlyIMeanItThisTime = attacker.item
      opponent.pokemon.itemInitial = nil
    end
    if @move == :THIEF
      @battle.pbCommonAnimation("Thief", attacker, opponent)
    else
      @battle.pbCommonAnimation("Covet", attacker, opponent)
    end
    @battle.pbDisplay(_INTL("{1} stole {2}'s {3}!", attacker.pbThis, opponent.pbThis(true), itemname))
  end
end

################################################################################
# User and target swap items.  They remain swapped after the battle. (Trick / Switcheroo)
################################################################################
class PokeBattle_Move_0F2 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if (attacker.item.nil? && opponent.item.nil?) ||
       (!@battle.opponent && @battle.pbIsOpposing?(attacker.index))
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if @battle.pbIsUnlosableItem(opponent, opponent.item) ||
       @battle.pbIsUnlosableItem(attacker, opponent.item) ||
       @battle.pbIsUnlosableItem(opponent, attacker.item) ||
       @battle.pbIsUnlosableItem(attacker, attacker.item)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if opponent.ability == :STICKYHOLD && !opponent.moldbroken
      abilityname = getAbilityName(opponent.ability)
      @battle.pbDisplay(_INTL("{1}'s {2} made {3} ineffective!", opponent.pbThis, abilityname, name)) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    oldattitem = attacker.item
    oldoppitem = opponent.item
    oldattitemname = getItemName(oldattitem) if oldattitem
    oldoppitemname = getItemName(oldoppitem) if oldoppitem
    attacker.item, opponent.item = opponent.item, attacker.item
    attacker.pokemon.corrosiveGas = opponent.pokemon.corrosiveGas
    if !@battle.opponent && # In a wild battle
       attacker.pokemon.itemInitial == oldattitem &&
       opponent.pokemon.itemInitial == oldoppitem && !opponent.isbossmon && !attacker.isbossmon
      attacker.pokemon.itemInitial = oldoppitem
      attacker.pokemon.itemReallyInitialHonestlyIMeanItThisTime = oldoppitem
      opponent.pokemon.itemInitial = oldattitem
      opponent.pokemon.itemReallyInitialHonestlyIMeanItThisTime = oldattitem
    end
    @battle.pbDisplay(_INTL("{1} switched items with its opponent!", attacker.pbThis))
    @battle.pbDisplay(_INTL("{1} obtained {2}.", attacker.pbThis, oldoppitemname)) if oldoppitem
    @battle.pbDisplay(_INTL("{1} obtained {2}.", opponent.pbThis, oldattitemname)) if oldattitem
    attacker.effects[:ChoiceBand] = nil
    opponent.effects[:ChoiceBand] = nil
    if @battle.FE == :BACKALLEY
      if @move == :TRICK
        attacker.pbIncreaseStat(PBStats::SPATK, 1, abilitymessage: false, statsource: attacker)
        opponent.pbReduceStat(PBStats::SPATK, 1, abilitymessage: false, statdropper: attacker)
      elsif @move == :SWITCHEROO
        attacker.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: false, statsource: attacker)
        opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
      end
    end
  end
end

################################################################################
# User gives its item to the target.  The item remains given after the battle. (Bestow)
################################################################################
class PokeBattle_Move_0F3 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if attacker.item.nil? || !opponent.item.nil?
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if @battle.pbIsUnlosableItem(attacker, attacker.item) ||
       @battle.pbIsUnlosableItem(opponent, attacker.item)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    itemname = getItemName(attacker.item)
    opponent.item = attacker.item
    attacker.item = nil
    if attacker.pokemon.corrosiveGas
      attacker.pokemon.corrosiveGas = false
      opponent.pokemon.corrosiveGas = true
    end
    attacker.effects[:ChoiceBand] = nil
    if !@battle.opponent && # In a wild battle
       opponent.pokemon.itemInitial.nil? &&
       attacker.pokemon.itemInitial == opponent.item && !opponent.isbossmon
      opponent.pokemon.itemInitial = opponent.item
      opponent.pokemon.itemReallyInitialHonestlyIMeanItThisTime = opponent.item
      attacker.pokemon.itemInitial = nil
    end
    @battle.pbDisplay(_INTL("{1} received {2} from {3}!", opponent.pbThis, itemname, attacker.pbThis(true)))
  end
end

################################################################################
# User consumes target's berry and gains its effect. (Bug Bite / Pluck)
################################################################################
class PokeBattle_Move_0F4 < PokeBattle_Move
  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
    return if opponent.item.nil?
    return if !pbIsBerry?(opponent.item)
    return if opponent.pokemon.corrosiveGas
    return if opponent.damagestate.substitute
    if opponent.ability == :STICKYHOLD && !opponent.moldbroken
      @battle.pbDisplay(_INTL("{1}'s {2} made {3} ineffective!", opponent.pbThis, getAbilityName(opponent.ability), @name))
      return
    end
    item = opponent.item
    opponent.item = nil
    opponent.pokemon.itemInitial = nil if opponent.pokemon.itemInitial == item
    @battle.pbDisplay(_INTL("{1} stole and ate its target's {2}!", attacker.pbThis, getItemName(item)))
    if attacker.ability != :KLUTZ && attacker.effects[:Embargo] == 0
      # Get berry's effect here
      attacker.pbUseBerry(item, true)
    end
  end
end

################################################################################
# Target's berry is destroyed. (Incinerate)
################################################################################
class PokeBattle_Move_0F5 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if opponent.item.nil?
    return if !pbIsBerry?(opponent.item) && !pbIsTypeGem?(opponent.item)
    return if opponent.pokemon.corrosiveGas
    return if opponent.damagestate.substitute
    if opponent.ability == :STICKYHOLD && !opponent.moldbroken
      @battle.pbDisplay(_INTL("{1}'s {2} made {3} ineffective!", opponent.pbThis, getAbilityName(opponent.ability), @name))
      return
    end
    item = opponent.item
    opponent.item = nil
    opponent.pokemon.itemInitial = nil if opponent.pokemon.itemInitial == item
    @battle.pbDisplay(_INTL("{1}'s {2} was incinerated!", opponent.pbThis, getItemName(item)))
  end
end

################################################################################
# User recovers the last item it held and consumed. (Recycle)
################################################################################
class PokeBattle_Move_0F6 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.pokemon.itemRecycle.nil? || attacker.item
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    item = attacker.pokemon.itemRecycle
    attacker.item = item
    attacker.pokemon.itemInitial = item if (attacker.pokemon.itemInitial.nil? && item == attacker.pokemon.itemReallyInitialHonestlyIMeanItThisTime)
    attacker.pokemon.itemRecycle = nil
    @battle.pbDisplay(_INTL("{1} found one {2}!", attacker.pbThis, getItemName(item)))
    if @battle.FE == :CITY
      statgain = false
      stat = @battle.sample([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED])
      if attacker.pbIncreaseStat(stat, 1, statsource: attacker)
        statgain = true
      end
      @battle.pbDisplay(_INTL("Reduce, reuse, recycle!")) if statgain
    end
  end
end

################################################################################
# User flings its item at the target.  Power and effect depend on the item. (Fling)
################################################################################
class PokeBattle_Move_0F7 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.item.nil? || @battle.pbIsUnlosableItem(attacker, attacker.item) || pbIsPokeBall?(attacker.item) ||
       attacker.ability == :KLUTZ || attacker.effects[:Embargo] > 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 130 if @battle.FE == :CONCERT4
    return PBStuff::FLINGDAMAGE[attacker.item] if PBStuff::FLINGDAMAGE[attacker.item]
    return 10 if !attacker.item.nil? && pbIsBerry?(attacker.item)
    return 1
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    @battle.pbDisplay(_INTL("{1} flung its {2}!", attacker.pbThis, getItemName(attacker.item)))
    if !opponent.damagestate.substitute && (opponent.ability != :SHIELDDUST || opponent.moldbroken)
      if @item.pbGetPocket(attacker.item) == 5
        @battle.pbDisplay(_INTL("{1} ate the {2}!", opponent.pbThis, getItemName(attacker.item)))
        opponent.pbUseBerry(attacker.item, true)
      end
      if attacker.hasWorkingItem(:FLAMEORB)
        if opponent.pbCanBurn?(false)
          opponent.pbBurn(attacker)
          @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
        end
      elsif attacker.hasWorkingItem(:KINGSROCK) ||
            attacker.hasWorkingItem(:RAZORFANG)
        if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
          opponent.effects[:Flinch] = true
        end
      elsif attacker.hasWorkingItem(:LIGHTBALL)
        if opponent.pbCanParalyze?(false)
          opponent.pbParalyze(attacker)
          @battle.pbDisplay(_INTL("{1} was paralyzed! It may be unable to move!", opponent.pbThis))
        end
      elsif attacker.hasWorkingItem(:MENTALHERB)
        if opponent.effects[:Attract] >= 0
          opponent.effects[:Attract] = -1
          @battle.pbDisplay(_INTL("{1}'s {2} cured {3}'s love problem!", attacker.pbThis, getItemName(attacker.item), opponent.pbThis(true)))
        end
      elsif attacker.hasWorkingItem(:POISONBARB)
        if opponent.pbCanPoison?(false)
          opponent.pbPoison(attacker)
          @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
        end
      elsif attacker.hasWorkingItem(:TOXICORB)
        if opponent.pbCanPoison?(false)
          opponent.pbPoison(attacker, true)
          @battle.pbDisplay(_INTL("{1} was badly poisoned!", opponent.pbThis))
        end
      elsif attacker.hasWorkingItem(:WHITEHERB)
        while true
          reducedstats = false
          for i in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED, PBStats::SPATK, PBStats::SPDEF, PBStats::EVASION, PBStats::ACCURACY]
            if opponent.stages[i] < 0
              opponent.stages[i] = 0
              reducedstats = true
            end
          end
          break if !reducedstats

          @battle.pbDisplay(_INTL("{1}'s {2} restored {3}'s status!", attacker.pbThis, getItemName(attacker.item), opponent.pbThis(true)))
        end
      end
    end
    attacker.pbDisposeItem(false, true, true, true)
  end
end

################################################################################
# For 5 rounds, the target can't use its held item, its held item has no
# effect, and no items can be used on it. (Embargo)
################################################################################
class PokeBattle_Move_0F8 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Embargo] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Embargo] = 5
    @battle.pbDisplay(_INTL("{1} can't use items anymore!", opponent.pbThis))
  end
end

################################################################################
# For 5 rounds, all held items cannot be used in any way and have no effect.
# Held items can still change hands, but can't be thrown. (Magic Room)
################################################################################
class PokeBattle_Move_0F9 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.state.effects[:MagicRoom] > 0
      @battle.state.effects[:MagicRoom] = 0
      @battle.pbDisplay(_INTL("The area returned to normal!"))
    else
      @battle.state.effects[:MagicRoom] = 5
      if [:NEWWORLD, :PSYTERRAIN].include?(@battle.FE) || attacker.hasWorkingItem(:AMPLIFIELDROCK) || (Rejuv && @battle.FE == :STARLIGHT)
        @battle.state.effects[:MagicRoom] = 8
      end
      if @battle.FE == :DIMENSIONAL
        rnd = @battle.pbRandom(6)
        @battle.state.effects[:MagicRoom] = 3 + rnd
      end
      @battle.pbDisplay(_INTL("It created a bizarre area in which Pokémon's held items lose their effects!"))
    end
  end
end

################################################################################
# Starts sunny weather. (Sunny Day)
################################################################################
class PokeBattle_Move_0FF < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.state.effects[:HeavyRain]
      @battle.pbDisplay(_INTL("There's no relief from this heavy rain!")) if showMessage
      return false
    elsif @battle.state.effects[:HarshSunlight]
      @battle.pbDisplay(_INTL("The extremely harsh sunlight was not lessened at all!")) if showMessage
      return false
    elsif @battle.weather == :STRONGWINDS && @battle.pbCheckGlobalAbility(:DELTASTREAM)
      @battle.pbDisplay(_INTL("The mysterious air current blows on regardless!")) if showMessage
      return false
    elsif @battle.weather == :SUNNYDAY
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    rainbowhold = 0
    if @battle.weather == :RAINDANCE
      rainbowhold = 5
      rainbowhold = 8 if attacker.hasWorkingItem(:HEATROCK) || [:DESERT, :MOUNTAIN, :SNOWYMOUNTAIN, :SKY].include?(@battle.FE)
    end

    @battle.weather = :SUNNYDAY
    @battle.weatherduration = 5
    @battle.weatherduration = 8 if attacker.hasWorkingItem(:HEATROCK) || [:DESERT, :MOUNTAIN, :SNOWYMOUNTAIN, :SKY].include?(@battle.FE)

    @battle.pbCommonAnimation("Sunny", nil, nil)
    @battle.pbDisplay(_INTL("The sunlight turned harsh!"))
    @battle.pbDisplay(_INTL("The sunlight eclipsed the starry sky!")) if @battle.FE == :STARLIGHT

    if rainbowhold != 0
      fieldbefore = @battle.FE
      @battle.setField(:RAINBOW, rainbowhold)
      if fieldbefore != :RAINBOW
        @battle.pbDisplay(_INTL("The weather created a rainbow!"))
      else
        @battle.pbDisplay(_INTL("The weather refreshed the rainbow!"))
      end
    end
  end
end

################################################################################
# Starts rainy weather. (Rain Dance)
################################################################################
class PokeBattle_Move_100 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.state.effects[:HeavyRain]
      @battle.pbDisplay(_INTL("There's no relief from this heavy rain!")) if showMessage
      return false
    elsif @battle.state.effects[:HarshSunlight]
      @battle.pbDisplay(_INTL("The extremely harsh sunlight was not lessened at all!")) if showMessage
      return false
    elsif @battle.weather == :STRONGWINDS && @battle.pbCheckGlobalAbility(:DELTASTREAM)
      @battle.pbDisplay(_INTL("The mysterious air current blows on regardless!")) if showMessage
      return false
    elsif @battle.weather == :RAINDANCE
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    rainbowhold = 0
    if @battle.weather == :SUNNYDAY
      rainbowhold = 5
      rainbowhold = 8 if attacker.hasWorkingItem(:DAMPROCK) || [:BIGTOP, :CLOUDS, :SKY].include?(@battle.FE)
    end

    @battle.weather = :RAINDANCE
    @battle.weatherduration = 5
    @battle.weatherduration = 8 if attacker.hasWorkingItem(:DAMPROCK) || [:BIGTOP, :CLOUDS, :SKY].include?(@battle.FE)

    @battle.pbCommonAnimation("Rain", nil, nil)
    @battle.pbDisplay(_INTL("It started to rain!"))
    @battle.pbDisplay(_INTL("The weather blocked out the starry sky!")) if @battle.FE == :STARLIGHT

    if rainbowhold != 0
      fieldbefore = @battle.FE
      @battle.setField(:RAINBOW, rainbowhold)
      if fieldbefore != :RAINBOW
        @battle.pbDisplay(_INTL("The weather created a rainbow!"))
      else
        @battle.pbDisplay(_INTL("The weather refreshed the rainbow!"))
      end
    end
  end
end

################################################################################
# Starts sandstorm weather. (Sandstorm)
################################################################################
class PokeBattle_Move_101 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.state.effects[:HeavyRain]
      @battle.pbDisplay(_INTL("There's no relief from this heavy rain!")) if showMessage
      return false
    elsif @battle.state.effects[:HarshSunlight]
      @battle.pbDisplay(_INTL("The extremely harsh sunlight was not lessened at all!")) if showMessage
      return false
    elsif @battle.weather == :STRONGWINDS && @battle.pbCheckGlobalAbility(:DELTASTREAM)
      @battle.pbDisplay(_INTL("The mysterious air current blows on regardless!")) if showMessage
      return false
    elsif @battle.weather == :SANDSTORM
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.weather = :SANDSTORM
    @battle.weatherduration = 5
    @battle.weatherduration = 8 if attacker.hasWorkingItem(:SMOOTHROCK) || [:DESERT, :ASHENBEACH, :SKY].include?(@battle.FE)

    @battle.pbCommonAnimation("Sandstorm", nil, nil)
    @battle.pbDisplay(_INTL("A sandstorm brewed!"))
    @battle.pbDisplay(_INTL("The weather blocked out the starry sky!")) if @battle.FE == :STARLIGHT
  end
end

################################################################################
# Starts hail weather. (Hail)
################################################################################
class PokeBattle_Move_102 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.state.effects[:HeavyRain]
      @battle.pbDisplay(_INTL("There's no relief from this heavy rain!")) if showMessage
      return false
    elsif @battle.state.effects[:HarshSunlight]
      @battle.pbDisplay(_INTL("The extremely harsh sunlight was not lessened at all!")) if showMessage
      return false
    elsif @battle.weather == :STRONGWINDS && @battle.pbCheckGlobalAbility(:DELTASTREAM)
      @battle.pbDisplay(_INTL("The mysterious air current blows on regardless!")) if showMessage
      return false
    elsif @battle.weather == :HAIL
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.weather = :HAIL
    @battle.weatherduration = 5
    @battle.weatherduration = 8 if attacker.hasWorkingItem(:ICYROCK) || [:ICY, :SNOWYMOUNTAIN, :FROZENDIMENSION, :SKY, :CLOUDS].include?(@battle.FE)

    @battle.pbCommonAnimation("Hail", nil, nil)
    @battle.pbDisplay(_INTL("It started to hail!"))
    @battle.pbDisplay(_INTL("The weather blocked out the starry sky!")) if @battle.FE == :STARLIGHT

    for facemon in @battle.battlers
      if facemon.species == :EISCUE && facemon.ability == :ICEFACE && facemon.form == 1 # Eiscue
        facemon.pbRegenFace
        @battle.pbDisplay(_INTL("{1} transformed!", facemon.name))
      end
    end
  end
end

################################################################################
# Entry hazard.  Lays spikes on the opposing side (max. 3 layers). (Spikes / Ceaseless Edge)
################################################################################
class PokeBattle_Move_103 < PokeBattle_Move
  def pbCanAffectTarget?(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    for i in 0...4
      next if !attacker.pbIsOpposing?(i)

      if ((@battle.battlers[i].ability == :MAGICBOUNCE && !@battle.battlers[i].moldbroken) || @battle.battlers[i].effects[:MagicCoat]) &&
         !PBStuff::TWOTURNMOVE.include?(@battle.battlers[i].effects[:TwoTurnAttack])
        if showMessage
          @battle.pbDisplay(_INTL("{1} bounced the Spikes back!", @battle.battlers[i].pbThis))
          if attacker.pbOwnSide.effects[:Spikes] < 3
            pbShowAnimation(@move, @battle.battlers[i], attacker)
            attacker.pbOwnSide.effects[:Spikes] += 1
            if @battle.pbIsOpposing?(attacker.index)
              @battle.pbDisplay(_INTL("Spikes were scattered all around the foe's team's feet!"))
            else
              @battle.pbDisplay(_INTL("Spikes were scattered all around your team's feet!"))
            end
          else
            @battle.pbDisplay(_INTL("But it failed!"))
          end
        end
        return false
      end
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if attacker.pbOpposingSide.effects[:Spikes] >= 3
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbOpposingSide.effects[:Spikes] += 1
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Spikes were scattered all around the feet of the foe's team!"))
    else
      @battle.pbDisplay(_INTL("Spikes were scattered all around the feet of your team!"))
    end
  end

  def pbAdditionalEffect(attacker, opponent)
    if attacker.pbOpposingSide.effects[:Spikes] < 3
      attacker.pbOpposingSide.effects[:Spikes] += 1
      if !@battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("Spikes were scattered all around the feet of the foe's team!"))
      else
        @battle.pbDisplay(_INTL("Spikes were scattered all around the feet of your team!"))
      end
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :CEASELESSEDGE
      @battle.pbAnimation(:NIGHTSLASH, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Entry hazard.  Lays poison spikes on the opposing side (max. 2 layers). (Toxic Spikes)
################################################################################
class PokeBattle_Move_104 < PokeBattle_Move
  def pbCanAffectTarget?(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    for i in 0...4
      next if !attacker.pbIsOpposing?(i)

      if ((@battle.battlers[i].ability == :MAGICBOUNCE && !@battle.battlers[i].moldbroken) || @battle.battlers[i].effects[:MagicCoat]) &&
         !PBStuff::TWOTURNMOVE.include?(@battle.battlers[i].effects[:TwoTurnAttack])
        if showMessage
          @battle.pbDisplay(_INTL("{1} bounced the Toxic Spikes back!", @battle.battlers[i].pbThis))
          if attacker.pbOwnSide.effects[:ToxicSpikes] < 2
            pbShowAnimation(@move, @battle.battlers[i], attacker)
            attacker.pbOwnSide.effects[:ToxicSpikes] += 1
            if !@battle.pbIsOpposing?(attacker.index)
              @battle.pbDisplay(_INTL("Poison spikes were scattered all around the foe's team's feet!"))
            else
              @battle.pbDisplay(_INTL("Poison spikes were scattered all around your team's feet!"))
            end
          else
            @battle.pbDisplay(_INTL("But it failed!"))
          end
        end
        return false
      end
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if attacker.pbOpposingSide.effects[:ToxicSpikes] >= 2
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbOpposingSide.effects[:ToxicSpikes] += 1
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Poison spikes were scattered all around the foe's team's feet!"))
    else
      @battle.pbDisplay(_INTL("Poison spikes were scattered all around your team's feet!"))
    end
  end
end

################################################################################
# Entry hazard.  Lays stealth rocks on the opposing side. (Stealth Rock / Stone Axe)
################################################################################
class PokeBattle_Move_105 < PokeBattle_Move
  def pbCanAffectTarget?(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if @battle.FE == :CLOUDS
      if showMessage
        if !attacker.pbOwnSide.effects[:StealthRock]
          attacker.pbOwnSide.effects[:StealthRock] = true
          @battle.pbDisplay(_INTL("... but the clouds bounced the Stealth Rocks back!"))
          if @battle.pbIsOpposing?(attacker.index)
            @battle.pbDisplay(_INTL("Pointed stones float in the air around your foe's team!"))
          else
            @battle.pbDisplay(_INTL("Pointed stones float in the air around your team!"))
          end
        else
          @battle.pbDisplay(_INTL("But it failed!"))
        end
      end
      return false
    end
    for i in 0...4
      next if !attacker.pbIsOpposing?(i)

      if ((@battle.battlers[i].ability == :MAGICBOUNCE && !@battle.battlers[i].moldbroken) || @battle.battlers[i].effects[:MagicCoat]) &&
         !PBStuff::TWOTURNMOVE.include?(@battle.battlers[i].effects[:TwoTurnAttack])
        if showMessage
          @battle.pbDisplay(_INTL("{1} bounced the Stealth Rocks back!", @battle.battlers[i].pbThis))
          if !attacker.pbOwnSide.effects[:StealthRock]
            pbShowAnimation(@move, @battle.battlers[i], attacker)
            attacker.pbOwnSide.effects[:StealthRock] = true
            if @battle.pbIsOpposing?(attacker.index)
              @battle.pbDisplay(_INTL("Pointed stones float in the air around your foe's team!"))
            else
              @battle.pbDisplay(_INTL("Pointed stones float in the air around your team!"))
            end
          else
            @battle.pbDisplay(_INTL("But it failed!"))
          end
        end
        return false
      end
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if attacker.pbOpposingSide.effects[:StealthRock]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbOpposingSide.effects[:StealthRock] = true
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("Pointed stones float in the air around your foe's team!"))
    else
      @battle.pbDisplay(_INTL("Pointed stones float in the air around your team!"))
    end
  end

  def pbAdditionalEffect(attacker, opponent)
    if !attacker.pbOpposingSide.effects[:StealthRock]
      attacker.pbOpposingSide.effects[:StealthRock] = true
      if !@battle.pbIsOpposing?(attacker.index)
        @battle.pbDisplay(_INTL("Pointed stones float in the air around your foe's team!"))
      else
        @battle.pbDisplay(_INTL("Pointed stones float in the air around your team!"))
      end
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :STONEAXE
      @battle.pbAnimation(:ACCELEROCK, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# If used after ally's Fire Pledge, makes a sea of fire on the opposing side. (Grass Pledge)
################################################################################
class PokeBattle_Move_106 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    return unless @battle.canChangeFE?
    fieldbefore = @battle.field.effect
    duration = 4
    duration = 7 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setPledge(:GRASSPLEDGE, duration)
    if @battle.field.effect == fieldbefore # field didn't change
      case @battle.field.effect
        when :BURNING, :VOLCANIC then @battle.pbDisplay(_INTL("The pledges combined and fanned the flames!"))
        when :SWAMP then @battle.pbDisplay(_INTL("The pledges combined and reinforced the swamp!"))
        else # same field; means there wasn't another pledge used
          @battle.pbDisplay(_INTL("The Grass Pledge lingers in the air..."))
          return
      end
      if @battle.field.duration > 0
        @battle.field.duration = duration
      end
    else
      case @battle.field.effect
        when :BURNING, :VOLCANIC then @battle.pbDisplay(_INTL("The pledges combined and set the field ablaze!"))
        when :SWAMP then @battle.pbDisplay(_INTL("The pledges combined and formed a swamp!"))
      end
    end
  end
end

################################################################################
# If used after ally's Water Pledge, makes a rainbow appear on the user's side. (Fire Pledge)
################################################################################
class PokeBattle_Move_107 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if @battle.FE == :CORROSIVEMIST
      bearer = @battle.pbCheckGlobalAbility(:DAMP)
      if bearer && @battle.FE == :CORROSIVEMIST # Corrosive Mist Field
        @battle.pbDisplay(_INTL("{1}'s {2} prevents {3} from using {4}!", bearer.pbThis, getAbilityName(bearer.ability), attacker.pbThis(true), @name))
        return false
      end
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return unless @battle.canChangeFE?
    fieldbefore = @battle.field.effect
    duration = 4
    duration = 7 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setPledge(:FIREPLEDGE, duration)
    if @battle.field.effect == fieldbefore # field didn't change
      case @battle.field.effect
        when :BURNING, :VOLCANIC then @battle.pbDisplay(_INTL("The pledges combined and fanned the flames!"))
        when :RAINBOW then @battle.pbDisplay(_INTL("The pledges combined to refresh the rainbow!"))
        else # same field; means there wasn't another pledge used
          @battle.pbDisplay(_INTL("The Fire Pledge lingers in the air..."))
          return
      end
      if @battle.field.duration > 0
        @battle.field.duration = duration
      end
    else
      case @battle.field.effect
        when :BURNING, :VOLCANIC then @battle.pbDisplay(_INTL("The pledges combined and set the field ablaze!"))
        when :RAINBOW then @battle.pbDisplay(_INTL("The pledges combined to form a rainbow!"))
      end
    end
  end
end

################################################################################
# If used after ally's Grass Pledge, makes a swamp appear on the opposing side. (Water Pledge)
################################################################################
class PokeBattle_Move_108 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    return unless @battle.canChangeFE?
    fieldbefore = @battle.field.effect
    duration = 4
    duration = 7 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setPledge(:WATERPLEDGE, duration)
    if @battle.field.effect == fieldbefore # field didn't change
      case @battle.field.effect
        when :SWAMP then @battle.pbDisplay(_INTL("The pledges combined and reinforced the swamp!"))
        when :RAINBOW then @battle.pbDisplay(_INTL("The pledges combined to refresh the rainbow!"))
        else # same field; means there wasn't another pledge used
          @battle.pbDisplay(_INTL("The Water Pledge lingers in the air..."))
          return
      end
      if @battle.field.duration > 0
        @battle.field.duration = duration
      end
    else
      case @battle.field.effect
        when :SWAMP then @battle.pbDisplay(_INTL("The pledges combined and formed a swamp!"))
        when :RAINBOW then @battle.pbDisplay(_INTL("The pledges combined to form a rainbow!"))
      end
    end
  end
end

################################################################################
# Scatters coins that the player picks up after winning the battle. (Pay Day)
################################################################################
class PokeBattle_Move_109 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    return if hitnum != 0
    if @battle.pbOwnedByPlayer?(attacker.index)
      @battle.extramoney += 5 * attacker.level
      if [:BIGTOP, :DRAGONSDEN].include?(@battle.FE)
        @battle.extramoney += 495 * attacker.level
      end
      @battle.extramoney = MAXMONEY if @battle.extramoney > MAXMONEY
    end
    if @battle.FE == :DRAGONSDEN
      @battle.pbDisplay(_INTL("Treasure scattered everywhere!"))
    else
      @battle.pbDisplay(_INTL("Coins were scattered everywhere!"))
    end
  end
end

################################################################################
# Ends the opposing side's Light Screen and Reflect. (Brick Break / Psychic Fangs)
################################################################################
class PokeBattle_Move_10A < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    # Calculate damage while temporarily disabling the effects of barriers
    reflect = opponent.pbOwnSide.effects[:Reflect]
    lightscreen = opponent.pbOwnSide.effects[:LightScreen]
    aurora_veil = opponent.pbOwnSide.effects[:AuroraVeil]
    arenite_wall = opponent.pbOwnSide.effects[:AreniteWall]

    opponent.pbOwnSide.effects[:Reflect] = 0
    opponent.pbOwnSide.effects[:LightScreen] = 0
    opponent.pbOwnSide.effects[:AuroraVeil] = 0
    opponent.pbOwnSide.effects[:AreniteWall] = 0

    damage = super(attacker, opponent, hitnum, feedbackMessages)

    # Restore the original effects (so they can be removed properly in pbEffect)
    opponent.pbOwnSide.effects[:Reflect] = reflect
    opponent.pbOwnSide.effects[:LightScreen] = lightscreen
    opponent.pbOwnSide.effects[:AuroraVeil] = aurora_veil
    opponent.pbOwnSide.effects[:AreniteWall] = arenite_wall

    return damage
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.pbOwnSide.effects[:Reflect] > 0
      opponent.pbOwnSide.effects[:Reflect] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Reflect wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Reflect wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:LightScreen] > 0
      opponent.pbOwnSide.effects[:LightScreen] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Light Screen wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Light Screen wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:AuroraVeil] > 0
      opponent.pbOwnSide.effects[:AuroraVeil] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Aurora Veil wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Aurora Veil wore off!"))
      end
    end
    if opponent.pbOwnSide.effects[:AreniteWall] > 0
      opponent.pbOwnSide.effects[:AreniteWall] = 0
      if @battle.pbIsOpposing?(opponent.index)
        @battle.pbDisplay(_INTL("The opposing team's Arenite Wall wore off!"))
      else
        @battle.pbDisplay(_INTL("Your team's Arenite Wall wore off!"))
      end
    end
  end
end

################################################################################
# If attack misses, user takes crash damage of 1/2 of max HP. (High Jump Kick / Jump Kick)
################################################################################
class PokeBattle_Move_10B < PokeBattle_Move
end

################################################################################
# User turns 1/4 of max HP into a substitute. (Substitute)
################################################################################
class PokeBattle_Move_10C < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("{1} already has a substitute!", attacker.pbThis)) if showMessage
      return false
    end
    sublife = [(attacker.totalhp / 4.0).floor, 1].max
    if attacker.hp <= sublife
      @battle.pbDisplay(_INTL("It was too weak to make a substitute!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    sublife = [(attacker.totalhp / 4.0).floor, 1].max
    attacker.pbReduceHP(sublife, false, false)
    attacker.effects[:MultiTurn] = 0
    attacker.effects[:MultiTurnAttack] = 0
    attacker.effects[:Substitute] = sublife
    @battle.pbDisplay(_INTL("{1} put in a substitute!", attacker.pbThis))
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    attacker.effects[:UsingSubstituteRightNow] = true
    attacker.battle.scene.pbAnimation(self, attacker, opponent, hitnum) # pbShowAnimation(@move,attacker,nil,hitnum,alltargets,true)
    attacker.effects[:UsingSubstituteRightNow] = false
    # @battle.scene.pbSubstituteSprite(attacker,attacker.pbIsOpposing?(1))
  end
end

################################################################################
# User is not Ghost: Decreases user's Speed, increases user's Attack & Defense by
# 1 stage each. (Curse)
# User is Ghost: User loses 1/2 of max HP, and curses the target.
# Cursed Pokémon lose 1/4 of their max HP at the end of each round.
################################################################################
class PokeBattle_Move_10D < PokeBattle_Move
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.hasType?(:GHOST)
      super
    else
      @battle.pbCommonAnimation("CurseNoGhost", attacker, nil)
    end
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if !attacker.hasType?(:GHOST)
      lowerspeed = attacker.pbCanReduceStatStage?(PBStats::SPEED, false, true)
      raiseatk = attacker.pbCanIncreaseStatStage?(PBStats::ATTACK, false)
      raisedef = attacker.pbCanIncreaseStatStage?(PBStats::DEFENSE, false)
      if !lowerspeed && !raiseatk && !raisedef
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.hasType?(:GHOST)
      if opponent.effects[:Curse]
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if !attacker.hasType?(:GHOST)
      attacker.pbReduceStat(PBStats::SPEED, 1, abilitymessage: true, statdropper: attacker)
      attacker.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: true)
      attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: true)
    else
      hplost = [(attacker.totalhp / 2.0).floor, 1].max
      hplost = [(attacker.totalhp / 4.0).floor, 1].max if @battle.FE == :HAUNTED

      attacker.pbReduceHP(hplost, false, false)
      opponent.effects[:Curse] = true
      @battle.pbDisplay(_INTL("{1} cut its own HP and laid a curse on {2}!", attacker.pbThis, opponent.pbThis(true)))
    end
  end
end

################################################################################
# Target's last move used loses 4 PP. (Spite)
################################################################################
class PokeBattle_Move_10E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.moves.none? {|i| i && i.move == opponent.lastMoveUsed && i.pp > 0}
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    for i in opponent.moves
      if i && i.move == opponent.lastMoveUsed && i.pp > 0
        drop = 4
        drop = 6 if @battle.FE == :HAUNTED
        reduction = [drop, i.pp].min
        opponent.pbSetPP(i, i.pp - reduction)
        @battle.pbDisplay(_INTL("It reduced the PP of {1}'s {2} by {3}!", opponent.pbThis(true), i.name, reduction))
        return
      end
    end
  end
end

################################################################################
# Target will lose 1/4 of max HP at end of each round, while asleep. (Nightmare)
################################################################################
class PokeBattle_Move_10F < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if ((opponent.status != :SLEEP && @battle.FE != :INFERNAL && attacker.ability != :WORLDOFNIGHTMARES) &&
      (opponent.ability != :COMATOSE || @battle.FE == :ELECTERRAIN)) ||
      opponent.effects[:Nightmare] || opponent.effects[:Substitute] > 0
     @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis(true))) if showMessage
     return false
   end
   return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Nightmare] = true
    opponent.effects[:MeanLook] = attacker.index if attacker.ability == :WORLDOFNIGHTMARES
    @battle.pbDisplay(_INTL("{1} began having a nightmare!", opponent.pbThis))
  end
end

################################################################################
# Removes trapping moves, entry hazards and Leech Seed on user/user's side. (Rapid Spin)
################################################################################
class PokeBattle_Move_110 < PokeBattle_Move
  def pbAdditionalEffectSelf(attacker)
    attacker.pbIncreaseStat(PBStats::SPEED, 1, statsource: attacker) if Gen > 7
  end

  def pbEffectAfterMove(attacker, alltargets, hitflags)
    return if attacker.ability == :SHEERFORCE
    if attacker.effects[:MultiTurn] > 0
      mtattack = getMoveName(attacker.effects[:MultiTurnAttack])
      mtuser = @battle.battlers[attacker.effects[:MultiTurnUser]]
      @battle.pbDisplay(_INTL("{1} got free of {2}'s {3}!", attacker.pbThis, mtuser.pbThis(true), mtattack))
      attacker.effects[:MultiTurn] = 0
      attacker.effects[:MultiTurnAttack] = 0
      attacker.effects[:MultiTurnUser] = -1
    end
    if attacker.effects[:LeechSeed] >= 0
      attacker.effects[:LeechSeed] = -1
      @battle.pbDisplay(_INTL("{1} shed Leech Seed!", attacker.pbThis))
    end
    if attacker.pbOwnSide.effects[:StealthRock]
      attacker.pbOwnSide.effects[:StealthRock] = false
      @battle.pbDisplay(_INTL("{1} blew away stealth rocks!", attacker.pbThis))
    end
    if attacker.pbOwnSide.effects[:Spikes] > 0
      attacker.pbOwnSide.effects[:Spikes] = 0
      @battle.pbDisplay(_INTL("{1} blew away Spikes!", attacker.pbThis))
    end
    if attacker.pbOwnSide.effects[:ToxicSpikes] > 0
      attacker.pbOwnSide.effects[:ToxicSpikes] = 0
      @battle.pbDisplay(_INTL("{1} blew away poison spikes!", attacker.pbThis))
    end
    if attacker.pbOwnSide.effects[:StickyWeb]
      attacker.pbOwnSide.effects[:StickyWeb] = false
      @battle.pbDisplay(_INTL("{1} blew away the sticky webbing!", attacker.pbThis))
    end
  end
end

################################################################################
# Attacks 2 rounds in the future. (Future Sight / Doom Desire)
################################################################################
class PokeBattle_Move_111 < PokeBattle_Move
  def pbEffect(attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if opponent.effects[:FutureSight] > 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return -1
    end
    pbShowAnimation(@move, attacker, nil, hitnum, alltargets, showanimation)
    opponent.effects[:FutureSight] = 3
    opponent.effects[:FutureSightMove] = @move
    opponent.effects[:FutureSightUser] = attacker.index
    opponent.effects[:FutureSightPokemonIndex] = attacker.pokemonIndex
    if @move == :FUTURESIGHT
      @battle.pbDisplay(_INTL("{1} foresaw an attack!", attacker.pbThis))
    else
      @battle.pbDisplay(_INTL("{1} chose Doom Desire as its destiny!", attacker.pbThis))
    end
    return 0
  end
end

################################################################################
# Increases user's Defense and Special Defense by 1 stage each.  Ups user's
# stockpile by 1 (max. 3).
################################################################################
class PokeBattle_Move_112 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.effects[:Stockpile] >= 3
      @battle.pbDisplay(_INTL("{1} can't stockpile any more!", attacker.pbThis))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Stockpile] += 1
    @battle.pbDisplay(_INTL("{1} stockpiled {2}!", attacker.pbThis, attacker.effects[:Stockpile]))
    if attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
      attacker.effects[:StockpileDef] += 1
    end
    if attacker.pbIncreaseStat(PBStats::SPDEF, 1, abilitymessage: false, statsource: attacker)
      attacker.effects[:StockpileSpDef] += 1
    end
  end
end

################################################################################
# Power is multiplied by the user's stockpile (X).  Reduces the stockpile to 0.
# Decreases user's Defense and Special Defense by X stages each. (Spit Up)
################################################################################
class PokeBattle_Move_113 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.effects[:Stockpile] == 0
      @battle.pbDisplay(_INTL("But it failed to spit up a thing!"))
      return false
    end
    return true
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    return 300 if @battle.FE == :CONCERT4

    return 100 * attacker.effects[:Stockpile]
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if attacker.effects[:StockpileDef] > 0
      attacker.pbReduceStat(PBStats::DEFENSE, attacker.effects[:StockpileDef], abilitymessage: false, statdropper: attacker)
    end
    if attacker.effects[:StockpileSpDef] > 0
      attacker.pbReduceStat(PBStats::SPDEF, attacker.effects[:StockpileSpDef], abilitymessage: false, statdropper: attacker)
    end
    attacker.effects[:Stockpile] = 0
    attacker.effects[:StockpileDef] = 0
    attacker.effects[:StockpileSpDef] = 0
    @battle.pbDisplay(_INTL("{1}'s stockpiled effect wore off!", attacker.pbThis))
  end
end

################################################################################
# Heals user depending on the user's stockpile (X).  Reduces the stockpile to 0.
# Decreases user's Defense and Special Defense by X stages each. (Swallow)
################################################################################
class PokeBattle_Move_114 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.effects[:Stockpile] == 0
      @battle.pbDisplay(_INTL("But it failed to swallow a thing!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    hpgain = 0
    case attacker.effects[:Stockpile]
      when 1
        hpgain = (attacker.totalhp / 4.0).floor
        hpgain = (attacker.totalhp / 2.0).floor if @battle.FE == :WASTELAND
      when 2
        hpgain = (attacker.totalhp / 2.0).floor
        hpgain = attacker.totalhp if @battle.FE == :WASTELAND
      when 3
        hpgain = attacker.totalhp
    end

    if @battle.FE == :WASTELAND && attacker.effects[:Stockpile] == 3
      t = attacker.status
      attacker.status = nil
      attacker.statusCount = 0
      case t
        when :BURN      then @battle.pbDisplay(_INTL("{1} was cured of its burn.", attacker.pbThis))
        when :POISON    then @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", attacker.pbThis))
        when :PARALYSIS then @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", attacker.pbThis))
      end
    end
    if attacker.pbRecoverHP(hpgain, true) > 0
      @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis))
    end
    if attacker.effects[:StockpileDef] > 0
      attacker.pbReduceStat(PBStats::DEFENSE, attacker.effects[:StockpileDef], abilitymessage: false, statdropper: attacker)
    end
    if attacker.effects[:StockpileSpDef] > 0
      attacker.pbReduceStat(PBStats::SPDEF, attacker.effects[:StockpileSpDef], abilitymessage: false, statdropper: attacker)
    end
    attacker.effects[:Stockpile] = 0
    attacker.effects[:StockpileDef] = 0
    attacker.effects[:StockpileSpDef] = 0
    @battle.pbDisplay(_INTL("{1}'s stockpiled effect wore off!", attacker.pbThis))
  end
end

#################################################################################
# Fails if user was hit by a damaging move this round. (Focus Punch)
################################################################################
class PokeBattle_Move_115 < PokeBattle_Move
  def pbDisplayUseMessage(attacker, choice)
    if (attacker.lastHPLost > 0 && !attacker.damagestate.substitute) || @battle.FE == :ELECTERRAIN # Electric Field
       @battle.pbDisplay(_INTL("{1} lost its focus and couldn't move!", attacker.pbThis))
      return -1
    end
    return super(attacker, choice)
  end
end

################################################################################
# Fails if the target didn't chose a damaging move to use this round, or has
# already moved. (Sucker Punch)
################################################################################
class PokeBattle_Move_116 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    targets.each do |opponent|
      next if opponent.hasMovedThisRound?
      next if opponent.effects[:HyperBeam] > 0
      next if @battle.switchedOut[opponent.index]
      next if opponent.itemUsed
      next if [nil, 0, -1].include?(@battle.choices[opponent.index][2])
      next if @battle.choices[opponent.index][2].basedamage == 0
      return true
    end
    @battle.pbDisplay(_INTL("But it failed!"))
    return false
  end
end

################################################################################
# This round, user becomes the target of attacks that have single targets.
# (Follow Me, Rage Powder)
################################################################################
class PokeBattle_Move_117 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !@battle.doublebattle
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @move == :RAGEPOWDER
      attacker.effects[:RagePowder] = true
      if !attacker.pbPartner.isFainted?
        attacker.pbPartner.effects[:FollowMe] = false
        attacker.pbPartner.effects[:RagePowder] = false
      end
    else
      attacker.effects[:FollowMe] = true
      if !attacker.pbPartner.isFainted?
        attacker.pbPartner.effects[:FollowMe] = false
        attacker.pbPartner.effects[:RagePowder] = false
      end
    end
    @battle.pbDisplay(_INTL("{1} became the center of attention!", attacker.pbThis))
    return 0
  end
end

################################################################################
# For 5 rounds, increases gravity on the field.  Pokémon cannot become airborne. (Gravity)
################################################################################
class PokeBattle_Move_118 < PokeBattle_Move
  def pbIsPhysical?(attacker, type = @type)
    return @battle.FE == :DEEPEARTH
  end

  def pbIsStatus?
    return @battle.FE != :DEEPEARTH
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if @battle.FE == :DEEPEARTH
    if @battle.state.effects[:Gravity] != 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return super if @battle.FE != :DEEPEARTH
    dmg = (opponent.hp / 2.0).floor
    return dmg
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @battle.FE == :DEEPEARTH
    @battle.state.effects[:Gravity] = 5
    @battle.state.effects[:Gravity] = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.state.effects[:Gravity] = 8 if @battle.FE == :PSYTERRAIN
    if @battle.FE == :DIMENSIONAL
      rnd = @battle.pbRandom(6)
      @battle.state.effects[:Gravity] = 3 + rnd
    end
    @battle.pbDisplay(_INTL("Gravity intensified!"))
    for i in 0...4
      poke = @battle.battlers[i]
      next if !poke

      if !$cache.moves[poke.effects[:TwoTurnAttack]].nil? &&
         [0xC9, 0xCC, 0xCE].include?($cache.moves[poke.effects[:TwoTurnAttack]].function) # Fly, Bounce, Sky Drop
        poke.effects[:TwoTurnAttack] = 0
      end
      if poke.effects[:SkyDrop]
        @battle.scene.pbUnVanishSprite(poke)
        poke.effects[:SkyDrop] = false
        @battle.pbDisplay(_INTL("{1} was freed from the Sky Drop!", poke.pbThis))
      end
      if poke.effects[:SkyDroppee]
        @battle.scene.pbUnVanishSprite(poke)
        poke.effects[:SkyDroppee] = false
        @battle.pbDisplay(_INTL("{1} fell from the sky due to the gravity!", poke.pbThis))
      end
      if poke.effects[:MagnetRise] > 0
        poke.effects[:MagnetRise] = 0
      end
      if poke.effects[:Telekinesis] > 0
        poke.effects[:Telekinesis] = 0
      end
    end
  end
end

################################################################################
# For 5 rounds, user becomes airborne. (Magnet Rise)
################################################################################
class PokeBattle_Move_119 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if @battle.FE == :DEEPEARTH
      return attacker.pbCanIncreaseStatStage?(PBStats::SPEED, showMessage)
    end
    if opponent.effects[:Ingrain] || opponent.effects[:SmackDown] || opponent.effects[:MagnetRise] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if @battle.FE != :DEEPEARTH
      attacker.effects[:MagnetRise] = 5
      if [:ELECTERRAIN, :FACTORY, :SHORTCIRCUIT].include?(@battle.FE) || @battle.state.effects[:ELECTERRAIN] > 0
        attacker.effects[:MagnetRise] = 8
      end
      @battle.pbDisplay(_INTL("{1} levitated with electromagnetism!", attacker.pbThis))
    else
      attacker.pbIncreaseStat(PBStats::SPEED, 2, abilitymessage: false, statsource: attacker)
      @battle.pbDisplay(_INTL("{1} uses electromagnetism to move faster!", attacker.pbThis))
    end
  end
end

################################################################################
# For 3 rounds, target becomes airborne and can always be hit. (Telekinesis)
################################################################################
class PokeBattle_Move_11A < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Ingrain] || opponent.effects[:SmackDown] || opponent.effects[:Telekinesis] > 0 ||
       [:DIGLETT, :DUGTRIO, :SANDYGAST, :PALOSSAND, :WIGLETT].include?(opponent.species) || (opponent.species == :GENGAR && opponent.form == 1)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Telekinesis] = 3
    @battle.pbDisplay(_INTL("{1} was hurled into the air!", opponent.pbThis))
    if @battle.FE == :PSYTERRAIN
      opponent.pbReduceStat(PBStats::DEFENSE, 2, abilitymessage: false, statdropper: attacker)
      opponent.pbReduceStat(PBStats::SPDEF, 2, abilitymessage: false, statdropper: attacker)
    end
  end
end

################################################################################
# Hits airborne semi-invulnerable targets.
################################################################################
class PokeBattle_Move_11B < PokeBattle_Move
  # Handled in Battler class, do not edit!
end

################################################################################
# Grounds the target while it remains active. (Smack Down, Thousand Arrows)
# (Handled in Battler's pbSuccessCheck): Hits some semi-invulnerable targets.
################################################################################
class PokeBattle_Move_11C < PokeBattle_Move
  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
    return if @battle.state.effects[:Gravity] != 0
    return if opponent.damagestate.substitute
    return if opponent.effects[:Roost] || opponent.effects[:Ingrain] || opponent.effects[:SkyDrop] || opponent.effects[:SkyDroppee] || opponent.hasWorkingItem(:IRONBALL)
    opponent.effects[:SmackDown] = true
    showmsg = opponent.hasType?(:FLYING) || opponent.ability == :LEVITATE
    if !$cache.moves[opponent.effects[:TwoTurnAttack]].nil? && [0xC9, 0xCC].include?($cache.moves[opponent.effects[:TwoTurnAttack]].function)
      opponent.effects[:TwoTurnAttack] = 0
      showmsg = true
    end
    if opponent.effects[:MagnetRise] > 0
      opponent.effects[:MagnetRise] = 0
      showmsg = true
    end
    if opponent.effects[:Telekinesis] > 0
      opponent.effects[:Telekinesis] = 0
      showmsg = true
    end
    @battle.pbDisplay(_INTL("{1} fell straight down!", opponent.pbThis)) if showmsg
  end
end

################################################################################
# Target moves immediately after the user, ignoring priority/speed. (After You)
################################################################################
class PokeBattle_Move_11D < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.battlerActed?(opponent.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:AfterYou] = true
    @battle.setActPrioData
    @battle.pbDisplay(_INTL("{1} took the kind offer!", opponent.pbThis))
  end
end

################################################################################
# Target moves last this round, ignoring priority/speed. (Quash)
################################################################################
class PokeBattle_Move_11E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if @battle.battlerActed?(opponent.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Quash] = true
    @battle.setActPrioData
    @battle.pbDisplay(_INTL("{1}'s move was postponed!", opponent.pbThis))
  end
end

################################################################################
# For 5 rounds, for each priority bracket, slow Pokémon move before fast ones. (Trick Room)
################################################################################
class PokeBattle_Move_11F < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.state.effects[:TrickRoom] == 0
      @battle.state.effects[:TrickRoom] = 5
      if [:CHESS, :NEWWORLD, :PSYTERRAIN].include?(@battle.FE) || attacker.hasWorkingItem(:AMPLIFIELDROCK) || (Rejuv && @battle.FE == :STARLIGHT)
        @battle.state.effects[:TrickRoom] = 8
      end
      if @battle.FE == :DIMENSIONAL
        rnd = @battle.pbRandom(6)
        @battle.state.effects[:TrickRoom] = 3 + rnd
      end
      @battle.pbDisplay(_INTL("{1} twisted the dimensions!", attacker.pbThis))
    else
      @battle.state.effects[:TrickRoom] = 0
      @battle.pbDisplay(_INTL("The twisted dimensions returned to normal!", attacker.pbThis))
    end
    for i in @battle.battlers
      if i.hasWorkingItem(:ROOMSERVICE)
        if i.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: i)
          if i.ability == :CONTRARY && !i.moldbroken
            @battle.pbDisplay(_INTL("The Room Service raised #{i.pbThis}'s Speed!"))
          else
            @battle.pbDisplay(_INTL("The Room Service lowered #{i.pbThis}'s Speed!"))
          end
          i.pbDisposeItem(false)
        end
      end
    end
  end
end

################################################################################
# User switches places with its ally. (Ally Switch / Gen 8 Teleport)
################################################################################
class PokeBattle_Move_120 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if !@battle.pbCanChooseNonActive?(attacker.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.userSwitch = true
  end
end

################################################################################
# Target's Attack is used instead of user's Attack for this move's calculations.
################################################################################
class PokeBattle_Move_121 < PokeBattle_Move
  # Handled in superclass, do not edit!
end

################################################################################
# Target's Defense is used instead of its Special Defense for this move's
# calculations.
################################################################################
class PokeBattle_Move_122 < PokeBattle_Move
  # Handled in superclass, do not edit!
end

################################################################################
# Only damages Pokémon that share a type with the user. (Synchronoise)
################################################################################
class PokeBattle_Move_123 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if !opponent.hasType?(attacker.type1) && (!opponent.hasType?(attacker.type2) || attacker.type2.nil?)
      @battle.pbDisplay(_INTL("{1} was unaffected!", opponent.pbThis)) if showMessage
      return false
    end
    return true
  end
end

################################################################################
# For 5 rounds, swaps all battlers' base Defense with base Special Defense. (Wonder Room)
################################################################################
class PokeBattle_Move_124 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.state.effects[:WonderRoom] == 0
      @battle.state.effects[:WonderRoom] = 5
      if [:NEWWORLD, :PSYTERRAIN].include?(@battle.FE) || # New World, Psychic Terrain
         attacker.hasWorkingItem(:AMPLIFIELDROCK) || (Rejuv && @battle.FE == :STARLIGHT)
        @battle.state.effects[:WonderRoom] = 8
      end
      if @battle.FE == :DIMENSIONAL
        rnd = @battle.pbRandom(6)
        @battle.state.effects[:WonderRoom] = 3 + rnd
      end
      for i in @battle.battlers
        i.pbSwapDefenses
      end
      @battle.pbDisplay(_INTL("{1} created a bizarre area in which the Defense and Sp. Def stats are swapped!", attacker.pbThis))
    else
      @battle.state.effects[:WonderRoom] = 0
      @battle.pbDisplay(_INTL("Wonder Room wore off, and the Defense and Sp. Def stats returned to normal!"))
      for i in @battle.battlers
        i.pbSwapDefenses
      end
    end
  end
end

################################################################################
# Fails unless user has already used all other moves it knows. (Last Resort)
################################################################################
class PokeBattle_Move_125 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    unusedMove = false
    knowsAnotherMove = false
    knowsLastResort = false
    for i in attacker.moves
      next if i.nil? || i.move.nil?

      if i.function == 0x125
        knowsLastResort = true
        next
      end
      knowsAnotherMove = true
      unusedMove = true unless attacker.movesUsed.include?(i.move) || @battle.FE == :DARKNESS1
    end
    if !knowsLastResort || !knowsAnotherMove || unusedMove
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end
end

#===============================================================================
# NOTE: Shadow moves use function codes 126-132 inclusive.  If you're inventing
#       new move effects, use function code 133 and onwards.
#===============================================================================

################################################################################
# 133- King's Shield
################################################################################
class PokeBattle_Move_133 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if @battle.pbRandom(3 ** attacker.effects[:ProtectRate]) != 0
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Protect] = :KingsShield
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} shielded itself against damage!", attacker.pbThis))
  end
end

################################################################################
# 134- Electric Terrain
################################################################################
class PokeBattle_Move_134 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if !Rejuv && @battle.canChangeFE?(:ELECTERRAIN)
    return true if Rejuv && @battle.canChangeFE?([:ELECTERRAIN, :DRAGONSDEN]) && @battle.state.effects[:ELECTERRAIN] <= 0
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    duration = 5
    duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setField(:ELECTERRAIN, duration)
    @battle.pbDisplay(_INTL("The terrain became electrified!"))
  end
end

################################################################################
# 135- Grassy Terrain
################################################################################
class PokeBattle_Move_135 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if !Rejuv && @battle.canChangeFE?(:GRASSY)
    return true if Rejuv && @battle.canChangeFE?([:GRASSY, :DRAGONSDEN]) && @battle.state.effects[:GRASSY] <= 0
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    duration = 5
    duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setField(:GRASSY, duration)
    @battle.pbDisplay(_INTL("The terrain became grassy!"))
  end
end

################################################################################
# 136- Misty Terrain
################################################################################
class PokeBattle_Move_136 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if !Rejuv && @battle.canChangeFE?(:MISTY)
    return true if Rejuv && @battle.canChangeFE?([:MISTY, :DRAGONSDEN, :CORROSIVEMIST]) && @battle.state.effects[:MISTY] <= 0
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    duration = 5
    duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setField(:MISTY, duration)
    @battle.pbDisplay(_INTL("The terrain became misty!"))
  end
end

################################################################################
# 137- Flying Press (not type effect; double damage + always hit while
# target is minimized. Accuracy handled in pbAccuracyCheck)
################################################################################
class PokeBattle_Move_137 < PokeBattle_Move
  def pbModifyDamage(damagemult, attacker, opponent)
    damagemult *= 2.0 if opponent.effects[:Minimize]
    return damagemult
  end
end

################################################################################
# Decreases the target's Attack and Special Attack by 1 stage each. (Noble Roar/Tearful Look)
################################################################################
class PokeBattle_Move_138 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceAnyStat?([PBStats::ATTACK, PBStats::SPATK], showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statdrop = [:FAIRYTALE, :DRAGONSDEN].include?(@battle.FE) && @move == :NOBLEROAR ? 2 : 1
    opponent.pbReduceStat(PBStats::ATTACK, statdrop, statdropper: attacker)
    opponent.pbReduceStat(PBStats::SPATK, statdrop, statdropper: attacker)
  end
end

################################################################################
# User gains 75% of the HP it inflicts as damage. (Draining Kiss/Oblivion Wing)
################################################################################
class PokeBattle_Move_139 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    damage = opponent.lastHPLost
    if damage > 0 && !opponent.damagestate.disguise
      hpgain = [(damage * 0.75).floor, 1].max
      if opponent.ability == :LIQUIDOOZE
        hpgain *= 2 if [:WASTELAND, :MURKWATERSURFACE, :CORRUPTED].include?(@battle.FE)
        if attacker.ability != :MAGICGUARD && !(attacker.ability == :WONDERGUARD && @battle.FE == :COLOSSEUM)
          attacker.pbReduceHP(hpgain, true)
          @battle.pbDisplay(_INTL("{1} sucked up the liquid ooze!", attacker.pbThis))
        end
      else
        if Rejuv && @battle.FE == :GRASSY
          hpgain = (hpgain * 1.6).floor if attacker.hasWorkingItem(:BIGROOT)
        else
          hpgain = (hpgain * 1.3).floor if attacker.hasWorkingItem(:BIGROOT)
        end
        hpgain = (hpgain * 1.3).floor if attacker.crested == :SHIINOTIC
        attacker.pbRecoverHP(hpgain, true)
        @battle.pbDisplay(_INTL("{1} had its energy drained!", opponent.pbThis))
      end
    end
    if @battle.FE == :FAIRYTALE && @move == :DRAININGKISS
      if !opponent.damagestate.substitute && opponent.status == :SLEEP
        opponent.pbCureStatus
      end
    end
  end
end

################################################################################
# Spiky Shield
################################################################################
class PokeBattle_Move_140 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if @battle.pbRandom(3 ** attacker.effects[:ProtectRate]) != 0
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Protect] = :SpikyShield
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} shielded itself against damage!", attacker.pbThis))-1
  end
end

################################################################################
# Increases the target's Special Defense by 1 stage. (Aromatic Mist)
################################################################################
class PokeBattle_Move_13A < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    return true if @battle.doublebattle
    @battle.pbDisplay(_INTL("But it failed!"))
    return false
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanIncreaseStatStage?(PBStats::SPDEF, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statchange = @battle.FE == :MISTY ? 2 : 1
    opponent.pbIncreaseStat(PBStats::SPDEF, statchange, abilitymessage: false, statsource: attacker)
  end
end

################################################################################
# Decreases the target's Special Attack by 2 stages. (Eerie Impulse)
################################################################################
class PokeBattle_Move_13B < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceStatStage?(PBStats::SPATK, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statdrop = 2
    statdrop = 3 if [:ELECTERRAIN, :DEEPEARTH].include?(@battle.FE)
    opponent.pbReduceStat(PBStats::SPATK, statdrop, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Belch
################################################################################
class PokeBattle_Move_13C < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    return true if attacker.pokemon.belch == true || attacker.crested == :SWALOT
    @battle.pbDisplay(_INTL("But it failed!"))
    return false
  end
end

##################################################################
# After lowering stats, user switches out. (Parting Shot)
##################################################################
class PokeBattle_Move_13D < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    stats = [PBStats::ATTACK, PBStats::SPATK]
    stats = [PBStats::ATTACK, PBStats::SPATK, PBStats::SPEED] if @battle.FE == :FROZENDIMENSION
    return attacker.pbCanReduceAnyStat?(stats, showMessage)
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    attacker.vanished = true
    super
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statdrop = 1
    statdrop = 2 if @battle.ProgressiveFieldCheck(PBFields::CONCERT) || @battle.FE == :BACKALLEY
    opponent.pbReduceStat(PBStats::ATTACK, statdrop, abilitymessage: false, statdropper: attacker)
    opponent.pbReduceStat(PBStats::SPATK, statdrop, abilitymessage: false, statdropper: attacker)
    opponent.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker) if @battle.FE == :FROZENDIMENSION
    if @battle.pbCanChooseNonActive?(attacker.index) && @battle.FE != :COLOSSEUM
      attacker.userSwitch = true
    else
      attacker.vanished = false
      @battle.pbCommonAnimation("Fade in", attacker, nil)
    end
  end
end

##################################################################
# Skips first turn, boosts Sp.Atk, Sp.Def and Speed on the second. (Geomancy)
##################################################################
class PokeBattle_Move_13E < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      if [:STARLIGHT, :DEEPEARTH].include?(@battle.FE)
        @immediate = true
        @battle.pbDisplay(_INTL("{1} absorbed the starlight!", attacker.pbThis)) if @battle.FE == :STARLIGHT
      end
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if attacker.effects[:TwoTurnAttack] == 0
      for stat in [PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED]
        attacker.pbIncreaseStat(stat, 2, statsource: attacker)
      end
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Geomancy", attacker)
      @battle.pbDisplay(_INTL("{1} absorbed energy!", attacker.pbThis))
    else
      super
    end
  end
end

##################################################################
# Decreases a poisoned target's Attack, Sp.Atk and Speed by 1 stage. (Venom Drench)
##################################################################
class PokeBattle_Move_13F < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("{1}'s attack missed!", attacker.pbThis)) if showMessage
      return false
    end
    if opponent.status != :POISON && ![:CORROSIVE, :CORROSIVEMIST, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE)
      @battle.pbDisplay(_INTL("But it failed!", opponent.pbThis)) if showMessage
      return false
    end
    return opponent.pbCanReduceAnyStat?([PBStats::ATTACK, PBStats::SPATK, PBStats::SPEED], showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
    opponent.pbReduceStat(PBStats::SPATK, 1, abilitymessage: false, statdropper: attacker)
    opponent.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Entry hazard.  Puts down a sticky web that lowers speed. (Sticky Web)
################################################################################
class PokeBattle_Move_141 < PokeBattle_Move
  def pbCanAffectTarget?(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    for i in 0...4
      next if !attacker.pbIsOpposing?(i)

      if ((@battle.battlers[i].ability == :MAGICBOUNCE && !@battle.battlers[i].moldbroken) || @battle.battlers[i].effects[:MagicCoat]) &&
         !PBStuff::TWOTURNMOVE.include?(@battle.battlers[i].effects[:TwoTurnAttack])
        if showMessage
          @battle.pbDisplay(_INTL("{1} bounced the Sticky Web back!", @battle.battlers[i].pbThis))
          if !attacker.pbOwnSide.effects[:StickyWeb]
            pbShowAnimation(@move, @battle.battlers[i], attacker)
            attacker.pbOwnSide.effects[:StickyWeb] = true
            if @battle.pbIsOpposing?(attacker.index)
              @battle.pbDisplay(_INTL("A sticky web has been laid out beneath your foe's team's feet!"))
            else
              @battle.pbDisplay(_INTL("A sticky web has been laid out beneath your team's feet!"))
            end
          else
            @battle.pbDisplay(_INTL("But it failed!"))
          end
        end
        return false
      end
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if @basedamage > 0
    if attacker.pbOpposingSide.effects[:StickyWeb]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    return if @basedamage > 0
    attacker.pbOpposingSide.effects[:StickyWeb] = true
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("A sticky web has been laid out beneath your foe's team's feet!"))
    else
      @battle.pbDisplay(_INTL("A sticky web has been laid out beneath your team's feet!"))
    end
  end
end

################################################################################
# User inverts the target's stat stages. (Topsy-Turvy)
################################################################################
class PokeBattle_Move_142 < PokeBattle_Move
  def pbIsPhysical?(attacker, type = @type)
    return @battle.FE == :DEEPEARTH
  end

  def pbIsStatus?
    return @battle.FE != :DEEPEARTH
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg if @battle.FE != :DEEPEARTH
    return [attacker.happiness, 250].min if attacker.crested == :LUVDISC
    n = (attacker.weight / opponent.weight).floor
    ret = 40
    ret = 60 if n >= 2
    ret = 80 if n >= 3
    ret = 100 if n >= 4
    ret = 120 if n >= 5
    return ret
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    return damagemult if @battle.FE != :DEEPEARTH
    damagemult *= 2.0 if opponent.effects[:Minimize]
    return damagemult
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    for i in 1..7
      opponent.stages[i] = -opponent.stages[i]
    end
    @battle.pbDisplay(_INTL("{1} inverted {2}'s stat changes!", attacker.pbThis, opponent.pbThis(true)))
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if !Rejuv && !attacker.hasWorkingItem(:EVERSTONE) && @battle.canChangeFE?
      duration = 3
      duration = 6 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
      @battle.setField(:INVERSE, duration)
      @battle.pbDisplay(_INTL("The terrain was inverted!"))
    end
  end
end

################################################################################
# Makes the target Grass Type (Forest's Curse)
################################################################################
class PokeBattle_Move_143 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if [:MULTITYPE, :RKSSYSTEM].include?(opponent.ability) || opponent.crested == :SILVALLY || (opponent.type1 == :GRASS && opponent.type2 == nil)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.type1 = :GRASS
    opponent.type2 = nil
    typename = getTypeName(:GRASS)
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", opponent.pbThis, typename))
    if [:FOREST, :FAIRYTALE, :BEWITCHED].include?(@battle.FE)
      if !opponent.effects[:Curse]
        opponent.effects[:Curse] = true
        @battle.pbDisplay(_INTL("{1} laid a curse on {2}!", attacker.pbThis, opponent.pbThis(true)))
      end
    end
  end
end

################################################################################
# Makes the target Ghost Type- (Trick Or Treat)
################################################################################
class PokeBattle_Move_144 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if [:MULTITYPE, :RKSSYSTEM].include?(opponent.ability) || opponent.crested == :SILVALLY || (opponent.type1 == :GHOST && opponent.type2 == nil)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.type1 = :GHOST
    opponent.type2 = nil
    typename = getTypeName(:GHOST)
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", opponent.pbThis, typename))
  end
end

################################################################################
# All active Pokemon can no longer switch out or flee during the next turn. (Fairy Lock)
################################################################################
class PokeBattle_Move_145 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if @battle.state.effects[:FairyLock] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.state.effects[:FairyLock] = 2
    @battle.pbDisplay(_INTL("No one will be able to run away during the next turn!"))
  end
end

################################################################################
# If the user or any allies have Plus or Minus as their ability, raise their
#   Defense and Special Defense by one stage. (Magnetic Flux)
################################################################################
class PokeBattle_Move_146 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?

      return true if ([:PLUS, :MINUS].include?(i.ability) || (Rejuv && @battle.FE == :ELECTERRAIN)) &&
                     i.pbCanIncreaseAnyStat?([PBStats::DEFENSE, PBStats::SPDEF], false)
    end

    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?
      next if ![:PLUS, :MINUS].include?(i.ability) && !(Rejuv && @battle.FE == :ELECTERRAIN)
      next if !i.pbCanIncreaseAnyStat?([PBStats::DEFENSE, PBStats::SPDEF], false)

      statboost = 1
      statboost = 2 if @battle.FE == :DEEPEARTH || (Rejuv && @battle.FE == :ELECTERRAIN && [:PLUS, :MINUS].include?(i.ability))
      i.pbIncreaseStat(PBStats::DEFENSE, statboost, statsource: attacker)
      i.pbIncreaseStat(PBStats::SPDEF, statboost, statsource: attacker)
    end
  end
end

################################################################################
# If the opponent dies, increase attack by 3 stages (Fell Stinger)
################################################################################
class PokeBattle_Move_147 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.isFainted?
      attacker.pbIncreaseStat(PBStats::ATTACK, 3, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# Ion Deluge
################################################################################
class PokeBattle_Move_148 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if @battle.state.effects[:IonDeluge] == true
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.pbDisplay(_INTL("A deluge of ions showers the battlefield!"))
    @battle.state.effects[:IonDeluge] = true
    if !attacker.hasWorkingItem(:EVERSTONE) && @battle.canChangeFE?(:ELECTERRAIN)
      duration = 3
      duration = 6 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
      @battle.setField(:ELECTERRAIN, duration)
      @battle.pbDisplay(_INTL("The terrain became electrified!"))
    end
  end
end

################################################################################
# Crafty Shield
################################################################################
class PokeBattle_Move_149 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:CraftyShield] = true
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} protected its team!", attacker.pbThis))
    if @battle.FE == :FAIRYTALE # Fairy Tale Field
      @battle.pbDisplay(_INTL("{1} boosted its defenses with the shield!", attacker.pbThis))
      attacker.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
      attacker.pbIncreaseStat(PBStats::SPDEF, 1, abilitymessage: false, statsource: attacker)
    end
  end
end

################################################################################
# Flower Shield
################################################################################
class PokeBattle_Move_150 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return false if !opponent.hasType?(:GRASS) && opponent != attacker # this target is not affected by the move, next
    unless @battle.FE == :FAIRYTALE || @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5)
      if !@battle.battlers.any?{ |target| target.hasType?(:GRASS) }
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    return false if !opponent.hasType?(:GRASS) && @battle.FE != :FAIRYTALE && !@battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5) # user itself isn't affected
    if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5)
      return opponent.pbCanIncreaseAnyStat?([PBStats::DEFENSE, PBStats::SPDEF], showMessage)
    end
    return opponent.pbCanIncreaseStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.hasType?(:GRASS) || @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5)
      if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5)
        stat = @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 5) ? 2 : 1
        opponent.pbIncreaseStat(PBStats::DEFENSE, stat, abilitymessage: false, statsource: attacker)
        opponent.pbIncreaseStat(PBStats::SPDEF, stat, abilitymessage: false, statsource: attacker)
      else
        opponent.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
      end
    elsif opponent == attacker
      if @battle.FE == :FAIRYTALE && !opponent.hasType?(:GRASS) # Fairy Tale Field
        @battle.pbDisplay(_INTL("{1} boosted its defenses with the shield!", opponent.pbThis))
        opponent.pbIncreaseStat(PBStats::DEFENSE, 1, abilitymessage: false, statsource: attacker)
        opponent.pbIncreaseStat(PBStats::SPDEF, 1, abilitymessage: false, statsource: attacker)
      end
    end
  end
end

################################################################################
# Boosts Attack and Sp. Atk of all Grass-types Pokémon in the field (Rototiller)
################################################################################
class PokeBattle_Move_151 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return false if (!opponent.hasType?(:GRASS) || opponent.isAirborne?) && opponent != attacker # this target is not affected by the move, next
    unless @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN)
      if !@battle.battlers.any?{ |target| target.hasType?(:GRASS) && !target.isAirborne? }
        @battle.pbDisplay(_INTL("But it failed!")) if showMessage
        return false
      end
    end
    return false if (!opponent.hasType?(:GRASS) || opponent.isAirborne?) && !@battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN) # user itself isn't affected
    return opponent.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statboost = 1
    statboost = 2 if @battle.FE == :DEEPEARTH || @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN)
    opponent.pbIncreaseStat(PBStats::SPATK, statboost, abilitymessage: false, statsource: attacker)
    opponent.pbIncreaseStat(PBStats::ATTACK, statboost, abilitymessage: false, statsource: attacker)
  end
end

################################################################################
# Powder
################################################################################
class PokeBattle_Move_152 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Powder]
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    @battle.pbDisplay(_INTL("{1} was covered in a thin powder!", opponent.pbThis))
    opponent.effects[:Powder] = true
  end
end

################################################################################
# Next move used by the target becomes Electric-type (Electrify)
################################################################################
class PokeBattle_Move_153 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Electrify] == true || @battle.battlerActed?(opponent.index)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Electrify] = true
    @battle.pbDisplay(_INTL("{1} became electrified!", opponent.pbThis))
    if Rejuv && @battle.FE == :ELECTERRAIN &&
       !(opponent.ability == :MULTITYPE || opponent.ability == :RKSSYSTEM || opponent.crested == :SILVALLY)
      opponent.type1 = :ELECTRIC
      opponent.type2 = nil
      typename = getTypeName(:ELECTRIC)
      @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", opponent.pbThis, typename))
    end
  end
end

################################################################################
# Mat Block
################################################################################
class PokeBattle_Move_154 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.turncount != 1
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if attacker.pbOwnSide.effects[:MatBlock]
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:MatBlock] = true
    @battle.pbDisplay(_INTL("{1} kicked up a mat to protect its team!", attacker.pbThis))
  end
end

################################################################################
# Traps the target but isn't affected by Sheer Force. (Thousand Waves)
################################################################################
class PokeBattle_Move_155 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return if opponent.hp <= 0 || opponent.effects[:MeanLook] != -1 || opponent.effects[:Substitute] > 0 || opponent.hasType?(:GHOST)
    opponent.effects[:MeanLook] = attacker.index
    @battle.pbDisplay(_INTL("{1} can't escape now!", opponent.pbThis))
  end
end

################################################################################
# Traps the target, affected by Sheer Force. (Spirit Shackle, Anchor Shot)
################################################################################
class PokeBattle_Move_156 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    return if opponent.hp <= 0 || opponent.effects[:MeanLook] != -1 || opponent.effects[:Substitute] > 0 || opponent.hasType?(:GHOST)
    opponent.effects[:MeanLook] = attacker.index
    @battle.pbDisplay(_INTL("{1} can't escape now!", opponent.pbThis))
  end
end

###############################################################################
# Always hits, ignores protection, and lowers defense. Cannot be used by
# any Pokemon other than Hoopa-Unbound. (Hyperspace Fury)
###############################################################################
class PokeBattle_Move_159 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.species == :HOOPA
      if attacker.form == 1
        return true
      end

      # hoopa not in unbound form
      @battle.pbDisplay(_INTL("Hoopa can't use the move as it is now!"))
      return false
    end
    # Angel of death
    if Rejuv && attacker.species == :GARDEVOIR && attacker.form == 3
      return true
    end

    # any non-hoopa Pokemon
    @battle.pbDisplay(_INTL("But {1} can't use the move!", attacker.pbThis))
    return false
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Protect] = false
    opponent.pbOwnSide.effects[:CraftyShield] = false
    opponent.pbOwnSide.effects[:WideGuard] = false
    opponent.pbOwnSide.effects[:QuickGuard] = false
    opponent.pbOwnSide.effects[:MatBlock] = false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Dummy Move Effect
################################################################################
class PokeBattle_Move_15A < PokeBattle_Move
end

############################################################################################################
# For 5 rounds if hailing, lowers power of physical & special attacks against the user's side. (Aurora Veil)
############################################################################################################
class PokeBattle_Move_15B < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    return true if [:DARKCRYSTALCAVERN, :RAINBOW, :ICY, :CRYSTALCAVERN, :SNOWYMOUNTAIN, :MIRROR, :STARLIGHT, :FROZENDIMENSION].include?(@battle.FE)
    return true if @battle.weather == :HAIL && !@battle.pbCheckGlobalAbility(:AIRLOCK) && !@battle.pbCheckGlobalAbility(:CLOUDNINE)
    @battle.pbDisplay(_INTL("But it failed!"))
    return false
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if attacker.pbOwnSide.effects[:AuroraVeil] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbOwnSide.effects[:AuroraVeil] = 5
    attacker.pbOwnSide.effects[:AuroraVeil] = 8 if attacker.hasWorkingItem(:LIGHTCLAY)
    attacker.pbOwnSide.effects[:AuroraVeil] = 8 if @battle.FE == :MIRROR
    if !@battle.pbIsOpposing?(attacker.index)
      @battle.pbDisplay(_INTL("An Aurora is protecting your team!"))
    else
      @battle.pbDisplay(_INTL("An Aurora is protecting the opposing team!"))
    end
    attacker.pbIncreaseStat(PBStats::EVASION, 1, abilitymessage: false, statsource: attacker) if @battle.FE == :MIRROR
  end
end

################################################################################
# Baneful Bunker
################################################################################
class PokeBattle_Move_15C < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if @battle.pbRandom(3 ** attacker.effects[:ProtectRate]) != 0
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Protect] = :BanefulBunker
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} shielded itself against damage!", attacker.pbThis))
  end
end

################################################################################
# Beak Blast
################################################################################
class PokeBattle_Move_15D < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:BeakBlast] = false
  end
end

################################################################################
# Burn Up
################################################################################
class PokeBattle_Move_15E < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !attacker.hasType?(:FIRE) || attacker.effects[:BurnUp]
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffectAfterMove(attacker, alltargets, hitflags)
    attacker.effects[:BurnUp] = true
    if attacker.type1 == :FIRE
      if attacker.type2.nil?
        attacker.type1 = :QMARKS
      else
        attacker.type1 = attacker.type2
      end
    end
    if attacker.type2 == :FIRE
      attacker.type2 = nil
    end
    @battle.pbDisplay(_INTL("{1} was burnt out!", attacker.pbThis))
  end
end

################################################################################
# Decreases the user's Defense by 1 stage. (Clanging Scales)
################################################################################
class PokeBattle_Move_15F < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Core Enforcer
################################################################################
class PokeBattle_Move_160 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.hasMovedThisRound? && !@battle.switchedOut[opponent.index]
      if !PBStuff::FIXEDABILITIES.include?(opponent.ability) && !opponent.effects[:GastroAcid]
        @battle.pbDisplay(_INTL("{1}'s Ability was suppressed!", opponent.pbThis))
        opponent.changeAbility(:suppress) # Cancel out ability
        opponent.effects[:GastroAcid] = true
      end
    end
  end
end

################################################################################
# Fails if this isn't the user's first turn. (First Impression)
################################################################################
class PokeBattle_Move_161 < PokeBattle_Move
  def canProtect?
    return false if @battle.FE == :COLOSSEUM
    return super
  end

  def pbOnStartUse(attacker, targets)
    if attacker.turncount != 1 || !attacker.isFirstMoveOfRound
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end
end

################################################################################
# Heals target by an amount depending on the terrain. (Floral Healing)
################################################################################
class PokeBattle_Move_162 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:HealBlock] > 0
      @battle.pbDisplay(_INTL("{1} was prevented from healing!", opponent.pbThis)) if showMessage
      return false
    end
    if attacker.hp == attacker.totalhp
      @battle.pbDisplay(_INTL("{1}'s HP is full!", attacker.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if [:GRASSY, :FAIRYTALE].include?(@battle.FE) ||
       @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 5) # Grassy Terrain, Fairytale Field, Flower Garden Field
      hpgain = (opponent.totalhp).floor
    else
      hpgain = (opponent.totalhp / 2.0).floor
    end
    opponent.pbRecoverHP(hpgain, true)
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", opponent.pbThis))
    if [:CORROSIVE, :CORROSIVEMIST].include?(@battle.FE) # Corrosive/Corrosive Mist Field
      if opponent.pbCanPoison?(true)
        opponent.pbPoison(attacker)
        @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
      end
    end
  end
end

################################################################################
# If the any allies have Plus or Minus as their ability, raise their
#   Attack and Special Attack by one stage. (Gear Up)
################################################################################
class PokeBattle_Move_163 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?

      return true if [:PLUS, :MINUS].include?(i.ability) &&
                     i.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], false)
    end

    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?
      next if ![:PLUS, :MINUS].include?(i.ability)
      next if !i.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], false)

      statboost = 1
      statboost = 2 if @battle.FE == :FACTORY
      i.pbIncreaseStat(PBStats::ATTACK, statboost, statsource: attacker)
      i.pbIncreaseStat(PBStats::SPATK, statboost, statsource: attacker)
    end
  end
end

################################################################################
# Instruct
################################################################################
class PokeBattle_Move_164 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    otherid = opponent.lastMoveUsed
    choice = opponent.lastMoveChoice # This is needed because it should target the same opponent as before, and use the same moveslot.
    begin
      if !choice || choice[1] < 0 || !choice[2] || opponent.moves[choice[1]].move != choice[2].move || choice[2].move != otherid ||
         PBStuff::BLACKLISTS[:INSTRUCT].include?(otherid) || choice[2].zmove || PBStuff::DELAYEDMOVE.include?(@battle.choices[opponent.index][2].move)
        @battle.pbDisplay(_INTL("But it failed!"))
        return false
      end
    rescue
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    choice = opponent.lastMoveChoice # This is needed because it should target the same opponent as before, and use the same moveslot.
    @battle.pbDisplay(_INTL("{1} instructed {2}!", attacker.pbThis, opponent.pbThis(true)))
    opponent.pbUseMove(choice, { instructed: true, specialusage: false }) # TODO: test whether specialusage should be true or false.
  end
end

################################################################################
# Ensures the next hit is critical. (Laser Focus)
################################################################################
class PokeBattle_Move_165 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:LaserFocus] = 2
    @battle.pbDisplay(_INTL("{1} is focused!", attacker.pbThis))
  end
end

################################################################################
# Moldbreaking moves (Sunsteel Strike/Moongeist Beam)
################################################################################
class PokeBattle_Move_166 < PokeBattle_Move
  # handled elsewhere
end

################################################################################
# Pollen Puff
################################################################################
class PokeBattle_Move_167 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if opponent != attacker.pbPartner

    if opponent.effects[:HealBlock] > 0
      @battle.pbDisplay(_INTL("{1} was prevented from healing!", opponent.pbThis)) if showMessage
      return false
    end
    if opponent.hp == opponent.totalhp
      @battle.pbDisplay(_INTL("{1}'s HP is full!", opponent.pbThis)) if showMessage
      return false
    end

    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    return unless attacker.pbPartner == opponent

    hpgain = [(opponent.totalhp / 2).floor, 1].max
    opponent.pbRecoverHP(hpgain, true)
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", opponent.pbThis))
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if opponent == attacker.pbPartner
    return super
  end
end

################################################################################
# Psychic Terrain
################################################################################
class PokeBattle_Move_168 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true if !Rejuv && @battle.canChangeFE?(:PSYTERRAIN)
    return true if Rejuv && @battle.canChangeFE?([:PSYTERRAIN, :DRAGONSDEN]) && @battle.state.effects[:PSYTERRAIN] <= 0
    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    duration = 5
    duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setField(:PSYTERRAIN, duration)
    @battle.pbDisplay(_INTL("The terrain became mysterious!"))
  end
end

################################################################################
# Heals target by 1/4 of its max HP & removes status conditions. (Purify)
################################################################################
class PokeBattle_Move_169 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    if opponent.status.nil?
      @battle.pbDisplay(_INTL("{1} is already healthy!", opponent.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.status = nil
    opponent.statusCount = 0
    @battle.pbDisplay(_INTL("{1} was purified!", opponent.pbThis))
    if attacker.hp != attacker.totalhp
      hpgain = ((attacker.totalhp) / 2).floor
      attacker.pbRecoverHP(hpgain, true)
      @battle.pbDisplay(_INTL("{1} healed itself!", attacker.pbThis))
    end
  end
end

################################################################################
# Type depends on the user's. (Revelation Dance)
################################################################################
class PokeBattle_Move_16A < PokeBattle_Move
  def pbType(attacker, type = @type)
    type = attacker.type1
    return super(attacker, type)
  end
end

#################################################################################
# Shell Trap
################################################################################
class PokeBattle_Move_16B < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    # if the shell trap effect is still on the user when the move should be used then no one triggered the trap, the move fails
    if !attacker.effects[:ShellTrapAttacked]
      attacker.effects[:ShellTrap] = false
      @battle.pbDisplay(_INTL("{1}'s Shell Trap didn't work.", attacker.name))
      return false
    end
    return true
  end
end

################################################################################
# Heals user by an amount depending on the weather. (Shore Up)
################################################################################
class PokeBattle_Move_16C < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return true unless attacker.hp == attacker.totalhp

    @battle.pbDisplay(_INTL("{1}'s HP is full!", attacker.pbThis)) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.FE == :ASHENBEACH
      hpgain = attacker.totalhp.floor
    elsif @battle.pbWeather == :SANDSTORM || @battle.FE == :DESERT
      hpgain = (attacker.totalhp * 2 / 3.0).floor
    else
      hpgain = (attacker.totalhp / 2.0).floor
    end
    attacker.pbRecoverHP(hpgain, true)
    @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis))
    if [:WATERSURFACE, :MURKWATERSURFACE].include?(@battle.FE) && attacker.ability == :WATERCOMPACTION
      if attacker.pbIncreaseStatBasic(PBStats::DEFENSE, 2)
        @battle.pbCommonAnimation("StatUp", attacker, nil)
        @battle.pbDisplay(_INTL("{1}'s Water Compaction sharply raised its Defense!", attacker.pbThis, getAbilityName(attacker.ability)))
      end
    end
  end
end

################################################################################
# Cures the target's burn (Sparkling Aria)
################################################################################
class PokeBattle_Move_16D < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    opponent.pbCureStatus if opponent.status == :BURN
  end
end

################################################################################
# Spectral Thief.
################################################################################
class PokeBattle_Move_16E < PokeBattle_Move
  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    stolen = false
    totalboost = 0
    for i in 1..7
      if opponent.stages[i] > 0
        oppboost = opponent.stages[i]
        oppboost *= 2 if attacker.ability == :SIMPLE
        oppboost *= -1 if attacker.ability == :CONTRARY
        initial = attacker.stages[i]
        attacker.stages[i] += oppboost
        attacker.stages[i] = attacker.stages[i].clamp(-6, 6)
        totalboost += attacker.stages[i] - initial
        opponent.stages[i] = 0
        stolen = true
      end
    end
    @battle.pbDisplay(_INTL("{1} stole {2}'s stat boosts!", attacker.pbThis, opponent.pbThis(true))) if stolen
    if totalboost > 0
      @battle.pbCommonAnimation("StatUp", attacker, nil)
    elsif totalboost < 0
      @battle.pbCommonAnimation("StatDown", attacker, nil)
    end
    return super
  end
end

################################################################################
# Swaps the user's & target's speeds (Speed Swap)
################################################################################
class PokeBattle_Move_16F < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    aSwap = attacker.effects[:SpeedSwap]
    oSwap = opponent.effects[:SpeedSwap]
    if oSwap == 0
      attacker.effects[:SpeedSwap] = opponent.speed
    else
      attacker.effects[:SpeedSwap] = oSwap
    end
    if aSwap == 0
      opponent.effects[:SpeedSwap] = attacker.speed
    else
      opponent.effects[:SpeedSwap] = aSwap
    end
    @battle.pbDisplay(_INTL("{1} swapped speeds with {2}!", attacker.pbThis, opponent.pbThis))
  end
end

################################################################################
# This round, target becomes the target of attacks that have single targets. (Spotlight)
################################################################################
class PokeBattle_Move_170 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !@battle.doublebattle
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:FollowMe] = true
    if !opponent.pbPartner.isFainted?
      opponent.pbPartner.effects[:FollowMe] = false
      opponent.pbPartner.effects[:RagePowder] = false
    end
    if @battle.FE == :BIGTOP # Big Top Arena
      attacker.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: false, statsource: attacker)
      attacker.pbIncreaseStat(PBStats::SPATK, 1, abilitymessage: false, statsource: attacker)
      opponent.pbIncreaseStat(PBStats::ATTACK, 1, abilitymessage: false, statsource: attacker)
      opponent.pbIncreaseStat(PBStats::SPATK, 1, abilitymessage: false, statsource: attacker)
    end
    @battle.pbDisplay(_INTL("{1} became the center of attention!", opponent.pbThis))
  end
end

################################################################################
# Power is doubled if the user's previous move failed (Stomping Tantrum)
################################################################################
class PokeBattle_Move_171 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if attacker.effects[:Tantrum]
      return basedmg * 2
    end

    return basedmg
  end
end

################################################################################
# Strength Sap
################################################################################
class PokeBattle_Move_172 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceStatStage?(PBStats::ATTACK, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    statstage = opponent.stages[PBStats::ATTACK]
    hpgain = opponent.attack * PBStats::StageMul[statstage + 6]
    if Rejuv && @battle.FE == :GRASSY
      hpgain = (hpgain * 1.6).floor if attacker.hasWorkingItem(:BIGROOT)
    else
      hpgain = (hpgain * 1.3).floor if attacker.hasWorkingItem(:BIGROOT)
    end
    hpgain = (hpgain * 1.3).floor if attacker.crested == :SHIINOTIC
    hpgain = (hpgain * 1.3).floor if @battle.FE == :SWAMP && !Rejuv # Swamp Field
    hpgain = (hpgain * 1.3).floor if @battle.FE == :FOREST # Forest Field

    opponent.pbReduceStat(PBStats::ATTACK, 1, abilitymessage: false, statdropper: attacker)
    opponent.pbReduceStat(PBStats::SPATK, 1, abilitymessage: false, statdropper: attacker) if @battle.FE == :BEWITCHED
    if Rejuv && @battle.FE == :SWAMP
      stat = @battle.sample([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED])
      opponent.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
    end
    if attacker.hp != attacker.totalhp
      attacker.pbRecoverHP(hpgain, true)
      @battle.pbDisplay(_INTL("{1}'s HP was restored.", attacker.pbThis))
    end
  end
end

################################################################################
# Throat Chop
################################################################################
class PokeBattle_Move_173 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    opponent.effects[:ThroatChop] = 2 if !opponent.damagestate.substitute
  end
end

################################################################################
# Toxic Thread
################################################################################
class PokeBattle_Move_174 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return opponent.pbCanReduceStatStage?(PBStats::SPEED, showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbReduceStat(PBStats::SPEED, 1, abilitymessage: false, statdropper: attacker)
    return if !opponent.pbCanPoison?(true)
    if @battle.FE == :CORRUPTED
      opponent.pbPoison(attacker, true)
      @battle.pbDisplay(_INTL("{1} is badly poisoned!", opponent.pbThis))
    else
      opponent.pbPoison(attacker)
      @battle.pbDisplay(_INTL("{1} is poisoned!", opponent.pbThis))
    end
  end
end

################################################################################
# User takes half their HP as recoil (Mind Blown/Steel Beam/Chloroblast)
################################################################################
class PokeBattle_Move_175 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    bearer = @battle.pbCheckGlobalAbility(:DAMP)
    if bearer && !bearer.moldbroken && @move == :MINDBLOWN
      @battle.pbDisplay(_INTL("{1}'s {2} prevents {3} from using {4}!", bearer.pbThis, getAbilityName(bearer.ability), attacker.pbThis(true), @name))
      return false
    end
    return true
  end

  def pbRecoilDamage(attacker, damage, recoilmult, hitflags, numhits)
    return if [:MAGICGUARD].include?(attacker.ability)
    return if attacker.ability == :WONDERGUARD && @battle.FE == :COLOSSEUM
    recoilmult = 0.5 # the recoil multiplier cannot be given to these moves as a moveattribute as this attribute is used to check for the ability Reckless
    recoilmult = 0.25 if (@battle.FE == :FACTORY && @move == :STEELBEAM) || (@battle.FE == :FOREST && @move == :CHLOROBLAST)
    recoilmult = 1.0 if  @battle.FE == :SHORTCIRCUIT && @move == :STEELBEAM
    recoildamage = [1, (attacker.totalhp * recoilmult).ceil].max
    recoildamage *= numhits
    attacker.pbReduceHP(recoildamage)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :CHLOROBLAST
      @battle.pbAnimation(:SOLARBEAM, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Photon Geyser
################################################################################
class PokeBattle_Move_176 < PokeBattle_Move
  # Moldbreaking handled elsewhere
  def pbIsPhysical?(attacker, type = @type)
    # Physical Stuff
    storedatk = attacker.attack
    atkmult = 1.0

    atkstage = attacker.stages[PBStats::ATTACK] + 6
    atkmult *= 1.5 if attacker.hasWorkingItem(:CHOICEBAND)
    atkmult *= 1.5 if attacker.ability == :HUSTLE
    atkmult *= 1.5 if attacker.ability == :TOXICBOOST && (attacker.status == :POISON || @battle.FE == :CORROSIVEMIST || ([:CORROSIVE, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE) && !attacker.isAirborne?))
    atkmult *= 1.5 if attacker.ability == :GUTS && !attacker.status.nil?
    atkmult *= 0.5 if attacker.ability == :SLOWSTART && attacker.turncount < 5 && @battle.FE != :DEEPEARTH
    atkmult *= 2 if (attacker.ability == :PUREPOWER && @battle.FE != :PSYTERRAIN) || attacker.ability == :HUGEPOWER
    atkmult *= 2 if attacker.hasWorkingItem(:THICKCLUB) && (attacker.pokemon.species == :CUBONE || attacker.pokemon.species == :MAROWAK)
    atkmult *= 0.5 if attacker.status == :BURN && !(attacker.ability == :GUTS && !attacker.status.nil?)

    storedatk *= PBStats::StageMul[atkstage] * atkmult
    # Special Stuff
    storedspatk = attacker.spatk
    spatkmult = 1.0

    spatkstage = attacker.stages[PBStats::SPATK] + 6
    spatkmult *= 1.5 if attacker.hasWorkingItem(:CHOICESPECS)
    spatkmult *= 2 if attacker.hasWorkingItem(:DEEPSEATOOTH) && attacker.pokemon.species == :CLAMPERL
    spatkmult *= 2 if attacker.hasWorkingItem(:LIGHTBALL) && attacker.pokemon.species == :PIKACHU
    spatkmult *= 1.5 if attacker.ability == :FLAREBOOST && (attacker.status == :BURN || [:BURNING, :VOLCANIC, :INFERNAL].include?(@battle.FE)) && @battle.FE != :FROZENDIMENSION
    spatkmult *= 1.5 if attacker.ability == :MINUS && (attacker.pbPartner.ability == :PLUS || @battle.FE == :SHORTCIRCUIT || (Rejuv && @battle.FE == :ELECTERRAIN)) || @battle.state.effects[:ELECTERRAIN] > 0
    spatkmult *= 1.5 if attacker.ability == :PLUS && (attacker.pbPartner.ability == :MINUS || @battle.FE == :SHORTCIRCUIT || (Rejuv && @battle.FE == :ELECTERRAIN)) || @battle.state.effects[:ELECTERRAIN] > 0
    spatkmult *= 1.5 if attacker.ability == :SOLARPOWER && (@battle.pbWeather == :SUNNYDAY && !attacker.hasWorkingItem(:UTILITYUMBRELLA)) && @battle.FE != :FROZENDIMENSION
    spatkmult *= 1.3 if attacker.pbPartner.ability == :BATTERY
    spatkmult *= 2 if attacker.ability == :PUREPOWER && @battle.FE == :PSYTERRAIN

    storedspatk *= PBStats::StageMul[spatkstage] * spatkmult
    storedspatk = attacker.getSpecialStat if @battle.FE == :GLITCH
    # Final selection
    return storedatk > storedspatk
  end

  def pbIsSpecial?(attacker, type = @type)
    return !pbIsPhysical?(attacker, type)
  end
end

################################################################################
# Plasma Fists
################################################################################
class PokeBattle_Move_177 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.state.effects[:IonDeluge] != true
      @battle.pbDisplay(_INTL("A deluge of ions showers the battlefield!"))
      @battle.state.effects[:IonDeluge] = true
    end
    if !attacker.hasWorkingItem(:EVERSTONE) && @battle.canChangeFE?(:ELECTERRAIN)
      duration = 3
      duration = 6 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
      @battle.setField(:ELECTERRAIN, duration)
      @battle.pbDisplay(_INTL("The terrain became electrified!"))
    end
  end
end

# New Gen 8 effects starting below here

################################################################################
# Extra Damage against Dynamax (Dynamax Cannon, Behemoth Blade, Behemoth Bash)
################################################################################
class PokeBattle_Move_178 < PokeBattle_Move
  # no extra effect because we don't have dynamax
end

################################################################################
# Ignores any redirection attempts (Snipe Shot)
################################################################################
class PokeBattle_Move_179 < PokeBattle_Move
  # handled in pbChangeTarget
end

################################################################################
# Eats Berry and then Sharply Raises Defense (Stuff Cheeks)
################################################################################
class PokeBattle_Move_17A < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.item.nil? || !pbIsBerry?(attacker.item) || attacker.pokemon.corrosiveGas
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseStatStage?(PBStats::DEFENSE, showMessage)
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    # stuff cheeks doesn't need it's own animation it gets the animation from eating the berry
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    berry = attacker.item
    attacker.item = nil
    attacker.pokemon.itemRecycle = berry
    attacker.pokemon.itemInitial = nil if attacker.pokemon.itemInitial == berry
    @battle.pbDisplay(_INTL("{1} ate its {2}!", attacker.pbThis, getItemName(berry)))
    attacker.pbUseBerry(berry, true)
    attacker.pbIncreaseStat(PBStats::DEFENSE, 2, statsource: attacker)
  end
end

################################################################################
# Boosts all stats and prevents switching out (No Retreat)
################################################################################
class PokeBattle_Move_17B < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.effects[:NoRetreat]
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if !attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED], false)
      @battle.pbDisplay(_INTL("{1}'s stats won't go any higher!", attacker.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    if @battle.FE == :CHESS
      for stat in [PBStats::DEFENSE, PBStats::SPDEF]
        attacker.pbReduceStat(stat, 1, statdropper: attacker)
      end
      for stat in [PBStats::ATTACK, PBStats::SPATK, PBStats::SPEED]
        attacker.pbIncreaseStat(stat, 2, statsource: attacker)
      end
    else
      boost = 1
      boost = 2 if @battle.FE == :COLOSSEUM
      for stat in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED]
        attacker.pbIncreaseStat(stat, boost, statsource: attacker)
      end
    end
    if attacker.effects[:MeanLook] == -1
      # This flag is intentionally always set even if the user is a ghost type. It becomes unable to switch when Soaked.
      attacker.effects[:MeanLook] = attacker.index
      @battle.pbDisplay(_INTL("{1} can no longer escape!", attacker.pbThis))
      attacker.effects[:NoRetreat] = true
    end
  end
end

################################################################################
# Lowers Speed and Forces Fire Weakness (Tar Shot)
################################################################################
class PokeBattle_Move_17C < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:TarShot] == true && !opponent.pbCanReduceStatStage?(PBStats::SPEED, false)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbReduceStat(PBStats::SPEED, 1, statdropper: attacker)
    if opponent.effects[:TarShot] == false
      opponent.effects[:TarShot] = true
      @battle.pbDisplay(_INTL("{1} was covered in flammable tar!", opponent.pbThis))
    end
    if [:MURKWATERSURFACE, :CORRUPTED].include?(@battle.FE)
      if opponent.pbCanPoison?(true)
        opponent.pbPoison(attacker)
        @battle.pbDisplay(_INTL("{1} is poisoned!", opponent.pbThis))
      end
    end
  end
end

################################################################################
# Target becomes Psychic type. (Magic Powder)
################################################################################
class PokeBattle_Move_17D < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if [:MULTITYPE, :RKSSYSTEM].include?(opponent.ability) || opponent.crested == :SILVALLY || (opponent.type1 == :PSYCHIC && opponent.type2 == nil)
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.type1 = :PSYCHIC
    opponent.type2 = nil
    typename = getTypeName(:PSYCHIC)
    @battle.pbDisplay(_INTL("{1} transformed into the {2} type!", opponent.pbThis, typename))
    if [:HAUNTED, :BEWITCHED].include?(@battle.FE) && opponent.pbCanSleep?(true)
      opponent.pbSleep
      @battle.pbDisplay(_INTL("{1} was put to sleep!", opponent.pbThis))
    end
  end
end

################################################################################
# Dragon Darts (Dragon Darts)
################################################################################
class PokeBattle_Move_17E < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    # Prevent third dart in case first dart killed an opponent in doubles.
    # return 1 if attacker.midwayThroughMove
    return 2 if attacker.missAcc

    return (pbDragonDartTargetting(attacker).length % 2) + 1
  end
end

################################################################################
# All pokemon eat their berries (Teatime)
################################################################################
class PokeBattle_Move_17F < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for mons in @battle.battlers
      if !mons.item.nil? && pbIsBerry?(mons.item)
        ourberry = mons.item
        itemname = getItemName(ourberry)
        mons.item = nil
        mons.pokemon.itemRecycle = ourberry
        mons.pokemon.itemInitial = nil if mons.pokemon.itemInitial == ourberry
        @battle.pbDisplay(_INTL("{1} ate its {2}!", mons.pbThis, itemname))
        mons.pbUseBerry(ourberry, true)
      end
    end
  end
end

################################################################################
# Traps target and lowers defenses every turn (Octolock)
################################################################################
class PokeBattle_Move_180 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.hasType?(:GHOST)
      @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis(true))) if showMessage
      return false
    end
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    if opponent.effects[:Octolock] >= 0
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.effects[:Octolock] = attacker.index
    @battle.pbDisplay(_INTL("{1} was caught in the Octolock!", opponent.pbThis))
  end
end

################################################################################
# Double Damage if this pokemon moves before target (Fishious Rend, Bolt Beak)
################################################################################
class PokeBattle_Move_181 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if !opponent.hasMovedThisRound? || @battle.switchedOut[opponent.index]
      return basedmg * 2
    end

    return basedmg
  end
end

################################################################################
# Swaps effects between the sides of the field (Court Change)
################################################################################
class PokeBattle_Move_182 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    sideOneEffects = attacker.pbOwnSide.effects
    sideTwoEffects = attacker.pbOpposingSide.effects
    attacker.pbOwnSide.effects = sideTwoEffects
    attacker.pbOpposingSide.effects = sideOneEffects
    @battle.pbDisplay(_INTL("{1} swapped the battle effects affecting each side of the field!", attacker.pbThis))
  end
end

################################################################################
# Cuts HP to boost every stat (Clangorous Soul)
################################################################################
class PokeBattle_Move_183 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    clanglife = [(attacker.totalhp / 3.0).floor, 1].max
    clanglife = [(attacker.totalhp / 2.0).floor, 1].max if @battle.FE == :BIGTOP || @battle.ProgressiveFieldCheck(PBFields::CONCERT)
    if attacker.hp <= clanglife
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if !attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED], false)
      @battle.pbDisplay(_INTL("{1}'s stats won't go any higher!", attacker.pbThis)) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statboost = 1
    statboost = 2 if @battle.FE == :BIGTOP || @battle.ProgressiveFieldCheck(PBFields::CONCERT)
    for stat in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPATK, PBStats::SPDEF, PBStats::SPEED]
      attacker.pbIncreaseStat(stat, statboost, statsource: attacker)
    end
    clanglife = [(attacker.totalhp / 3.0).floor, 1].max
    clanglife = [(attacker.totalhp / 2.0).floor, 1].max if @battle.FE == :BIGTOP || @battle.ProgressiveFieldCheck(PBFields::CONCERT)
    attacker.pbReduceHP(clanglife)
  end
end

################################################################################
# Damages based off of defense rather than attack (Body Press)
################################################################################
class PokeBattle_Move_184 < PokeBattle_Move
  # Handled Elsewhere.
end

################################################################################
# Sharply Boosts target's offenses (Decorate)
################################################################################
class PokeBattle_Move_185 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if !opponent.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::SPATK], showMessage)
      return false
    end
    if opponent.effects[:Substitute] > 0
      @battle.pbDisplay(_INTL("It doesn't affect {1}...", opponent.pbThis(true))) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbIncreaseStat(PBStats::ATTACK, 2, statsource: attacker)
    opponent.pbIncreaseStat(PBStats::SPATK, 2, statsource: attacker)
  end
end

################################################################################
# Boosts Speed and Changes type based on forme (Aura Wheel)
################################################################################
class PokeBattle_Move_186 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if attacker.species != :MORPEKO
      @battle.pbDisplay(_INTL("But {1} can't use the move!", attacker.pbThis(true)))
      return false
    end
    return true
  end

  def pbType(attacker, type = @type)
    type = :DARK if attacker.form == 1 && attacker.species == :MORPEKO
    return super(attacker, type)
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if attacker.form == 1 && attacker.species == :MORPEKO
      @battle.pbAnimation(:AURAWHEELMINUS, attacker, opponent, hitnum) # dark type
    else
      @battle.pbAnimation(:AURAWHEEL, attacker, opponent, hitnum) # electric type
    end
  end

  def pbAdditionalEffectSelf(attacker)
    attacker.pbIncreaseStat(PBStats::SPEED, 1, abilitymessage: false, statsource: attacker)
  end
end

################################################################################
# Heals self and partner 1/4 of max hp (Life Dew)
################################################################################
class PokeBattle_Move_187 < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?

      noHeal = false
      if i == attacker.pbPartner && i.effects[:HealBlock] > 0
        @battle.pbDisplay(_INTL("{1} was prevented from healing!", i.pbThis))
        noHeal = true
      end
      if i.hp == i.totalhp && !noheal
        @battle.pbDisplay(_INTL("{1}'s HP is full!", i.pbThis))
        noHeal = true
      end
      if !noHeal
        hpgain = [(i.totalhp / 4).floor, 1].max
        hpgain = [(i.totalhp / 2).floor, 1].max if @battle.FE == :HOLY || (@battle.FE == :RAINBOW && i == attacker)
        i.pbRecoverHP(hpgain, true)
        @battle.pbDisplay(_INTL("{1}'s HP was restored.", i.pbThis))
      end
      if [:CORROSIVEMIST, :MURKWATERSURFACE].include?(@battle.FE)
        if i.pbCanPoison?(true)
          i.pbPoison(attacker)
          @battle.pbDisplay(_INTL("{1} was poisoned!", i.pbThis))
        end
      end
      if @battle.FE == :WATERSURFACE && i == attacker && !i.effects[:AquaRing]
        pbShowAnimation(:AQUARING, i, nil, hitnum, alltargets)
        i.effects[:AquaRing] = true
        @battle.pbDisplay(_INTL("{1} surrounded itself with a veil of water!", i.pbThis))
      end
    end
  end
end

################################################################################
# Protects and sharply lowers def if contact is made (Obstruct)
################################################################################
class PokeBattle_Move_188 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !PBStuff::RATESHARERS.include?(attacker.previousMove)
      attacker.effects[:ProtectRate] = 0
    end
    if @battle.movedLast?(attacker)
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    if @battle.pbRandom(3 ** attacker.effects[:ProtectRate]) != 0
      attacker.effects[:ProtectRate] = 0
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.effects[:Protect] = :Obstruct
    attacker.effects[:ProtectRate] += 1
    @battle.pbDisplay(_INTL("{1} shielded itself against damage!", attacker.pbThis))
  end
end

################################################################################
# Traps the user and the target. (Jaw Lock)
################################################################################
class PokeBattle_Move_189 < PokeBattle_Move
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    if opponent.effects[:MeanLook] < 0   && opponent.effects[:Substitute] < 1 &&
       !opponent.effects[:NoRetreat]     && attacker.effects[:MeanLook] < 0  &&
       attacker.effects[:Substitute] < 1 && !attacker.effects[:NoRetreat]
      opponent.effects[:MeanLook] = attacker.index
      attacker.effects[:MeanLook] = opponent.index
      @battle.pbDisplay(_INTL("{1} can't escape now!", opponent.pbThis))
      @battle.pbDisplay(_INTL("{1} can't escape now!", attacker.pbThis))
    end
  end
end

################################################################################
# Doubles the prize money received after battle (Happy Hour)
################################################################################
class PokeBattle_Move_18A < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.happyhour = true
    @battle.pbDisplay(_INTL("Everyone is caught up in the happy atmosphere!"))
  end
end

################################################################################
# Decreases the target's Defense by 1 stage. 1.5x power in Gravity (Grav Apple)
################################################################################
class PokeBattle_Move_18B < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end

  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 1.5 if @battle.state.effects[:Gravity] != 0
    return damagemult
  end
end

################################################################################
# Hits twice, may cause flinch. (Double Iron Bash)
################################################################################
class PokeBattle_Move_778 < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    return 2
  end

  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS &&
       !opponent.damagestate.substitute &&
       opponent.status != :SLEEP && opponent.status != :FROZEN
      opponent.effects[:Flinch] = true
      return true
    end
    return false
  end
end

################################################################################
# Destroys the terrain (Steel Roller)
################################################################################
class PokeBattle_Move_306 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    if !@battle.canChangeFE?(:INDOOR)
      @battle.pbDisplay(_INTL("But it failed!"))
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    duration = 5
    duration = 8 if attacker.hasWorkingItem(:AMPLIFIELDROCK)
    @battle.setField(:INDOOR, duration)
    @battle.pbDisplay(_INTL("The terrain was flattened!"))
  end
end

################################################################################
# Hits 2-5 times, boosts Speed and drops Defense (Scale Shot)
################################################################################
class PokeBattle_Move_307 < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    hitchances = [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5]
    ret = @battle.sample(hitchances)
    ret = 5 if attacker.ability == :SKILLLINK
    return ret
  end

  def pbEffectAfterMove(attacker, alltargets, hitflags)
    attacker.pbIncreaseStat(PBStats::SPEED, 1, abilitymessage: false, statsource: attacker)
    attacker.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end
end

################################################################################
# Two turn attack. Ups user's Special Attack by 1 stage first turn, attacks second
# turn. (Meteor Beam)
################################################################################
class PokeBattle_Move_308 < PokeBattle_Move
  def pbTwoTurnAttack(attacker, checking = false)
    @immediate = false
    if attacker.effects[:TwoTurnAttack] == 0
      @immediate = true if attacker.crested == :CLAYDOL
      if !@immediate && [:STARLIGHT, :NEWWORLD].include?(@battle.FE)
        @immediate = true
        @battle.pbDisplay(_INTL("{1} absorbed the starlight!", attacker.pbThis)) if @battle.FE == :STARLIGHT
      end
      if !@immediate && attacker.hasWorkingItem(:POWERHERB)
        @immediate = true
        if !checking
          itemname = getItemName(attacker.item)
          attacker.pbDisposeItem(false, true, true, true)
          @battle.pbDisplay(_INTL("{1} consumed its {2}!", attacker.pbThis, itemname))
        end
      end
    end

    return attacker.effects[:TwoTurnAttack] == 0
  end

  def pbAddTarget(targets, target, attacker)
    target = attacker if attacker.effects[:TwoTurnAttack] != 0
    return super(targets, target, attacker)
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    return 0 if attacker.effects[:TwoTurnAttack] != 0
    return super
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    attacker.pbIncreaseStat(PBStats::SPATK, 1, abilitymessage: false, statsource: attacker) if attacker.effects[:TwoTurnAttack] != 0
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    if attacker.effects[:TwoTurnAttack] != 0
      @battle.pbCommonAnimation("Meteor Beam charging", attacker, nil)
      @battle.pbDisplay(_INTL("{1} is overflowing with space power!", attacker.pbThis))
    else
      super
    end
  end
end

################################################################################
# Becomes physical if Atk does more than Sp. Atk. May poison target (Shell Side Arm)
################################################################################
class PokeBattle_Move_309 < PokeBattle_Move
  def contactMove?
    return true if @category == :physical

    return super
  end

  def pbEffect(attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    smartDamageCategory(attacker, opponent)

    return super(attacker, opponent, hitnum, alltargets, showanimation) if @basedamage > 0
  end

  def pbAdditionalEffect(attacker, opponent)
    return if opponent.damagestate.substitute

    if opponent.pbCanPoison?(false)
      opponent.pbPoison(attacker)
    end
  end
end

################################################################################
# Adds 1 to priority on Grassy Terrain (Grassy Glide)
################################################################################
class PokeBattle_Move_310 < PokeBattle_Move
  # Handled in Battle -> def setSpeedOrder
end

################################################################################
# Power doubles on Electric Terrain (Rising Voltage)
################################################################################
class PokeBattle_Move_311 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if (@battle.FE == :ELECTERRAIN || @battle.state.effects[:ELECTERRAIN] > 0) && !opponent.isAirborne?
      return basedmg * 2
    end

    return basedmg
  end
end

################################################################################
# Power is doubled in terrain. Type changes depending on the terrain.
# (Terrain Pulse)
################################################################################
class PokeBattle_Move_312 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if @battle.FE != :INDOOR
      return basedmg * 2
    end

    return basedmg
  end

  def pbType(attacker, type = @type)
    type = 0
    case @battle.FE
      when :CRYSTALCAVERN, :NEWWORLD
        type = @battle.field.getRoll(update_roll: @battle.phase == :attackPhase)
      else
        type = @battle.field.mimicry if @battle.field.mimicry
    end
    type = super(attacker, type)
    return type
  end
end

################################################################################
# Burns opposing Pokemon that have increased their stats in that turn before the
# execution of this move (Burning Jealousy)
################################################################################
class PokeBattle_Move_313 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    if !opponent.damagestate.substitute && opponent.effects[:Jealousy] && opponent.pbCanBurn?(false)
      opponent.pbBurn(attacker)
    end
  end
end

################################################################################
# Power is doubled if user's stats were reduced in the turn the move would be
# executed (Lash Out)
################################################################################
class PokeBattle_Move_314 < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 2.0 if attacker.effects[:LashOut]
    return damagemult
  end
end

################################################################################
# Fails when the target isn't holding an item (Poltergeist)
################################################################################
class PokeBattle_Move_315 < PokeBattle_Move
  def pbOnStartUse(attacker, targets)
    targets.each do |opponent|
      next if opponent.item.nil?
      next if @battle.state.effects[:MagicRoom] > 0
      next if opponent.ability == :KLUTZ

      @battle.pbDisplay(_INTL("{1} is about to be attacked by its {2}!", opponent.pbThis, getItemName(opponent.item)))
      return true
    end
    return false
  end
end

################################################################################
# The targets' held items are rendered useless for the rest of the battle
# (Corrosive Gas)
################################################################################
class PokeBattle_Move_316 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if opponent.pokemon.corrosiveGas || opponent.ability == :STICKYHOLD ||
       @battle.pbIsUnlosableItem(opponent, opponent.item) || opponent.item.nil?

      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pokemon.corrosiveGas = true
    @battle.pbDisplay(_INTL("{1} corroded {2}'s {3}!", attacker.pbThis, opponent.pbThis(true), getItemName(opponent.item)))
    if [:BACKALLEY, :CITY].include?(@battle.FE)
      for stat in 1..5
        opponent.pbReduceStat(stat, 1, abilitymessage: false, statdropper: attacker)
      end
    end
  end
end

################################################################################
# Increases the ally's Attack and Defense by 1 stage each (Coaching)
################################################################################
class PokeBattle_Move_317 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    if !@battle.doublebattle || !opponent
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return opponent.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::DEFENSE], showMessage)
  end

  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
    opponent.pbIncreaseStat(PBStats::ATTACK, 1, statsource: attacker)
    opponent.pbIncreaseStat(PBStats::DEFENSE, 1, statsource: attacker)
  end
end

################################################################################
# The user restores 1/4 of its maximum HP. If there is an adjacent ally, the
# user restores 1/4 of both its and its ally's maximum HP.
# Also heals status conditions. (Jungle Healing / Lunar Blessing)
################################################################################
class PokeBattle_Move_318 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?

      return true if i.hp != i.totalhp && i.effects[:HealBlock] == 0
      return true if i.status != nil
    end

    @battle.pbDisplay(_INTL("But it failed!")) if showMessage
    return false
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    for i in [attacker, attacker.pbPartner]
      next if !i || i.isFainted?

      healBlock = false
      if i == attacker.pbPartner && i.effects[:HealBlock] > 0
        @battle.pbDisplay(_INTL("{1} was prevented from healing!", i.pbThis))
        healBlock = true
      end

      fullHP = false
      if i.hp == i.totalhp && !healBlock
        @battle.pbDisplay(_INTL("{1}'s HP is full!", i.pbThis))
        fullHP = true
      end

      canHeal = !healBlock && !fullHP
      if canHeal
        hpgain = [(i.totalhp / 4.0).floor, 1].max
        hpgain = [(i.totalhp / 3.0).floor, 1].max if @move == :LUNARBLESSING && [:STARLIGHT, :NEWWORLD].include?(@battle.FE)
        i.pbRecoverHP(hpgain, true)
        @battle.pbDisplay(_INTL("{1}'s HP was restored.", i.pbThis))
      end

      case i.status
        when :PARALYSIS then @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", i.pbThis))
        when :SLEEP     then @battle.pbDisplay(_INTL("{1} was woken from its sleep.", i.pbThis))
        when :POISON    then @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", i.pbThis))
        when :BURN      then @battle.pbDisplay(_INTL("{1} was cured of its burn.", i.pbThis))
        when :FROZEN    then @battle.pbDisplay(_INTL("{1} was defrosted.", i.pbThis))
        when :PETRFIED  then @battle.pbDisplay(_INTL("{1} was released from the stone.", i.pbThis))
      end
      i.status = nil
      i.statusCount = 0
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :LUNARBLESSING
      @battle.pbAnimation(:LUNARDANCE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Hits 3 times. This attack is always a critical hit. (Surging Strikes)
################################################################################
class PokeBattle_Move_319 < PokeBattle_Move
  def pbIsMultiHit
    return true
  end

  def pbNumHits(attacker)
    return 3
  end
end

################################################################################
# Deals damage and decreases the PP of the last move the target used by 3.
# (Eerie Spell)
################################################################################
class PokeBattle_Move_320 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    for i in opponent.moves
      if i && i.move == opponent.lastMoveUsed && i.pp > 0
        reduction = [3, i.pp].min
        opponent.pbSetPP(i, i.pp - reduction)
        @battle.pbDisplay(_INTL("It reduced the PP of {1}'s {2} by {3}!", opponent.pbThis(true), i.name, reduction))
        return
      end
    end
  end
end

################################################################################
# Power boosted and becomes a spread move on Psychic Terrain (Expanding Force)
################################################################################
# targeting change handled in pbTarget
class PokeBattle_Move_321 < PokeBattle_Move
  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    damagemult *= 1.5 if (@battle.FE == :PSYTERRAIN || @battle.state.effects[:PSYTERRAIN] > 0) && !attacker.isAirborne?
    return damagemult
  end
end

################################################################################
# Deals damage and may inflict poison, paralysis or sleep.
# PLA Pokemon Legends: Arceus (Dire Claw)
################################################################################
class PokeBattle_Move_500 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    rnd = @battle.pbRandom(3)
    case rnd
      when 0
        return if !opponent.pbCanSleep?(false)

        opponent.pbSleep
        @battle.pbDisplay(_INTL("{1} fell asleep!", opponent.pbThis))
      when 1
        return if !opponent.pbCanPoison?(false)

        opponent.pbPoison(attacker)
        @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
      when 2
        return if !opponent.pbCanParalyze?(false)

        opponent.pbParalyze(attacker)
        @battle.pbDisplay(_INTL("{1} is paralyzed! It may be unable to move!", opponent.pbThis))
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :DIRECLAW
      @battle.pbAnimation(:CROSSPOISON, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Increases the user's Attack, Defense and Speed  by 1 stage each.
# PLA Pokemon Legends: Arceus (Victory Dance)
################################################################################
class PokeBattle_Move_501 < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    return attacker.pbCanIncreaseAnyStat?([PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED], showMessage)
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statchange = 1
    if [:BIGTOP, :DANCEFLOOR].include?(@battle.FE)
      statchange = 2
    end
    for stat in [PBStats::ATTACK, PBStats::DEFENSE, PBStats::SPEED]
      attacker.pbIncreaseStat(stat, statchange, statsource: attacker)
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :VICTORYDANCE
      @battle.pbAnimation(:QUIVERDANCE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# This may also poison the target. This move's power is doubled if the target
# has a status condition.
# PLA Pokemon Legends: Arceus (Barb Barrage)
################################################################################
class PokeBattle_Move_502 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if [:CORROSIVE, :CORROSIVEMIST, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE) ||
       ((!opponent.status.nil? || (opponent.ability == :COMATOSE && @battle.FE != :ELECTERRAIN)) && opponent.effects[:Substitute] == 0)
      return basedmg * 2
    end

    return basedmg
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanPoison?(false)

    opponent.pbPoison(attacker)
    @battle.pbDisplay(_INTL("{1} was poisoned!", opponent.pbThis))
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :BARBBARRAGE
      @battle.pbAnimation(:PINMISSILE, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Deals damage, decreases target's Defense stat and may flinch.
# PLA Pokemon Legends: Arceus (Triple Arrows)
################################################################################
class PokeBattle_Move_503 < PokeBattle_Move
  def canFlinch?
    return true
  end

  def pbAdditionalEffect(attacker, opponent)
    opponent.pbReduceStat(PBStats::DEFENSE, 1, abilitymessage: false, statdropper: attacker)
  end

  def pbSecondAdditionalEffect(attacker, opponent)
    if opponent.ability != :INNERFOCUS && !opponent.damagestate.substitute
      opponent.effects[:Flinch] = true
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :TRIPLEARROWS
      @battle.pbAnimation(:THOUSANDARROWS, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# This may also burn the target. This move's power is doubled if the target
# has a status condition.
# PLA Pokemon Legends: Arceus (Infernal Parade)
################################################################################
class PokeBattle_Move_504 < PokeBattle_Move
  def pbBaseDamage(basedmg, attacker, opponent)
    if @battle.FE == :HAUNTED ||
       ((!opponent.status.nil? || (opponent.ability == :COMATOSE && @battle.FE != :ELECTERRAIN)) && opponent.effects[:Substitute] == 0)
      return basedmg * 2
    end

    return basedmg
  end

  def pbAdditionalEffect(attacker, opponent)
    return if !opponent.pbCanBurn?(false)

    opponent.pbBurn(attacker)
    @battle.pbDisplay(_INTL("{1} was burned!", opponent.pbThis))
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :INFERNALPARADE
      @battle.pbAnimation(:WILLOWISP, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Heals user's status, and raises user's Special Attack and Special Defense.
# PLA Pokemon Legends: Arceus (Take Heart)
################################################################################
class PokeBattle_Move_505 < PokeBattle_Move
  def pbEffectValid(attacker, opponent, showMessage = false)
    if !attacker.pbCanIncreaseAnyStat?([PBStats::SPATK, PBStats::SPDEF], false) && attacker.status.nil?
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    status = attacker.status
    attacker.status = nil
    attacker.statusCount = 0
    case status
      when :PARALYSIS
        @battle.pbDisplay(_INTL("{1} was cured of its paralysis.", attacker.pbThis))
      when :SLEEP
        @battle.pbDisplay(_INTL("{1} was woken from its sleep.", attacker.pbThis))
      when :POISON
        @battle.pbDisplay(_INTL("{1} was cured of its poisoning.", attacker.pbThis))
      when :BURN
        @battle.pbDisplay(_INTL("{1} was cured of its burn.", attacker.pbThis))
      when :FROZEN
        @battle.pbDisplay(_INTL("{1} was defrosted.", attacker.pbThis))
      when :PETRIFIED
        @battle.pbDisplay(_INTL("{1} was released from the stone.", attacker.pbThis))
    end
    increment = 1
    increment = 2 if @move == :TAKEHEART && [:WATERSURFACE, :UNDERWATER].include?(@battle.FE)
    attacker.pbIncreaseStat(PBStats::SPATK, increment, statsource: attacker)
    attacker.pbIncreaseStat(PBStats::SPDEF, increment, statsource: attacker)
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :TAKEHEART
      @battle.pbAnimation(:CALMMIND, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# If attack misses, user takes crash damage of 1/2 of max HP.
# May cause confusion. (Axe Kick)
################################################################################
class PokeBattle_Move_506 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    if opponent.pbCanConfuse?(false, inflictor: attacker)
      opponent.pbConfuse
      @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
    end
  end

  # Replacement animation till a proper one is made
  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    if id == :AXEKICK
      @battle.pbAnimation(:STOMP, attacker, opponent, hitnum)
    else
      @battle.pbAnimation(id, attacker, opponent, hitnum)
    end
  end
end

################################################################################
# Confuses opposing Pokemon that have increased their stats in that turn before the
# execution of this move (Alluring Voice)
################################################################################
class PokeBattle_Move_507 < PokeBattle_Move
  def pbAdditionalEffect(attacker, opponent)
    return if opponent.damagestate.substitute

    if opponent.effects[:Jealousy] && opponent.pbCanConfuse?(false, inflictor: attacker)
      opponent.pbConfuse
      @battle.pbDisplay(_INTL("{1} became confused!", opponent.pbThis))
    end
  end
end

################################################################################
# Does absolutely nothing (Celebrate).
################################################################################
class PokeBattle_Move_18C < PokeBattle_Move
  def pbEffect(attacker, alltargets, hitnum = 0)
    @battle.pbDisplay(_INTL("Congratulations, {1}!", $Trainer.name))
  end
end

################################################################################
# Does absolutely nothing to an ally (Hold Hands).
################################################################################
class PokeBattle_Move_18D < PokeBattle_Move
  def pbOnStartUse(attacker, target)
    if !@battle.doublebattle
      @battle.pbDisplay(_INTL("But it failed!"))
    end
    return true
  end
end

################################################################################
# Increases user and ally's Attack by 1 stage. (Gen 8 Howl)
################################################################################
class PokeBattle_Move_18E < PokeBattle_Move
  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    unless attacker.pbCanIncreaseStatStage?(PBStats::ATTACK) || (attacker.pbPartner&.ability != :SOUNDPROOF && attacker.pbPartner.pbCanIncreaseStatStage?(PBStats::ATTACK))
      @battle.pbDisplay(_INTL("But it failed!")) if showMessage
      return false
    end
    return true
  end

  def pbEffect(attacker, alltargets, hitnum = 0)
    statboost = 1
    statboost = 2 if @battle.FE == :COLOSSEUM || @battle.ProgressiveFieldCheck(PBFields::CONCERT)
    attacker.pbIncreaseStat(PBStats::ATTACK, statboost, abilitymessage: false, statsource: attacker)
    if attacker.pbPartner&.ability != :SOUNDPROOF
      attacker.pbPartner.pbIncreaseStat(PBStats::ATTACK, statboost, abilitymessage: false, statsource: attacker)
    end
  end
end
