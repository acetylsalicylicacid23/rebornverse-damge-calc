function updateSets(newSets) {
	for (var pokemon in newSets) {
		for (var moveset in newSets[pokemon]) {
			if (!SETDEX_SV[pokemon]) SETDEX_SV[pokemon] = {};
			SETDEX_SV[pokemon][moveset] = newSets[pokemon][moveset];
		}
	}
};

var SETDEX_SM = {
    "Abomasnow":{
        "Singles Boss Madame Meganium (Invrs)":{"level":100,"item":"Life Orb","moves":["Focus Blast","Frost Breath","Giga Drain","Shadow Ball"],"ability":"Snow Warning","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":24},																													
        "Doubles Boss Madame Meganium (Invrs)":{"level":100,"item":"Life Orb","moves":["Focus Blast","Blizzard","Giga Drain","Shadow Ball"],"ability":"Snow Warning","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":149},																													

    },
    "Absol":{
        "Singles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Sucker Punch","Play Rough","Superpower"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":116},																													
        "Doubles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Sucker Punch","Play Rough","Superpower"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":252},																													

    },
    "Aegislash-Blade":{
        "Singles Boss Posh Danielle (Mirror)":{"level":100,"item":"Leftovers","moves":["Flash Cannon","Shadow Ball","King's Shield","Toxic"],"ability":"Stance Change","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 128,"sa": 252,"sd": 128,"sp": 0},"index":11},																													
        "Doubles Boss Posh Danielle (Mirror)":{"level":100,"item":"Leftovers","moves":["Flash Cannon","Shadow Ball","King's Shield","Substitute"],"ability":"Stance Change","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 128,"sa": 252,"sd": 128,"sp": 0},"index":131},																													

    },
    "Aerodactyl":{
        "Doubles Boss Genius Eustace (New World)":{"level":100,"item":"Focus Sash","moves":["Rock Slide","Aerial Ace","Crunch","Tailwind"],"ability":"Pressure","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":199},																													

    },
    "Alakazam":{
        "Singles Boss Posh Danielle (Mirror)":{"level":100,"item":"Wide Lens","moves":["Psychic","Focus Blast","Dazzling Gleam","Recover"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":12},																													
        "Doubles Boss Posh Danielle (Mirror)":{"level":100,"item":"Wide Lens","moves":["Psychic","Focus Blast","Dazzling Gleam","Recover"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":133},																													

    },
    "Araquanid":{
        "Singles Boss Short Marcello (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Scald","Blizzard","Giga Drain","Aqua Ring"],"ability":"Water Bubble","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":78},																													

    },
    "Arcanine":{
        "Singles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Burn Up","Extreme Speed","Close Combat","Wild Charge"],"ability":"Flash Fire","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":110},																													
        "Doubles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Life Orb","moves":["Heat Wave","Burn Up","Dragon Pulse","Extreme Speed"],"ability":"Intimidate","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":208},																													
        "Doubles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Burn Up","Extreme Speed","Close Combat","Wild Charge"],"ability":"Flash Fire","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":248},																													

    },
    "Articuno":{
        "Singles Boss Short Marcello (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Roost","Blizzard","Water Pulse","Hidden Power Fire"],"ability":"Pressure","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":77},																													

    },
    "Avalugg":{
        "Singles Boss Madame Meganium (Invrs)":{"level":100,"item":"Choice Band","moves":["Superpower","Ice Fang","Rock Slide","Earthquake"],"ability":"Own Tempo","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":23},																													

    },
    "Azumarill":{
        "Singles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Sitrus Berry","moves":["Belly Drum","Aqua Jet","Play Rough","Knock Off"],"ability":"Thick Fat","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 8,"at": 252,"df": 125,"sa": 0,"sd": 125,"sp": 0},"index":8},																													

    },
    "Beedrill":{
        "Singles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Life Orb","moves":["Poison Jab","Fell Stinger","Drill Run","Knock Off"],"ability":"Swarm","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":2},																													
        "Doubles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Life Orb","moves":["Poison Jab","Fell Stinger","Drill Run","Knock Off"],"ability":"Swarm","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":120},																													

    },
    "Blaziken":{
        "Singles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Acrobatics","Superpower","Blaze Kick"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":48},																													
        "Singles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Life Orb","moves":["Heat Wave","Hidden Power Ice","Knock Off","Protect"],"ability":"Speed Boost","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":79},																													
        "Doubles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Acrobatics","Superpower","Blaze Kick"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":181},																													
        "Doubles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Air Balloon","moves":["Heat Wave","Hidden Power Ice","Knock Off","Protect"],"ability":"Speed Boost","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":206},																													

    },
    "Bouffalant":{
        "Singles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Choice Band","moves":["Thrash","Megahorn","Outrage","Superpower"],"ability":"Sap Sipper","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":82},																													
        "Doubles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Choice Band","moves":["Thrash","Megahorn","Outrage","Earthquake"],"ability":"Sap Sipper","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":210},																													

    },
    "Breloom":{
        "Singles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Leftovers","moves":["Leech Seed","Spore","Substitute","Focus Punch"],"ability":"Poison Heal","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":98},																													

    },
    "Breloom-Bot":{
        "Singles Boss BreloomBot (Factory)":{"level":100,"item":"Muscle Band","moves":["Spore","Magnet Bomb","Shadow Punch","Shift Gear"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":27},																													
        "Doubles Boss BreloomBot (Factory)":{"level":100,"item":"Muscle Band","moves":["Spore","Magnet Bomb","Shadow Punch","Shift Gear"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":153},																													

    },
    "Bronzong":{
        "Doubles Boss John Reborn (Starlight)":{"level":100,"item":"Magical Seed","moves":["Zen Headbutt","Gyro Ball","Rock Slide","Payback"],"ability":"Levitate","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":244},																													

    },
    "Chandelure":{
        "Doubles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Life Orb","moves":["Shadow Ball","Flamethrower","Solar Beam","Will-O-Wisp"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":175},																													

    },
    "Chansey":{
        "Singles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Blizzard","Soft-Boiled","Toxic"],"ability":"Serene Grace","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":85},																													
        "Doubles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Blizzard","Soft-Boiled","Toxic"],"ability":"Serene Grace","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":214},																													

    },
    "Charizard":{
        "Singles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Solar Beam","Heat Wave","Air Slash","Roost"],"ability":"Solar Power","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":44},																													
        "Doubles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Charti Berry","moves":["Solar Beam","Heat Wave","Air Slash","Roost"],"ability":"Solar Power","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":176},																													

    },
    "Cinccino":{
        "Singles Boss Friendly Cass 2 (Holy)":{"level":100,"item":"Choice Band","moves":["Bullet Seed","Tail Slap","Rock Blast","Knock Off"],"ability":"Skill Link","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":67},																													

    },
    "Clefable":{
        "Doubles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Leftovers","moves":["Cosmic Power","Follow Me","Moonblast","Moonlight"],"ability":"Magic Guard","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":251},																													

    },
    "Conkeldurr":{
        "Doubles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Fire Punch","Rock Slide","Mach Punch","Drain Punch"],"ability":"Guts","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":232},																													

    },
    "Darkrai":{
        "Singles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Air Balloon","moves":["Dark Void","Thunderbolt","Nasty Plot","Dark Pulse"],"ability":"Bad Dreams","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":63},																													
        "Singles Boss Friendly Cass 1 (New World)":{"level":100,"item":"Air Balloon","moves":["Dark Void","Thunderbolt","Nasty Plot","Dark Pulse"],"ability":"Bad Dreams","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":66},																													
        "Doubles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Air Balloon","moves":["Dark Void","Thunderbolt","Nasty Plot","Dark Pulse"],"ability":"Bad Dreams","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":197},																													

    },
    "Delibird":{
        "Singles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Present","Drill Peck"],"ability":"Vital Spirit","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":31},																													
        "Doubles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Present","Drill Peck"],"ability":"Vital Spirit","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":158},																													

    },
    "Delphox":{
        "Singles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Choice Scarf","moves":["Dazzling Gleam","Mystical Fire","Psyshock","Trick"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":30},																													
        "Singles Boss Daydreamer Crim (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Mystical Fire","Psyshock","Dazzling Gleam","Shadow Ball"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":113},																													
        "Doubles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Choice Scarf","moves":["Dazzling Gleam","Mystical Fire","Psyshock","Trick"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":157},																													

    },
    "Deoxys":{
        "Singles Boss John Reborn (Starlight)":{"level":100,"item":"Focus Sash","moves":["Meteor Mash","Psycho Boost","Knock Off","Signal Beam"],"ability":"Pressure","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":108},																													

    },
    "Deoxys-Defense":{
        "Singles Boss Short Marcello (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Psycho Boost","Thunderbolt","Amnesia","Recover"],"ability":"Pressure","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":76},																													

    },
    "Deoxys-Speed":{
        "Singles Boss Posh Danielle (Mirror)":{"level":100,"item":"Synthetic Seed","moves":["Double Team","Psycho Boost","Stealth Rock","Reflect"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":10},																													
        "Doubles Boss Posh Danielle (Mirror)":{"level":100,"item":"Synthetic Seed","moves":["Double Team","Psycho Boost","Stealth Rock","Reflect"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":130},																													

    },
    "Dhelmise":{
        "Singles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Leftovers","moves":["Power Whip","Anchor Shot","Synthesis","Earthquake"],"ability":"Steelworker","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":20},																													
        "Doubles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Leftovers","moves":["Power Whip","Anchor Shot","Synthesis","Earthquake"],"ability":"Steelworker","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":144},																													

    },
    "Diancie":{
        "Singles Boss Friendly Cass 1 (New World)":{"level":100,"item":"Life Orb","moves":["Moonblast","Ancient Power","Nature Power","Earth Power"],"ability":"Clear Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":65},																													

    },
    "Donphan":{
        "Doubles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Earthquake","Body Slam","Ice Shard","Heavy Slam"],"ability":"Sturdy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":179},																													

    },
    "Dragonite":{
        "Singles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Earthquake","Extreme Speed","Dragon Dance","Dragon Rush"],"ability":"Multiscale","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":105},																													
        "Doubles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Earthquake","Extreme Speed","Dragon Dance","Dragon Rush"],"ability":"Multiscale","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":241},																													

    },
    "Dusclops":{
        "Singles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Blizzard","Psychic","Pain Split"],"ability":"Pressure","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":87},																													
        "Doubles Boss Posh Danielle (Mirror)":{"level":100,"item":"Eviolite","moves":["Spite","Night Shade","Pain Split","Toxic"],"ability":"Pressure","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":132},																													
        "Doubles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Blizzard","Psychic","Pain Split"],"ability":"Pressure","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":217},																													

    },
    "Entei":{
        "Singles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Sacred Fire","Extreme Speed","Stone Edge","Eruption"],"ability":"Inner Focus","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":111},																													
        "Doubles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Sacred Fire","Extreme Speed","Stone Edge","Eruption"],"ability":"Inner Focus","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":249},																													

    },
    "Exeggutor-Alola":{
        "Doubles Boss John Reborn (Starlight)":{"level":100,"item":"Sitrus Berry","moves":["Psychic","Energy Ball","Draco Meteor","Moonlight"],"ability":"Harvest","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":245},																													

    },
    "Exploud":{
        "Singles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Life Orb","moves":["Boomburst","Fire Blast","Surf","Rock Tomb"],"ability":"Scrappy","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":75},																													
        "Doubles Boss Madame Meganium (Invrs)":{"level":100,"item":"Choice Specs","moves":["Boomburst","Blizzard","Surf","Fire Blast"],"ability":"Soundproof","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":148},																													
        "Doubles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Life Orb","moves":["Boomburst","Fire Blast","Surf","Rock Tomb"],"ability":"Scrappy","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":205},																													

    },
    "Ferrothorn":{
        "Singles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Leftovers","moves":["Nature Power","Power Whip","Knock Off","Leech Seed"],"ability":"Iron Barbs","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":4},																													
        "Singles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Leftovers","moves":["Knock Off","Leech Seed","Stealth Rock","Thunder Wave"],"ability":"Iron Barbs","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":19},																													
        "Doubles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Leftovers","moves":["Nature Power","Power Whip","Knock Off","Leech Seed"],"ability":"Iron Barbs","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":122},																													
        "Doubles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Leftovers","moves":["Knock Off","Leech Seed","Stealth Rock","Thunder Wave"],"ability":"Iron Barbs","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":142},																													

    },
    "Flareon":{
        "Doubles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Shuca Berry","moves":["Facade","Flare Blitz","Protect","Superpower"],"ability":"Guts","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":231},																													
        "Doubles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Swift","Lava Plume","Shadow Ball","Flamethrower"],"ability":"Flash Fire","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":247},																													

    },
    "Garbodor":{
        "Singles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Rocky Helmet","moves":["Gunk Shot","Pain Split","Stockpile","Drain Punch"],"ability":"Aftermath","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 252,"sa": 252,"sd": 252,"sp": 252},"index":6},																													
        "Doubles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Rocky Helmet","moves":["Gunk Shot","Pain Split","Stockpile","Drain Punch"],"ability":"Aftermath","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 252,"sa": 252,"sd": 252,"sp": 252},"index":125},																													

    },
    "Garchomp":{
        "Singles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Telluric Seed","moves":["Dragon Claw","Earthquake","Stone Edge","Swords Dance"],"ability":"Rough Skin","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":80},																													
        "Doubles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Telluric Seed","moves":["Dragon Claw","Earthquake","Stone Edge","Swords Dance"],"ability":"Rough Skin","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":207},																													

    },
    "Gardevoir":{
        "Singles Boss Friendly Cass 2 (Holy)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Psyshock","Moonblast","Thunderbolt"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":69},																													

    },
    "Genesect":{
        "Singles Boss BreloomBot (Factory)":{"level":100,"item":"Douse Drive","moves":["U-turn","Techno Blast","Flash Cannon","Thunderbolt"],"ability":"Download","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":25},																													
        "Doubles Boss BreloomBot (Factory)":{"level":100,"item":"Douse Drive","moves":["U-turn","Techno Blast","Flash Cannon","Thunderbolt"],"ability":"Download","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":150},																													
        "Doubles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Bug Buzz","Flash Cannon","Flamethrower","Ice Beam"],"ability":"Download","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":184},																													

    },
    "Gliscor":{
        "Singles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Fire Fang","Earthquake","Acrobatics","Roost"],"ability":"Poison Heal","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":99},																													
        "Doubles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Fire Fang","Earthquake","Acrobatics","Roost"],"ability":"Poison Heal","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":233},																													

    },
    "Gogoat":{
        "Doubles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Shuca Berry","moves":["Horn Leech","Rock Slide","Zen Headbutt","Milk Drink"],"ability":"Sap Sipper","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":211},																													

    },
    "Goodra":{
        "Singles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Choice Scarf","moves":["Draco Meteor","Aqua Tail","Sludge Wave","Power Whip"],"ability":"Sap Sipper","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":5},																													
        "Doubles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Choice Scarf","moves":["Dragon Pulse","Aqua Tail","Sludge Wave","Power Whip"],"ability":"Sap Sipper","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":123},																													

    },
    "Gourgeist":{
        "Singles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Leftovers","moves":["Shadow Sneak","Synthesis","Leech Seed","Will-O-Wisp"],"ability":"Frisk","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":92},																													
        "Doubles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Telluric Seed","moves":["Shadow Sneak","Synthesis","Leech Seed","Will-O-Wisp"],"ability":"Pickup","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":222},																													

    },
    "Grumpig":{
        "Doubles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Teeter Dance","Telekinesis","Psychic","Focus Blast"],"ability":"Own Tempo","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 4,"sp": 0},"index":220},																													

    },
    "Gyarados":{
        "Doubles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Dragon Dance","Dragon Tail","Waterfall","Crunch"],"ability":"Intimidate","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":155},																													

    },
    "Hawlucha":{
        "Singles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Acrobatics","Swords Dance","High Jump Kick","Roost"],"ability":"Unburden","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":47},																													
        "Doubles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Acrobatics","Swords Dance","High Jump Kick","Roost"],"ability":"Unburden","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":178},																													

    },
    "Heatran":{
        "Singles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Lava Plume","Earth Power","Dark Pulse","Flash Cannon"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":102},																													
        "Doubles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Lava Plume","Earth Power","Dark Pulse","Flash Cannon"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":237},																													

    },
    "Hoopa":{
        "Singles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Hyperspace Hole","Shadow Ball","Nasty Plot","Hidden Power Steel"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":29},																													
        "Doubles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Hyperspace Hole","Shadow Ball","Nasty Plot","Hidden Power Steel"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":156},																													

    },
    "Hoppip":{
        "Doubles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Worry Seed","Giga Drain","Bounce","Memento"],"ability":"Infiltrator","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":160},																													

    },
    "Houndoom":{
        "Singles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Flamethrower","Dark Pulse","Solar Beam","Sludge Bomb"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":45},																													
        "Singles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Fire Blast","Dark Pulse","Sludge Bomb","Sucker Punch"],"ability":"Flash Fire","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":109},																													
        "Doubles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Flamethrower","Dark Pulse","Solar Beam","Sludge Bomb"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":177},																													
        "Doubles Boss Police Eastman (Starlight)":{"level":100,"item":"Magical Seed","moves":["Heat Wave","Dark Pulse","Sludge Bomb","Sucker Punch"],"ability":"Flash Fire","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":246},																													

    },
    "Jirachi":{
        "Singles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Leftovers","moves":["Flash Cannon","Wish","Psychic","Cosmic Power"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":9},																													
        "Doubles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Leftovers","moves":["Flash Cannon","Wish","Psychic","Cosmic Power"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":129},																													

    },
    "Kadabra":{
        "Doubles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Psychic","Thunder Punch","Recover"],"ability":"Magic Guard","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":216},																													

    },
    "Klefki":{
        "Singles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Thunder Wave","Spikes","Draining Kiss","Crafty Shield"],"ability":"Magician","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":28},																													
        "Doubles Boss Corin-Rouge (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Thunder Wave","Spikes","Draining Kiss","Crafty Shield"],"ability":"Magician","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":154},																													

    },
    "Kommo-o":{
        "Singles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Leftovers","moves":["Clanging Scales","Stealth Rock","Close Combat","Poison Jab"],"ability":"Soundproof","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":73},																													
        "Doubles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Leftovers","moves":["Clanging Scales","Stealth Rock","Focus Blast","Flash Cannon"],"ability":"Soundproof","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":202},																													

    },
    "Krookodile":{
        "Singles Boss Hotshot Aster (Desert)":{"level":100,"item":"Smooth Rock","moves":["Sandstorm","Stealth Rock","Knock Off","Earthquake"],"ability":"Intimidate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":16},																													
        "Doubles Boss Hotshot Aster (Desert)":{"level":100,"item":"Smooth Rock","moves":["Sandstorm","Rock Slide","Knock Off","Earthquake"],"ability":"Intimidate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":138},																													

    },
    "Lapras":{
        "Singles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Dragon Dance","Ice Shard","Waterfall","Bulldoze"],"ability":"Water Absorb","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":103},																													
        "Doubles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Dragon Dance","Ice Shard","Waterfall","Bulldoze"],"ability":"Water Absorb","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":238},																													

    },
    "Leavanny":{
        "Singles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Life Orb","moves":["Bug Buzz","Nature Power","Leaf Blade","Knock Off"],"ability":"Chlorophyll","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":74},																													
        "Doubles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Life Orb","moves":["Bug Buzz","Nature Power","Leaf Blade","Knock Off"],"ability":"Chlorophyll","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":204},																													

    },
    "Lilligant":{
        "Singles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Quiver Dance","Magical Leaf","Nature Power","Hidden Power Rock"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":90},																													
        "Singles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Petal Dance","Hidden Power Rock","Giga Drain"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":104},																													
        "Doubles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Quiver Dance","Magical Leaf","Nature Power","Hidden Power Rock"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":221},																													
        "Doubles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Petal Dance","Hidden Power Rock","Giga Drain"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":240},																													

    },
    "Ludicolo":{
        "Singles Boss Activist Sandy (Swamp)":{"level":100,"item":"Choice Specs","moves":["Surf","Giga Drain","Focus Blast","Ice Beam"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":15},																													
        "Doubles Boss Activist Sandy (Swamp)":{"level":100,"item":"Choice Specs","moves":["Surf","Giga Drain","Focus Blast","Ice Beam"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":137},																													

    },
    "Lycanroc":{
        "Singles Boss Hotshot Aster (Desert)":{"level":100,"item":"Leftovers","moves":["Accelerock","Stone Edge","Brick Break","Swords Dance"],"ability":"Keen Eye","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":18},																													
        "Singles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Choice Band","moves":["Fire Fang","Stone Edge","Drill Run","Crunch"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":81},																													
        "Doubles Boss Hotshot Aster (Desert)":{"level":100,"item":"Leftovers","moves":["Accelerock","Stone Edge","Brick Break","Swords Dance"],"ability":"Keen Eye","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":141},																													
        "Doubles Boss Lone Wolf Kanaya (Desert)":{"level":100,"item":"Choice Band","moves":["Fire Fang","Rock Slide","Drill Run","Crunch"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":209},																													

    },
    "Lycanroc-Midnight":{
        "Doubles Boss Hotshot Aster (Desert)":{"level":100,"item":"Life Orb","moves":["Thunder Punch","Stone Edge","Fire Punch","Swords Dance"],"ability":"No Guard","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":140},																													

    },
    "Magearna":{
        "Singles Boss BreloomBot (Factory)":{"level":100,"item":"Leftovers","moves":["Shift Gear","Dazzling Gleam","Thunderbolt","Flash Cannon"],"ability":"Soul-Heart","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":26},																													
        "Doubles Boss BreloomBot (Factory)":{"level":100,"item":"Leftovers","moves":["Shift Gear","Dazzling Gleam","Thunderbolt","Flash Cannon"],"ability":"Soul-Heart","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":152},																													
        "Doubles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Fleur Cannon","Dazzling Gleam","Flash Cannon","Aurora Beam"],"ability":"Soul-Heart","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":165},																													

    },
    "Magnezone":{
        "Singles Boss John Reborn (Starlight)":{"level":100,"item":"Magical Seed","moves":["Signal Beam","Flash Cannon","Thunderbolt","Swift"],"ability":"Magnet Pull","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":106},																													
        "Doubles Boss BreloomBot (Factory)":{"level":100,"item":"Air Balloon","moves":["Discharge","Flash Cannon","Reflect","Light Screen"],"ability":"Sturdy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":151},																													
        "Doubles Boss John Reborn (Starlight)":{"level":100,"item":"Magical Seed","moves":["Signal Beam","Flash Cannon","Thunderbolt","Swift"],"ability":"Sturdy","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":243},																													

    },
    "Mandibuzz":{
        "Doubles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Snarl","Roost","Air Slash","Foul Play"],"ability":"Big Pecks","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":191},																													
        "Doubles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Leftovers","moves":["Snarl","Roost","Air Slash","Foul Play"],"ability":"Big Pecks","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":195},																													

    },
    "Marshadow":{
        "Singles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Telluric Seed","moves":["Rock Tomb","Spectral Thief","Shadow Sneak","Close Combat"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":93},																													
        "Doubles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Telluric Seed","moves":["Rock Tomb","Spectral Thief","Shadow Sneak","Close Combat"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":225},																													

    },
    "Meganium":{
        "Singles Boss Madame Meganium (Invrs)":{"level":100,"item":"Amplifield Rock","moves":["Nature Power","Giga Drain","Iron Tail","Body Slam"],"ability":"Overgrow","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":22},																													
        "Doubles Boss Madame Meganium (Invrs)":{"level":100,"item":"Amplifield Rock","moves":["Nature Power","Giga Drain","Iron Tail","Body Slam"],"ability":"Overgrow","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":146},																													

    },
    "Meloetta":{
        "Singles Boss Friendly Cass 2 (Holy)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Psyshock","Energy Ball","Thunderbolt"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":68},																													

    },
    "Metagross":{
        "Doubles Boss Doxy Murmina (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Meteor Mash","Zen Headbutt","Bullet Punch","Earthquake"],"ability":"Clear Body","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":239},																													

    },
    "Mew":{
        "Singles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Aurora Veil","Silver Wind","Tri Attack","Psyshock"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":34},																													
        "Singles Boss Clown Indra 3 (1, Rainbow)":{"level":100,"item":"Magical Seed","moves":["Aurora Veil","Silver Wind","Tri Attack","Psyshock"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":37},																													
        "Singles Boss Clown Indra 3 (2, Rainbow)":{"level":100,"item":"Magical Seed","moves":["Sludge Bomb","Ice Beam","Thunder","Scald"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":38},																													
        "Singles Boss Clown Indra 3 (3, Rainbow)":{"level":100,"item":"Leftovers","moves":["Thunder Wave","Iron Head","Waterfall","Zen Headbutt"],"ability":"Synchronize","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":39},																													
        "Doubles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Aurora Veil","Silver Wind","Tri Attack","Psyshock"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":162},																													
        "Doubles Boss Clown Indra 3 (1, Rainbow)":{"level":100,"item":"Magical Seed","moves":["Aurora Veil","Silver Wind","Tri Attack","Psyshock"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":166},																													
        "Doubles Boss Clown Indra 3 (2, Rainbow)":{"level":100,"item":"Magical Seed","moves":["Sludge Bomb","Ice Beam","Thunder","Scald"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":167},																													
        "Doubles Boss Clown Indra 3 (3, Rainbow)":{"level":100,"item":"Leftovers","moves":["Thunder Wave","Iron Head","Waterfall","Zen Headbutt"],"ability":"Synchronize","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":168},																													
        "Doubles Boss Clown Indra 3 (4, Rainbow)":{"level":100,"item":"Starf Berry","moves":["Metronome"],"ability":"Synchronize","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":169},																													

    },
    "Milotic":{
        "Singles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Scald","Recover","Dragon Pulse","Ice Beam"],"ability":"Cute Charm","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":36},																													
        "Doubles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Scald","Recover","Dragon Pulse","Ice Beam"],"ability":"Cute Charm","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":164},																													
        "Doubles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Leftovers","moves":["Recover","Scald","Light Screen","Blizzard"],"ability":"Marvel Scale","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":230},																													

    },
    "Miltank":{
        "Singles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Magical Seed","moves":["Return","Milk Drink","Iron Head","Brick Break"],"ability":"Sap Sipper","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":84},																													
        "Doubles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Magical Seed","moves":["Return","Milk Drink","Iron Head","Brick Break"],"ability":"Sap Sipper","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":213},																													

    },
    "Mimikyu":{
        "Doubles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Shadow Claw","Play Rough","Shadow Sneak"],"ability":"Disguise","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 6,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":128},																													

    },
    "Muk-Alola":{
        "Singles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Black Sludge","moves":["Gunk Shot","Knock Off","Minimize","Ice Punch"],"ability":"Poison Touch","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":117},																													
        "Doubles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Telluric Seed","moves":["Rock Slide","Poison Jab","Shadow Sneak","Knock Off"],"ability":"Power Of Alchemy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":223},																													
        "Doubles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Black Sludge","moves":["Gunk Shot","Knock Off","Minimize","Ice Punch"],"ability":"Poison Touch","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":253},																													

    },
    "Naganadel":{
        "Singles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Life Orb","moves":["Sludge Wave","Draco Meteor","Nasty Plot","Fire Blast"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":3},																													
        "Singles Boss Daydreamer Crim (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Dragon Pulse","Sludge Bomb","Flamethrower","Hidden Power Ground"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":114},																													
        "Doubles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Telluric Seed","moves":["Sludge Wave","Draco Meteor","Nasty Plot","Fire Blast"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":121},																													

    },
    "Necrozma":{
        "Singles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Prismatic Laser","Heat Wave","Power Gem","Hyper Voice"],"ability":"Prism Armor","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":35},																													
        "Doubles Boss Clown Indra 2 (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Prismatic Laser","Heat Wave","Power Gem","Hyper Voice"],"ability":"Prism Armor","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":163},																													

    },
    "Nidoking":{
        "Singles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Elemental Seed","moves":["Sludge Bomb","Water Pulse","Thunderbolt","Earth Power"],"ability":"Sheer Force","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":21},																													
        "Doubles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Elemental Seed","moves":["Sludge Bomb","Water Pulse","Thunderbolt","Earth Power"],"ability":"Sheer Force","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":145},																													

    },
    "Ninetales":{
        "Singles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Heat Rock","moves":["Solar Beam","Psyshock","Flamethrower","Nasty Plot"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":43},																													
        "Doubles Boss Magma Maxwell (Grassy)":{"level":100,"item":"Heat Rock","moves":["Solar Beam","Psyshock","Flamethrower","Nasty Plot"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":174},																													

    },
    "Ninetales-Alola":{
        "Doubles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Babiri Berry","moves":["Aurora Beam","Aurora Veil","Dazzling Gleam","Psyshock"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 6,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":127},																													

    },
    "Palossand":{
        "Doubles Boss Activist Sandy (Swamp)":{"level":100,"item":"Passho Berry","moves":["Shadow Ball","Earth Power","Shore Up","Protect"],"ability":"Water Compaction","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":136},																													
        "Doubles Boss Elder Seacrest (Underwater)":{"level":100,"item":"Elemental Seed","moves":["Earth Power","Shadow Ball","Shore Up","Amnesia"],"ability":"Water Compaction","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":143},																													

    },
    "Pelipper":{
        "Singles Boss Activist Sandy (Swamp)":{"level":100,"item":"Damp Rock","moves":["Hurricane","Roost","U-turn","Surf"],"ability":"Drizzle","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":13},																													
        "Singles Boss Aqua Archer (Swamp)":{"level":100,"item":"Damp Rock","moves":["Hurricane","Roost","U-turn","Surf"],"ability":"Drizzle","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":40},																													
        "Doubles Boss Activist Sandy (Swamp)":{"level":100,"item":"Damp Rock","moves":["Hurricane","Roost","U-turn","Surf"],"ability":"Drizzle","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":134},																													
        "Doubles Boss Aqua Archer (Swamp)":{"level":100,"item":"Damp Rock","moves":["Hurricane","Roost","U-turn","Surf"],"ability":"Drizzle","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":170},																													

    },
    "Pikachu":{
        "Singles Boss Pokefan Nyu (1, Electric)":{"level":100,"item":"Light Ball","moves":["Nasty Plot","Surf","Signal Beam","Thunderbolt"],"ability":"Static","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":52},																													
        "Singles Boss Pokefan Nyu (2, Electric)":{"level":100,"item":"Focus Sash","moves":["Knock Off","Fake Out","Volt Tackle","Extreme Speed"],"ability":"Static","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":53},																													
        "Singles Boss Pokefan Nyu (3, Electric)":{"level":100,"item":"Light Ball","moves":["Knock Off","Fly","Volt Tackle","Extreme Speed"],"ability":"Static","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":54},																													
        "Doubles Boss Pokefan Nyu (1, Electric)":{"level":100,"item":"Light Ball","moves":["Nasty Plot","Surf","Signal Beam","Discharge"],"ability":"Lightning Rod","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":186},																													
        "Doubles Boss Pokefan Nyu (2, Electric)":{"level":100,"item":"Air Balloon","moves":["Fake Out","Discharge","Reflect","Light Screen"],"ability":"Lightning Rod","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":187},
        "Doubles Boss Pokefan Nyu (3, Electric)":{"level":100,"item":"Focus Sash","moves":["Knock Off","Fake Out","Volt Tackle","Extreme Speed"],"ability":"Lightning Rod","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":188},																													
        "Doubles Boss Pokefan Nyu (4, Electric)":{"level":100,"item":"Light Ball","moves":["Knock Off","Fly","Volt Tackle","Extreme Speed"],"ability":"Lightning Rod","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":189},																													

    },
    "Primarina":{
        "Singles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Leftovers","moves":["Sparkling Aria","Moonblast","Sing","Ice Beam"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":46},																													
        "Singles Boss Daydreamer Crim (Fairy Tale)":{"level":100,"item":"Primarium Z","moves":["Sparkling Aria","Moonblast","Ice Beam","Psychic"],"ability":"Torrent","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":112},																													
        "Doubles Boss Ringmaster Alistasia (Big Top)":{"level":100,"item":"Leftovers","moves":["Hyper Voice","Moonblast","Sing","Ice Beam"],"ability":"Liquid Voice","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":180},																													
        "Doubles Boss Guitarist McKrezzy (Cave)":{"level":100,"item":"Life Orb","moves":["Sparkling Aria","Moonblast","Protect","Icy Wind"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":203},																													

    },
    "Purugly":{
        "Singles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Hypnosis","Dream Eater","Hyper Voice","Shadow Ball"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":88},																													
        "Doubles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Hypnosis","Dream Eater","Hyper Voice","Shadow Ball"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":218},																													

    },
    "Rotom-Fan":{
        "Singles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Air Slash","Thunderbolt","Signal Beam","Hidden Power Ice"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":33},																													
        "Doubles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Air Slash","Thunderbolt","Signal Beam","Hidden Power Ice"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":161},																													

    },
    "Rhyperior":{
        "Singles Boss Hotshot Aster (Desert)":{"level":100,"item":"Assault Vest","moves":["Megahorn","Earthquake","Stone Edge","Fire Punch"],"ability":"Solid Rock","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":17},																													
        "Doubles Boss Hotshot Aster (Desert)":{"level":100,"item":"Assault Vest","moves":["Megahorn","Earthquake","Stone Edge","Fire Punch"],"ability":"Solid Rock","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":139},																													
        "Doubles Boss Madame Meganium (Invrs)":{"level":100,"item":"Weakness Policy","moves":["Rock Slide","Megahorn","Thunder Punch","Earthquake"],"ability":"Solid Rock","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":147},																													

    },
    "Ribombee":{
        "Singles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Stun Spore","Moonblast","Quiver Dance"],"ability":"Honey Gather","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1},																													
        "Singles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Pollen Puff","Moonblast","Quiver Dance"],"ability":"Shield Dust","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 0},"index":115},																													
        "Doubles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Telluric Seed","moves":["Sticky Web","Pollen Puff","Moonblast","Stun Spore"],"ability":"Honey Gather","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":118},																													
        "Doubles Boss Poacher Breslin (Starlight)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Pollen Puff","Moonblast","Quiver Dance"],"ability":"Shield Dust","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 0},"index":250},																													

    },
    "Sableye":{
        "Singles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Taunt","Will-O-Wisp","Recover","Foul Play"],"ability":"Prankster","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":58},																													
        "Doubles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Taunt","Will-O-Wisp","Recover","Foul Play"],"ability":"Prankster","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":190},																													

    },
    "Scizor":{
        "Singles Boss Genius Eustace (New World)":{"level":100,"item":"Choice Band","moves":["U-turn","Bullet Punch","Superpower","Knock Off"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":71},																													
        "Doubles Boss Genius Eustace (New World)":{"level":100,"item":"Choice Band","moves":["U-turn","Bullet Punch","Superpower","Knock Off"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":200},																													

    },
    "Seismitoad":{
        "Singles Boss Activist Sandy (Swamp)":{"level":100,"item":"Choice Specs","moves":["Mud Bomb","Surf","Focus Blast","Sludge Bomb"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":14},																													
        "Doubles Boss Activist Sandy (Swamp)":{"level":100,"item":"Choice Specs","moves":["Mud Bomb","Surf","Focus Blast","Sludge Bomb"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":135},																													

    },
    "Sharpedo":{
        "Singles Boss Aqua Archer (Swamp)":{"level":100,"item":"Air Balloon","moves":["Poison Jab","Crunch","Protect","Psychic Fangs"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":42},																													
        "Singles Boss Genius Eustace (New World)":{"level":100,"item":"Life Orb","moves":["Aqua Jet","Waterfall","Crunch","Protect"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":70},																													
        "Doubles Boss Aqua Archer (Swamp)":{"level":100,"item":"Air Balloon","moves":["Poison Jab","Crunch","Protect","Psychic Fangs"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":172},																													
        "Doubles Boss Genius Eustace (New World)":{"level":100,"item":"Life Orb","moves":["Aqua Jet","Waterfall","Crunch","Protect"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":198},																													

    },
    "Shaymin-Sky":{
        "Singles Boss Friendly Cass 1 (New Wrld)":{"level":100,"item":"Life Orb","moves":["Seed Flare","Air Slash","Earth Power","Dazzling Gleam"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":64},																													

    },
    "Slowbro":{
        "Doubles Boss John Reborn (Starlight)":{"level":100,"item":"Amplifield Rock","moves":["Trick Room","Psychic","Scald","Swift"],"ability":"Oblivious","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":242},																													

    },
    "Slowking":{
        "Singles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Psychic","Scald","Ice Beam","Calm Mind"],"ability":"Own Tempo","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 4,"sp": 0},"index":89},																													
        "Doubles Boss Miss Direction 2 (Psychic)":{"level":100,"item":"Magical Seed","moves":["Psychic","Scald","Ice Beam","Calm Mind"],"ability":"Own Tempo","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 4,"sp": 0},"index":219},																													

    },
    "Smeargle":{
        "Singles Boss Artist Smeargletail (Desert)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Nuzzle","Stealth Rock","Spore"],"ability":"Own Tempo","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":55},																													

    },
    "Spiritomb":{
        "Singles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Dark Pulse","Rest","Sleeptalk"],"ability":"Pressure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":59},																													
        "Singles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Dark Pulse","Rest","Sleeptalk"],"ability":"Pressure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":61},																													
        "Doubles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Dark Pulse","Rest","Sleeptalk"],"ability":"Pressure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":192},																													
        "Doubles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Dark Pulse","Rest","Sleeptalk"],"ability":"Pressure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":194},																													

    },
    "Starmie":{
        "Singles Boss John Reborn (Starlight)":{"level":100,"item":"Magical Seed","moves":["Dazzling Gleam","Swift","Hydro Pump","Psyshock"],"ability":"Illuminate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":107},																													

    },
    "Swampert":{
        "Singles Boss Aqua Archer (Swamp)":{"level":100,"item":"Choice Specs","moves":["Mud Bomb","Surf","Sludge Wave","Ice Beam"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":41},																													
        "Doubles Boss Mr. Biggles (Wasteland)":{"level":100,"item":"Rindo Berry","moves":["Sludge Wave","Surf","Earth Power","Blizzard"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":124},																													
        "Doubles Boss Aqua Archer (Swamp)":{"level":100,"item":"Choice Specs","moves":["Mud Bomb","Surf","Sludge Wave","Ice Beam"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":171},																													

    },
    "Sylveon":{
        "Singles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Leftovers","moves":["Swift","Wish","Shadow Ball","Protect"],"ability":"Pixilate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":7},																													
        "Doubles Boss Q Gang Santiago (Starlight)":{"level":100,"item":"Leftovers","moves":["Swift","Wish","Shadow Ball","Protect"],"ability":"Pixilate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":126},																													

    },
    "Tauros":{
        "Singles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Choice Band","moves":["Thrash","Wild Charge","Zen Headbutt","Stone Edge"],"ability":"Anger Point","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":83},																													
        "Doubles Boss Bouffalant Bill (Inverse)":{"level":100,"item":"Choice Band","moves":["Thrash","Wild Charge","Zen Headbutt","Rock Slide"],"ability":"Intimidate","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":212},																													

    },
    "Tentacruel":{
        "Doubles Boss Aqua Archer (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Brine","Sludge Wave","Ice Beam","Aqua Ring"],"ability":"Rain Dish","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 128,"at": 0,"df": 0,"sa": 252,"sd": 128,"sp": 0},"index":173},																													

    },
    "Terrakion":{
        "Singles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Stone Edge","Earthquake","Close Combat","Stealth Rock"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":49},																													
        "Doubles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Stone Edge","Earthquake","Close Combat","Iron Head"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":182},																													

    },
    "Togetic":{
        "Singles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Psyshock","Flamethrower","Roost"],"ability":"Serene Grace","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":86},																													
        "Doubles Boss Miss Direction 1 (Glitch)":{"level":100,"item":"Eviolite","moves":["Metronome","Psyshock","Flamethrower","Roost"],"ability":"Serene Grace","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":215},																													

    },
    "Torkoal":{
        "Singles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Lava Plume","Solar Beam","Toxic","Clear Smog"],"ability":"Drought","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":100},																													
        "Doubles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Lava Plume","Solar Beam","Toxic","Clear Smog"],"ability":"Drought","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":234},																													

    },
    "Trevenant":{
        "Singles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Sitrus Berry","moves":["Wood Hammer","Forest's Curse","Earthquake","Shadow Claw"],"ability":"Frisk","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":91},																													
        "Doubles Boss Ace Trainer Simon (Forest)":{"level":100,"item":"Telluric Seed","moves":["Wood Hammer","Forest's Curse","Earthquake","Shadow Claw"],"ability":"Frisk","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":224},																													

    },
    "Turtonator":{
        "Singles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Draco Meteor","Solar Beam","Focus Blast"],"ability":"Shell Armor","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":101},																													
        "Doubles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Draco Meteor","Solar Beam","Focus Blast"],"ability":"Shell Armor","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":235},																													

    },
    "Typhlosion":{
        "Doubles Boss Inspector Maelstrom (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Eruption","Extrasensory","Focus Blast"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":236},																													

    },
    "Umbreon":{
        "Singles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Wish","Protect","Heal Bell","Foul Play"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":60},																													
        "Singles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Leftovers","moves":["Wish","Protect","Heal Bell","Foul Play"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":62},																													
        "Doubles Boss Rogue Zero 1 (New World)":{"level":100,"item":"Leftovers","moves":["Wish","Protect","Heal Bell","Foul Play"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":193},																													
        "Doubles Boss Rogue Zero 2 (New World)":{"level":100,"item":"Leftovers","moves":["Wish","Protect","Heal Bell","Foul Play"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":196},																													

    },
    "Vespiquen":{
        "Doubles Boss Ranger Bee (Corrosive)":{"level":100,"item":"Charti Berry","moves":["Attack Order","Toxic Spikes","Heal Order","Acrobatics"],"ability":"Unnerve","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":119},																													

    },
    "Volcanion":{
        "Singles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Steam Eruption","Flamethrower","Earth Power","Sludge Bomb"],"ability":"Water Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":51},																													
        "Doubles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Steam Eruption","Flamethrower","Earth Power","Sludge Bomb"],"ability":"Water Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":185},																													

    },
    "Weavile":{
        "Singles Boss Genius Eustace (New World)":{"level":100,"item":"Air Balloon","moves":["Knock Off","Poison Jab","Ice Shard","Brick Break"],"ability":"Pickpocket","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":72},																													
        "Doubles Boss Genius Eustace (New World)":{"level":100,"item":"Air Balloon","moves":["Knock Off","Poison Jab","Ice Shard","Brick Break"],"ability":"Pickpocket","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":201},																													

    },
    "Zangoose":{
        "Singles Boss Street Rat Randall (Random)":{"level":100,"item":"Toxic Orb","moves":["Facade","Knock Off","Quick Attack","Close Combat"],"ability":"Toxic Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":95},																													
        "Singles Boss Ranger Europa (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Facade","Knock Off","Quick Attack","Close Combat"],"ability":"Toxic Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":97},																													

    },
    "Zapdos":{
        "Singles Boss Street Rat Randall (Random)":{"level":100,"item":"Leftovers","moves":["Roost","Heat Wave","Discharge","Hidden Power Ice"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":96},																													
        "Doubles Boss Street Rat Randall (Random)":{"level":100,"item":"Leftovers","moves":["Roost","Heat Wave","Discharge","Hidden Power Ice"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":229},																													

    },
    "Zebstrika":{
        "Doubles Boss Street Rat Randall (Random)":{"level":100,"item":"Amplifield Rock","moves":["Wild Charge","Thrash","Ion Deluge","Me First"],"ability":"Motor Drive","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":227},																													

    },
    "Zeraora":{
        "Singles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Plasma Fists","Close Combat","Knock Off","Volt Switch"],"ability":"Volt Absorb","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":50},																													
        "Doubles Boss Harridan Craudburry (Holy)":{"level":100,"item":"Life Orb","moves":["Plasma Fists","Close Combat","Knock Off","Volt Switch"],"ability":"Volt Absorb","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":183},																													
        "Doubles Boss Street Rat Randall (Random)":{"level":100,"item":"Life Orb","moves":["Plasma Fists","Fake Out","Outrage","Close Combat"],"ability":"Volt Absorb","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":226},																													

    },
    "Zoroark":{
        "Singles Boss Street Rat Randall (Random)":{"level":100,"item":"Choice Specs","moves":["Dark Pulse","Focus Blast","Flamethrower","Sludge Bomb"],"ability":"Illusion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":94},																													
        
    },
    "Zubat":{
        "Singles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Haze","Venoshock","Air Slash","Quick Guard"],"ability":"Inner Focus","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":32},																													
        "Doubles Boss Clown Indra 1 (Mirror)":{"level":100,"item":"Air Balloon","moves":["Haze","Venoshock","Air Slash","Quick Guard"],"ability":"Inner Focus","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":159},																													

    },
    "Zygarde":{
        "Singles Boss Artist Smeargletail (1, Desert)":{"level":100,"item":"Choice Band","moves":["Thousand Arrows","Thousand Waves","Outrage","Extreme Speed"],"ability":"Aura Break","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":56},																													
        "Singles Boss Artist Smeargletail (2, Desert)":{"level":100,"item":"Leftovers","moves":["Thousand Arrows","Dragon Tail","Rest","Sleeptalk"],"ability":"Aura Break","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":57},																													
        "Doubles Boss Street Rat Randall (Random)":{"level":100,"item":"Yache Berry","moves":["Thousand Arrows","Dragon Dance","Extreme Speed","Outrage"],"ability":"Aura Break","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":228},																													

    },
};

var randoms = {
    "Abomasnow":{
        "Hail Setting Offense":{"item":"Icy Rock","moves":["Blizzard","Giga Drain","Focus Blast","Shadow Ball"],"ability":"Snow Warning","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Choice Specs":{"item":"Choice Specs","moves":["Blizzard","Giga Drain","Focus Blast","Shadow Ball"],"ability":"Snow Warning","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb Offense":{"item":"Life Orb","moves":["Blizzard","Earthquake","Giga Drain","Ice Shard"],"ability":"Snow Warning","nature":"Mild","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Absol":{
        "Crit Spam":{"item":"Scope Lens","moves":["Night Slash","Psycho Cut","Shadow Claw","Stone Edge"],"ability":"Super Luck","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Psych Up Support":{"item":"Leftovers","moves":["Will-O-Wisp","Swagger","Punishment","Psych Up"],"ability":"Super Luck","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Wide Lens":{"item":"Wide Lens","moves":["Iron Tail","Megahorn","Knock Off","Stone Edge"],"ability":"Super Luck","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Focus Sash Stall":{"item":"Focus Sash","moves":["Perish Song","Detect","Mean Look","Toxic"],"ability":"Pressure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Accelgor":{
        "Choice Scarf":{"item":"Choice Scarf","moves":["Bug Buzz","Focus Blast","Energy Ball","Final Gambit"],"ability":"Sticky Hold","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Specs":{"item":"Choice Specs","moves":["Bug Buzz","Focus Blast","Giga Drain","Sludge Bomb"],"ability":"Sticky Hold","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Bug Gem Offense":{"item":"Bug Gem","moves":["Bug Buzz","Focus Blast","Energy Ball","Sludge Bomb"],"ability":"Unburden","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Aegislash-Blade":{
        "Iron Ball Gyro Ball":{"item":"Iron Ball","moves":["Gyro Ball","King'S Shield","Shadow Claw","Sacred Sword"],"ability":"Stance Change","nature":"Sassy","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Physical Tank":{"item":"Leftovers","moves":["Iron Head","King'S Shield","Shadow Claw","Toxic"],"ability":"Stance Change","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Physical Life Orb":{"item":"Life Orb","moves":["Iron Head","King'S Shield","Shadow Claw","Head Smash"],"ability":"Stance Change","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Special Tank":{"item":"Leftovers","moves":["Flash Cannon","King'S Shield","Shadow Ball","Toxic"],"ability":"Stance Change","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Bulky Rest":{"item":"Chesto Berry","moves":["Flash Cannon","King'S Shield","Rest","Toxic"],"ability":"Stance Change","nature":"Calm","ev":{"hp": 170,"at": 0,"df": 170,"sa": 0,"sd": 170,"sp": 0}},
    },
    "Aerodactyl":{
        "Choice Band Aqua Tail":{"item":"Choice Band","moves":["Aqua Tail","Stone Edge","Earthquake","Aerial Ace"],"ability":"Unnerve","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb 4 Attacks":{"item":"Life Orb","moves":["Iron Head","Stone Edge","Earthquake","Aerial Ace"],"ability":"Unnerve","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Special Wall":{"item":"Leftovers","moves":["Roost","Toxic","Double Team","Curse"],"ability":"Pressure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Physical Wall":{"item":"Leftovers","moves":["Roost","Toxic","Double Team","Curse"],"ability":"Pressure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Stealth Rocks Sky Attack":{"item":"Power Herb","moves":["Sky Attack","Rock Slide","Ice Fang","Stealth Rock"],"ability":"Rock Head","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Tailwind Sash":{"item":"Focus Sash","moves":["Ice Fang","Aerial Ace","Fire Fang","Tailwind"],"ability":"Unnerve","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb Roost":{"item":"Life Orb","moves":["Roost","Rock Slide","Thunder Fang","Crunch"],"ability":"Unnerve","nature":"Jolly","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band Iron Head":{"item":"Choice Band","moves":["Stone Edge","Ice Fang","Iron Head","Earthquake"],"ability":"Unnerve","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Sky Attack 4 Attacks":{"item":"Power Herb","moves":["Sky Attack","Stone Edge","Earthquake","Aqua Tail"],"ability":"Unnerve","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Aggron":{
        "Choice Band":{"item":"Choice Band","moves":["Head Smash","Aqua Tail","Earthquake","Iron Head"],"ability":"Rock Head","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb Stealth Rock":{"item":"Life Orb","moves":["Head Smash","Superpower","Stealth Rock","Iron Head"],"ability":"Rock Head","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Salac Berry Thunder Wave":{"item":"Salac Berry","moves":["Thunder Wave","Iron Head","Rock Slide","Dark Pulse"],"ability":"Sturdy","nature":"Naughty","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Alakazam":{
        "Choice Specs 4 Attacks":{"item":"Choice Specs","moves":["Psychic","Energy Ball","Dazzling Gleam","Shadow Ball"],"ability":"Magic Guard","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Psyshock","Signal Beam","Focus Blast","Shadow Ball"],"ability":"Magic Guard","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Specs Trick":{"item":"Choice Specs","moves":["Trick","Recover","Disable","Psychic"],"ability":"Synchronize","nature":"Calm","ev":{"hp": 0,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 255}},
		"Leftovers Setup Sweeper":{"item":"Leftovers","moves":["Calm Mind","Barrier","Recover","Psychic"],"ability":"Magic Guard","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Knock Off","Psycho Cut","Thunder Punch","Ice Punch"],"ability":"Magic Guard","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb Setup Sweeper":{"item":"Life Orb","moves":["Psychic","Shadow Ball","Focus Blast","Calm Mind"],"ability":"Magic Guard","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Focus Sash Thunder Wave":{"item":"Focus Sash","moves":["Psyshock","Thunder Wave","Dazzling Gleam","Hidden Power"],"ability":"Magic Guard","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Alomomola":{
        "Scald Wish Pass":{"item":"Leftovers","moves":["Wish","Protect","Toxic","Scald"],"ability":"Regenerator","nature":"Bold","ev":{"hp": 0,"at": 0,"df": 255,"sa": 0,"sd": 255,"sp": 0}},
		"Aqua Ring Stall":{"item":"Leftovers","moves":["Aqua Ring","Protect","Toxic","Dive"],"ability":"Regenerator","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Altaria":{
        "Special Wall":{"item":"Leftovers","moves":["Toxic","Roost","Protect","Draco Meteor"],"ability":"Natural Cure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Physical Wall":{"item":"Leftovers","moves":["Toxic","Roost","Defog","Flamethrower"],"ability":"Natural Cure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Ambipom":{
        "Life Orb Technician":{"item":"Life Orb","moves":["Fake Out","Return","Dual Chop","Power-Up Punch"],"ability":"Technician","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Seed Bomb","Return","Brick Break","U-Turn"],"ability":"Technician","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb Ice Punch":{"item":"Life Orb","moves":["Fake Out","Tail Slap","Gunk Shot","Ice Punch"],"ability":"Skill Link","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Fake Out Spam":{"item":"Normal Gem","moves":["Fake Out","Aerial Ace","Pursuit","Acrobatics"],"ability":"Pickup","nature":"Jolly","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Life Orb Skill Link Spam":{"item":"Life Orb","moves":["Dual Chop","Tail Slap","Beat Up","Gunk Shot"],"ability":"Skill Link","nature":"Jolly","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Amoongus":{
        "Clear Smog Support":{"item":"Black Sludge","moves":["Spore","Giga Drain","Clear Smog","Nature Power"],"ability":"Regenerator","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Swagger Foul Play":{"item":"Black Sludge","moves":["Swagger","Foul Play","Spore","Synthesis"],"ability":"Regenerator","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Sludge Bomb Special Wall":{"item":"Black Sludge","moves":["Spore","Synthesis","Sludge Bomb","Foul Play"],"ability":"Regenerator","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Toxic Stall":{"item":"Black Sludge","moves":["Toxic","Giga Drain","Ingrain","Synthesis"],"ability":"Regenerator","nature":"Calm","ev":{"hp": 170,"at": 0,"df": 170,"sa": 0,"sd": 170,"sp": 0}},
    },
    "Ampharos":{
        "Choice Specs":{"item":"Choice Specs","moves":["Thunderbolt","Power Gem","Focus Blast","Signal Beam"],"ability":"Static","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Confuse Ray Offense":{"item":"Leftovers","moves":["Thunderbolt","Power Gem","Confuse Ray","Light Screen"],"ability":"Static","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Physical Tank":{"item":"Leftovers","moves":["Cotton Guard","Thunderbolt","Focus Blast","Light Screen"],"ability":"Static","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Special Stall":{"item":"Leftovers","moves":["Light Screen","Volt Switch","Toxic","Protect"],"ability":"Static","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Rocky Helmet Physical Tank":{"item":"Rocky Helmet","moves":["Cotton Guard","Discharge","Power Gem","Hidden Power"],"ability":"Static","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Electric Terrain Sweeper":{"item":"Elemental Seed","moves":["Electric Terrain","Thunderbolt","Hidden Power","Focus Blast"],"ability":"Static","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Air Balloon Support":{"item":"Air Balloon","moves":["Thunder Wave","Thunder","Cotton Guard","Signal Beam"],"ability":"Static","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
    },
    "Araquanid":{
        "Splash Plate Breaker":{"item":"Splash Plate","moves":["Liquidation","Leech Life","Sticky Web","Crunch"],"ability":"Water Bubble","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Aqua Ring Stall":{"item":"Leftovers","moves":["Liquidation","Aqua Ring","Sticky Web","Leech Life"],"ability":"Water Bubble","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Arbok":{
        "Choice Band":{"item":"Choice Band","moves":["Gunk Shot","Earthquake","Aqua Tail","Rock Slide"],"ability":"Intimidate","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Coil Setup Sweeper":{"item":"Leftovers","moves":["Coil","Earthquake","Gunk Shot","Sucker Punch"],"ability":"Intimidate","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Expert Belt 4 Attacks":{"item":"Expert Belt","moves":["Ice Fang","Earthquake","Gunk Shot","Aqua Tail"],"ability":"Intimidate","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Bulky Offense":{"item":"Air Balloon","moves":["Seed Bomb","Throat Chop","Poison Jab","Ice Fang"],"ability":"Intimidate","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Fast Offense":{"item":"Air Balloon","moves":["Earthquake","Poison Jab","Rock Slide","Fire Fang"],"ability":"Intimidate","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Toxic Stall":{"item":"Rocky Helmet","moves":["Toxic","Ice Fang","Infestation","Substitute"],"ability":"Intimidate","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Arcanine":{
        "Choice Band Breaker":{"item":"Choice Band","moves":["Flare Blitz","Wild Charge","Extreme Speed","Close Combat"],"ability":"Flash Fire","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb Morning Sun":{"item":"Life Orb","moves":["Flare Blitz","Wild Charge","Extreme Speed","Morning Sun"],"ability":"Flash Fire","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Intimidate Pivot":{"item":"Eject Button","moves":["Burn Up","Dragon Pulse","Flamethrower","Morning Sun"],"ability":"Intimidate","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf Physical Attacker":{"item":"Choice Scarf","moves":["Flare Blitz","Crunch","Outrage","Close Combat"],"ability":"Flash Fire","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Power Herb Solar Beam":{"item":"Power Herb","moves":["Solar Beam","Dragon Pulse","Flamethrower","Morning Sun"],"ability":"Intimidate","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf Mixed Attacker":{"item":"Choice Scarf","moves":["Fire Blast","Dragon Pulse","Close Combat","Crunch"],"ability":"Intimidate","nature":"Mild","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Physical Wall":{"item":"Rocky Helmet","moves":["Will-O-Wisp","Morning Sun","Substitute","Heat Wave"],"ability":"Intimidate","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Toxic Stall":{"item":"Leftovers","moves":["Substitute","Toxic","Burn Up","Protect"],"ability":"Intimidate","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Assault Vest Tank":{"item":"Assault Vest","moves":["Extreme Speed","Bulldoze","Crunch","Flare Blitz"],"ability":"Intimidate","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Choice Band Bulldoze":{"item":"Choice Band","moves":["Extreme Speed","Flare Blitz","Bulldoze","Crunch"],"ability":"Flash Fire","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Archeops":{
        "Choice Band":{"item":"Choice Band","moves":["Aqua Tail","Earthquake","Head Smash","Zen Headbutt"],"ability":"Defeatist","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Flying Gem Acrobatics":{"item":"Flying Gem","moves":["Aqua Tail","Earthquake","Head Smash","Acrobatics"],"ability":"Defeatist","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Ariados":{
       "Life Orb Setup Sweeper":{"item":"Life Orb","moves":["Leech Life","Poison Jab","Sucker Punch","Swords Dance"],"ability":"Swarm","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Agility Weakness Policy":{"item":"Weakness Policy","moves":["Agility","Poison Jab","Stomping Tantrum","Leech Life"],"ability":"Sniper","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Webs Setter":{"item":"Focus Sash","moves":["Toxic Thread","Sticky Web","Sucker Punch","Fell Stinger"],"ability":"Sniper","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Life Orb Crit Spam":{"item":"Life Orb","moves":["Cross Poison","Night Slash","Focus Energy","Agility"],"ability":"Sniper","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}}, 
    },
    "Armaldo":{
        "Choice Scarf":{"item":"Choice Scarf","moves":["Stone Edge","Liquidation","Earthquake","X-Scissor"],"ability":"Battle Armor","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Stone Edge","Superpower","Knock Off","Aqua Jet"],"ability":"Battle Armor","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Aromatisse":{
        "Nasty Plot 3 Attacks":{"item":"Wiki Berry","moves":["Nasty Plot","Moonblast","Psychic","Thunderbolt"],"ability":"Healer","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Calm Mind Sweeper":{"item":"Leftovers","moves":["Calm Mind","Moonblast","Wish","Protect"],"ability":"Healer","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Aron":{
        "FEAR":{"item":"Custap Berry","moves":["Endeavor","Aerial Ace"],"ability":"Sturdy","nature":"Hardy","ev":{"hp": 0,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Articuno":{
        "Wide Lens Attacker":{"item":"Wide Lens","moves":["Hurricane","Blizzard","Roost","Toxic"],"ability":"Snow Cloak","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb Attacker":{"item":"Life Orb","moves":["Hurricane","Freeze-Dry","Roost","Extrasensory"],"ability":"Snow Cloak","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Special Wall":{"item":"Leftovers","moves":["Roost","Heal Bell","Toxic","Freeze-Dry"],"ability":"Snow Cloak","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Physical Pivot":{"item":"Leftovers","moves":["Fly","Ice Shard","Roost","U-Turn"],"ability":"Snow Cloak","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Weakness Policy Blizzard":{"item":"Weakness Policy","moves":["Agility","Blizzard","Roost","Hurricane"],"ability":"Snow Cloak","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Weakness Policy Support":{"item":"Weakness Policy","moves":["Agility","Ice Beam","Roost","Heal Bell"],"ability":"Snow Cloak","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Sheer Cold Heal Bell":{"item":"Leftovers","moves":["Sheer Cold","Mind Reader","Roost","Heal Bell"],"ability":"Pressure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Sheer Cold Frost Breath":{"item":"Leftovers","moves":["Sheer Cold","Mind Reader","Roost","Frost Breath"],"ability":"Pressure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Audino":{
        "Special Wall":{"item":"Leftovers","moves":["Wish","Protect","Heal Bell","Hyper Voice"],"ability":"Regenerator","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Physical Wall":{"item":"Leftovers","moves":["Wish","Protect","Heal Bell","Hyper Voice"],"ability":"Regenerator","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Aurorus":{
        "Choice Specs":{"item":"Choice Specs","moves":["Hyper Beam","Thunderbolt","Earth Power","Dark Pulse"],"ability":"Refrigerate","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Hyper Beam","Thunderbolt","Earth Power","Flash Cannon"],"ability":"Refrigerate","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb":{"item":"Life Orb","moves":["Hyper Beam","Thunderbolt","Earth Power","Dark Pulse"],"ability":"Refrigerate","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Avalugg":{
        "Choice Band":{"item":"Choice Band","moves":["Avalanche","Earthquake","Superpower","Crunch"],"ability":"Own Tempo","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Wall":{"item":"Leftovers","moves":["Avalanche","Earthquake","Recover","Crunch"],"ability":"Own Tempo","nature":"Careful","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Azelf":{
        "Choice Band Boom":{"item":"Choice Band","moves":["Explosion","Zen Headbutt","Knock Off","Ice Punch"],"ability":"Levitate","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Specs":{"item":"Choice Specs","moves":["Flamethrower","Psyshock","Thunderbolt","Energy Ball"],"ability":"Levitate","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Physical Scarf":{"item":"Choice Scarf","moves":["Fire Punch","Zen Headbutt","Iron Tail","Thunder Punch"],"ability":"Levitate","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Special Scarf":{"item":"Choice Scarf","moves":["Shadow Ball","Psychic","Dazzling Gleam","Signal Beam"],"ability":"Levitate","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Scarf Pivot":{"item":"Choice Scarf","moves":["Explosion","Psychic","Fire Blast","U-Turn"],"ability":"Levitate","nature":"Naive","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Wide Lens":{"item":"Wide Lens","moves":["Iron Tail","Zen Headbutt","Fire Blast","Thunder"],"ability":"Levitate","nature":"Hasty","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Focus Sash Stealth Rocks":{"item":"Focus Sash","moves":["Stealth Rock","Explosion","Thunder Wave","Knock Off"],"ability":"Levitate","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Setup Sweeper":{"item":"Leftovers","moves":["Calm Mind","Psyshock","Substitute","Shadow Ball"],"ability":"Levitate","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Azumarill":{
        "Belly Drum Knock Off":{"item":"Iapapa Berry","moves":["Belly Drum","Play Rough","Aqua Jet","Knock Off"],"ability":"Huge Power","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Perish Trap Iapapa":{"item":"Iapapa Berry","moves":["Perish Song","Whirlpool","Protect","Future Sight"],"ability":"Sap Sipper","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Choice Specs":{"item":"Choice Specs","moves":["Ice Beam","Scald","Focus Blast","Hidden Power"],"ability":"Sap Sipper","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb 4 Attacks":{"item":"Life Orb","moves":["Waterfall","Play Rough","Aqua Jet","Superpower"],"ability":"Huge Power","nature":"Jolly","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Belly Drum Superpower":{"item":"Iapapa Berry","moves":["Belly Drum","Aqua Jet","Play Rough","Superpower"],"ability":"Huge Power","nature":"Jolly","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Rest Talk Special Wall":{"item":"Leftovers","moves":["Scald","Rest","Sleep Talk","Ice Beam"],"ability":"Sap Sipper","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Expert Belt Special Offense":{"item":"Expert Belt","moves":["Scald","Icy Wind","Hydro Pump","Focus Blast"],"ability":"Sap Sipper","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Perish Trap Leftovers":{"item":"Leftovers","moves":["Whirlpool","Perish Song","Protect","Toxic"],"ability":"Sap Sipper","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Aqua Jet","Play Rough","Ice Punch","Superpower"],"ability":"Huge Power","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Banette":{
        "Choice Band":{"item":"Choice Band","moves":["Shadow Claw","Gunk Shot","Knock Off","Shadow Sneak"],"ability":"Cursed Body","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Shadow Claw","Gunk Shot","Knock Off","Shadow Sneak"],"ability":"Cursed Body","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Specs":{"item":"Choice Specs","moves":["Dazzling Gleam","Shadow Ball","Thunderbolt","Psychic"],"ability":"Cursed Body","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb":{"item":"Life Orb","moves":["Shadow Claw","Will-O-Wisp","Knock Off","Sucker Punch"],"ability":"Cursed Body","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Barbaracle":{
       "Shell Smash Cross Chop":{"item":"White Herb","moves":["Shell Smash","Liquidation","Stone Edge","Cross Chop"],"ability":"Tough Claws","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Sniper Crit Spam":{"item":"Scope Lens","moves":["Liquidation","Shadow Claw","Stone Edge","Cross Chop"],"ability":"Sniper","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Poison Jab","Liquidation","Stone Edge","Cross Chop"],"ability":"Tough Claws","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Shell Smash Earthquake":{"item":"White Herb","moves":["Shell Smash","Liquidation","Stone Edge","Earthquake"],"ability":"Tough Claws","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}}, 
    },
    "Basculin":{
        "Choice Band Adaptability":{"item":"Choice Band","moves":["Liquidation","Aqua Jet","Superpower","Crunch"],"ability":"Adaptability","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
        "Choice Band Rock Head":{"item":"Choice Band","moves":["Liquidation","Head Smash","Double-Edge","Zen Headbutt"],"ability":"Rock Head","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Bastiodon":{
        "Custap Berry Double Counter":{"item":"Custap Berry","moves":["Stealth Rock","Roar","Magic Coat","Metal Burst"],"ability":"Sturdy","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Leftovers Special Tank":{"item":"Leftovers","moves":["Stealth Rock","Roar","Magic Coat","Toxic"],"ability":"Sturdy","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Beartic":{
        "Choice Scarf":{"item":"Choice Scarf","moves":["Icicle Crash","Superpower","Throat Chop","Play Rough"],"ability":"Slush Rush","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb":{"item":"Life Orb","moves":["Icicle Crash","Superpower","Swords Dance","Play Rough"],"ability":"Slush Rush","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Icicle Crash","Superpower","Throat Chop","Play Rough"],"ability":"Slush Rush","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Beautifly":{
        "Setup Sweeper":{"item":"Focus Sash","moves":["Quiver Dance","Bug Buzz","Roost","Giga Drain"],"ability":"Swarm","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Specs":{"item":"Choice Specs","moves":["Shadow Ball","Bug Buzz","Psychic","Giga Drain"],"ability":"Swarm","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Shadow Ball","Bug Buzz","Psychic","Giga Drain"],"ability":"Swarm","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Assault Vest Support":{"item":"Assault Vest","moves":["Bug Buzz","Giga Drain","Air Cutter","Electroweb"],"ability":"Rivalry","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Beedrill":{
        "Choice Band":{"item":"Choice Band","moves":["U-Turn","Poison Jab","Knock Off","Drill Run"],"ability":"Sniper","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Flying Gem Pivot":{"item":"Flying Gem","moves":["U-Turn","Acrobatics","Brick Break","Throat Chop"],"ability":"Sniper","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Fell Stinger Sweeper":{"item":"Focus Sash","moves":["Fell Stinger","Endeavor","Poison Jab","Knock Off"],"ability":"Swarm","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Beheeyem":{
        "Choice Specs":{"item":"Choice Specs","moves":["Psyshock","Dark Pulse","Energy Ball","Thunderbolt"],"ability":"Analytic","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb":{"item":"Life Orb","moves":["Psyshock","Nasty Plot","Signal Beam","Thunderbolt"],"ability":"Analytic","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Setup Sweeper":{"item":"Colbur Berry","moves":["Psyshock","Nasty Plot","Signal Beam","Recover"],"ability":"Analytic","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Bellossom":{
        "Focus Sash Quiver Dance":{"item":"Focus Sash","moves":["Quiver Dance","Strength Sap","Giga Drain","Moonblast"],"ability":"Chlorophyll","nature":"Timid","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Leftovers Quiver Dance":{"item":"Leftovers","moves":["Quiver Dance","Strength Sap","Giga Drain","Sludge Bomb"],"ability":"Chlorophyll","nature":"Timid","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Wise Glasses Quiver Dance":{"item":"Wise Glasses","moves":["Quiver Dance","Giga Drain","Moonblast","Hidden Power"],"ability":"Chlorophyll","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Grassy Terrain Waill":{"item":"Elemental Seed","moves":["Grassy Terrain","Giga Drain","Toxic","Protect"],"ability":"Chlorophyll","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Nature Power Offense":{"item":"Leftovers","moves":["Nature Power","Strength Sap","Sludge Bomb","Energy Ball"],"ability":"Chlorophyll","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Sun Setter":{"item":"Heat Rock","moves":["Sunny Day","Nature Power","Solar Beam","Moonblast"],"ability":"Chlorophyll","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Physical Setup":{"item":"Leftovers","moves":["Swords Dance","Drain Punch","Leaf Blade","Nature Power"],"ability":"Chlorophyll","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},  
    },
    "Bewear":{
        "Silk Scarf":{"item":"Silk Scarf","moves":["Swords Dance","Return","Superpower","Earthquake"],"ability":"Fluffy","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Life Orb":{"item":"Life Orb","moves":["Swords Dance","Return","Hammer Arm","Payback"],"ability":"Fluffy","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Iron Head","Return","Hammer Arm","Earthquake"],"ability":"Fluffy","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Shadow Claw","Return","Superpower","Ice Punch"],"ability":"Fluffy","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Assault Vest":{"item":"Assault Vest","moves":["Iron Head","Return","Hammer Arm","Payback"],"ability":"Fluffy","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Leftovers":{"item":"Leftovers","moves":["Return","Drain Punch","Earthquake","Rock Tomb"],"ability":"Fluffy","nature":"Jolly","ev":{"hp": 170,"at": 170,"df": 0,"sa": 0,"sd": 170,"sp": 0}},
    },
    "Bibarel":{
        "Dive Moody":{"item":"Leftovers","moves":["Protect","Substitute","Dive","Return"],"ability":"Moody","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Evasion Focus Punch":{"item":"Leftovers","moves":["Protect","Double Team","Focus Punch","Aqua Tail"],"ability":"Moody","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Sub Protect Moody":{"item":"Leftovers","moves":["Protect","Substitute","Scald","Thunderbolt"],"ability":"Moody","nature":"Calm","ev":{"hp": 170,"at": 0,"df": 170,"sa": 0,"sd": 170,"sp": 0}},
		"Unaware Sweeper":{"item":"Life Orb","moves":["Swords Dance","Return","Waterfall","Aqua Jet"],"ability":"Unaware","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Simple Swords Dance":{"item":"Focus Sash","moves":["Swords Dance","Return","Quick Attack","Aqua Jet"],"ability":"Simple","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}}, 
    },
    "Bisharp":{
       "Special Wall":{"item":"Leftovers","moves":["Toxic","Mean Look","Protect","Double Team"],"ability":"Pressure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Phsyical Wall":{"item":"Leftovers","moves":["Toxic","Mean Look","Protect","Double Team"],"ability":"Pressure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Swords Dance Sweeper":{"item":"Dread Plate","moves":["Swords Dance","Knock Off","Sucker Punch","Iron Head"],"ability":"Defiant","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Assault Vest":{"item":"Assault Vest","moves":["Brick Break","Knock Off","Sucker Punch","Iron Head"],"ability":"Defiant","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Brick Break","Knock Off","Iron Head","Poison Jab"],"ability":"Defiant","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Brick Break","Knock Off","Iron Head","X-Scissor"],"ability":"Defiant","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}}, 
    },
    "Blastoise":{
        "Physical Wall":{"item":"Leftovers","moves":["Scald","Ice Beam","Toxic","Rest"],"ability":"Torrent","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Special Wall":{"item":"Leftovers","moves":["Scald","Ice Beam","Toxic","Rest"],"ability":"Torrent","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Physical Tank":{"item":"Leftovers","moves":["Aqua Tail","Earthquake","Toxic","Rock Slide"],"ability":"Torrent","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Special Tank":{"item":"Leftovers","moves":["Aqua Tail","Earthquake","Toxic","Rock Slide"],"ability":"Torrent","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Substitute Wall":{"item":"Leftovers","moves":["Protect","Hydro Pump","Substitute","Rain Dance"],"ability":"Rain Dish","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Assault Vest":{"item":"Assault Vest","moves":["Earthquake","Aqua Tail","Dragon Tail","Ice Punch"],"ability":"Torrent","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Life Orb":{"item":"Life Orb","moves":["Scald","Ice Beam","Focus Blast","Flash Cannon"],"ability":"Torrent","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Expert Belt Attacker":{"item":"Expert Belt","moves":["Fake Out","Waterfall","Brick Break","Ice Punch"],"ability":"Torrent","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Sleep Spam Wall":{"item":"Leftovers","moves":["Protect","Yawn","Surf","Rain Dance"],"ability":"Rain Dish","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Blaziken":{
        "Choice Band Brave Bird":{"item":"Choice Band","moves":["Flare Blitz","High Jump Kick","Brave Bird","Stone Edge"],"ability":"Speed Boost","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Baton Pass Support":{"item":"Leftovers","moves":["Substitute","Swords Dance","Baton Pass","High Jump Kick"],"ability":"Speed Boost","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Choice Band Knock Off":{"item":"Choice Band","moves":["Flare Blitz","Stone Edge","Knock Off","High Jump Kick"],"ability":"Speed Boost","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Assault Vest Stone Edge":{"item":"Assault Vest","moves":["Flare Blitz","Stone Edge","Knock Off","High Jump Kick"],"ability":"Speed Boost","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Assault Vest Earthquake":{"item":"Assault Vest","moves":["Flare Blitz","Earthquake","Knock Off","Superpower"],"ability":"Speed Boost","nature":"Hasty","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Specs":{"item":"Choice Specs","moves":["Fire Blast","Vacuum Wave","Hidden Power","Focus Blast"],"ability":"Speed Boost","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Wide Lens Mixed Attacker":{"item":"Wide Lens","moves":["Fire Blast","High Jump Kick","Protect","Bounce"],"ability":"Speed Boost","nature":"Lonely","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf Blaze":{"item":"Choice Scarf","moves":["Flare Blitz","Stone Edge","Knock Off","High Jump Kick"],"ability":"Blaze","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Solar Beam Special Attacker":{"item":"Power Herb","moves":["Fire Blast","Focus Blast","Solar Beam","Vacuum Wave"],"ability":"Speed Boost","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Setup Sweeper":{"item":"Life Orb","moves":["Swords Dance","Protect","High Jump Kick","Flare Blitz"],"ability":"Speed Boost","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Blissey":{
        "Minimize Stall":{"item":"Leftovers","moves":["Toxic","Seismic Toss","Minimize","Soft-Boiled"],"ability":"Natural Cure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Choice Specs":{"item":"Choice Specs","moves":["Thunderbolt","Flamethrower","Ice Beam","Tri Attack"],"ability":"Serene Grace","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 255,"sa": 255,"sd": 0,"sp": 0}},
		"Setup Sweeper":{"item":"Leftovers","moves":["Calm Mind","Flamethrower","Soft-Boiled","Tri Attack"],"ability":"Natural Cure","nature":"Bold","ev":{"hp": 0,"at": 0,"df": 255,"sa": 255,"sd": 0,"sp": 0}},
		"Assault Vest":{"item":"Assault Vest","moves":["Thunderbolt","Flamethrower","Ice Beam","Tri Attack"],"ability":"Serene Grace","nature":"Bold","ev":{"hp": 0,"at": 0,"df": 255,"sa": 255,"sd": 0,"sp": 0}},
		"Sing Dream Eater":{"item":"Leftovers","moves":["Calm Mind","Sing","Soft-Boiled","Dream Eater"],"ability":"Natural Cure","nature":"Bold","ev":{"hp": 0,"at": 0,"df": 255,"sa": 255,"sd": 0,"sp": 0}},
		"Hazard Support":{"item":"Leftovers","moves":["Reflect","Stealth Rock","Seismic Toss","Soft-Boiled"],"ability":"Natural Cure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Bouffalant":{
        "Setup Sweeper":{"item":"Life Orb","moves":["Swords Dance","Return","Earthquake","Megahorn"],"ability":"Sap Sipper","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Assault Vest":{"item":"Assault Vest","moves":["Stone Edge","Return","Earthquake","Megahorn"],"ability":"Sap Sipper","nature":"Careful","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Superpower","Return","Earthquake","Zen Headbutt"],"ability":"Sap Sipper","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Reckless Chople Berry":{"item":"Chople Berry","moves":["Earthquake","Head Charge","Zen Headbutt","Wild Charge"],"ability":"Reckless","nature":"Adamant","ev":{"hp": 170,"at": 170,"df": 170,"sa": 0,"sd": 0,"sp": 0}},
		"Cotton Guard Attacker":{"item":"Leftovers","moves":["Cotton Guard","Head Charge","Smart Strike","Reversal"],"ability":"Soundproof","nature":"Careful","ev":{"hp": 170,"at": 170,"df": 170,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Braviary":{
        "Choice Band":{"item":"Choice Band","moves":["Brave Bird","Return","Superpower","U-Turn"],"ability":"Defiant","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Brave Bird","Return","Superpower","U-Turn"],"ability":"Defiant","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Setup Sweeper":{"item":"Leftovers","moves":["Brave Bird","Return","Roost","Bulk Up"],"ability":"Defiant","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Breloom":{
        "Setup Sweeper":{"item":"Life Orb","moves":["Swords Dance","Mach Punch","Bullet Seed","Spore"],"ability":"Technician","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"SubSeed Focus Punch":{"item":"Toxic Orb","moves":["Substitute","Focus Punch","Leech Seed","Spore"],"ability":"Poison Heal","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Wake-Up Slap Sweeper":{"item":"Toxic Orb","moves":["Bulk Up","Wake-Up Slap","Leech Seed","Spore"],"ability":"Poison Heal","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Rock Tomb","Force Palm","Bullet Seed","Iron Tail"],"ability":"Technician","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Bronzong":{
       "Stealth Rock Special Wall":{"item":"Leftovers","moves":["Stealth Rock","Toxic","Iron Head","Protect"],"ability":"Levitate","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Earthquake","Iron Head","Zen Headbutt","Rock Slide"],"ability":"Levitate","nature":"Careful","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Setup Sweeper":{"item":"Chesto Berry","moves":["Calm Mind","Iron Defense","Rest","Psychic"],"ability":"Heatproof","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Bruxish":{
        "Setup Sweeper":{"item":"Life Orb","moves":["Swords Dance","Psychic Fangs","Aqua Jet","Crunch"],"ability":"Strong Jaw","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Liquidation","Psychic Fangs","Aqua Jet","Crunch"],"ability":"Strong Jaw","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Butterfree":{
        "Sleep Powder Setup Sweeper":{"item":"Focus Sash","moves":["Sleep Powder","Quiver Dance","Bug Buzz","Air Slash"],"ability":"Compound Eyes","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Psychic","Energy Ball","Bug Buzz","Air Slash"],"ability":"Compound Eyes","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Solar Beam Setup Sweeper":{"item":"Power Herb","moves":["Solar Beam","Quiver Dance","Bug Buzz","Air Slash"],"ability":"Compound Eyes","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Tailwind Sun Setter":{"item":"Leftovers","moves":["Tailwind","U-Turn","Sunny Day","Bug Buzz"],"ability":"Tinted Lens","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Cacturne":{
        "Choice Scarf":{"item":"Choice Scarf","moves":["Dark Pulse","Superpower","Giga Drain","Poison Jab"],"ability":"Water Absorb","nature":"Mild","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb Mixed Attacker":{"item":"Life Orb","moves":["Dark Pulse","Superpower","Giga Drain","Sucker Punch"],"ability":"Water Absorb","nature":"Mild","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Setup Sweeper":{"item":"Life Orb","moves":["Swords Dance","Superpower","Seed Bomb","Sucker Punch"],"ability":"Water Absorb","nature":"Mild","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Camerupt":{
       "Choice Specs":{"item":"Choice Specs","moves":["Eruption","Earth Power","Flash Cannon","Fire Blast"],"ability":"Solid Rock","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Earthquake","Stone Edge","Iron Head","Explosion"],"ability":"Solid Rock","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}}, 
    },
    "Carbink":{
        "Screens Setter":{"item":"Leftovers","moves":["Toxic","Reflect","Light Screen","Rest"],"ability":"Sturdy","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Carnivine":{
        "Setup Sweeper":{"item":"Life Orb","moves":["Knock Off","Power Whip","Swords Dance","Synthesis"],"ability":"Levitate","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Carracosta":{
       "Shell Smash Setup Sweeper":{"item":"White Herb","moves":["Shell Smash","Stone Edge","Aqua Jet","Earthquake"],"ability":"Solid Rock","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Assault Vest":{"item":"Assault Vest","moves":["Earthquake","Superpower","Stone Edge","Aqua Jet"],"ability":"Solid Rock","nature":"Careful","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Earthquake","Superpower","Stone Edge","Aqua Jet"],"ability":"Solid Rock","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Choice Specs":{"item":"Choice Specs","moves":["Ice Beam","Scald","Earth Power","Focus Blast"],"ability":"Solid Rock","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 255,"sp": 0}}, 
    },
    "Castform":{
        "Sun Support":{"item":"Heat Rock","moves":["Sunny Day","Fire Blast","Solar Beam","Tailwind"],"ability":"Forecast","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Rain Attacker":{"item":"Damp Rock","moves":["Rain Dance","Weather Ball","Thunder","Hurricane"],"ability":"Forecast","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Hail Support":{"item":"Icy Rock","moves":["Hail","Blizzard","Hurricane","Tailwind"],"ability":"Forecast","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Celebi":{
        "Life Orb Special Setup":{"item":"Life Orb","moves":["Nasty Plot","Psychic","Giga Drain","Dazzling Gleam"],"ability":"Natural Cure","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Zen Headbutt","Seed Bomb","Sucker Punch","U-Turn"],"ability":"Natural Cure","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Specs":{"item":"Choice Specs","moves":["Dazzling Gleam","Earth Power","Psyshock","Giga Drain"],"ability":"Natural Cure","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Special Scarf":{"item":"Choice Scarf","moves":["Shadow Ball","Earth Power","Psyshock","Giga Drain"],"ability":"Natural Cure","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Physical Scarf":{"item":"Choice Scarf","moves":["Zen Headbutt","Seed Bomb","Sucker Punch","U-Turn"],"ability":"Natural Cure","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Physical Wall":{"item":"Leftovers","moves":["Protect","Psychic","Recover","Toxic"],"ability":"Natural Cure","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Watmel Natural Gift":{"item":"Watmel Berry","moves":["Zen Headbutt","Seed Bomb","Natural Gift","U-Turn"],"ability":"Natural Cure","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Leech Seed Stall":{"item":"Leftovers","moves":["Protect","Leech Seed","Toxic","Recover"],"ability":"Natural Cure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"TWave Special Setup":{"item":"Leftovers","moves":["Thunder Wave","Psychic","Nasty Plot","Dazzling Gleam"],"ability":"Natural Cure","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Nature Power Special Setup":{"item":"Life Orb","moves":["Nature Power","Nasty Plot","Giga Drain","Earth Power"],"ability":"Natural Cure","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Chandelure":{
        "Choice Specs":{"item":"Choice Specs","moves":["Trick","Fire Blast","Shadow Ball","Energy Ball"],"ability":"Flame Body","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Psychic","Fire Blast","Shadow Ball","Energy Ball"],"ability":"Flame Body","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Setup Sweeper":{"item":"Leftovers","moves":["Flamethrower","Shadow Ball","Calm Mind","Substitute"],"ability":"Flame Body","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Chansey":{
        "Toxic Heal Bell":{"item":"Eviolite","moves":["Seismic Toss","Toxic","Soft-Boiled","Heal Bell"],"ability":"Serene Grace","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Toxic Fire Blast":{"item":"Eviolite","moves":["Seismic Toss","Toxic","Fire Blast","Soft-Boiled"],"ability":"Serene Grace","nature":"Bold","ev":{"hp": 170,"at": 0,"df": 170,"sa": 0,"sd": 170,"sp": 0}},
		"Metronome Gaming":{"item":"Eviolite","moves":["Seismic Toss","Thunder Wave","Wish","Metronome"],"ability":"Serene Grace","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Charizard":{
        "Wide Lens Special Attacker":{"item":"Wide Lens","moves":["Fire Blast","Focus Blast","Air Slash","Roost"],"ability":"Blaze","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb Timid":{"item":"Life Orb","moves":["Fire Blast","Focus Blast","Air Slash","Roost"],"ability":"Blaze","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Life Orb Modest":{"item":"Life Orb","moves":["Fire Blast","Focus Blast","Air Slash","Roost"],"ability":"Blaze","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Sun Sweeper":{"item":"Life Orb","moves":["Sunny Day","Heat Wave","Air Slash","Focus Blast"],"ability":"Solar Power","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Belly Drum Sweeper":{"item":"Figy Berry","moves":["Wing Attack","Flame Charge","Belly Drum","Shadow Claw"],"ability":"Blaze","nature":"Adamant","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Sun Setter":{"item":"Charti Berry","moves":["Brick Break","Flare Blitz","Rock Slide","Sunny Day"],"ability":"Blaze","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Charjabug":{
        "Battery Support":{"item":"Eviolite","moves":["X-Scissor","Spark","Rest","Sleep Talk"],"ability":"Battery","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Chatot":{
        "Choice Specs":{"item":"Choice Specs","moves":["Boomburst","Heat Wave","U-Turn","Ominous Wind"],"ability":"Keen Eye","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Bulk Attacker":{"item":"Leftovers","moves":["Boomburst","Heat Wave","Chatter","Roost"],"ability":"Keen Eye","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Tailwind Support":{"item":"Life Orb","moves":["Boomburst","Heat Wave","Tailwind","Chatter"],"ability":"Tangled Feet","nature":"Modest","ev":{"hp": 170,"at": 0,"df": 0,"sa": 170,"sd": 0,"sp": 170}},
    },
    "Cherrim":{
        "Flower Gift Support":{"item":"Coba Berry","moves":["Sunny Day","Morning Sun","Solar Beam","Weather Ball"],"ability":"Flower Gift","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
    },
    "Chesnaught":{
        "Bulky Belly Drum":{"item":"Iapapa Berry","moves":["Belly Drum","Drain Punch","Seed Bomb","Rock Slide"],"ability":"Bulletproof","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Leech Seed Tank":{"item":"Leftovers","moves":["Leech Seed","Spiky Shield","Poison Jab","Drain Punch"],"ability":"Bulletproof","nature":"Impish","ev":{"hp": 0,"at": 0,"df": 255,"sa": 0,"sd": 255,"sp": 0}},
		"Bulky Setup":{"item":"Leftovers","moves":["Synthesis","Power-Up Punch","Seed Bomb","Earthquake"],"ability":"Bulletproof","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Salac Belly Drum":{"item":"Salac Berry","moves":["Belly Drum","Seed Bomb","Superpower","Stone Edge"],"ability":"Overgrow","nature":"Impish","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"SubSeed":{"item":"Leftovers","moves":["Leech Seed","Substitute","Spiky Shield","Hammer Arm"],"ability":"Bulletproof","nature":"Impish","ev":{"hp": 0,"at": 0,"df": 255,"sa": 0,"sd": 255,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Seed Bomb","Drain Punch","Earthquake","Stone Edge"],"ability":"Bulletproof","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Assault Vest":{"item":"Assault Vest","moves":["Power-Up Punch","Drain Punch","Seed Bomb","Stone Edge"],"ability":"Bulletproof","nature":"Adamant","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},  
    },
    "Chimecho":{
        "Support":{"item":"Leftovers","moves":["Heal Bell","Recover","Psychic","Thunder Wave"],"ability":"Levitate","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Cinccino":{
        "Choice Band":{"item":"Choice Band","moves":["Bullet Seed","Rock Blast","Tail Slap","U-Turn"],"ability":"Skill Link","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Scarf":{"item":"Choice Scarf","moves":["Bullet Seed","Rock Blast","Tail Slap","Knock Off"],"ability":"Skill Link","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Flinch Machine":{"item":"King'S Rock","moves":["Bullet Seed","Rock Blast","Tail Slap","Knock Off"],"ability":"Skill Link","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Wide Lens":{"item":"Wide Lens","moves":["Aqua Tail","Gunk Shot","Tail Slap","Iron Tail"],"ability":"Skill Link","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
    },
    "Clawitzer":{
        "Conventional Choice Specs":{"item":"Choice Specs","moves":["Aura Sphere","Dark Pulse","Water Pulse","Dragon Pulse"],"ability":"Mega Launcher","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Sludge Wave Choice Specs":{"item":"Choice Specs","moves":["Sludge Wave","Ice Beam","Water Pulse","Flash Cannon"],"ability":"Mega Launcher","nature":"Modest","ev":{"hp": 170,"at": 0,"df": 0,"sa": 170,"sd": 0,"sp": 170}},
		"Toxic Stall":{"item":"Leftovers","moves":["Substitute","Toxic","Protect","Water Pulse"],"ability":"Mega Launcher","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
    },
    "Claydol":{
        "Cosmic Power Wall":{"item":"Leftovers","moves":["Toxic","Cosmic Power","Protect","Earthquake"],"ability":"Levitate","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Offensive Support":{"item":"Leftovers","moves":["Earth Power","Light Screen","Toxic","Psychic"],"ability":"Levitate","nature":"Bold","ev":{"hp": 170,"at": 0,"df": 0,"sa": 170,"sd": 0,"sp": 170}},
		"Screens Setter":{"item":"Leftovers","moves":["Reflect","Light Screen","Toxic","Explosion"],"ability":"Levitate","nature":"Bold","ev":{"hp": 170,"at": 170,"df": 0,"sa": 0,"sd": 0,"sp": 170}},
    },
    "Clefable":{
        "Stored Power Sweeper":{"item":"Leftovers","moves":["Cosmic Power","Minimize","Stored Power","Wish"],"ability":"Magic Guard","nature":"Bold","ev":{"hp": 170,"at": 0,"df": 170,"sa": 0,"sd": 170,"sp": 0}},
		"Belly Drum":{"item":"Iapapa Berry","moves":["Belly Drum","Wish","Protect","Meteor Mash"],"ability":"Unaware","nature":"Careful","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
		"Cosmic Power Setup Setter":{"item":"Leftovers","moves":["Misty Terrain","Cosmic Power","Stored Power","Wish"],"ability":"Unaware","nature":"Bold","ev":{"hp": 170,"at": 0,"df": 170,"sa": 0,"sd": 170,"sp": 0}},
		"Calm Mind Setup Sweeper":{"item":"Elemental Seed","moves":["Misty Terrain","Moonblast","Moonlight","Calm Mind"],"ability":"Magic Guard","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Life Orb Stealth Rock":{"item":"Life Orb","moves":["Moonblast","Ice Beam","Stealth Rock","Focus Blast"],"ability":"Magic Guard","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
    },
    "Cloyster":{
        "Sash Smash":{"item":"Focus Sash","moves":["Shell Smash","Icicle Spear","Liquidation","Explosion"],"ability":"Skill Link","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Special Shell Smash":{"item":"White Herb","moves":["Shell Smash","Spikes","Hydro Pump","Ice Beam"],"ability":"Overcoat","nature":"Timid","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Physical Shell Smash":{"item":"White Herb","moves":["Shell Smash","Icicle Spear","Rock Blast","Explosion"],"ability":"Skill Link","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Ice Shard","Explosion","Poison Jab","Smart Strike"],"ability":"Overcoat","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Physical Wall":{"item":"Leftovers","moves":["Clamp","Toxic","Protect","Barrier"],"ability":"Shell Armor","nature":"Impish","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
		"Assault Vest":{"item":"Assault Vest","moves":["Liquidation","Icicle Crash","Rock Blast","Explosion"],"ability":"Skill Link","nature":"Impish","ev":{"hp": 170,"at": 170,"df": 0,"sa": 0,"sd": 170,"sp": 0}},
    },
    "Cobalion":{
        "Calm Mind Setup Sweeper":{"item":"Leftovers","moves":["Calm Mind","Flash Cannon","Focus Blast","Hidden Power Water"],"ability":"Justified","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Assault Vest":{"item":"Assault Vest","moves":["Close Combat","Iron Head","Zen Headbutt","Volt Switch"],"ability":"Justified","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Swords Dance Setup Sweeper":{"item":"Life Orb","moves":["Stone Edge","Iron Head","Sacred Sword","Swords Dance"],"ability":"Justified","nature":"Adamant","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Choice Band":{"item":"Choice Band","moves":["Poison Jab","Iron Head","Sacred Sword","Zen Headbutt"],"ability":"Justified","nature":"Jolly","ev":{"hp": 0,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 255}},
		"Rest Talk Physical Wall":{"item":"Leftovers","moves":["Calm Mind","Rest","Sleep Talk","Flash Cannon"],"ability":"Justified","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Cofagrigus":{
        "Trick Room Sweeper":{"item":"Life Orb","moves":["Trick Room","Shadow Ball","Nasty Plot","Hidden Power Fighting"],"ability":"Mummy","nature":"Quiet","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Physical Wall":{"item":"Leftovers","moves":["Will-O-Wisp","Hex","Pain Split","Haze"],"ability":"Mummy","nature":"Bold","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Comfey":{
        "Setup Sweeper":{"item":"Life Orb","moves":["Draining Kiss","Giga Drain","Calm Mind","Hidden Power Psychic"],"ability":"Triage","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Physical Wall":{"item":"Leftovers","moves":["Draining Kiss","Toxic","Synthesis","Hidden Power Psychic"],"ability":"Triage","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 255,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Conkeldurr":{
        "Guts Attacker":{"item":"Flame Orb","moves":["Drain Punch","Mach Punch","Earthquake","Knock Off"],"ability":"Guts","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Sheer Force Choice Band":{"item":"Choice Band","moves":["Hammer Arm","Mach Punch","Ice Punch","Fire Punch"],"ability":"Sheer Force","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Iron Fist Choice Band":{"item":"Choice Band","moves":["Brick Break","Poison Jab","Ice Punch","Fire Punch"],"ability":"Iron Fist","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
    },
    "Corsola":{
        "Head Smash":{"item":"Focus Sash","moves":["Head Smash"],"ability":"Hustle","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Choice Band":{"item":"Choice Band","moves":["Head Smash","Liquidation","Earthquake","Nature Power"],"ability":"Hustle","nature":"Adamant","ev":{"hp": 255,"at": 255,"df": 0,"sa": 0,"sd": 0,"sp": 0}},
		"Mirror Coat":{"item":"Rindo Berry","moves":["Mirror Coat","Psychic","Surf","Nature Power"],"ability":"Hustle","nature":"Modest","ev":{"hp": 255,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 0}},
		"Special Attacker":{"item":"Life Orb","moves":["Ice Beam","Scald","Earth Power","Power Gem"],"ability":"Regenerator","nature":"Modest","ev":{"hp": 0,"at": 0,"df": 0,"sa": 255,"sd": 0,"sp": 255}},
		"Special Wall":{"item":"Leftovers","moves":["Aqua Ring","Recover","Toxic","Surf"],"ability":"Regenerator","nature":"Calm","ev":{"hp": 255,"at": 0,"df": 0,"sa": 0,"sd": 255,"sp": 0}},
    },
    "Crabominable":{
        
    }
};

updateSets(randoms);

