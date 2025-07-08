class PokeBattle_Move
  attr_accessor   :move
  attr_reader     :battle
  attr_accessor   :name
  attr_accessor   :data
  attr_accessor   :basemove
  attr_accessor   :pp
  attr_accessor   :totalpp
  attr_accessor   :zmove
  attr_reader     :user
  attr_reader     :function
  attr_accessor   :type
  attr_reader     :category
  attr_accessor   :basedamage
  attr_reader     :accuracy
  attr_reader     :maxpp
  attr_reader     :target
  attr_reader     :desc
  attr_accessor   :priority
  attr_reader     :effect
  attr_reader     :moreeffect
  attr_reader     :recoil
  attr_reader     :immediate

  ################################################################################
  # Creating a move
  ################################################################################
  def initialize(battle, move, user, zbase = nil)
    @battle = battle
    @move = move.move
    @data = $cache.moves[@move]
    @name = @data.name
    @basemove   = move
    @pp         = move.pp # Can be changed with Mimic/Transform
    @zmove      = false
    @immediate  = false
    if user.is_a?(PokeBattle_Battler)
      # Move instance is serialized and sent over network for Online battles.
      # As such it can't contain Battler because it contains Battle which is not serializable.
      raise "move user needs to be PokeBattle_Pokemon"
    end
    @user       = user
    if @data
      @function   = @data.function
      @type       = @data.type
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
    if !zbase.nil?
      @zmove      = true
      if PBStuff::TYPETOZCRYSTAL[zbase.type] == user.item
        @category   = zbase.category
        @name       = "Z-" + @name if zbase.basedamage == 0
        @basedamage = ZMoveBaseDamage(zbase) if zbase.basedamage > 0
        @maxpp = 0
      end
    end
  end

  def contactMove?
    return hasFlag?(:contact)
  end

  def canProtect?
    return !hasFlag?(:bypassprotect)
  end

  def canMagicCoat?
    return hasFlag?(:magiccoat)
  end

  def canSnatch?
    return hasFlag?(:snatchable)
  end

  def canMirror?
    return !hasFlag?(:nonmirror)
  end

  def canFlinch?
    return false
  end

  def canThawUser?
    return hasFlag?(:defrost)
  end

  def highCritRate?
    return hasFlag?(:highcrit)
  end

  def isHealingMove?
    return hasFlag?(:healingmove)
  end

  def isDrainingMove?
    return hasFlag?(:drainingmove)
  end

  def punchMove?
    return hasFlag?(:punchmove)
  end

  def isSoundBased?
    return hasFlag?(:soundmove)
  end

  def unusableInGravity?
    return hasFlag?(:gravityblocked)
  end

  def isBeamMove?
    return hasFlag?(:beammove)
  end

  def sharpMove?
    return hasFlag?(:sharpmove)
  end

  def windMove?
    return hasFlag?(:windmove)
  end

  def powderMove?
    return hasFlag?(:powdermove)
  end

  def hasFlag?(flag)
    return @data.nil? ? false : @data.checkFlag?(flag)
  end

  # This is the code actually used to generate a PokeBattle_Move object.  The
  # object generated is a subclass of this one which depends on the move's
  # function code (found in the script section PokeBattle_MoveEffect).
  def PokeBattle_Move.pbFromPBMove(battle, move, user, zbase = nil)
    className = nil if !move
    className = sprintf("PokeBattle_Move_%03X", $cache.moves[move.move].function) if move
    if !className.nil?
      if Object.const_defined?(className)
        return Kernel.const_get(className).new(battle, move, user, zbase)
      else
        return PokeBattle_UnimplementedMove.new(battle, move, user, zbase)
      end
    else
      return nil
    end
  end

  ################################################################################
  # About the move
  ################################################################################
  def totalpp
    return @totalpp if @totalpp && @totalpp > 0
    return @basemove.totalpp if @basemove
  end

  def pbType(attacker, type = @type)
    case @battle.FE
      when :ASHENBEACH        then type = :FIGHTING   if @move == :STRENGTH
      when :GLITCH            then type = :NORMAL     if Glitchtypes.include?(type)
      when :WATERSURFACE      then type = :WATER      if @move == :SHOREUP
      when :MURKWATERSURFACE  then type = :WATER      if [:MUDSLAP, :MUDBOMB, :MUDBARRAGE, :MUDSHOT, :THOUSANDWAVES, :SHOREUP].include?(@move)
      when :FAIRYTALE         then type = :STEEL      if [:SACREDSWORD, :CUT, :SLASH, :SECRETSWORD].include?(@move)
      when :STARLIGHT         then type = :FAIRY      if !Rejuv && [:SOLARBEAM, :SOLARBLADE].include?(@move)
      when :DIMENSIONAL       then type = :DARK       if @move == :RAGE
      when :FROZENDIMENSION   then type = :DARK       if @move == :RAGE
      when :DRAGONSDEN        then type = :ROCK       if Rejuv && [:ROCKCLIMB, :STRENGTH].include?(@move)
      when :DEEPEARTH         then type = :GROUND     if @move == :TOPSYTURVY
    end
    if !PBStuff::ZMOVES.include?(@move)
      case attacker.ability
        when :NORMALIZE   then type = :NORMAL
        when :PIXILATE    then type = :FAIRY    if type == :NORMAL && @battle.FE != :GLITCH
        when :AERILATE    then type = :FLYING   if type == :NORMAL
        when :GALVANIZE   then type = :ELECTRIC if type == :NORMAL
        when :REFRIGERATE then type = :ICE      if type == :NORMAL
        when :DUSKILATE   then type = :DARK     if type == :NORMAL && @battle.FE != :GLITCH
        when :LIQUIDVOICE then type = @battle.FE == :ICY ? :ICE : :WATER if isSoundBased?
      end
    end
    case attacker.crested
      when :SIMISEAR  then type = :WATER    if type == :NORMAL
      when :SIMIPOUR  then type = :GRASS    if type == :NORMAL
      when :SIMISAGE  then type = :FIRE     if type == :NORMAL
      when :LUXRAY    then type = :ELECTRIC if type == :NORMAL
      when :SAWSBUCK
        case attacker.form
          when 0  then type = :WATER  if type == :NORMAL
          when 1  then type = :FIRE   if type == :NORMAL
          when 2  then type = :GROUND if type == :NORMAL
          when 3  then type = :ICE    if type == :NORMAL
        end
    end
    if attacker.effects[:Electrify] || (type == :NORMAL && @battle.state.effects[:IonDeluge])
      type = :ELECTRIC
    end
    return type
  end

  def pbIsPhysical?(attacker, type = @type)
    return !PBTypes.isSpecialType?(type) && @category != :status if @battle.FE == :GLITCH

    return @category == :physical
  end

  def pbIsSpecial?(attacker, type = @type)
    return PBTypes.isSpecialType?(type) && @category != :status if @battle.FE == :GLITCH

    return @category == :special
  end

  def pbIsStatus?
    return @category == :status
  end

  def betterCategory(attacker, type = @type)
    return :physical if pbIsPhysical?(attacker, type)
    return :special if pbIsSpecial?(attacker, type)
    return :status if pbIsStatus?
  end

  def pbHitsSpecialStat?(attacker, type = @type)
    return false if @function == 0x122  # Psyshock/Psystrike
    return true if @function == 0x204   # Matrix Shot

    return pbIsSpecial?(attacker, type)
  end

  def pbHitsPhysicalStat?(attacker, type = @type)
    return false if @function == 0x204
    return true if @function == 0x122

    return pbIsPhysical?(attacker, type)
  end

  def pbTargetsAll?(attacker)
    if attacker.pbTarget(self) == :AllOpposing
      # TODO: should apply even if partner faints during an attack
      numtargets = 0
      numtargets += 1 if !attacker.pbOpposing1.isFainted?
      numtargets += 1 if !attacker.pbOpposing2.isFainted?
      return numtargets > 1
    elsif attacker.pbTarget(self) == :AllNonUsers
      # TODO: should apply even if partner faints during an attack
      numtargets = 0
      numtargets += 1 if !attacker.pbOpposing1.isFainted?
      numtargets += 1 if !attacker.pbOpposing2.isFainted?
      numtargets += 1 if !attacker.pbPartner.isFainted?
      return numtargets > 1
    end
    return false
  end

  def pbDragonDartTargetting(attacker)
    opp1 = attacker.pbOpposing1
    opp2 = attacker.pbOpposing2
    return [opp1] if !@battle.doublebattle
    return [opp1] if opp2.isFainted?
    return [opp2] if opp1.isFainted?
    return [opp1] if !isValidDragonDartsTarget(attacker, opp2)
    return [opp2] if !isValidDragonDartsTarget(attacker, opp1)

    return [opp1, opp2]
  end

  def isValidDragonDartsTarget(attacker, opponent)
    darttype = pbType(attacker)
    typemod = self.pbTypeModifier(darttype, attacker, opponent)
    typemod = self.fieldTypeChangeModifier(attacker, opponent, typemod)
    typemod = self.overlayTypeChangeModifier(attacker, opponent, typemod)
    types = [darttype, *self.getSecondaryType(attacker)]

    # removing successful redirectors from the target list to ensure that darts only have 1 target to allow redirection
    unless [:STALWART, :PROPELLERTAIL].include?(attacker.ability)
      return false if opponent.effects[:RagePowder] && !(attacker.ability == :OVERCOAT || attacker.hasType?(:GRASS) || attacker.hasWorkingItem(:SAFETYGOGGLES))
      return false if opponent.effects[:FollowMe]

      unless [:MOLDBREAKER, :TERAVOLT, :TURBOBLAZE].include?(attacker.ability)
        return false if types.include?(:WATER) && opponent.ability == :STORMDRAIN
        return false if types.include?(:ELECTRIC) && opponent.ability == :LIGHTNINGROD
      end
    end

    return false if PBStuff::TWOTURNMOVE.include?(opponent.effects[:TwoTurnAttack])
    return false if opponent.effects[:SkyDrop]
    return false if opponent.effects[:Protect]
    return false if opponent.pbOwnSide.effects[:QuickGuard] && priorityCheck(attacker) > 0
    return false if typemod.immune?

    unless [:MOLDBREAKER, :TERAVOLT, :TURBOBLAZE].include?(attacker.ability)
      # checking Storm drain and lightning rod as immunity here so that Stalwart and Propeller tail users avoid targeting into these mons directly
      # users without redirection immunity don't reach this point in the check
      return false if opponent.ability == :WONDERGUARD && !typemod.superEffective?
      return false if types.include?(:WATER) && [:DRYSKIN, :WATERABSORB, :STORMDRAIN].include?(opponent.ability)
      return false if types.include?(:ELECTRIC) && [:MOTORDRIVE, :VOLTABSORB, :LIGHTNINGROD].include?(opponent.ability)
      return false if types.include?(:FIRE) && opponent.ability == :FLASHFIRE && @battle.FE != :FROZENDIMENSION
      return false if types.include?(:FIRE) && opponent.ability == :MAGMAARMOR && [:VOLCANICTOP, :DRAGONSDEN, :INFERNAL].include?(@battle.FE)
      return false if types.include?(:GRASS) && opponent.ability == :SAPSIPPER
    end

    if Rejuv && @battle.FE == :GLITCH && opponent.species == :GENESECT
      return false if types.include?(:WATER) && opponent.hasWorkingItem(:DOUSEDRIVE)
      return false if types.include?(:ELECTRIC) && opponent.hasWorkingItem(:SHOCKDRIVE)
      return false if types.include?(:FIRE) && opponent.hasWorkingItem(:BURNDRIVE)
      return false if types.include?(:ICE) && opponent.hasWorkingItem(:CHILLDRIVE)
    end

    return false if types.include?(:FIRE) && opponent.crested == :DRUDDIGON
    return false if types.include?(:GRASS) && opponent.crested == :WHISCASH
    return false if types.include?(:GROUND) && opponent.crested == :SKUNTANK
    return false if types.include?(:GROUND) && opponent.isAirborne?(moldbreakcheck: true)

    return false if attacker.ability == :PRANKSTER && opponent.hasType?(:DARK) && @battle.choices[attacker.index][2] != self && @battle.FE != :BEWITCHED

    return true
  end

  # i am so upset, i have no words for my utter disgust at this mess, god fuck this move, i'd rather deal with Dragon Darts
  def smartDamageCategory(attacker, opponent)
    if @battle.FE == :GLITCH
      @category = PBTypes.isSpecialType?(@type) ? :special : :physical
      return
    end
    # Calculates how much Attack and SpAtk attacker has
    calcattackstage = attacker.stages[PBStats::ATTACK] + 6
    # if photon geyser gets to be more accurate in calculation than normal, then shell side arm also gets to as well
    calcatkmult = 1.0
    calcatkmult *= 1.5 if attacker.hasWorkingItem(:CHOICEBAND)
    if attacker.ability == :HUSTLE
      calcatkmult *= [:BACKALLEY, :CITY].include?(@battle.FE) ? 1.75 : 1.5
    end
    calcatkmult *= 1.5 if attacker.ability == :TOXICBOOST && (attacker.status == :POISON || @battle.FE == :CORROSIVEMIST || ([:CORROSIVE, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE) && !attacker.isAirborne?))
    calcatkmult *= 1.5 if attacker.ability == :GUTS && !attacker.status.nil?
    calcatkmult *= 0.5 if attacker.ability == :SLOWSTART && attacker.turncount < 5 && @battle.FE != :DEEPEARTH
    calcatkmult *= 2 if (attacker.ability == :PUREPOWER && @battle.FE != :PSYTERRAIN) || attacker.ability == :HUGEPOWER
    calcatkmult *= 1.5 if attacker.flowerGiftActive?
    calcatkmult *= 1.5 if attacker.pbPartner.flowerGiftActive?
    calcatkmult *= 2 if attacker.hasWorkingItem(:THICKCLUB) && (attacker.pokemon.species == :CUBONE || attacker.pokemon.species == :MAROWAK)
    calcatkmult *= 0.5 if attacker.status == :BURN && !(attacker.ability == :GUTS && !attacker.status.nil?)
    # end attack boosts
    calcattack = (attacker.attack * PBStats::StageMul[calcattackstage] * calcatkmult).floor
    calcspatkstage = attacker.stages[PBStats::SPATK] + 6
    # same for special attack
    calcspatkmult = 1.0
    calcspatkmult *= 1.5 if attacker.hasWorkingItem(:CHOICESPECS)
    calcspatkmult *= 2 if attacker.hasWorkingItem(:DEEPSEATOOTH) && attacker.pokemon.species == :CLAMPERL
    calcspatkmult *= 2 if attacker.hasWorkingItem(:LIGHTBALL) && attacker.pokemon.species == :PIKACHU
    calcspatkmult *= 1.5 if attacker.ability == :FLAREBOOST && (attacker.status == :BURN || [:BURNING, :VOLCANIC, :INFERNAL].include?(@battle.FE)) && @battle.FE != :FROZENDIMENSION
    calcspatkmult *= 1.5 if [:MINUS, :PLUS].include?(attacker.ability) && ([:MINUS, :PLUS].include?(attacker.pbPartner.ability) || @battle.FE == :SHORTCIRCUIT || (Rejuv && @battle.FE == :ELECTERRAIN))
    calcspatkmult *= 1.5 if attacker.ability == :SOLARPOWER && (@battle.pbWeather == :SUNNYDAY && !attacker.hasWorkingItem(:UTILITYUMBRELLA)) && @battle.FE != :FROZENDIMENSION
    calcspatkmult *= 1.3 if attacker.pbPartner.ability == :BATTERY && Rejuv
    calcspatkmult *= 2 if attacker.ability == :PUREPOWER && @battle.FE == :PSYTERRAIN
    # end spatk boosts
    calcspatk = (attacker.spatk * PBStats::StageMul[calcspatkstage] * calcspatkmult).floor
    # Calculates how much Defense and SpDef opponent has
    calcdefensestage = opponent.stages[PBStats::DEFENSE] + 6
    # aaaand Defense
    calcdefmult = 1.0
    calcdefmult *= 1.5 if @battle.FE == :SNOWYMOUNTAIN && opponent.hasType?(:ICE) && @battle.pbWeather == :HAIL
    calcdefmult *= 1.5 if @battle.FE == :ICY && opponent.hasType?(:ICE) && @battle.pbWeather == :HAIL
    calcdefmult *= 1.5 if opponent.ability == :MARVELSCALE && (!opponent.status.nil? || ([:MISTY, :RAINBOW, :FAIRYTALE, :DRAGONSDEN, :STARLIGHT].include?(@battle.FE) || @battle.state.effects[:MISTY] > 0)) && !opponent.moldbroken
    calcdefmult *= 1.5 if opponent.ability == :GRASSPELT && ([:GRASSY, :FOREST].include?(@battle.FE) || @battle.state.effects[:GRASSY] > 0) # Grassy Field
    calcdefmult *= 2.0 if opponent.ability == :FURCOAT && !opponent.moldbroken
    if @battle.FE == :CLOUDS
      calcdefmult *= 4.0 if opponent.ability == :FLUFFY && attacker.ability != :LONGREACH && !opponent.moldbroken
    else
      calcdefmult *= 2.0 if opponent.ability == :FLUFFY && attacker.ability != :LONGREACH && !opponent.moldbroken
    end
    calcdefmult *= 2.0 if opponent.hasWorkingItem(:METALPOWDER) && opponent.pokemon.species == :DITTO && !opponent.effects[:Transform]
    # end defense boosts
    calcdefense = (opponent.defense * PBStats::StageMul[calcdefensestage] * calcdefmult).floor
    calcspdefstage = opponent.stages[PBStats::SPDEF] + 6
    # don't forget spdef
    calcspdefmult = 1.0
    calcspdefmult *= 1.5 if @battle.FE == :DESERT && opponent.hasType?(:GROUND)
    calcspdefmult *= 1.5 if @battle.FE == :MISTY && opponent.hasType?(:FAIRY)
    calcspdefmult *= 1.5 if opponent.flowerGiftActive? && !opponent.moldbroken
    calcspdefmult *= 1.5 if opponent.pbPartner.flowerGiftActive? && !opponent.pbPartner.moldbroken
    calcspdefmult *= 2.0 if opponent.ability == :ICESCALES && !opponent.moldbroken
    calcspdefmult *= 1.5 if opponent.hasWorkingItem(:ASSAULTVEST)
    calcspdefmult *= 2.0 if opponent.hasWorkingItem(:DEEPSEASCALE) && opponent.pokemon.species == :CLAMPERL
    # end spdef boosts
    calcspdef = (opponent.spdef * PBStats::StageMul[calcspdefstage] * calcspdefmult).floor

    # Compares difference between Atk/Def and SpAtk/SpDef to determine Physical or Special
    @category = (calcattack - calcdefense > calcspatk - calcspdef) ? :physical : :special
    return
  end

  # These functions are intended to be subclassed
  def pbNumHits(attacker)
    return 1
  end

  def pbIsMultiHit # not the same as pbNumHits>1
    return false
  end

  def checkAccuracyEachHit(attacker)
    return false
  end

  def pbTwoTurnAttack(attacker, checking = false)
    return false
  end

  def pbAdditionalEffect(attacker, opponent)
  end

  def pbAdditionalEffectSelf(attacker)
  end

  def pbSecondAdditionalEffect(attacker, opponent)
  end

  def pbCanUseWhileAsleep?
    return false
  end

  ################################################################################
  # This move's type effectiveness
  ################################################################################
  def pbTypemod(atype, attability, oppspecies, opptypes, oppitem, oppability, opppartnerability = nil, oppeffects = {})
    typemod = Typemod.normal

    opptypes.each do |opptype|
      mod = PBTypes.oneTypeEff(atype, opptype)
      if attability == :SCRAPPY || oppeffects[:Foresight]
        mod = Typemod.normal if opptype == :GHOST && [:NORMAL, :FIGHTING].include?(atype)
      end
      if oppeffects[:Ingrain] || oppeffects[:SmackDown] || @battle.state.effects[:Gravity] != 0 || @battle.FE == :CAVE
        mod = Typemod.normal if opptype == :FLYING && atype == :GROUND
      else
        return Typemod.normal if type == :GROUND && opptype == :FLYING && (oppitem == :IRONBALL || @move == :THOUSANDARROWS)
      end
      if @battle.FE == :HOLY
        mod = Typemod.double if [:DARK, :GHOST].include?(opptype) && atype == :NORMAL
        mod = Typemod.double if opptype == :GHOST && @move == :SPIRITBREAK
      end
      if @battle.FE == :UNDERWATER
        mod = Typemod.normal if opptype == :WATER && atype == :WATER
      end
      if @battle.FE == :FAIRYTALE
        mod = Typemod.double if opptype == :DRAGON && atype == :STEEL
      end
      if @battle.FE == :GLITCH
        mod = Typemod.normal if atype == :DRAGON
        mod = Typemod.zero if atype == :GHOST && opptype == :PSYCHIC
        mod = Typemod.double if atype == :BUG && opptype == :POISON
        mod = Typemod.double if atype == :POISON && opptype == :BUG
        mod = Typemod.normal if atype == :ICE && opptype == :FIRE
        mod = Typemod.half if Rejuv && atype == :DARK && opptype == :STEEL
        mod = Typemod.half if Rejuv && atype == :GHOST && opptype == :STEEL
      end
      if @battle.FE == :HAUNTED
        mod = Typemod.normal if opptype == :NORMAL && atype == :GHOST
        mod = Typemod.double if opptype == :GHOST && @move == :SPIRITBREAK
      end
      if @battle.FE == :BEWITCHED
        mod = Typemod.normal if opptype == :GRASS && atype == :POISON
        mod = Typemod.double if opptype == :STEEL && atype == :FAIRY
        mod = Typemod.normal if opptype == :DARK && atype == :FAIRY
        mod = Typemod.normal if opptype == :FAIRY && atype == :DARK
      end
      if @battle.FE == :SKY
        mod = Typemod.double if opptype == :FLYING && @move == :BONEMERANG
        mod = Typemod.double if opptype == :FLYING && attability == :LONGREACH
      end
      if (!Rejuv && @battle.FE == :FOREST) || @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5)
        mod = Typemod.double if opptype == :GRASS && @move == :CUT
      end
      if @battle.FE == :INFERNAL
        mod = Typemod.double if opptype == :GHOST && atype == :FIRE
      end
      if Rejuv && @battle.FE == :ELECTERRAIN
        mod = Typemod.normal if opptype == :GROUND && atype == :ELECTRIC && attability == :TERAVOLT
      end
      if oppeffects[:MiracleEye]
        mod = Typemod.normal if opptype == :DARK && atype == :PSYCHIC
      end
      if oppitem == :RINGTARGET
        mod = Typemod.normal if mod.immune?
      end

      # Inversemode password/field
      if @battle.inverse?
        mod = mod.inverse
      end
      if oppspecies == :TORTERRA && oppitem == :TORCREST
        mod = mod.inverse unless mod.immune?
      end
      # effects that remove type weaknesses, what is a type weakness changes if inverse battle applies or not so needs to be checked after
      if @battle.pbWeather == :STRONGWINDS
        mod = Typemod.normal if opptype == :FLYING && mod.superEffective?
      end
      if @battle.FE == :DARKNESS3
        mod = Typemod.normal if [:DARK, :GHOST].include?(opptype) && mod.superEffective?
      end
      if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 4, 5)
        mod = Typemod.normal if opptype == :GRASS && mod.superEffective?
      end
      if @battle.FE == :SNOWYMOUNTAIN
        mod = Typemod.normal if opptype == :ICE && oppability == :ICESCALES && mod.superEffective?
      end
      if @battle.FE == :DRAGONSDEN
        mod = Typemod.normal if opptype == :DRAGON && oppability == :MULTISCALE && mod.superEffective?
      end
      if @battle.FE == :BEWITCHED
        mod = Typemod.normal if opptype == :FAIRY && (oppability == :PASTELVEIL || opppartnerability == :PASTELVEIL) && mod.superEffective?
      end
      # effects that ignore Inverse battles entirely
      if @move == :VENAMSKISS
        mod = Typemod.double if opptype == :STEEL
      end
      if @move == :FREEZEDRY
        mod = Typemod.double if opptype == :WATER
      end

      typemod *= mod
    end

    return typemod
  end

  def pbTypeModifier(type, attacker, opponent)
    atype = type # attack type
    otype1 = opponent.type1
    otype2 = opponent.type2
    if otype1 == :FLYING && opponent.effects[:Roost]
      otype1 = otype2.nil? ? :QMARKS : otype2
    end
    if otype2 == :FLYING && opponent.effects[:Roost]
      otype2 = nil
    end
    if otype1 == :FIRE && opponent.effects[:BurnUp]
      otype1 = otype2.nil? ? :QMARKS : otype2
    end
    if otype2 == :FIRE && opponent.effects[:BurnUp]
      otype2 = nil
    end

    return pbTypemod(
      atype,
      attacker.ability,
      opponent.species,
      [otype1, otype2].filter { |type| type != nil },
      opponent.itemWorks? ? opponent.item : nil,
      opponent.moldbroken ? nil : opponent.ability,
      opponent.moldbroken ? nil : opponent.pbPartner.ability,
      opponent.effects,
    )
  end

  def pbTypeModifierNonBattler(type, attacker, opponent)
    return pbTypemod(
      type,
      attacker.ability,
      opponent.species,
      [opponent.type1, opponent.type2].filter { |type| type != nil },
      @battle.state.effects[:MagicRoom] == 0 && opponent.ability != :KLUTZ ? opponent.item : nil,
      opponent.ability,
    )
  end

  def pbTypeImmunities(attacker, opponent)
    types = [pbType(attacker), *getSecondaryType(attacker)]
    if opponent.ability == :SAPSIPPER && !opponent.moldbroken && types.include?(:GRASS)
      return :SapSipperAbility
    end
    if (opponent.crested == :WHISCASH && types.include?(:GRASS)) || (opponent.crested == :SKUNTANK && types.include?(:GROUND))
      return :SapSipperItem
    end
    if ((opponent.ability == :STORMDRAIN && types.include?(:WATER)) ||
        (opponent.ability == :LIGHTNINGROD && types.include?(:ELECTRIC))) && !opponent.moldbroken
      return :DrainRod
    end
    if opponent.ability == :MOTORDRIVE && !opponent.moldbroken && types.include?(:ELECTRIC)
      return :MotorDriveAbility
    end
    if (Rejuv && @battle.FE == :GLITCH && opponent.species == :GENESECT && opponent.hasWorkingItem(:SHOCKDRIVE)) && types.include?(:ELECTRIC)
      return :MotorDriveItem
    end
    unless opponent.effects[:HealBlock] > 0
      # Move Absorb for HP heal ability based
      if !opponent.moldbroken && (((opponent.ability == :DRYSKIN || opponent.ability == :WATERABSORB) && types.include?(:WATER)) || (opponent.ability == :VOLTABSORB && types.include?(:ELECTRIC)))
        return :HpAbsorbAbility
      end
      # Move Absorb for HP heal Item based
      if (Rejuv && @battle.FE == :GLITCH && opponent.species == :GENESECT && opponent.hasWorkingItem(:DOUSEDRIVE) && types.include?(:WATER)) ||
         (Rejuv && @battle.FE == :GLITCH && opponent.species == :GENESECT && opponent.hasWorkingItem(:CHILLDRIVE) && types.include?(:ICE)) ||
         (opponent.crested == :DRUDDIGON && types.include?(:FIRE))
        return :HpAbsorbItem
      end
      # Move Absorb for HP heal Field based
      if Rejuv && @battle.FE == :DESERT && (opponent.hasType?(:GRASS) || opponent.hasType?(:WATER)) && @battle.pbWeather == :SUNNYDAY && types.include?(:WATER)
        return :HpAbsorbField
      end
    end
    if opponent.ability == :FLASHFIRE && !opponent.moldbroken && types.include?(:FIRE) && @battle.FE != :FROZENDIMENSION
      return :FlashFireAbility
    end
    if Rejuv && @battle.FE == :GLITCH && opponent.species == :GENESECT && opponent.hasWorkingItem(:BURNDRIVE) && types.include?(:FIRE)
      return :FlashFireItem
    end
    if opponent.ability == :SOUNDPROOF && isSoundBased? && !opponent.moldbroken && @function != 0x19 # Heal Bell handled elsewhere
      return :Soundproof
    end
    if opponent.ability == :MAGMAARMOR && types.include?(:FIRE) && [:VOLCANICTOP, :DRAGONSDEN, :INFERNAL].include?(@battle.FE) && !opponent.moldbroken
      return :MagmaArmor
    end
    typemod = pbCalcTypeMod(types[0], attacker, opponent)
    if @function != 0x02 && @function != 0x111 # Struggle / Future Sight
      if opponent.ability == :WONDERGUARD && @basedamage > 0 && !typemod.superEffective? && !opponent.moldbroken
        return :WonderGuard
      end
      if (@basedamage > 0 || @move == :THUNDERWAVE) && typemod.immune?
        return :TypeImmunity
      end
      if @basedamage > 0
        if types.include?(:GROUND) && opponent.isAirborne? && !opponent.hasWorkingItem(:RINGTARGET) && @battle.FE != :CAVE && @move != :THOUSANDARROWS && @move != :DESERTSMARK
          if ([:LEVITATE, :SOLARIDOL, :LUNARIDOL].include?(opponent.ability) || (@battle.FE == :DEEPEARTH && [:UNAWARE, :OBLIVIOUS, :MAGNETPULL, :CONTRARY].include?(opponent.ability))) && !opponent.moldbroken
            return :Levitate
          end
          if opponent.hasWorkingItem(:AIRBALLOON)
            return :AirBalloon
          end
          if opponent.effects[:MagnetRise] > 0
            return :MagnetRise
          end
          if opponent.effects[:Telekinesis] > 0
            return :Telekinesis
          end
        end
      end
    end
    return :Success
  end

  def irregularTypeMods(attacker, opponent, typemod, type)
    inverse = @battle.inverse?
    case opponent.crested
      when :GLACEON
        typemod = Typemod.half if [:FIGHTING, :ROCK].include?(type)
      when :LEAFEON
        typemod = Typemod.half if [:FIRE, :FLYING].include?(type)
      when :LUXRAY
        typemod *= Typemod.half if inverse ? PBTypes.oneTypeEff(type, :DARK).superEffective? : PBTypes.oneTypeEff(type, :DARK).resisted?
        typemod = Typemod.zero if PBTypes.oneTypeEff(type, :DARK).immune? && !inverse
      when :SAMUROTT
        typemod *= Typemod.half if inverse ? PBTypes.oneTypeEff(type, :FIGHTING).superEffective? : PBTypes.oneTypeEff(type, :FIGHTING).resisted?
        typemod = Typemod.zero if PBTypes.oneTypeEff(type, :FIGHTING).immune? && !inverse
      when :SIMISEAR
        typemod *= Typemod.half if inverse ? PBTypes.oneTypeEff(type, :WATER).superEffective? : (PBTypes.oneTypeEff(type, :WATER).resisted? && !(type == :WATER && @battle.FE == :UNDERWATER))
        typemod = Typemod.zero if PBTypes.oneTypeEff(type, :WATER).immune? && !inverse
      when :SIMIPOUR
        typemod *= Typemod.half if inverse ? PBTypes.oneTypeEff(type, :GRASS).superEffective? : PBTypes.oneTypeEff(type, :GRASS).resisted?
        typemod = Typemod.zero if PBTypes.oneTypeEff(type, :GRASS).immune? && !inverse
      when :SIMISAGE
        typemod *= Typemod.half if inverse ? PBTypes.oneTypeEff(type, :FIRE).superEffective? : (PBTypes.oneTypeEff(type, :FIRE).resisted? && !(type == :ICE && @battle.FE == :GLITCH))
        typemod = Typemod.zero if PBTypes.oneTypeEff(type, :FIRE).immune? && !inverse
    end
    typemod *= Typemod.double if type == :FIRE && opponent.effects[:TarShot]
    return typemod
  end

  def pbCalcTypeMod(type, attacker, opponent)
    typemod = pbTypeModifier(type, attacker, opponent)
    # Resistance-changing Crests
    typemod = irregularTypeMods(attacker, opponent, typemod, type)
    if @move == :FLYINGPRESS
      if @battle.FE == :SKY
        typemod *= Typemod.double if @battle.inverse? ? PBTypes.oneTypeEff(:FLYING, opponent.type1).superEffective? : PBTypes.oneTypeEff(:FLYING, opponent.type1).resistedOrImmune?
        typemod *= Typemod.double if @battle.inverse? ? PBTypes.oneTypeEff(:FLYING, opponent.type2).superEffective? : PBTypes.oneTypeEff(:FLYING, opponent.type2).resistedOrImmune?
      else
        typemod2 = pbTypeModifier(:FLYING, attacker, opponent)
        typemod2 = irregularTypeMods(attacker, opponent, typemod2, :FLYING)
        typemod *= typemod2
      end
    end
    # Field Effect second type changes
    typemod = fieldTypeChangeModifier(attacker, opponent, typemod)
    typemod = overlayTypeChangeModifier(attacker, opponent, typemod)

    return typemod
  end

  def fieldTypeChange(attacker, placeholders: false)
    case @battle.FE
      when :RAINBOW # Rainbow Field
        if pbType(attacker) == :NORMAL && pbIsSpecial?(attacker, pbType(attacker))
          moddedtype = placeholders ? :RAINBOW : @battle.field.getRoll(update_roll: @battle.phase == :attackPhase)
        end
      when :CORROSIVEMIST # Corrosive Mist Field
        if pbType(attacker) == :FLYING && !pbIsPhysical?(attacker, pbType(attacker))
          moddedtype = :POISON
        end
      when :SHORTCIRCUIT # Shortcircuit Field
        if pbType(attacker) == :STEEL && attacker.ability == :STEELWORKER
          moddedtype = :ELECTRIC
        end
      when :CRYSTALCAVERN # Crystal Cavern
        if pbType(attacker) == :ROCK || [:JUDGMENT, :ROCKCLIMB, :STRENGTH, :MULTIATTACK, :PRISMATICLASER].include?(@move)
          moddedtype = placeholders ? :CRYSTAL : @battle.field.getRoll(update_roll: @battle.phase == :attackPhase)
        end
    end
    if !moddedtype
      fieldmove = @battle.field.moveData(@move)
      moddedtype = fieldmove[:typemod] if fieldmove
    end
    if !moddedtype # if moddedtype is STILL nil
      currenttype = pbType(attacker)
      fieldtype = @battle.field.typeData(currenttype)
      moddedtype = fieldtype[:typemod] if fieldtype
    end
    return moddedtype
  end

  def fieldTypeChangeModifier(attacker, opponent, typemod)
    moddedtype = fieldTypeChange(attacker)
    return typemod if !moddedtype

    newtypemod = pbTypeModifier(moddedtype, attacker, opponent)
    newtypemod = irregularTypeMods(attacker, opponent, newtypemod, moddedtype)
    return typemod * newtypemod
  end

  def overlayTypeChange()
    for field in $cache.FEData.keys
      next if !field.is_a?(Symbol)
      next if $cache.FEData[field].overlaymovedata.empty?
      next if @battle.state.effects[field] == 0

      overlaymove = $cache.FEData[field].overlaymovedata[@move]
      moddedtype = overlaymove[:typemod] if overlaymove
    end
    return moddedtype
  end

  def overlayTypeChangeModifier(attacker, opponent, typemod)
    moddedtype = overlayTypeChange()
    return typemod if !moddedtype

    newtypemod = pbTypeModifier(moddedtype, attacker, opponent)
    newtypemod = irregularTypeMods(attacker, opponent, newtypemod, moddedtype)
    return typemod * newtypemod
  end

  def getSecondaryType(attacker, placeholders: false)
    secondtype = []
    secondtype.push(:FLYING) if @move == :FLYINGPRESS
    fieldtype = fieldTypeChange(attacker, placeholders: placeholders)
    secondtype.push(fieldtype) if fieldtype
    overlaytype = overlayTypeChange
    secondtype.push(overlaytype) if overlaytype
    secondtype = [secondtype[0], secondtype[1]] if secondtype.length > 2
    return secondtype
  end

  ################################################################################
  # This move's accuracy check
  ################################################################################
  def pbAccuracyCheck(attacker, opponent)
    baseaccuracy = self.accuracy
    # Field Effects
    fieldmove = @battle.field.moveData(@move)
    baseaccuracy = fieldmove[:accmod] if fieldmove && fieldmove[:accmod]
    return true if baseaccuracy == 0
    return true if attacker.ability == :NOGUARD || opponent.ability == :NOGUARD || (attacker.ability == :FAIRYAURA && @battle.FE == :FAIRYTALE)
    return true if opponent.effects[:Telekinesis] > 0
    return true if @function == 0x0D && @battle.pbWeather == :HAIL # Blizzard
    return true if (@function == 0x08 || @function == 0x15) && @battle.pbWeather == :RAINDANCE # Thunder, Hurricane
    return true if @type == :ELECTRIC && @battle.FE == :UNDERWATER
    return true if attacker.hasType?(:POISON) && @move == :TOXIC
    return true if (@function == 0x10 || @move == :BODYSLAM || @function == 0x137 || @function == 0x9B) && opponent.effects[:Minimize] # Flying Press, Stomp, DRush
    return true if @battle.FE == :MIRROR && (PBFields::BLINDINGMOVES + [:MIRRORSHOT]).include?(@move)

    # One-hit KO accuracy handled elsewhere
    if @function == 0x08 || @function == 0x15 # Thunder, Hurricane
      baseaccuracy = 50 if @battle.pbWeather == :SUNNYDAY && !attacker.hasWorkingItem(:UTILITYUMBRELLA)
    end
    accstage = attacker.stages[PBStats::ACCURACY]
    accstage = 0 if opponent.ability == :UNAWARE && !opponent.moldbroken
    evastage = opponent.stages[PBStats::EVASION]
    evastage = 0 if opponent.effects[:Foresight] || opponent.effects[:MiracleEye] || @function == 0xA9 || # Chip Away
                    [:UNAWARE, :KEENEYE].include?(attacker.ability)
    accstage -= evastage
    accstage = accstage.clamp(-6, 6)
    accuracy = accstage >= 0 ? (accstage + 3) * 100.0 / 3 : 300.0 / (3 - accstage)

    # accuracy modifiers
    accuracy *= 1.67 if @battle.state.effects[:Gravity] != 0
    if attacker.ability == :COMPOUNDEYES
      accuracy *= 1.3
    end
    if attacker.effects[:MicleBerry]
      if (attacker.ability == :GLUTTONY && attacker.hp <= (attacker.totalhp / 2.0).floor) ||
         attacker.hp <= (attacker.totalhp / 4.0).floor
        accuracy *= 1.2
        attacker.effects[:MicleBerry] = false
      end
    end
    if attacker.ability == :VICTORYSTAR
      accuracy *= 1.1
    end
    partner = attacker.pbPartner
    if partner && partner.ability == :VICTORYSTAR
      accuracy *= 1.1
    end
    if attacker.hasWorkingItem(:WIDELENS)
      accuracy *= 1.1
    end
    # Hypno Crest, Stantler Crest
    if [:HYPNO, :STANTLER, :WYRDEER].include?(attacker.crested)
      accuracy *= 1.5
    end
    if attacker.hasWorkingItem(:ZOOMLENS) && attacker.pbSpeed < opponent.pbSpeed
      accuracy *= 1.2
    end
    if attacker.ability == :HUSTLE && @basedamage > 0 && pbIsPhysical?(attacker, pbType(attacker))
      accuracy *= [:BACKALLEY, :CITY].include?(@battle.FE) ? 0.67 : 0.8
    end
    if attacker.ability == :LONGREACH && (@battle.FE == :ROCKY || (!Rejuv && @battle.FE == :FOREST)) # Rocky/ Forest Field
      accuracy *= 0.9
    end
    if (opponent.ability == :WONDERSKIN || (Rejuv && @battle.FE == :PSYTERRAIN && opponent.ability == :MAGICIAN)) &&
       @basedamage == 0 && attacker.pbIsOpposing?(opponent.index) && !opponent.moldbroken
      if @battle.FE == :RAINBOW
        accuracy *= 0
      else
        accuracy *= 0.5
      end
    end
    if opponent.ability == :TANGLEDFEET && opponent.effects[:Confusion] > 0 && !opponent.moldbroken
      accuracy *= 0.5
    end
    if opponent.ability == :SANDVEIL && (@battle.pbWeather == :SANDSTORM || [:DESERT, :ASHENBEACH].include?(@battle.FE)) && !opponent.moldbroken
      accuracy *= 0.8
    end
    if opponent.ability == :SNOWCLOAK && (@battle.pbWeather == :HAIL || [:ICY, :SNOWYMOUNTAIN, :FROZENDIMENSION].include?(@battle.FE)) && !opponent.moldbroken
      accuracy *= 0.8
    end
    if opponent.hasWorkingItem(:BRIGHTPOWDER)
      accuracy *= 0.9
    end
    if opponent.hasWorkingItem(:LAXINCENSE)
      accuracy *= 0.9
    end
    accuracy = 100.0 if @battle.FE == :ASHENBEACH && [:OWNTEMPO, :INNERFOCUS, :PUREPOWER, :SANDVEIL, :STEADFAST].include?(attacker.ability) && ![:UNNERVE, :ASONECHILLING, :ASONEGRIM].include?(opponent.ability)
    return @battle.pbRandom(100) < (baseaccuracy * accuracy / 100.0).floor
  end

  ################################################################################
  # Damage calculation and modifiers
  ################################################################################
  def pbCritRate?(attacker, opponent)
    return -1 if self.is_a?(PokeBattle_Confusion)
    return -1 if (opponent.ability == :BATTLEARMOR || opponent.ability == :SHELLARMOR) && !opponent.moldbroken
    return -1 if opponent.pbOwnSide.effects[:LuckyChant] > 0
    return 3 if attacker.effects[:LaserFocus] > 0 || @function == 0xA0 || @function == 0x319 # Frost Breath, Surging Strikes
    return 3 if @function == 0x201 && attacker.hp <= ((attacker.totalhp) * 0.5).floor # Gale Strike
    return 3 if attacker.ability == :MERCILESS && (opponent.status == :POISON || @battle.FE == :CORROSIVEMIST || ([:CORROSIVE, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE) && !attacker.isAirborne?))
    return 3 if (opponent.ability == :RATTLED || opponent.ability == :WIMPOUT) && @battle.FE == :COLOSSEUM
    return 3 if attacker.crested == :ARIADOS && (opponent.status == :POISON || opponent.stages[PBStats::SPEED] < 0) # ariados crest
    return 3 if (attacker.ability == :QUICKDRAW && attacker.effects[:QuickDrawSnipe])

    c = 0
    c += attacker.effects[:FocusEnergy]
    c += 1 if !@data.nil? && highCritRate?
    c += 1 if attacker.inHyperMode? && getMoveType(@move) == :SHADOW
    c += 1 if attacker.ability == :SUPERLUCK
    c += 2 if attacker.hasWorkingItem(:STICK) && (attacker.pokemon.species == :FARFETCHD || attacker.pokemon.species == :SIRFETCHD)
    c += 2 if attacker.hasWorkingItem(:LUCKYPUNCH) && (attacker.pokemon.species == :CHANSEY)
    if @battle.FE == :MIRROR
      buffs = 0
      buffs = attacker.stages[PBStats::EVASION] if attacker.stages[PBStats::EVASION] > 0
      buffs = buffs.to_i + attacker.stages[PBStats::ACCURACY] if attacker.stages[PBStats::ACCURACY] > 0
      buffs = buffs.to_i - opponent.stages[PBStats::EVASION] if opponent.stages[PBStats::EVASION] < 0
      buffs = buffs.to_i - opponent.stages[PBStats::ACCURACY] if opponent.stages[PBStats::ACCURACY] < 0
      buffs = buffs.to_i
      c += buffs if buffs > 0
    end
    c += 1 if attacker.hasWorkingItem(:RAZORCLAW)
    c += 1 if attacker.hasWorkingItem(:SCOPELENS)
    c += 3 if sharpMove? && attacker.crested == :SAMUROTT
    c += 1 if attacker.crested == :FEAROW # Fearow Crest
    c += 1 if attacker.speed > opponent.speed && @battle.FE == :GLITCH
    if Rejuv && @battle.FE == :CHESS
      c += 1 if (opponent.ability == :RECKLESS || opponent.ability == :GORILLATACTICS)
      c += 1 if [:STOMPINGTANTRUM, :THRASH, :OUTRAGE].include?(opponent.lastMoveUsed)
      if attacker.ability == :MERCILESS
        frac = (1.0 * opponent.hp) / (1.0 * opponent.totalhp)
        if frac < 0.8
          c += 1
        elsif frac < 0.6
          c += 2
        elsif frac < 0.4
          c += 3
        end
      end
    end
    c = 3 if c > 3
    return c
  end

  def pbBaseDamage(basedmg, attacker, opponent)
    return basedmg
  end

  def pbBaseDamageMultiplier(damagemult, attacker, opponent)
    return damagemult
  end

  def pbModifyDamage(damagemult, attacker, opponent)
    return damagemult
  end

  def pbCalcDamage(attacker, opponent, hitnum = 0, feedbackMessages = [])
    opponent.damagestate.critical = false
    opponent.damagestate.typemod = Typemod.zero
    opponent.damagestate.calcdamage = 0
    basedmg = @basedamage # From PBS file
    basedmg = [attacker.happiness, 250].min if attacker.crested == :LUVDISC && basedmg != 0
    basedmg = pbBaseDamage(basedmg, attacker, opponent) # Some function codes alter base power
    return 0 if basedmg == 0

    ##### Unique Modifiers #####
    # Type effectiveness
    type = pbType(attacker)
    typemod = pbCalcTypeMod(type, attacker, opponent)
    opponent.damagestate.typemod = typemod
    if typemod.immune? # failsafe condition type mod 0 shouldn't actually make it to this point
      opponent.damagestate.calcdamage = 0
      opponent.damagestate.critical = false
      return 0
    end
    typemult = typemod.multiplier

    # Weather
    weathermult = 1.0
    case @battle.pbWeather
      when :SUNNYDAY
        weathermult = 1.5 if type == :FIRE
        weathermult = 0.5 if type == :WATER
      when :RAINDANCE
        weathermult = 1.5 if type == :WATER
        weathermult = 0.5 if type == :FIRE
    end

    # Multi-targeting attacks
    spreadmult = 1.0
    if pbTargetsAll?(attacker)
      if attacker.pokemon.piece == :KNIGHT && @battle.FE == :CHESS && attacker.pbTarget(self) == :AllOpposing
        message = _INTL("The knight forked the opponents!")
        feedbackMessages.push(message) unless feedbackMessages.include?(message)
        spreadmult = 1.25
      else
        spreadmult = 0.75
      end
    end

    # Parental Bond / Typhlosion Crest
    bondmult = 1.0
    bondmult = 0.25 if hitnum == 1 && attacker.effects[:ParentalBond] && pbNumHits(attacker) == 1
    bondmult = 0.3 if hitnum == 1 && attacker.effects[:TyphBond] && pbNumHits(attacker) == 1

    # Critical hit
    critmult = 1.0
    critchance = pbCritRate?(attacker, opponent)
    if critchance >= 0
      ratios = [24, 8, 2, 1]
      opponent.damagestate.critical = @battle.pbRandom(ratios[critchance]) == 0
    end
    critmult = 1.5 if opponent.damagestate.critical

    # Random Variance
    if !$game_switches[:No_Damage_Rolls] || @battle.isOnline?
      random = 85 + @battle.pbRandom(16)
    else
      random = 93
    end
    random = 85 if @battle.FE == :CONCERT1
    random = 100 if @battle.FE == :CONCERT4
    randommult = random / 100.0

    # STAB-addition from Crests
    stabmult = 1.0
    typecrest = false
    case attacker.crested
      when :EMPOLEON then typecrest = true if type == :ICE
      when :LUXRAY then typecrest = true if type == :DARK
      when :SAMUROTT then typecrest = true if type == :FIGHTING
      when :SIMISEAR then typecrest = true if type == :WATER
      when :SIMIPOUR then typecrest = true if type == :GRASS
      when :SIMISAGE then typecrest = true if type == :FIRE
      when :ZOROARK
        party = @battle.pbPartySingleOwner(attacker.index)
        party = party.find_all { |item| item && !item.egg? && item.hp > 0 }
        if party[party.length - 1] != attacker.pokemon
          typecrest = true if party[party.length - 1].hasType?(type)
        end
    end
    # STAB
    if (attacker.hasType?(type) && !attacker.effects[:DesertsMark]) || typecrest == true
      if attacker.ability == :ADAPTABILITY || (attacker.hasType?(type) && typecrest == true)
        stabmult = 2.0
      else
        stabmult = 1.5
      end
      if attacker.crested == :SILVALLY
        stabmult *= 1.2
      end
    end

    # Burn
    burnmult = 1.0
    burnmult = 0.5 if attacker.status == :BURN && pbIsPhysical?(attacker, type) && attacker.ability != :GUTS && @move != :FACADE

    # Z-Move Protect
    zmovemult = 1.0
    if @zmove
      if opponent.pbOwnSide.effects[:MatBlock] || opponent.effects[:Protect] ||
         (opponent.pbOwnSide.effects[:WideGuard] && [:AllOpposing, :AllNonUsers].include?(attacker.pbTarget(self)))
        if @move == :UNLEASHEDPOWER
          message = _INTL("The Interceptor's power broke through {1}'s Protect!", opponent.pbThis)
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        else
          message = _INTL("{1} couldn't fully protect itself!", opponent.pbThis)
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
          zmovemult = 0.25
        end
      end
    end

    attitemworks = attacker.itemWorks?(true)

    ##### Base Power Modifiers #####
    basemult = []
    aurabroken = @battle.pbCheckGlobalAbility(:AURABREAK)
    aurabroken = nil if aurabroken && aurabroken.moldbroken
    darkness = [:DARKNESS1, :DARKNESS2, :DARKNESS3].include?(@battle.FE)
    if type == :DARK && @battle.pbCheckGlobalAbility(:DARKAURA)
      if darkness
        case @battle.FE
          when :DARKNESS1 then auramult = 1.4
          when :DARKNESS2 then auramult = 1.5
          when :DARKNESS3 then auramult = 1.66
        end
        basemult.append(aurabroken ? 1 / auramult : auramult)
      else
        basemult.append(aurabroken ? 0.75 : 1.33)
      end
    end
    if type == :FAIRY && @battle.pbCheckGlobalAbility(:FAIRYAURA)
      if darkness
        case @battle.FE
          when :DARKNESS1 then auramult = 1.3
          when :DARKNESS2 then auramult = 1.2
          when :DARKNESS3 then auramult = 1.1
        end
        basemult.append(aurabroken ? 1 / auramult : auramult)
      else
        basemult.append(aurabroken ? 0.75 : 1.33)
      end
    end
    case attacker.ability
      when :RIVALRY       then basemult.append(attacker.gender == opponent.gender ? 1.25 : 0.75) if attacker.gender != 2
      when :AERILATE
        if @type == :NORMAL && type == :FLYING
          case @battle.FE
            when :MOUNTAIN, :SNOWYMOUNTAIN, :SKY then basemult.append(1.5)
            else
              basemult.append(1.2)
          end
        end
      when :GALVANIZE
        if @type == :NORMAL && type == :ELECTRIC
          case @battle.FE
            when :ELECTERRAIN, :FACTORY then basemult.append(1.5)
            when :SHORTCIRCUIT then basemult.append(2)
            else
              if @battle.state.effects[:ELECTERRAIN] > 0
                basemult.append(1.5)
              else
                basemult.append(1.2)
              end
          end
        end
      when :REFRIGERATE
        if @type == :NORMAL && type == :ICE
          case @battle.FE
            when :ICY, :SNOWYMOUNTAIN, :FROZENDIMENSION then basemult.append(1.5)
            else
              basemult.append(1.2)
          end
        end
      when :PIXILATE
        if @type == :NORMAL && (type == :FAIRY || (type == :NORMAL && @battle.FE == :GLITCH))
          case @battle.FE
            when :MISTY then basemult.append(1.5)
            else
              if @battle.state.effects[:MISTY] > 0
                basemult.append(1.5)
              else
                basemult.append(1.2)
              end
          end
        end
      when :DUSKILATE     then basemult.append(1.2) if @type == :NORMAL && (type == :DARK || (!Rejuv && type == :NORMAL && @battle.FE == :GLITCH))
      when :NORMALIZE     then basemult.append(1.2) if !@zmove
      when :IRONFIST      then basemult.append(1.2) if punchMove?
      when :RECKLESS      then basemult.append(1.2) if @recoil > 0 || [0x10B, 0x506].include?(@function) # High Jump Kick, Axe Kick
      when :SHEERFORCE    then basemult.append(1.3) if @effect > 0
      when :SANDFORCE     then basemult.append(1.3) if (@battle.pbWeather == :SANDSTORM || [:DESERT, :ASHENBEACH].include?(@battle.FE)) && (type == :ROCK || type == :GROUND || type == :STEEL)
      when :ANALYTIC      then basemult.append(1.3) if (@battle.battlers.find_all { |battler| battler && battler.hp > 0 && !battler.hasMovedThisRound? && !@battle.switchedOut[battler.index] }).length == 0
      when :TOUGHCLAWS    then basemult.append(1.3) if contactMove?
      when :TECHNICIAN
        if basedmg <= 60
          basemult.append(1.5)
        elsif (@battle.FE == :FACTORY || @battle.ProgressiveFieldCheck(PBFields::CONCERT)) && basedmg <= 80
          basemult.append(1.5)
        end
      when :FLAREBOOST    then basemult.append(1.5) if (attacker.status == :BURN || [:BURNING, :VOLCANIC, :INFERNAL].include?(@battle.FE)) && pbIsSpecial?(attacker, type) && @battle.FE != :FROZENDIMENSION
      when :TOXICBOOST
        if (attacker.status == :POISON || [:CORROSIVE, :CORROSIVEMIST, :WASTELAND, :MURKWATERSURFACE].include?(@battle.FE)) && pbIsPhysical?(attacker, type)
          if @battle.FE == :CORRUPTED
            basemult.append(2.0)
          else
            basemult.append(1.5)
          end
        end
      when :STRONGJAW     then basemult.append(1.5) if PBStuff::BITEMOVE.include?(@move)
      when :MEGALAUNCHER  then basemult.append(1.5) if [:AURASPHERE, :DRAGONPULSE, :DARKPULSE, :WATERPULSE, :ORIGINPULSE, :TERRAINPULSE].include?(@move)
      when :SHARPNESS     then basemult.append(1.5) if sharpMove?
      when :TRUESHOT      then basemult.append(1.3) if PBStuff::BULLETMOVE.include?(@move)
      when :PUNKROCK
        if isSoundBased?
          case @battle.FE
            when :BIGTOP then basemult.append(1.5)
            when :CAVE then basemult.append(1.5)
            else
              basemult.append(1.3)
          end
        end
      when :TRANSISTOR    then basemult.append(1.5) if type == :ELECTRIC
      when :DRAGONSMAW    then basemult.append(1.5) if type == :DRAGON
      when :SOLARIDOL     then basemult.append(1.5) if type == :FIRE
      when :LUNARIDOL     then basemult.append(1.5) if type == :ICE
      when :TERAVOLT      then basemult.append(1.5) if Rejuv && @battle.FE == :ELECTERRAIN && type == :ELECTRIC
      when :INEXORABLE    then basemult.append(1.3) if type == :DRAGON && (!opponent.hasMovedThisRound? || @battle.switchedOut[opponent.index])
    end
    if attacker.pbPartner.ability == :BATTERY && pbIsSpecial?(attacker, type) && @battle.FE != :GLITCH
      if Rejuv && @battle.FE == :ELECTERRAIN
        basemult.append(1.5)
      else
        basemult.append(1.3)
      end
    end
    case opponent.ability
      when :HEATPROOF     then basemult.append(0.5) if !opponent.moldbroken && type == :FIRE
      when :DRYSKIN       then basemult.append(1.25) if !opponent.moldbroken && type == :FIRE
      when :TRANSISTOR    then basemult.append(0.5) if @battle.FE == :ELECTERRAIN && type == :GROUND && !opponent.moldbroken
    end
    if attitemworks
      if $cache.items[attacker.item].checkFlag?(:typeboost) == type
        if $cache.items[attacker.item].checkFlag?(:gem)
          basemult.append(1.3)
          message = _INTL("The {1} strengthened {2}'s power!", getItemName(attacker.item), self.name)
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
          attacker.takegem = true
        else
          basemult.append(1.2)
        end
      else
        case attacker.item
          when :MUSCLEBAND then basemult.append(PBMults::TenPercentItem) if pbIsPhysical?(attacker, type) # approx. 1.1x
          when :WISEGLASSES then basemult.append(PBMults::TenPercentItem) if pbIsSpecial?(attacker, type) # approx. 1.1x
          when :LUSTROUSORB then basemult.append(1.2) if attacker.pokemon.species == :PALKIA && [:DRAGON, :WATER].include?(type)
          when :ADAMANTORB then basemult.append(1.2) if attacker.pokemon.species == :DIALGA && [:DRAGON, :STEEL].include?(type)
          when :GRISEOUSORB then basemult.append(1.2) if attacker.pokemon.species == :GIRATINA && [:DRAGON, :GHOST].include?(type)
          when :SOULDEW then basemult.append(1.2) if [:LATIAS, :LATIOS].include?(attacker.pokemon.species) && [:DRAGON, :PSYCHIC].include?(type)
        end
      end
    end
    basemult.append(1.5) if attacker.effects[:MeFirst]
    basemult.append(1.5) if attacker.effects[:HelpingHand]
    case type
      when :FIRE then basemult.append(0.33) if @battle.state.effects[:WaterSport] > 0
      when :ELECTRIC
        basemult.append(0.33) if @battle.state.effects[:MudSport] > 0
        basemult.append(2.0) if attacker.effects[:Charge] > 0
    end
    if @battle.field.isFieldEffect?
      fieldmult = moveFieldBoost
      if fieldmult != 1
        basemult.append(fieldmult)
        fieldmessage = moveFieldMessage
        if fieldmessage
          if [:LIGHTTHATBURNSTHESKY, :ICEHAMMER, :HAMMERARM, :CRABHAMMER].include?(@move) # some moves have a {1} in them and we gotta deal.
            message = _INTL(fieldmessage, attacker.pbThis)
          elsif [:SMACKDOWN, :THOUSANDARROWS, :ROCKSLIDE, :VITALTHROW, :CIRCLETHROW, :STORMTHROW, :DOOMDUMMY, :BLACKHOLEECLIPSE, :TECTONICRAGE, :CONTINENTALCRUSH, :WHIRLWIND, :CUT].include?(@move)
            message = _INTL(fieldmessage, opponent.pbThis)
          else
            message = _INTL(fieldmessage)
          end
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
      end
    end
    fieldBoost = typeFieldBoost(type, attacker, opponent)
    overlayBoost, overlay = typeOverlayBoost(type, attacker, opponent)
    if fieldBoost != 1 || overlayBoost != 1
      if fieldBoost > 1 && overlayBoost > 1
        boost = [fieldBoost, overlayBoost].max
        if $game_variables[:DifficultyModes] == 1 && !$game_switches[:FieldFrenzy] && !@battle.isOnline?
          boost = 1.25 if boost < 1.25
        elsif $game_variables[:DifficultyModes] != 1 && $game_switches[:FieldFrenzy] && !@battle.isOnline?
          boost = 2.0 if boost < 2.0
        else
          boost = 1.5 if boost < 1.5
        end
      else
        boost = fieldBoost * overlayBoost
      end
      basemult.append(boost)
      fieldmessage = typeFieldMessage(type) if fieldBoost != 1
      overlaymessage = typeOverlayMessage(type, overlay) if overlay
      if overlaymessage && !fieldmessage
        feedbackMessages.push(overlaymessage) unless feedbackMessages.include?(overlaymessage)
      else
        feedbackMessages.push(fieldmessage) unless feedbackMessages.include?(fieldmessage)
      end
    end
    basemult.append(pbBaseDamageMultiplier(1.0, attacker, opponent))
    # standard crest damage multipliers
    case attacker.crested
      when :FERALIGATR then basemult.append(1.5) if PBStuff::BITEMOVE.include?(@move)
      when :CLAYDOL then basemult.append(1.5) if isBeamMove?
      when :DRUDDIGON then basemult.append(1.3) if type == :DRAGON || type == :FIRE
      when :BOLTUND then basemult.append(1.5) if PBStuff::BITEMOVE.include?(@move) && (!opponent.hasMovedThisRound? || @battle.switchedOut[opponent.index])
      when :FEAROW then basemult.append(1.5) if PBStuff::STABBINGMOVE.include?(@move)
      when :DUSKNOIR then basemult.append(1.5) if basedmg <= 60 || ((@battle.FE == :FACTORY || @battle.ProgressiveFieldCheck(PBFields::CONCERT)) && basedmg <= 80)
      when :CRABOMINABLE then basemult.append(1.5) if attacker.lastHPLost > 0
      when :AMPHAROS then basemult.append(attacker.hasType?(type) ? 1.2 : 1.5) if attacker.moves[0] == self
      when :LUXRAY then basemult.append(1.2) if @type == :NORMAL && type == :ELECTRIC
      when :SAWSBUCK
        case attacker.form
          when 0 then basemult.append(1.2) if @type == :NORMAL && type == :WATER
          when 1 then basemult.append(1.2) if @type == :NORMAL && type == :FIRE
          when 2 then basemult.append(1.2) if @type == :NORMAL && type == :GROUND
          when 3 then basemult.append(1.2) if @type == :NORMAL && type == :ICE
        end
    end
    case @battle.FE
      when :CHESS
        if CHESSMOVES.include?(@move)
          basemult.append(0.5) if [:ADAPTABILITY, :ANTICIPATION, :SYNCHRONIZE, :TELEPATHY].include?(opponent.ability)
          basemult.append(2.0) if [:OBLIVIOUS, :KLUTZ, :UNAWARE, :SIMPLE].include?(opponent.ability) || opponent.effects[:Confusion] > 0 || (Rejuv && opponent.ability == :DEFEATIST)
          message = _INTL("The chess piece slammed forward!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
        # Queen piece boost
        if attacker.pokemon.piece == :QUEEN || attacker.ability == :QUEENLYMAJESTY
          basemult.append(1.5)
          if attacker.pokemon.piece == :QUEEN
            message = _INTL("The Queen is dominating the board!")
            feedbackMessages.push(message) unless feedbackMessages.include?(message)
          end
        end
        # Knight piece boost
        if attacker.pokemon.piece == :KNIGHT && opponent.pokemon.piece == :QUEEN
          basemult.append(3.0)
          message = _INTL("An unblockable attack on the Queen!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
      when :BIGTOP
        if (type == :FIGHTING && pbIsPhysical?(attacker, type)) || STRIKERMOVES.include?(@move)
          message = _INTL("WHAMMO!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
          provimult = @battle.field.getRoll(maximize_roll: [:HUGEPOWER, :GUTS, :PUREPOWER, :SHEERFORCE].include?(attacker.ability), rollmodifier: attacker.stages[PBStats::ATTACK])
          # considering how the roll is determined it shouldn't actually be possible for it to be anything besides the given values, but leaving >= *just* in case
          if provimult >= 3.0
            message = _INTL("...OVER 9000!!!")
          elsif provimult >=  2.0
            message = _INTL("...POWERFUL!")
          elsif provimult >= 1.5
            message = _INTL("...NICE!")
          elsif provimult >= 1
            message = _INTL("...OK!")
          else
            message = _INTL("...WEAK!")
          end
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
          if !@battle.isOnline?
            provimult = ((provimult - 1.0) / 2.0) + 1.0 if $game_variables[:DifficultyModes] == 1 && !$game_switches[:FieldFrenzy]
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_variables[:DifficultyModes] != 1 && $game_switches[:FieldFrenzy] && provimult > 1
            provimult = provimult / 2.0 if $game_variables[:DifficultyModes] != 1 && $game_switches[:FieldFrenzy] && provimult < 1
          end
          basemult.append(provimult)
        end
        if isSoundBased?
          provimult = 1.5
          if !@battle.isOnline?
            provimult = 1.25 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("Loud and clear!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
      when :ICY
        if (@priority >= 1 && @basedamage > 0 && contactMove? && attacker.ability != :LONGREACH) || [:FEINT, :ROLLOUT, :DEFENSECURL, :STEAMROLLER, :LUNGE, :ICEBALL].include?(@move)
          if !attacker.isAirborne?
            if attacker.pbIncreaseStat(PBStats::SPEED, 1, statmessage: false)
              if attacker.ability == :CONTRARY
                message = _INTL("{1} lost momentum on the ice!", attacker.pbThis)
              else
                message = _INTL("{1} gained momentum on the ice!", attacker.pbThis)
              end
              feedbackMessages.push(message) unless feedbackMessages.include?(message)
            end
          end
        end
      when :SHORTCIRCUIT
        if type == :ELECTRIC
          damageroll = @battle.field.getRoll(maximize_roll: @battle.state.effects[:ELECTERRAIN] > 0)
          messageroll = _INTL(["Bzzt.", "Bzzapp!", "Bzt...", "Bzap!", "BZZZAPP!"][PBStuff::SHORTCIRCUITROLLS.index(damageroll)])
          feedbackMessages.push(messageroll) unless feedbackMessages.include?(messageroll)
          if !@battle.isOnline?
            damageroll = ((damageroll - 1.0) / 2.0) + 1.0 if $game_variables[:DifficultyModes] == 1 && !$game_switches[:FieldFrenzy]
            damageroll = ((damageroll - 1.0) * 2.0) + 1.0 if $game_variables[:DifficultyModes] != 1 && $game_switches[:FieldFrenzy] && damageroll > 1
            damageroll = damageroll / 2.0 if $game_variables[:DifficultyModes] != 1 && $game_switches[:FieldFrenzy] && damageroll < 1
          end
          basemult.append(damageroll)
        end
      when :CAVE
        if isSoundBased?
          provimult = 1.5
          if !@battle.isOnline?
            provimult = 1.25 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("ECHO-Echo-echo!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
      when :MOUNTAIN, :SNOWYMOUNTAIN
        if @battle.pbWeather == :STRONGWINDS && (windMove? || (type == :FLYING && !pbIsPhysical?(attacker, type)))
          provimult = 1.5
          if !@battle.isOnline?
            provimult = 1.25 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          if windMove?
            message = _INTL("The wind strengthened the attack!")
            feedbackMessages.push(message) unless feedbackMessages.include?(message)
          end
        end
      when :MIRROR
        if PBFields::MIRRORMOVES.include?(@move) && opponent.stages[PBStats::EVASION] > 0
          provimult = 2.0
          if !@battle.isOnline?
            provimult = 1.5 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("The beam was focused from the reflection!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
        @battle.field.counter = 0
      when :DEEPEARTH
        if priorityCheck(attacker) > 0 && @basedamage > 0
          provimult = 0.7
          if !@battle.isOnline?
            provimult = 0.85 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("The intense pull slowed the attack...")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
        if priorityCheck(attacker) < 0 && @basedamage > 0
          provimult = 1.3
          if !@battle.isOnline?
            provimult = 1.15 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("Slow and heavy!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
        if type == :GROUND && opponent.hasType?(:GROUND)
          provimult = 0.5
          if !@battle.isOnline?
            provimult = 0.75 if $game_variables[:DifficultyModes] == 1 && !$game_switches[:FieldFrenzy]
            provimult = 0.25 if $game_variables[:DifficultyModes] != 1 && $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("The dense earth is difficult to mold...")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
      when :CONCERT1, :CONCERT2, :CONCERT3, :CONCERT4
        if isSoundBased?
          provimult = 1.5
          if !@battle.isOnline?
            provimult = 1.25 if $game_variables[:DifficultyModes] == 1
            provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
          end
          basemult.append(provimult)
          message = _INTL("Loud and clear!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
      when :DARKNESS3, :DARKNESS2
        if [:LIGHTTHATBURNSTHESKY].include?(@move)
          message = _INTL("One brings Shadow, One brings the Light!")
          feedbackMessages.push(message) unless feedbackMessages.include?(message)
        end
    end
    if Rejuv
      for terrain in [:ELECTERRAIN, :GRASSY, :MISTY, :PSYTERRAIN]
        if @battle.state.effects[terrain] > 0
          overlaymult = moveOverlayBoost(terrain)
          if overlaymult != 1
            basemult.append(overlaymult)
            overlaymessage = moveOverlayMessage(terrain)
            feedbackMessages.push(overlaymessage) unless overlaymessage.nil? || feedbackMessages.include?(overlaymessage)
          end
        end
      end
    end

    ##### Apply Base Power modifiers to the move's Base Power #####
    basedmg *= 0.3 if attacker.crested == :CINCCINO && !pbIsMultiHit
    basedmg = basedmg.chainMods(basemult).pokeRound.pokeClamp

    ##### Attack Modifiers #####
    atkmult = []
    case attacker.ability
      when :SLOWSTART then atkmult.append(0.5) if attacker.turncount < 5 && pbIsPhysical?(attacker, type) && @battle.FE != :DEEPEARTH
      when :DEFEATIST then atkmult.append(0.5) if attacker.hp <= (attacker.totalhp / 2.0).floor
      when :GUTS then atkmult.append(1.5) if !attacker.status.nil? && pbIsPhysical?(attacker, type)
      when :SOLARPOWER then atkmult.append(1.5) if (@battle.pbWeather == :SUNNYDAY && !(attitemworks && attacker.item == :UTILITYUMBRELLA)) && pbIsSpecial?(attacker, type) && ![:GLITCH, :FROZENDIMENSION].include?(@battle.FE)
      when :PLUS, :MINUS
        if pbIsSpecial?(attacker, type) && @battle.FE != :GLITCH
          partner = attacker.pbPartner
          if partner.ability == :PLUS || partner.ability == :MINUS
            atkmult.append(1.5)
          elsif @battle.FE == :SHORTCIRCUIT || (Rejuv && @battle.FE == :ELECTERRAIN) || @battle.state.effects[:ELECTERRAIN] > 0
            atkmult.append(1.5)
          end
        end
      when :STEELWORKER then atkmult.append(@battle.FE == :FACTORY ? 2.0 : 1.5) if type == :STEEL
      when :HUGEPOWER then atkmult.append(2.0) if pbIsPhysical?(attacker, type)
      when :PUREPOWER
        if @battle.FE == :PSYTERRAIN || @battle.state.effects[:PSYTERRAIN] > 0
          atkmult.append(2.0) if pbIsSpecial?(attacker, type)
        else
          atkmult.append(2.0) if pbIsPhysical?(attacker, type)
        end
      when :GORILLATACTICS then atkmult.append(1.5) if pbIsPhysical?(attacker, type)
      when :QUARKDRIVE then atkmult.append(1.3) if (attacker.effects[:Quarkdrive][0] == PBStats::ATTACK && pbIsPhysical?(attacker, type)) || (attacker.effects[:Quarkdrive][0] == PBStats::SPATK && pbIsSpecial?(attacker, type))
    end
    if attacker.flowerGiftActive? && pbIsPhysical?(attacker, type)
      atkmult.append(1.5)
    end
    if attacker.pbPartner.flowerGiftActive? && pbIsPhysical?(attacker, type)
      atkmult.append(1.5)
    end
    # pinch abilities
    if [:BURNING, :VOLCANIC, :INFERNAL].include?(@battle.FE) && attacker.ability == :BLAZE && type == :FIRE
      atkmult.append(1.5)
    elsif @battle.FE == :VOLCANICTOP && attacker.ability == :BLAZE && type == :FIRE && attacker.effects[:Blazed]
      atkmult.append(1.5)
    elsif (@battle.FE == :FOREST || (Rejuv && @battle.FE == :GRASSY)) && attacker.ability == :OVERGROW && type == :GRASS
      atkmult.append(1.5)
    elsif @battle.FE == :FOREST && attacker.ability == :SWARM && type == :BUG
      atkmult.append(1.5)
    elsif ((@battle.FE == :WATERSURFACE && !attacker.isAirborne?) || @battle.FE == :UNDERWATER) && attacker.ability == :TORRENT && type == :WATER
      atkmult.append(1.5)
    elsif @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN) && attacker.ability == :SWARM && type == :BUG
      atkmult.append(1.5) if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 1, 2)
      atkmult.append(1.8) if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 4)
      atkmult.append(2.0) if @battle.FE == :FLOWERGARDEN5
    elsif @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 2, 5) && attacker.ability == :OVERGROW && type == :GRASS
      case @battle.FE
        when :FLOWERGARDEN2 then atkmult.append(1.5) if attacker.hp <= (attacker.totalhp * 0.67).floor
        when :FLOWERGARDEN3 then atkmult.append(1.6)
        when :FLOWERGARDEN4 then atkmult.append(1.8)
        when :FLOWERGARDEN5 then atkmult.append(2.0)
      end
    elsif attacker.hp <= (attacker.totalhp / 3.0).floor
      if (attacker.ability == :OVERGROW && type == :GRASS) || (attacker.ability == :BLAZE && type == :FIRE && @battle.FE != :FROZENDIMENSION) ||
         (attacker.ability == :TORRENT && type == :WATER) || (attacker.ability == :SWARM && type == :BUG)
        atkmult.append(1.5)
      end
    end
    atkmult.append(1.5) if attacker.effects[:FlashFire] && type == :FIRE && @battle.FE != :FROZENDIMENSION
    case type
      when :FIRE
        atkmult.append(0.5) if opponent.ability == :WATERBUBBLE
      when :WATER
        atkmult.append(2) if attacker.ability == :WATERBUBBLE
    end
    atkmult.append(2.0) if attacker.ability == :STAKEOUT && @battle.switchedOut[opponent.index]
    atkmult.append(0.5) if opponent.ability == :THICKFAT && (type == :ICE || type == :FIRE) && !opponent.moldbroken
    if attitemworks
      case attacker.item
        when :CHOICEBAND then atkmult.append(1.5) if pbIsPhysical?(attacker, type)
        when :CHOICESPECS then atkmult.append(1.5) if pbIsSpecial?(attacker, type) && @battle.FE != :GLITCH
        when :THICKCLUB then atkmult.append(2.0) if (attacker.pokemon.species == :CUBONE || attacker.pokemon.species == :MAROWAK) && pbIsPhysical?(attacker, type)
        when :DEEPSEATOOTH then atkmult.append(2.0) if attacker.pokemon.species == :CLAMPERL && pbIsSpecial?(attacker, type) && @battle.FE != :GLITCH
        when :LIGHTBALL then atkmult.append(2.0) if attacker.pokemon.species == :PIKACHU && @battle.FE != :GLITCH
      end
    end
    if [:HAUNTED, :BEWITCHED, :HOLY, :PSYTERRAIN, :DEEPEARTH].include?(@battle.FE)
      atkmult.append(1.5) if attacker.pbPartner.ability == :POWERSPOT
    else
      atkmult.append(1.3) if attacker.pbPartner.ability == :POWERSPOT
    end
    # Mid Battle stat multiplying crests; Spiritomb Crest, Castform Crest
    case attacker.crested
      when :CASTFORM then atkmult.append(1.5) if attacker.form == 1 && (@battle.pbWeather == :SUNNYDAY && !(attitemworks && attacker.item == :UTILITYUMBRELLA)) && pbIsSpecial?(attacker, type) && ![:GLITCH, :FROZENDIMENSION].include?(@battle.FE)
      when :SPIRITOMB
        allyfainted = attacker.pbFaintedPokemonCount
        modifier = (allyfainted * 0.2) + 1.0
        atkmult.append(modifier)
    end
    unless attacker.hasWorkingItem(:UTILITYUMBRELLA)
      if @battle.pbWeather == :SUNNYDAY && pbIsPhysical?(attacker, type)
        atkmult.append(1.5) if attacker.ability == :SOLARIDOL
      end
      if @battle.pbWeather == :HAIL && pbIsSpecial?(attacker, type)
        atkmult.append(1.5) if attacker.ability == :LUNARIDOL
      end
    end
    if @battle.FE == :FAIRYTALE
      atkmult.append(2.0) if (attacker.pbPartner.ability == :STEELYSPIRIT || attacker.ability == :STEELYSPIRIT) && type == :STEEL
    else
      atkmult.append(1.5) if (attacker.pbPartner.ability == :STEELYSPIRIT || attacker.ability == :STEELYSPIRIT) && type == :STEEL
    end
    if @battle.FE != :INDOOR
      if [:STARLIGHT, :NEWWORLD].include?(@battle.FE)
        if attacker.ability == :VICTORYSTAR
          atkmult.append(1.5)
        end
        partner = attacker.pbPartner
        if partner && partner.ability == :VICTORYSTAR
          atkmult.append(1.5)
        end
      end
      if @battle.FE == :WATERSURFACE
        atkmult.append(1.5) if attacker.ability == :PROPELLERTAIL && @priority >= 1 && @basedamage > 0
      end
      if @battle.FE == :UNDERWATER
        atkmult.append(0.5) if (!Rejuv || !attacker.hasType?(:WATER)) && pbIsPhysical?(attacker, type) && type != :WATER && attacker.ability != :STEELWORKER && attacker.ability != :SWIFTSWIM
        atkmult.append(1.5) if attacker.ability == :PROPELLERTAIL && @priority >= 1 && @basedamage > 0
      end
      if Rejuv && @battle.FE == :CHESS
        atkmult.append(1.2) if attacker.ability == :GORILLATACTICS || attacker.ability == :RECKLESS
        atkmult.append(1.2) if attacker.effects[:Illusion] != nil
        if attacker.ability == :COMPETITIVE
          frac = (1.0 * attacker.hp) / (1.0 * attacker.totalhp)
          multiplier = 1.0
          multiplier += ((1.0 - frac) / 0.8)
          if frac < 0.2
            multiplier = 2.0
          end
          atkmult.append(multiplier)
        end
      end
      case attacker.ability
        when :QUEENLYMAJESTY then atkmult.append(1.5) if @battle.FE == :FAIRYTALE
        when :LONGREACH then atkmult.append(1.5) if [:MOUNTAIN, :SNOWYMOUNTAIN, :SKY].include?(@battle.FE)
        when :CORROSION then atkmult.append(1.5) if [:CORROSIVE, :CORROSIVEMIST, :CORRUPTED].include?(@battle.FE)
        when :SKILLLINK then atkmult.append(1.2) if @battle.FE == :COLOSSEUM && (@function == 0xC0 || @function == 0x307 || (attacker.crested == :CINCCINO && !pbIsMultiHit)) # 0xC0: 2-5 hits; 0x307: Scale Shot
      end
    end

    ##### Calculate attacker's attack stat #####
    case @function
      when 0x121 # Foul Play
        atk = opponent.attack
        atkstage = opponent.stages[PBStats::ATTACK] + 6
      when 0x184 # Body Press
        atk = attacker.defense
        atkstage = attacker.stages[PBStats::DEFENSE] + 6
      else
        atk = attacker.attack
        atkstage = attacker.stages[PBStats::ATTACK] + 6
    end
    if pbIsSpecial?(attacker, type)
      atk = attacker.spatk
      atkstage = attacker.stages[PBStats::SPATK] + 6
      if @function == 0x121 # Foul Play
        atk = opponent.spatk
        atkstage = opponent.stages[PBStats::SPATK] + 6
      end
      if @battle.FE == :GLITCH
        atk = attacker.getSpecialStat(opponent.ability == :UNAWARE, attacker: true, crit: opponent.damagestate.critical)
        atkstage = 6 # getspecialstat handles unaware
      end
    end
    # Stat-Copy Crests, ala Claydol//Dedenne
    case attacker.crested
      when :CLAYDOL then atkstage = attacker.stages[PBStats::DEFENSE] + 6 if pbIsSpecial?(attacker, type)
      when :DEDENNE then atkstage = attacker.stages[PBStats::SPEED] + 6 if !pbIsSpecial?(attacker, type)
    end

    ##### Apply Attack modifiers to the attacker's Attack stat #####
    if opponent.ability != :UNAWARE || opponent.moldbroken
      atkstage = 6 if opponent.damagestate.critical && atkstage < 6
      atk = (atk * PBStats::StageMul[atkstage]).floor
    end
    if attacker.ability == :HUSTLE && pbIsPhysical?(attacker, type)
      atk = [:BACKALLEY, :CITY].include?(@battle.FE) ? (atk * 1.75).floor : (atk * 1.5).floor
    end
    atk = atk.chainMods(atkmult).pokeRound.pokeClamp

    ##### Defense Modifiers #####
    defmult = []
    case opponent.ability
      when :MARVELSCALE then defmult.append(1.5) if pbHitsPhysicalStat?(attacker, type) && (!opponent.status.nil? || ([:MISTY, :RAINBOW, :FAIRYTALE, :DRAGONSDEN, :STARLIGHT].include?(@battle.FE) || @battle.state.effects[:MISTY] > 0)) && !opponent.moldbroken
      when :GRASSPELT then defmult.append(1.5) if pbHitsPhysicalStat?(attacker, type) && ([:GRASSY, :FOREST].include?(@battle.FE) || @battle.state.effects[:GRASSY] > 0) # Grassy Field
      when :FURCOAT then defmult.append(2.0) if pbIsPhysical?(attacker, type) && !opponent.moldbroken
      when :PUNKROCK then defmult.append(2.0) if isSoundBased? && !opponent.moldbroken
      when :QUARKDRIVE then defmult.append(1.3) if (opponent.effects[:Quarkdrive][0] == PBStats::DEFENSE && pbHitsPhysicalStat?(attacker, type)) || (opponent.effects[:Quarkdrive][0] == PBStats::SPDEF && pbHitsSpecialStat?(attacker, type))
      when :ICESCALES then defmult.append(2.0) if pbIsSpecial?(attacker, type) && !opponent.moldbroken
    end
    if opponent.flowerGiftActive? && !opponent.moldbroken && pbHitsSpecialStat?(attacker, type)
      defmult.append(1.5)
    end
    if opponent.pbPartner.flowerGiftActive? && !opponent.pbPartner.moldbroken && pbHitsSpecialStat?(attacker, type)
      defmult.append(1.5)
    end
    if opponent.hasWorkingItem(:EVIOLITE) && !(@battle.FE == :GLITCH && pbHitsSpecialStat?(attacker, type))
      evos = pbGetEvolvedFormData(opponent.pokemon.species, opponent.pokemon)
      if evos && evos.length > 0
        defmult.append(1.5)
      end
    end
    if opponent.hasWorkingItem(:ASSAULTVEST) && pbHitsSpecialStat?(attacker, type) && @battle.FE != :GLITCH
      defmult.append(1.5)
    end
    if opponent.hasWorkingItem(:DEEPSEASCALE) && @battle.FE != :GLITCH && opponent.pokemon.species == :CLAMPERL && pbHitsSpecialStat?(attacker, type)
      defmult.append(2.0)
    end
    if opponent.hasWorkingItem(:METALPOWDER) && opponent.pokemon.species == :DITTO && !opponent.effects[:Transform] && pbHitsPhysicalStat?(attacker, type)
      defmult.append(2.0)
    end
    if opponent.hasWorkingItem(:PIKANIUMZ) && opponent.pokemon.species == :PIKACHU && !(@battle.FE == :GLITCH && pbHitsSpecialStat?(attacker, type))
      defmult.append(1.5)
    end
    if opponent.hasWorkingItem(:LIGHTBALL) && opponent.pokemon.species == :PIKACHU && !(@battle.FE == :GLITCH && pbHitsSpecialStat?(attacker, type))
      defmult.append(1.5)
    end
    defmult.append(0.5) if @battle.FE == :GLITCH && [:SELFDESTRUCT, :EXPLOSION].include?(@move)
    defmult.append(0.5) if attacker.crested == :ELECTRODE && pbHitsPhysicalStat?(attacker, type)
    # Field Effect defense boost
    defmult.append(fieldDefenseBoost(type, attacker, opponent))

    ##### Calculate opponent's defense stat #####
    defense = opponent.defense
    defstage = opponent.stages[PBStats::DEFENSE] + 6
    # TODO: Wonder Room should apply around here

    applysandstorm = false
    if pbHitsSpecialStat?(attacker, type)
      defense = opponent.spdef
      defstage = opponent.stages[PBStats::SPDEF] + 6
      applysandstorm = true
      if @battle.FE == :GLITCH
        defense = opponent.getSpecialStat(attacker.ability == :UNAWARE, attacker: false, crit: opponent.damagestate.critical)
        defstage = 6 # getspecialstat handles unaware
        applysandstorm = false # getSpecialStat handles sandstorm
      end
    end

    ##### Apply Defense modifiers to the opponent's Defense stat #####
    if attacker.ability != :UNAWARE
      defstage = 6 if @function == 0xA9 # Chip Away (ignore stat stages)
      defstage = 6 if opponent.damagestate.critical && defstage > 6
      defense = (defense * PBStats::StageMul[defstage]).floor
    end
    if @battle.pbWeather == :SANDSTORM && opponent.hasType?(:ROCK) && applysandstorm
      defense = (defense * 1.5).floor
    end
    defense = defense.chainMods(defmult).pokeRound.pokeClamp

    ##### Damage Modifiers #####
    finalmult = []
    if !opponent.damagestate.critical && attacker.ability != :INFILTRATOR
      # Screens
      if @category != :status && opponent.pbOwnSide.screenActive?(betterCategory(attacker, type))
        finalmult.append(@battle.doublebattle ? PBMults::ScreenDoubles : 0.5)
      end
      if opponent.pbOwnSide.effects[:AreniteWall] > 0 && opponent.damagestate.typemod.superEffective?
        finalmult.append(0.5)
      end
    end
    finalmult.append(1.25) if attacker.ability == :NEUROFORCE && opponent.damagestate.typemod.superEffective?
    finalmult.append(1.5) if attacker.ability == :SNIPER && opponent.damagestate.critical
    finalmult.append(2.0) if attacker.ability == :TINTEDLENS && opponent.damagestate.typemod.resisted?
    finalmult.append(@battle.FE == :CLOUDS ? 0.25 : 0.5) if opponent.ability == :FLUFFY && contactMove? && attacker.ability != :LONGREACH && !opponent.moldbroken
    finalmult.append(2.0) if opponent.ability == :FLUFFY && type == :FIRE && !opponent.moldbroken
    finalmult.append(0.5) if opponent.ability == :MULTISCALE && !opponent.moldbroken && opponent.hp == opponent.totalhp
    finalmult.append([:DARKNESS2, :DARKNESS3].include?(@battle.FE) ? 0.66 : 0.5) if opponent.ability == :SHADOWSHIELD && (opponent.hp == opponent.totalhp || @battle.FE == :DIMENSIONAL)
    finalmult.append(0.75) if opponent.ability == :SHADOWSHIELD && [:STARLIGHT, :NEWWORLD, :DARKCRYSTALCAVERN].include?(@battle.FE) && opponent.damagestate.typemod.superEffective?
    finalmult.append(0.75) if (((opponent.ability == :SOLIDROCK || opponent.ability == :FILTER) && !opponent.moldbroken) || opponent.ability == :PRISMARMOR) && opponent.damagestate.typemod.superEffective?
    finalmult.append(0.75) if opponent.pbPartner.ability == :FRIENDGUARD && !opponent.moldbroken
    finalmult.append(PBMults::Metronome[[attacker.effects[:Metronome], 5].min]) if (attitemworks && attacker.item == :METRONOME) && attacker.movesUsed[-2] == attacker.movesUsed[-1]
    finalmult.append(PBMults::Metronome[[attacker.effects[:Metronome], 5].min]) if @battle.FE == :CONCERT4 && attacker.movesUsed[-2] == attacker.movesUsed[-1]
    finalmult.append(0.5) if (opponent.ability == :PASTELVEIL || opponent.pbPartner.ability == :PASTELVEIL) && @type == :POISON && ([:MISTY, :RAINBOW].include?(@battle.FE) || @battle.state.effects[:MISTY] > 0)
    if @battle.ProgressiveFieldCheck(PBFields::FLOWERGARDEN, 3, 5)
      if (opponent.pbPartner.ability == :FLOWERVEIL && opponent.hasType?(:GRASS)) || (opponent.ability == :FLOWERVEIL && !opponent.moldbroken)
        finalmult.append(0.75)
        message = _INTL("The Flower Veil softened the attack!")
        feedbackMessages.push(message) unless feedbackMessages.include?(message)
      end
    end
    finalmult.append(2.0) if attacker.ability == :EXECUTION && opponent.hp <= (opponent.totalhp / 2).floor
    finalmult.append(1.2) if attitemworks && attacker.item == :EXPERTBELT && opponent.damagestate.typemod.superEffective?
    finalmult.append(PBMults::LifeOrb) if attitemworks && attacker.item == :LIFEORB # approx. 1.3x
    if opponent.damagestate.typemod.superEffective? && opponent.itemWorks?
      hasberry = false
      case type
        when :FIGHTING   then hasberry = opponent.item == :CHOPLEBERRY
        when :FLYING     then hasberry = opponent.item == :COBABERRY
        when :POISON     then hasberry = opponent.item == :KEBIABERRY
        when :GROUND     then hasberry = opponent.item == :SHUCABERRY
        when :ROCK       then hasberry = opponent.item == :CHARTIBERRY
        when :BUG        then hasberry = opponent.item == :TANGABERRY
        when :GHOST      then hasberry = opponent.item == :KASIBBERRY
        when :STEEL      then hasberry = opponent.item == :BABIRIBERRY
        when :FIRE       then hasberry = opponent.item == :OCCABERRY
        when :WATER      then hasberry = opponent.item == :PASSHOBERRY
        when :GRASS      then hasberry = opponent.item == :RINDOBERRY
        when :ELECTRIC   then hasberry = opponent.item == :WACANBERRY
        when :PSYCHIC    then hasberry = opponent.item == :PAYAPABERRY
        when :ICE        then hasberry = opponent.item == :YACHEBERRY
        when :DRAGON     then hasberry = opponent.item == :HABANBERRY
        when :DARK       then hasberry = opponent.item == :COLBURBERRY
        when :FAIRY      then hasberry = opponent.item == :ROSELIBERRY
      end
    end
    hasberry = true if opponent.hasWorkingItem(:CHILANBERRY) && type == :NORMAL
    hasberry = false if [:UNNERVE, :ASONECHILLING, :ASONEGRIM].intersect?([attacker.ability, attacker.pbPartner.ability])
    hasberry = false if opponent.effects[:Substitute] > 0 && attacker.ability != :INFILTRATOR && !isSoundBased? && ![:SPECTRALTHIEF, :HYPERSPACEHOLE, :HYPERSPACEFURY].include?(@move)
    if hasberry
      finalmult.append(opponent.ability == :RIPEN ? 0.25 : 0.5)
      opponent.pbDisposeItem(true, true, true, true)
      if !@battle.pbIsOpposing?(attacker.index)
        message = _INTL("{2}'s {1} weakened the damage from the attack!", getItemName(opponent.pokemon.itemRecycle), opponent.pbThis)
      else
        message = _INTL("The {1} weakened the damage to {2}!", getItemName(opponent.pokemon.itemRecycle), opponent.pbThis)
      end
      feedbackMessages.push(message) unless feedbackMessages.include?(message)
    end
    if @battle.shouldApplyFieldChangeDamageBoost(self, attacker)
      provimult = 1.3
      if !@battle.isOnline?
        provimult = 1.15 if $game_variables[:DifficultyModes] == 1
        provimult = ((provimult - 1.0) * 2.0) + 1.0 if $game_switches[:FieldFrenzy]
      end
      finalmult.append(provimult)
    end
    finalmult.append(0.67) if opponent.crested == :BEHEEYEM && (!opponent.hasMovedThisRound? || @battle.switchedOut[opponent.index])
    secondtypes = self.getSecondaryType(attacker)
    finalmult.append(0.5) if opponent.effects[:Shelter] && @battle.FE != :INDOOR && (type == @battle.field.mimicry || secondtypes.include?(@battle.field.mimicry))
    finalmult.append(0.70) if opponent.crested == :AMPHAROS && opponent.damagestate.typemod.superEffective?
    finalmult.append(0.8) if opponent.crested == :MEGANIUM || opponent.pbPartner.crested == :MEGANIUM
    if attacker.crested == :SEVIPER
      multiplier = 0.5 * (opponent.pokemon.hp * 1.0) / (opponent.pokemon.totalhp * 1.0)
      multiplier += 1.0
      finalmult.append(multiplier)
    end

    finalmult.append(pbModifyDamage(1.0, attacker, opponent))

    ##### Damage Formula #####
    damage = (((2.0 * attacker.level / 5 + 2).floor * basedmg * atk / defense).floor / 50.0).floor + 2
    totaldamage = pbCalcTotal(
      damage, spreadmult, bondmult, weathermult, critmult, randommult,
      stabmult, typemult, burnmult, finalmult, zmovemult, opponent,
    )

    return totaldamage
  end

  def pbCalcTotal(
    damage, spread, bond, weather, crit, random,
    stab, type, burn, final, zmove, opponent
  )
    damage = damage.chainMods(spread).pokeRound
    damage = damage.chainMods(bond).pokeRound
    damage = damage.chainMods(weather).pokeRound
    damage = damage.chainMods(crit).pokeRound
    damage = (damage * random).floor
    damage = damage.chainMods(stab).pokeRound
    damage = (damage * type).floor
    damage = damage.chainMods(burn).pokeRound
    damage = damage.chainMods(final).pokeRound
    damage = damage.chainMods(zmove).pokeRound

    damage = damage.pokeClamp
    opponent.damagestate.calcdamage = damage
    return damage
  end

  def pbReduceHPDamage(attacker, targets, damages)
    raise "array length mismatch" if targets.length != damages.length
    mons = []
    oldhps = []
    effect = []
    results = []
    targets.each_with_index do |opponent, i|
      damage = damages[i]
      futureMoves = [:FUTUREDUMMY, :DOOMDUMMY, :HEXDUMMY]
      if futureMoves.include?(@move)
        damage = pbCalcDamage(attacker, opponent)
      end
      next results[i] = damage if damage <= 0 # skip if already taking no damage due to move failure
      if opponent.effects[:Substitute] > 0 && (!attacker || attacker.index != opponent.index) &&
         attacker.ability != :INFILTRATOR && !isSoundBased? &&
         @move != :SPECTRALTHIEF && @move != :HYPERSPACEHOLE && @move != :HYPERSPACEFURY # spectral thief/ hyperspace hole/ hyperspace fury
        damage = opponent.effects[:Substitute] if damage > opponent.effects[:Substitute]
        opponent.effects[:Substitute] -= damage
        opponent.damagestate.substitute = true
        if damage > 0
          @battle.scene.pbDamageAnimation(opponent, 0)
          @battle.pbDisplay(_INTL("The substitute took damage for {1}!", opponent.name))
          if opponent.effects[:Substitute] <= 0
            opponent.effects[:Substitute] = 0
            @battle.scene.pbUnSubstituteSprite(opponent, opponent.pbIsOpposing?(1))
            @battle.pbDisplay(_INTL("{1}'s substitute faded!", opponent.name))
          end
        end
      elsif opponent.effects[:Disguise] && (!attacker || attacker.index != opponent.index) &&
            opponent.effects[:Substitute] <= 0 && !opponent.damagestate.typemod.immune? && !opponent.moldbroken
        opponent.pbBreakDisguise
        opponent.damagestate.disguise = true
        opponent.pbReduceHP((opponent.totalhp / 8.0).floor) if Gen > 7
        @battle.pbDisplay(_INTL("{1}'s Disguise was busted!", opponent.name))
        opponent.effects[:Disguise] = false
        damage = 0
      elsif opponent.effects[:IceFace] && (pbIsPhysical?(attacker, type) || @battle.FE == :FROZENDIMENSION) && (!attacker || attacker.index != opponent.index) &&
            opponent.effects[:Substitute] <= 0 && !opponent.damagestate.typemod.immune? && !opponent.moldbroken
        opponent.pbBreakDisguise
        opponent.damagestate.disguise = true
        @battle.pbDisplay(_INTL("{1} transformed!", opponent.name))
        opponent.effects[:IceFace] = false
        damage = 0
      else
        opponent.damagestate.substitute = false
        opponent.damagestate.disguise = false
        if damage >= opponent.hp
          damage = opponent.hp
          if @function == 0xE9 # False Swipe
            damage -= 1
          elsif opponent.effects[:Endure]
            damage -= 1
            opponent.damagestate.endured = true
          elsif damage == opponent.totalhp && @battle.FE == :CHESS && opponent.pokemon.piece == :PAWN && !opponent.damagestate.pawnsturdyused
            opponent.damagestate.pawnsturdyused = true
            opponent.damagestate.pawnsturdy = true
            damage -= 1
          elsif damage == opponent.totalhp && opponent.ability == :STURDY && !opponent.moldbroken
            opponent.damagestate.sturdy = true
            damage -= 1
          elsif opponent.damagestate.focussash && damage == opponent.totalhp && opponent.item
            opponent.damagestate.focussashused = true
            damage -= 1
            opponent.pbDisposeItem(false, true, true, true)
          elsif opponent.damagestate.focusband
            opponent.damagestate.focusbandused = true
            damage -= 1
          elsif opponent.damagestate.rampcrest && opponent.pokemon.rampCrestUsed == false
            opponent.damagestate.rampcrestused = true
            opponent.pokemon.rampCrestUsed = true
            damage -= 1
          elsif damage == opponent.totalhp && opponent.ability == :STALWART && @battle.FE == :COLOSSEUM && !opponent.moldbroken
            opponent.damagestate.stalwart = true
            damage -= 1
          end
          damage = 0 if damage < 0
        end
      return @battle.pbShieldDamage(opponent, damage) if opponent.isbossmon

        oldhp = opponent.hp
        opponent.hp -= damage
        effectiveness = 0
        if opponent.damagestate.typemod.resisted?
          effectiveness = 1   # "Not very effective"
        elsif opponent.damagestate.typemod.superEffective?
          effectiveness = 2   # "Super effective"
        end
        if !opponent.damagestate.typemod.immune?
          effect.push effectiveness
        end
        mons.push opponent
        oldhps.push oldhp
      end
      results[i] = damage
    end

    if effect.length > 0
      @battle.scene.pbDamageAnimation(mons, effect.max)
    end
    if mons.length > 0
      @battle.scene.pbHPChanged(mons, oldhps)
    end

    return results
  end

  ################################################################################
  # Effects
  ################################################################################
  def pbEffectMessages(attacker, opponent, ignoretype = false, multipletargets = false)
    if opponent.damagestate.critical
      @battle.pbDisplay(multipletargets ? _INTL("A critical hit on {1}!", opponent.pbThis) : _INTL("A critical hit!"))
      attacker.pokemon.landCritical = 0 if attacker.pokemon.landCritical.nil? # PLEASE ACTUALLY BE ASSIGNED GDI
      attacker.pokemon.landCritical += 1
      if @battle.ProgressiveFieldCheck(PBFields::CONCERT)
        @battle.growField("The critical hit", attacker)
      end
    end
    if !pbIsMultiHit && !attacker.effects[:ParentalBond]
      if opponent.damagestate.typemod.superEffective?
        @battle.pbDisplay(multipletargets ? _INTL("It's super effective on {1}!", opponent.pbThis) : _INTL("It's super effective!"))
      elsif opponent.damagestate.typemod.resisted?
        @battle.pbDisplay(multipletargets ? _INTL("It's not very effective on {1}...", opponent.pbThis) : _INTL("It's not very effective..."))
      end
    end
    if opponent.damagestate.endured
      @battle.pbDisplay(_INTL("{1} endured the hit!", opponent.pbThis))
    elsif opponent.damagestate.pawnsturdy
      opponent.damagestate.pawnsturdy = false
      @battle.pbDisplay(_INTL("{1} hung on the edge of the board!", opponent.pbThis))
    elsif opponent.damagestate.sturdy
      @battle.pbDisplay(_INTL("{1} hung on with Sturdy!", opponent.pbThis))
      opponent.damagestate.sturdy = false
    elsif opponent.damagestate.focussashused
      @battle.pbDisplay(_INTL("{1} hung on using its Focus Sash!", opponent.pbThis))
      opponent.damagestate.focussashused = false
    elsif opponent.damagestate.focusbandused
      @battle.pbDisplay(_INTL("{1} hung on using its Focus Band!", opponent.pbThis))
    elsif opponent.damagestate.rampcrestused
      @battle.pbDisplay(_INTL("{1} hung on using its Rampardos Crest!", opponent.pbThis))
      opponent.damagestate.rampcrestused = false
    elsif opponent.damagestate.stalwart
      @battle.pbDisplay(_INTL("{1} hung on with Stalwart in the Colosseum!", opponent.pbThis))
      opponent.damagestate.stalwart = false
    end
  end

  def pbRecoilDamage(attacker, damage, recoilmult, hitflags, numhits)
    return unless recoilmult > 0
    return unless hitflags.intersect?([:Success, :MirrorMissReflect])
    return if [:ROCKHEAD, :MAGICGUARD].include?(attacker.ability)
    return if attacker.ability == :WONDERGUARD && @battle.FE == :COLOSSEUM
    recoildamage = [1, (damage * recoilmult).floor].max
    attacker.pbReduceHP(recoildamage)
    @battle.pbDisplay(_INTL("{1} is damaged by the recoil!", attacker.pbThis))
  end

  # move effect that applies once per hit during move use, typically on the user
  def pbEffect(attacker, alltargets, hitnum = 0)
  end

  # move effect that applies once per target for each hit during move use
  def pbEffectTarget(attacker, opponent, hitnum = 0, alltargets = nil)
  end

  # move effect that applies on the user after resolving all hits of the attack
  def pbEffectAfterMove(attacker, alltargets, hitflags)
  end

  # move effect that applies on the target after resolving all hits of the attack
  def pbEffectTargetAfterMove(attacker, opponent, alltargets = nil)
  end

  def priorityCheck(attacker)
    pri = self.priority

    pri = 0 if @zmove && @basedamage > 0
    pri += 1 if @move == :GRASSYGLIDE && (@battle.FE == :GRASSY || @battle.state.effects[:GRASSY] > 0)
    pri += 1 if @move == :QUASH && @battle.FE == :DIMENSIONAL
    pri += 1 if @battle.FE == :CHESS && attacker.pokemon && attacker.pokemon.piece == :KING
    pri += 1 if attacker.crested == :FERALIGATR && @basedamage != 0 && attacker.turncount == 1 # Feraligatr Crest
    pri += 1 if attacker.ability == :PRANKSTER && @basedamage == 0 && attacker.effects[:TwoTurnAttack] == 0 # Is status move
    pri += 1 if attacker.ability == :GALEWINGS && @type == :FLYING && (attacker.hp == attacker.totalhp || @battle.FE == :SKY || ([:MOUNTAIN, :SNOWYMOUNTAIN, :VOLCANICTOP].include?(@battle.FE) && @battle.pbWeather == :STRONGWINDS))
    pri += 3 if attacker.ability == :TRIAGE && PBStuff::HEALFUNCTIONS.include?(@function)
    pri -= 1 if @battle.FE == :DEEPEARTH && @move == :COREENFORCER
    return pri
  end

  def pbIsPriorityMoveAI(attacker)
    if @move == :FAKEOUT || @move == :FIRSTIMPRESSION
      return false if attacker.turncount != 0
    end
    return priorityCheck(attacker) > 0
  end

  def additionalEffectChance(user, addeffect, hitcount)
    addeffect = 20 if @move == :OMINOUSWIND && @battle.FE == :HAUNTED
    addeffect *= 2 if user.ability == :SERENEGRACE || @battle.FE == :RAINBOW
    addeffect *= 2 if !self.canFlinch? && user.ability == :SERENEGRACE && @battle.FE == :RAINBOW
    addeffect = 100 if $DEBUG && Input.press?(Input::CTRL) && !@battle.isOnline?
    addeffect = 100 if @move == :MIRRORSHOT && @battle.FE == :MIRROR
    addeffect = 100 if @move == :STRANGESTEAM && @battle.FE == :FAIRYTALE
    addeffect = 100 if @move == :LICK && @battle.FE == :HAUNTED
    addeffect = 100 if @move == :DIRECLAW && @battle.FE == :WASTELAND
    addeffect = 100 if @move == :INFERNALPARADE && @battle.FE == :INFERNAL
    addeffect = 0 if (user.crested == :LEDIAN && hitcount > 1) || (user.crested == :CINCCINO && hitcount > 1)
    if @battle.pbRandom(100) < addeffect # format for check with the returned value
      return true
    end
    return false
  end

  ################################################################################
  # cass's lazy field effect thingy section (i never said i knew what i was doing)
  ################################################################################
  def ignitecheck
    # Intentionally not using pbWeather so that Cloud Nine doesn't affect field interactions.
    return @battle.state.effects[:WaterSport] <= 0 && @battle.weather != :RAINDANCE
  end

  def suncheck
    return false
  end

  # def mistExplosion
  #  return !@battle.pbCheckGlobalAbility(:DAMP)
  # end

  ################################################################################
  # Using the move
  ################################################################################
  def pbOnStartUse(attacker, targets)
    return true
  end

  def pbAddTarget(targets, target, attacker)
    unless target.isFainted?
      targets.push(target)
      return true
    end
    return false
  end

  def pbDisplayUseMessage(attacker, choice)
    # Return values:
    # -1 if the attack should exit as a failure
    # 1 if the attack should exit as a success
    # 0 if the attack should proceed its effect
    # 2 if Bide is storing energy
    if choice[2].zmove
      if choice[2].hasFlag?(:intercept)
        @battle.pbDisplayBrief(_INTL("{1} is changing the flow of Fate!", attacker.pbThis))
        @battle.pbDisplayBrief(_INTL("{1}!", @name))
      else
        @battle.pbDisplayBrief(_INTL("{1} unleashed its full force Z-Move!", attacker.pbThis))
        @battle.pbDisplayBrief(_INTL("{1}!", getMoveUseName))
      end
    elsif attacker.effects[:MagicBounced]
      @battle.pbDisplayBrief(_INTL("{1} bounced back the {2}!", attacker.pbThis, getMoveUseName))
    else
      @battle.pbDisplayBrief(_INTL("{1} used\r\n{2}!", attacker.pbThis, getMoveUseName))
    end
    return 0
  end

  def getMoveUseName
    if @data
      return (@data.checkFlag?(:longname, nil).nil?) ? @name : @data.checkFlag?(:longname, nil)
    else
      return @name
    end
  end

  def pbShowAnimation(id, attacker, opponent, hitnum = 0, alltargets = nil, showanimation = true)
    return if !showanimation

    @battle.pbAnimation(id, attacker, opponent, hitnum)
  end

  def pbOnDamageLost(damage, attacker, opponent)
    # Used by Counter/Mirror Coat/Revenge/Focus Punch/Bide
    type = pbType(attacker)
    if opponent.effects[:Bide] > 0
      opponent.effects[:BideDamage] += damage
      opponent.effects[:BideTarget] = attacker.index
    end
    if opponent.effects[:ShellTrap] == true && attacker.pbOwnSide != opponent.pbOwnSide && !opponent.damagestate.substitute && pbIsPhysical?(attacker, type) && !(attacker.ability == :SHEERFORCE && self.effect > 0)
      opponent.effects[:ShellTrapAttacked] = true
    end
    if @function == 0x90 # Hidden Power
      type = :NORMAL
    end
    if pbIsPhysical?(attacker, type)
      opponent.effects[:Counter] = damage
      opponent.effects[:CounterTarget] = attacker.index
    end
    if pbIsSpecial?(attacker, type)
      opponent.effects[:MirrorCoat] = damage
      opponent.effects[:MirrorCoatTarget] = attacker.index
    end
    opponent.lastHPLost = damage # for Revenge/Focus Punch/Metal Burst
    opponent.lastAttacker = attacker.index # for Revenge/Metal Burst
  end

  def pbCanAffectTarget(attacker, opponent, showMessage = false)
    # Called to determine whether the move succeeds
    return true
  end

  def pbEffectValid(attacker, opponent, showMessage = false)
    return true
  end
end

# Used in damage calculation
class Float
  def pokeRound
    return self.round(half: :down)
  end
end

class Integer
  def chainMods(mods)
    mods = Array(mods) if !mods.is_a?(Array)
    finalMod = 4096.0
    mods.each { |mod|
      finalMod = (finalMod * 4096.0 * mod / 4096.0).round
    }
    return self * finalMod / 4096.0
  end

  def pokeClamp
    return 1 if self < 1
    return self % 65536 if self > 65535
    return self
  end
end
