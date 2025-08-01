function updateSets(newSets) {
	for (var pokemon in newSets) {
		for (var moveset in newSets[pokemon]) {
			if (!SETDEX_SV[pokemon]) SETDEX_SV[pokemon] = {};
			SETDEX_SV[pokemon][moveset] = newSets[pokemon][moveset];
		}
	}
};

var SETDEX_SV = {
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

var themeTeams = {		
	"Abomasnow-Mega":{	
		"Florinia Alpine Rose (Mount) Doub":{"level":100,"item":"Abomasite","moves":["Blizzard","Rock Slide","Earthquake","Ice Shard"],"ability":"Snow Warning","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":511},
		"Serra Noitcelfer (Inverse, Soundproof)":{"level":100,"item":"Abomasite","moves":["Blizzard","Rock Slide","Earthquake","Focus Blast"],"ability":"Snow Warning","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":573},
		"Blake Nice Stall Bro (Inverse)":{"level":100,"item":"Abomasite","moves":["Wood Hammer","Leech Seed","Toxic","Protect"],"ability":"Snow Warning","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 4,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":1078},
		
	},	
	"Absol-Mega":{	
		"Luna Goth Lolita (Fairy Tale, Pres)":{"level":100,"item":"Absolite","moves":["Night Slash","Slash","Superpower","Play Rough"],"ability":"Magic Bounce","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":647},
		
	},	
	"Accelgor":{	
		"Shelly Miscoimmunication (Inverse)":{"level":100,"item":"Choice Specs","moves":["Bug Buzz","Energy Ball","Sludge Bomb","Water Shuriken"],"ability":"Hydration","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":540},
		
	},	
	"Aegislash-Blade":{	
		"Boss Rush Shade (Dark Crys Cav)":{"level":100,"item":"Leftovers","moves":["Shadow Claw","Iron Head","King's Shield","Swords Dance"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":277},
		"Boss Rush Titania (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["King's Shield","Shadow Sneak","Swords Dance","Sacred Sword"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 0,"sa": 0,"sd": 252,"sp": 0},"index":340},
		"Boss Rush 2 Shade (Dark Crys Cav)":{"level":100,"item":"Leftovers","moves":["Shadow Claw","Iron Head","King's Shield","Swords Dance"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":385},
		"Boss Rush 2 Titania (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["King's Shield","Shadow Sneak","Swords Dance","Sacred Sword"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 0,"sa": 0,"sd": 252,"sp": 0},"index":447},
		"Shade Hexes & Heroism (Starlight)":{"level":100,"item":"Weakness Policy","moves":["King's Shield","Sacred Sword","Shadow Sneak","Swords Dance"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":557},
		"Titania Legless Sea (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["King's Shield","Iron Head","Sacred Sword","Swords Dance"],"ability":"Stance Change","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":774},
		"Titania Witch's Hut (Swamp)":{"level":100,"item":"Telluric Seed","moves":["King's Shield","Shadow Sneak","Swords Dance","Sacred Sword"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":793},
		"Arclight Sole Sight (Dark Crys Cav)":{"level":100,"item":"Magical Seed","moves":["King's Shield","Shadow Sneak","Swords Dance","Sacred Sword"],"ability":"Stance Change","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":958},
		"Taka Legacy (Dragon's Den) Doub":{"level":100,"item":"Leftovers","moves":["Swords Dance","King's Shield","Shadow Sneak","Sacred Sword"],"ability":"Stance Change","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1067},
		
	},	
	"Aerodactyl":{	
		"Boss Rush 2 Hardy (Rocky) Doubles":{"level":100,"item":"Life Orb","moves":["Rock Slide","Aqua Tail","Crunch","Iron Head"],"ability":"Pressure","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":459},
		"Heather In Memoriam (New World) Doub":{"level":100,"item":"Focus Sash","moves":["Hone Claws","Crunch","Stone Edge","Aerial Ace"],"ability":"Rock Head","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":889},
		"Taka Topside View (Mountain) Doub":{"level":100,"item":"Focus Sash","moves":["Tailwind","Stone Edge","Aerial Ace","Earthquake"],"ability":"Pressure","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1058},
		"Lin stop flinching (Rainbow) Doub":{"level":100,"item":"Choice Band","moves":["Rock Slide","Crunch","Iron Head","Rock Slide"],"ability":"Rock Head","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1203},
		
	},	
	"Aerodactyl-Mega":{	
		"Boss Rush Hardy (Rocky, Press) Doub":{"level":100,"item":"Aerodactylite","moves":["Rock Slide","Aqua Tail","Crunch","Iron Head"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":351},
		"Hardy The Ocean (WtrSurf, Unnrv)":{"level":100,"item":"Aerodactylite","moves":["Stone Edge","Roost","Aqua Tail","Thunder Fang"],"ability":"Tough Claws","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":819},
		"Hardy Rocky Mount Way (Mount) 2x":{"level":100,"item":"Aerodactylite","moves":["Rock Slide","Earthquake","Tailwind","Aqua Tail"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":825},
		"Taka Light My Fire (Burn, Pres) 2x":{"level":100,"item":"Aerodactylite","moves":["Smack Down","Fire Fang","Aerial Ace","Roost"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1053},
		
	},	
	"Alakazam":{	
		"Boss Rush Radomus (Starlight)":{"level":100,"item":"Choice Specs","moves":["Psyshock","Dazzling Gleam","Signal Beam","Energy Ball"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":299},
		"Ace Eyes of Fire (Burning)":{"level":100,"item":"Life Orb","moves":["Psychic","Focus Blast","Shadow Ball","Hidden Power Fire"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1170},
		"Ace Fashion Forward (Chess: P) Doub":{"level":100,"item":"Life Orb","moves":["Calm Mind","Psychic","Shadow Ball","Dazzling Gleam"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1184},
		
	},	
	"Alakazam-Mega":{	
		"Radomus Telepathy Time (Psych, MGrd)":{"level":100,"item":"Alakazite","moves":["Psychic","Focus Blast","Recover","Calm Mind"],"ability":"Trace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":613},
		
	},	
	"Altaria-Mega":{	
		"Boss Rush Saphira (Dragon's Den)":{"level":100,"item":"Altarianite","moves":["Dragon Dance","Return","Roost","Play Rough"],"ability":"Pixilate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":358},
		"Adrienn Happy End (Fairy Tale)":{"level":100,"item":"Altarianite","moves":["Moonblast","Dragon Pulse","Flamethrower","Roost"],"ability":"Pixilate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":748},
		"Saphira Wyrm (Fairy Tale)":{"level":100,"item":"Altarianite","moves":["Moonblast","Dragon Pulse","Roost","Ice Beam"],"ability":"Pixilate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":855},
		"Cain Sing For Me! (Big Top)":{"level":100,"item":"Altarianite","moves":["Sing","Dragon Dance","Earthquake","Play Rough"],"ability":"Pixilate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":983},
		"Ace Family (Holy)":{"level":100,"item":"Altarianite","moves":["Dragon Claw","Return","Cotton Guard","Flamethrower"],"ability":"Pixilate","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":1194},
		
	},	
	"Ambipom":{	
		"Fern Come on and Smile! (Forest)":{"level":100,"item":"Normal Gem","moves":["Fake Out","Hidden Power Grass","Acrobatics","Power-Up Punch"],"ability":"Technician","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 200,"df": 0,"sa": 56,"sd": 0,"sp": 0},"index":1008},
		
	},	
	"Ampharos-Mega":{	
		"Boss Rush Julia (Electric, Static)":{"level":100,"item":"Ampharosite","moves":["Volt Switch","Dragon Pulse","Power Gem","Thunder"],"ability":"Mold Breaker","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":256},
		"Arclight The Conductor (WtrSurf, Stat)":{"level":100,"item":"Ampharosite","moves":["Dragon Pulse","Thunderbolt","Zap Cannon","Hidden Power Water"],"ability":"Mold Breaker","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":967},
		
	},	
	"Araquanid":{	
		"Shelly Buggie Paddle (Water Surf)":{"level":100,"item":"Splash Plate","moves":["Liquidation","Leech Life","Toxic","Rest"],"ability":"Water Bubble","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":532},
		"Shelly Easy CompSci (Glitch)":{"level":100,"item":"Assault Vest","moves":["Scald","Blizzard","Giga Drain","Hidden Power Psychic"],"ability":"Water Bubble","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":544},
		
	},	
	"Arceus":{	
		"Lin puppies! (Holy)":{"level":100,"item":"Leftovers","moves":["Swords Dance","Extreme Speed","Recover","Dragon Claw"],"ability":"Multitype","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1201},
		"Lin old habits (New World)":{"level":100,"item":"Leftovers","moves":["Judgment","Psystrike","Dark Pulse","Spacial Rend"],"ability":"Multitype","nature":"Serious","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1213},
		
	},	
	"Arceus-Dragon":{	
		"Lin stop flinching (Rainbow) Doub":{"level":100,"item":"Draco Plate","moves":["Twister","Blizzard","Tailwind","Secret Power"],"ability":"Multitype","nature":"Serious","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1207},
		
	},	
	"Archeops":{	
		"Hardy The Ocean (Water Surf)":{"level":100,"item":"Flying Gem","moves":["Aqua Tail","Stone Edge","U-turn","Acrobatics"],"ability":"Defeatist","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":823},
		
	},	
	"Armaldo":{	
		"Shelly Buggie Paddle (Water Surf)":{"level":100,"item":"Elemental Seed","moves":["Knock Off","Liquidation","Stone Edge","Rapid Spin"],"ability":"Swift Swim","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":531},
		"Hardy The Ocean (Water Surf)":{"level":100,"item":"Leftovers","moves":["Stealth Rock","Stone Edge","Aqua Jet","X-Scissor"],"ability":"Swift Swim","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":818},
		
	},	
	"Articuno":{	
		"Boss Rush 2 Serra (Inverse) Doubles":{"level":100,"item":"Light Clay","moves":["Hurricane","Blizzard","Aurora Veil","Signal Beam"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":393},
		"Serra Noitcelfer (Inverse)":{"level":100,"item":"Leftovers","moves":["Air Cutter","Blizzard","Ice Shard","Roost"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":577},
		"Serra Digital Imaging (Glitch)":{"level":100,"item":"Assault Vest","moves":["Freeze-Dry","Blizzard","Extrasensory","Bubble Beam"],"ability":"Pressure","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":579},
		"Heather Polar Princess (Snow Mount)":{"level":100,"item":"Telluric Seed","moves":["Gust","Icy Wind","Ominous Wind","Twister"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":867},
		"Zero Zero Gravity (New World)":{"level":100,"item":"Light Clay","moves":["Tailwind","Reflect","Ice Beam","Ancient Power"],"ability":"Pressure","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1151},
		
	},	
	"Audino-Mega":{	
		"Noel Illustrated (Rainbow)":{"level":100,"item":"Audinite","moves":["Wish","Protect","Toxic","Hyper Voice"],"ability":"Healer","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":606},
		
	},	
	"Aurorus":{	
		"Serra Noitcelfer (Inverse)":{"level":100,"item":"Amplifield Rock","moves":["Nature Power","Hyper Voice","Discharge","Rock Slide"],"ability":"Refrigerate","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":572},
		"Hardy Rocky Mount Way (Mount) Doub":{"level":100,"item":"Assault Vest","moves":["Icy Wind","Thunder","Dark Pulse","Earth Power"],"ability":"Refrigerate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":827},
		"Hardy Lucy in the Sky (Crys Cav)":{"level":100,"item":"Magical Seed","moves":["Nature Power","Aurora Beam","Earth Power","Flash Cannon"],"ability":"Refrigerate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":832},
		"Anna Millennial Puzzles (Chess: B)":{"level":100,"item":"Synthetic Seed","moves":["Ancient Power","Return","Psychic","Discharge"],"ability":"Refrigerate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":940},
		"Blake Nice Stall Bro (Inverse)":{"level":100,"item":"Icy Rock","moves":["Blizzard","Stealth Rock","Dragon Tail","Rock Slide"],"ability":"Snow Warning","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1076},
		
	},	
	"Avalugg":{	
		"Serra Noitcelfer (Inverse)":{"level":100,"item":"Iapapa Berry","moves":["Iron Head","Rock Slide","Recover","Ice Ball"],"ability":"Ice Body","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":574},
		"Blake Nice Stall Bro (Inverse)":{"level":100,"item":"Magical Seed","moves":["Recover","Avalanche","Toxic","Protect"],"ability":"Ice Body","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":1079},
		
	},	
	"Beartic":{	
		"Boss Rush Serra (Icy)":{"level":100,"item":"Life Orb","moves":["Icicle Crash","Aqua Jet","Play Rough","Swords Dance"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":288},
		"Lumi Ametrine Blues (Water Surf)":{"level":100,"item":"Life Orb","moves":["Icicle Crash","Play Rough","Aqua Jet","Stone Edge"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1134},
		
	},	
	"Beedrill-Mega":{	
		"Shelly Miscoimmunication (Inverse)":{"level":100,"item":"Beedrillite","moves":["Poison Jab","U-turn","Fell Stinger","Toxic Spikes"],"ability":"Adaptability","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":537},
		"Bennett Love of Showmanship (Big Top)":{"level":100,"item":"Beedrillite","moves":["Acrobatics","Fell Stinger","Poison Jab","Drill Run"],"ability":"Adaptability","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1039},
		
	},	
	"Beheeyem":{	
		"Radomus Telepathy Time (Psychic)":{"level":100,"item":"Focus Sash","moves":["Calm Mind","Energy Ball","Psyshock","Dark Pulse"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":610},
		"Radomus Black/Purp (Psychic) Doubles":{"level":100,"item":"Life Orb","moves":["Psychic","Nasty Plot","Dark Pulse","Thunderbolt"],"ability":"Telepathy","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 252,"sp": 0},"index":616},
		
	},	
	"Bellossom":{	
		"Laura Octopetala (Starlight)":{"level":100,"item":"Life Orb","moves":["Dazzling Gleam","Giga Drain","Moonlight","Sludge Bomb"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":902},
		"Cain Pretty Boy (Rainbow)":{"level":100,"item":"Focus Sash","moves":["Hidden Power Rock","Quiver Dance","Giga Drain","Strength Sap"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 128,"sd": 128,"sp": 252},"index":977},
		
	},	
	"Bewear":{	
		"Noel Abnormal (Inverse)":{"level":100,"item":"Choice Band","moves":["Double-Edge","Hammer Arm","Thunder Punch","Iron Head"],"ability":"Fluffy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":587},
		
	},	
	"Bisharp":{	
		"Boss Rush Luna (New World)":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Sucker Punch","Iron Head","Brick Break"],"ability":"Defiant","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":302},
		"Luna Goth Lolita (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Swords Dance","Sucker Punch","Iron Head","Knock Off"],"ability":"Defiant","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":648},
		"Titania Witch's Hut (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Sucker Punch","Iron Head","Stone Edge","Throat Chop"],"ability":"Defiant","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":791},
		"Anna Millennial Puzzles (Chess: K)":{"level":100,"item":"Black Glasses","moves":["Swords Dance","Knock Off","Iron Head","Sucker Punch"],"ability":"Defiant","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":941},
		"Fern Contrarian (Swamp)":{"level":100,"item":"Assault Vest","moves":["Knock Off","Iron Head","Sucker Punch","X-Scissor"],"ability":"Defiant","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":997},
		"Ace Fashion Forward (Chess: P) Doub":{"level":100,"item":"Black Glasses","moves":["Swords Dance","Sucker Punch","Iron Head","Poison Jab"],"ability":"Defiant","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1185},
		
	},	
	"Blacephalon":{	
		"Shade Midnight Meadow (Grassy)":{"level":100,"item":"Choice Specs","moves":["Shadow Ball","Fire Blast","Psychic","Hidden Power Grass"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":553},
		"Eve Ultra-Precise Analysis (Glitch)":{"level":100,"item":"Choice Scarf","moves":["Fire Blast","Shadow Ball","Psychic","Hidden Power Grass"],"ability":"Beast Boost","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1112},
		"Eve Intermediation (Chess: B)":{"level":100,"item":"Synthetic Seed","moves":["Heat Wave","Stored Power","Hidden Power Grass","Shadow Ball"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 104,"at": 0,"df": 252,"sa": 0,"sd": 0,"sp": 152},"index":1121},
		
	},	
	"Blastoise":{	
		"Amaria Contrary Impulses (Glitch)":{"level":100,"item":"Assault Vest","moves":["Hydro Cannon","Blizzard","Aqua Jet","Zen Headbutt"],"ability":"Torrent","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":796},
		
	},	
	"Blastoise-Mega":{	
		"Amaria Inward Thought (Ash Beach)":{"level":100,"item":"Blastoisinite","moves":["Aura Sphere","Dark Pulse","Surf","Hidden Power Ground"],"ability":"Mega Launcher","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":809},
		
	},	
	"Blaziken":{	
		"Boss Rush Charlotte (Burning) Doubles":{"level":100,"item":"Elemental Seed","moves":["Acrobatics","Heat Wave","Rock Slide","High Jump Kick"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":317},
		"Boss Rush 2 Charlotte (SHeat) Doubles":{"level":100,"item":"Elemental Seed","moves":["Acrobatics","Heat Wave","Rock Slide","High Jump Kick"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":425},
		"Charlotte Fried Circuits (Glitch)":{"level":100,"item":"Life Orb","moves":["Blast Burn","High Jump Kick","Stone Edge","Poison Jab"],"ability":"Speed Boost","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":663},
		"Cal Across Coals (Ashen Beach)":{"level":100,"item":"Telluric Seed","moves":["Focus Blast","Vacuum Wave","Fire Blast","Hidden Power Ghost"],"ability":"Speed Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1091},
		"Lumi Teamwork! (Inverse)":{"level":100,"item":"Life Orb","moves":["Protect","Bulk Up","Baton Pass","High Jump Kick"],"ability":"Blaze","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1128},
		
	},	
	"Blaziken-Mega":{	
		"Boss Rush Samson (Big Top, Blaze)":{"level":100,"item":"Blazikenite","moves":["Blaze Kick","Knock Off","High Jump Kick","Swords Dance"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":311},
		
	},	
	"Blissey":{	
		"Noel Illustrated (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Tri Attack","Toxic","Soft-Boiled","Stealth Rock"],"ability":"Natural Cure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 4,"sd": 252,"sp": 0},"index":605},
		
	},	
	"Breloom":{	
		"Boss Rush Florinia (Forest)":{"level":100,"item":"Life Orb","moves":["Cut","Mach Punch","Swords Dance","Spore"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":262},
		"Boss Rush Samson (Big Top)":{"level":100,"item":"Life Orb","moves":["Mach Punch","Spore","Swords Dance","Bullet Seed"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":308},
		"Florinia Science Show (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Mach Punch","Spore","Swords Dance","Bullet Seed"],"ability":"Technician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":520},
		"Samson Grow Strong (Forest)":{"level":100,"item":"Telluric Seed","moves":["Mach Punch","Spore","Swords Dance","Cut"],"ability":"Effect Spore","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":659},
		"Heather Purple Pois (Corrosive)":{"level":100,"item":"Leftovers","moves":["Spore","Substitute","Leech Seed","Focus Punch"],"ability":"Poison Heal","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":876},
		"Eve Technical Expertise (Factory)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Mach Punch","Spore","Seed Bomb"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1111},
		
	},	
	"Bronzong":{	
		"Radomus Black/Purp (Psychic) Doubles":{"level":100,"item":"Wiki Berry","moves":["Stealth Rock","Gyro Ball","Rock Slide","Trick Room"],"ability":"Levitate","nature":"Relaxed","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":615},
		"Titania Psychic Spindle (Psychic)":{"level":100,"item":"Leftovers","moves":["Gyro Ball","Zen Headbutt","Toxic","Protect"],"ability":"Levitate","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":783},
		"Ace Fashion Forward (Chess: R) Doub":{"level":100,"item":"Leftovers","moves":["Gyro Ball","Zen Headbutt","Rock Slide","Reflect"],"ability":"Levitate","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 100,"sa": 0,"sd": 156,"sp": 0},"index":1186},
		
	},	
	"Buzzwole":{	
		"Bennett Love of Showmanship (Big Top)":{"level":100,"item":"Coba Berry","moves":["Lunge","Roost","Earthquake","Power-Up Punch"],"ability":"Beast Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":1036},
		
	},	
	"Camerupt":{	
		"Charlotte Like Mom/Pop (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Lava Plume","Earth Power","Nature Power","Stealth Rock"],"ability":"Magma Armor","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 128,"sa": 252,"sd": 128,"sp": 0},"index":674},
		
	},	
	"Camerupt-Mega":{	
		"Cal Boiling Blood (Drag Den, MagArm)":{"level":100,"item":"Cameruptite","moves":["Heat Wave","Eruption","Rock Slide","Solar Beam"],"ability":"Sheer Force","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1097},
		
	},	
	"Celebi":{	
		"Boss Rush 2 Florinia (Forest)":{"level":100,"item":"Grassium Z","moves":["Nasty Plot","Psychic","Giga Drain","Dazzling Gleam"],"ability":"Natural Cure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":373},
		"Radomus Celestial Wisdom (Ashen Beach)":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Psychic","U-turn","Hidden Power Rock"],"ability":"Natural Cure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":626},
		"Elias Natural Consequences (Holy)":{"level":100,"item":"Mind Plate","moves":["Nature Power","U-turn","Magical Leaf","Recover"],"ability":"Natural Cure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":917},
		
	},	
	"Celesteela":{	
		"Julia KABOOM! (Glitch)":{"level":100,"moves":["Explosion"],"ability":"Beast Boost","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":490},
		"Ciel Above Rabble (Murkwater)":{"level":100,"item":"Leftovers","moves":["Leech Seed","Protect","Flash Cannon","Air Slash"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":708},
		"Titania Legless Sea (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Leech Seed","Protect","Air Slash","Giga Drain"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":772},
		"Titania Witch's Hut (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Leech Seed","Flamethrower","Heavy Slam","Protect"],"ability":"Beast Boost","nature":"Serious","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":792},
		
	},	
	"Chandelure":{	
		"Boss Rush Shade (Dark Crystal Cavern)":{"level":100,"item":"Choice Specs","moves":["Shadow Ball","Fire Blast","Energy Ball","Trick"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":274},
		"Boss Rush Charlotte (Burning) Doubles":{"level":100,"item":"Elemental Seed","moves":["Solar Beam","Heat Wave","Shadow Ball","Psychic"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":316},
		"Shade Midnight Meadow (Grassy)":{"level":100,"item":"Choice Scarf","moves":["Energy Ball","Flamethrower","Psychic","Shadow Ball"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":552},
		"Charlotte Fire Hazard (Grassy)":{"level":100,"item":"Choice Scarf","moves":["Flamethrower","Solar Beam","Psychic","Shadow Ball"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":671},
		"Bennett A Game of Intellect (Chess: B)":{"level":100,"item":"Synthetic Seed","moves":["Calm Mind","Psychic","Heat Wave","Shadow Ball"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1030},
		
	},	
	"Chansey":{	
		"Boss Rush Noel (Holy)":{"level":100,"item":"Eviolite","moves":["Toxic","Soft-Boiled","Seismic Toss","Aromatherapy"],"ability":"Natural Cure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":292},
		"Boss Rush 2 Noel (Holy)":{"level":100,"item":"Eviolite","moves":["Toxic","Soft-Boiled","Seismic Toss","Aromatherapy"],"ability":"Natural Cure","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":399},
		
	},	
	"Charizard-Mega-X":{	
		"Charlotte Like Mom/Pop (Drag Den)":{"level":100,"item":"Charizardite X","moves":["Dragon Dance","Flare Blitz","Roost","Outrage"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":678},
		
	},	
	"Charizard-Mega-Y":{	
		"Boss Rush Charlotte (Burning) Doub":{"level":100,"item":"Charizardite Y","moves":["Solar Beam","Heat Wave","Roost","Air Slash"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":318},
		"Charlotte Fried Circuits (Glitch)":{"level":100,"item":"Charizardite Y","moves":["Solar Beam","Blast Burn","Roost","Thunder Punch"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":662},
		"Charlotte Fire Hazard (Grassy)":{"level":100,"item":"Charizardite Y","moves":["Flamethrower","Solar Beam","Air Slash","Roost"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":670},
		"Ciel Beauty, Brutality (DDem) Dub":{"level":100,"item":"Charizardite Y","moves":["Heat Wave","Solar Beam","Roost","Dragon Pulse"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":716},
		"Taka Topside View (Mount, SolP) 2x":{"level":100,"item":"Charizardite Y","moves":["Air Slash","Twister","Flamethrower","Ancient Power"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1063},
		
	},	
	"Chatot":{	
		"Taka Legacy (Dragon's Den) Doub":{"level":100,"item":"Elemental Seed","moves":["Hurricane","Boomburst","Heat Wave","Nasty Plot"],"ability":"Keen Eye","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1069},
		"Ace Family (Holy)":{"level":100,"item":"Magical Seed","moves":["Boomburst","Heat Wave","Chatter","Hidden Power Fighting"],"ability":"Tangled Feet","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1195},
		
	},	
	"Chesnaught":{	
		"Florinia Standard (Grassy)":{"level":100,"item":"Leftovers","moves":["Spikes","Drain Punch","Frenzy Plant","Rock Slide"],"ability":"Overgrow","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 252,"sp": 4},"index":500},
		"Florinia Science Show (Big Top)":{"level":100,"item":"Sitrus Berry","moves":["Belly Drum","Drain Punch","Wood Hammer","Nature Power"],"ability":"Bulletproof","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":523},
		"Samson Grow Strong (Forest)":{"level":100,"item":"Telluric Seed","moves":["Spikes","Cut","Drain Punch","Earthquake"],"ability":"Overgrow","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":656},
		
	},	
	"Cinccino":{	
		"Noel Abnormal (Inverse)":{"level":100,"item":"Choice Scarf","moves":["Tail Slap","Bullet Seed","Rock Blast","Knock Off"],"ability":"Skill Link","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":584},
		"Noel Defaulted (Glitch)":{"level":100,"item":"Choice Scarf","moves":["Tail Slap","Giga Impact","Rock Blast","Knock Off"],"ability":"Skill Link","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":592},
		"Cain Sing For Me! (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Sing","Wake-Up Slap","Tail Slap","Rock Blast"],"ability":"Skill Link","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":980},
		"Eve Technical Expertise (Factory)":{"level":100,"item":"Life Orb","moves":["Tail Slap","U-turn","Seed Bomb","Wake-Up Slap"],"ability":"Technician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1107},
		"Lin stop flinching (Rainbow) Doub":{"level":100,"item":"King's Rock","moves":["Tail Slap","Rock Blast","Bullet Seed","Gunk Shot"],"ability":"Skill Link","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1205},
		
	},	
	"Clefable":{	
		"Boss Rush Adrienn (Misty)":{"level":100,"item":"Leftovers","moves":["Moonblast","Wish","Protect","Calm Mind"],"ability":"Unaware","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":333},
		"Boss Rush 2 Noel (Holy)":{"level":100,"item":"Leftovers","moves":["Moonblast","Protect","Wish","Aromatherapy"],"ability":"Unaware","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":403},
		"Adrienn Miraculous (Holy)":{"level":100,"item":"Magical Seed","moves":["Moonblast","Moonlight","Hyper Voice","Wish"],"ability":"Unaware","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 4,"sp": 0},"index":761},
		"Cain Sing For Me! (Big Top)":{"level":100,"item":"Leftovers","moves":["Sing","Calm Mind","Dazzling Gleam","Stored Power"],"ability":"Magic Guard","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":982},
		
	},	
	"Cloyster":{	
		"Serra Digital Imaging (Glitch)":{"level":100,"item":"Wiki Berry","moves":["Shell Smash","Icicle Spear","Poison Jab","Rock Blast"],"ability":"Skill Link","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":582},
		"Lumi Ametrine Blues (Water Surf)":{"level":100,"item":"Focus Sash","moves":["Shell Smash","Icicle Crash","Liquidation","Rock Blast"],"ability":"Skill Link","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1130},
		
	},	
	"Cobalion":{	
		"Victoria Fallacy of Justice (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Sacred Sword","Close Combat","Stone Edge"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1011},
		
	},	
	"Comfey":{	
		"Laura Wisteria (Flower Gard) Doub":{"level":100,"item":"Synthetic Seed","moves":["Draining Kiss","Giga Drain","Hidden Power Ground","Growth"],"ability":"Flower Veil","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":892},
		
	},	
	"Crabominable":{	
		"Serra Noitcelfer (Inverse)":{"level":100,"item":"Life Orb","moves":["Ice Hammer","Close Combat","Rock Slide","Crabhammer"],"ability":"Iron Fist","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":575},
		"Victoria Black and White (Chess: K)":{"level":100,"item":"King's Rock","moves":["Ice Hammer","Close Combat","Power-Up Punch","Earthquake"],"ability":"Hyper Cutter","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":1020},
		
	},	
	"Cradily":{	
		"Florinia Alpine Rose (Mountain) Doubles":{"level":100,"item":"Leftovers","moves":["Earthquake","Rock Slide","Protect","Toxic"],"ability":"Suction Cups","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":509},
		"Taka Topside View (Mountain) Doub":{"level":100,"item":"Leftovers","moves":["Rock Slide","Seed Bomb","Synthesis","Curse"],"ability":"Storm Drain","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 56,"sa": 0,"sd": 200,"sp": 0},"index":1062},
		
	},	
	"Crawdaunt":{	
		"Luna Mermaid Depths (Water Surf)":{"level":100,"item":"Life Orb","moves":["Crabhammer","Knock Off","Swords Dance","Aqua Jet"],"ability":"Adaptability","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":638},
		
	},	
	"Cresselia":{	
		"Radomus Stockfish Error (Glitch)":{"level":100,"item":"Leftovers","moves":["Psyshock","Calm Mind","Toxic","Moonlight"],"ability":"Levitate","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":623},
		"Laura Octopetala (Starlight)":{"level":100,"item":"Leftovers","moves":["Lunar Dance","Moonblast","Psyshock","Aurora Beam"],"ability":"Levitate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":905},
		"Anna Unforseen Futurity (New World)":{"level":100,"item":"Leftovers","moves":["Future Sight","Moonblast","Moonlight","Calm Mind"],"ability":"Levitate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":945},
		
	},	
	"Crobat":{	
		"Aya Acridity (Murkwater)":{"level":100,"item":"Flying Gem","moves":["Acrobatics","Cross Poison","U-turn","Roost"],"ability":"Infiltrator","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":565},
		"Heather Polar Princess (Snow Mount)":{"level":100,"item":"Focus Sash","moves":["Tailwind","Brave Bird","Leech Life","Cross Poison"],"ability":"Inner Focus","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":866},
		"Heather Dance Danger (Drag Den)":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Air Slash","Sludge Bomb","Giga Drain"],"ability":"Infiltrator","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":883},
		"Heather In Memoriam (New World) Doub":{"level":100,"item":"Wacan Berry","moves":["Nasty Plot","Dark Pulse","Air Slash","Sludge Bomb"],"ability":"Infiltrator","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":888},
		
	},	
	"Darkrai":{	
		"Boss Rush Luna (New World)":{"level":100,"item":"Life Orb","moves":["Dark Void","Nasty Plot","Dark Pulse","Sludge Bomb"],"ability":"Bad Dreams","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":304},
		"Boss Rush 2 Luna (New World)":{"level":100,"item":"Life Orb","moves":["Dark Void","Nasty Plot","Dark Pulse","Sludge Bomb"],"ability":"Bad Dreams","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":412},
		"Anna Seeing Stars (Starlight) Doub":{"level":100,"item":"Darkinium Z","moves":["Swift","Dark Pulse","Nasty Plot","Dark Void"],"ability":"Bad Dreams","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":937},
		
	},	
	"Darmanitan-Zen":{	
		"Cal Across Coals (Ashen Beach)":{"level":100,"item":"Choice Specs","moves":["Psychic","Fire Blast","Focus Blast","Hidden Power Dark"],"ability":"Zen Mode","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1090},
		
	},	
	"Decidueye":{	
		"Boss Rush Florinia (Forest)":{"level":100,"item":"Decidium Z","moves":["Swords Dance","Spirit Shackle","Leaf Blade","Shadow Sneak"],"ability":"Overgrow","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":265},
		"Florinia Standard (Grassy)":{"level":100,"item":"Grassium Z","moves":["Defog","Frenzy Plant","U-turn","Roost"],"ability":"Overgrow","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":504},
		"Florinia Alpine Rose (Mountain) Doubles":{"level":100,"item":"Decidium Z","moves":["Spirit Shackle","Tailwind","Nature Power","Leaf Blade"],"ability":"Long Reach","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":506},
		"Shade Midnight Meadow (Grassy)":{"level":100,"item":"Decidium Z","moves":["Swords Dance","Spirit Shackle","Tailwind","Leaf Blade"],"ability":"Long Reach","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":548},
		"Heather In Memoriam (New World) Doub":{"level":100,"item":"Darkinium Z","moves":["Leaf Blade","Sucker Punch","Brave Bird","Spirit Shackle"],"ability":"Long Reach","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":886},
		
	},	
	"Delcatty":{	
		"Lumi Teamwork! (Inverse)":{"level":100,"item":"Magical Seed","moves":["Cosmic Power","Baton Pass","Wish","Return"],"ability":"Normalize","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":1127},
		
	},	
	"Delphox":{	
		"Boss Rush Radomus (Starlight)":{"level":100,"item":"Leftovers","moves":["Wish","Protect","Toxic","Mystical Fire"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":300},
		"Charlotte Fried Circuits (Glitch)":{"level":100,"item":"Choice Scarf","moves":["Blast Burn","Psychic","Solar Beam","Thunder Punch"],"ability":"Blaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":666},
		"Taka Light My Fire (Burning) Doub":{"level":100,"item":"Elemental Seed","moves":["Mystical Fire","Dazzling Gleam","Shadow Ball","Psyshock"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1057},
		"Cal Across Coals (Ashen Beach)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Fire Blast","Psychic","Hidden Power Grass"],"ability":"Blaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1088},
		"Cal Burning Pride (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Mystical Fire","Dazzling Gleam","Psychic","Hidden Power Ice"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1102},
		"Lumi Bedtime Stories (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Mystical Fire","Dazzling Gleam","Shadow Ball","Psyshock"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1137},
		"Ace Myth & Mystery (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Mystical Fire","Psychic","Dazzling Gleam","Shadow Ball"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1161},
		"Ace Eyes of Fire (Burning)":{"level":100,"item":"Elemental Seed","moves":["Mystical Fire","Psychic","Dazzling Gleam","Shadow Ball"],"ability":"Blaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1169},
		"Ace Technological Trickster (Glitch)":{"level":100,"item":"Assault Vest","moves":["Flamethrower","Psyshock","Grass Knot","Thunder Punch"],"ability":"Blaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1183},
		"Ace Fashion Forward (Chess: B) Doub":{"level":100,"item":"Synthetic Seed","moves":["Psychic","Mystical Fire","Calm Mind","Signal Beam"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 44,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 212},"index":1188},
		
	},	
	"Deoxys-Attack":{	
		"Boss Rush 2 Radomus (Starlight)":{"level":100,"item":"Life Orb","moves":["Psycho Boost","Dark Pulse","Extreme Speed","Meteor Mash"],"ability":"Pressure","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":405},
		"Lin stop flinching (Rainbow) Doub":{"level":100,"item":"Choice Band","moves":["Rock Slide","Zen Headbutt","Poison Jab","Ice Punch"],"ability":"Pressure","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1206},
		
	},	
	"Deoxys-Defense":{	
		"Radomus Stockfish Error (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Psycho Boost","Ice Beam","Recover","Toxic"],"ability":"Pressure","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":622},
		
	},	
	"Dhelmise":{	
		"Shade Midnight Meadow (Grassy)":{"level":100,"item":"Iapapa Berry","moves":["Power Whip","Anchor Shot","Rapid Spin","Synthesis"],"ability":"Steelworker","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":549},
		"Arclight Sole Sight (Dark Crystal Cavern)":{"level":100,"item":"Magical Seed","moves":["Power Whip","Anchor Shot","Knock Off","Shadow Claw"],"ability":"Steelworker","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":959},
		
	},	
	"Dialga":{	
		"Boss Rush Titania (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Ancient Power","Dragon Pulse","Flash Cannon","Ice Beam"],"ability":"Pressure","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":339},
		"Boss Rush 2 Titania (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Ancient Power","Dragon Pulse","Flash Cannon","Stealth Rock"],"ability":"Pressure","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":446},
		"Boss Rush 2 Saphira (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Stealth Rock","Dragon Pulse","Thunder","Fire Blast"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":464},
		"Saphira Naga (Psychic)":{"level":100,"item":"Wide Lens","moves":["Stealth Rock","Draco Meteor","Thunder","Blizzard"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":842},
		"Saphira Wyrm (Fairy Tale)":{"level":100,"item":"Wide Lens","moves":["Stealth Rock","Draco Meteor","Thunder","Blizzard"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":854},
		"Saphira King (Holy)":{"level":100,"item":"Wide Lens","moves":["Stealth Rock","Dragon Pulse","Thunder","Blizzard"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":860},
		
	},	
	"Diancie":{	
		"Adrienn Atop Olympus (Mountain) Doubles":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Diamond Storm","Moonblast","Earth Power"],"ability":"Clear Body","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":752},
		
	},	
	"Diancie-Mega":{	
		"Boss Rush 2 Hardy (Rocky, Clr Bod) Dub":{"level":100,"item":"Diancite","moves":["Diamond Storm","Dazzling Gleam","Rock Polish","Earth Power"],"ability":"Magic Bounce","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":461},
		"Julia KABOOM! (Glitch, Clear Body)":{"level":100,"item":"Diancite","moves":["Explosion"],"ability":"Magic Bounce","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":491},
		"Adrienn Machine Dreams (Factory, CBod)":{"level":100,"item":"Diancite","moves":["Nature Power","Diamond Storm","Moonblast","Rock Polish"],"ability":"Magic Bounce","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":744},
		"Adrienn Miraculous (Holy, Clear Body)":{"level":100,"item":"Diancite","moves":["Moonblast","Diamond Storm","Nature Power","Stealth Rock"],"ability":"Magic Bounce","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":758},
		"Hardy Lucy in the Sky (Crys Cav, CBod)":{"level":100,"item":"Diancite","moves":["Diamond Storm","Dazzling Gleam","Stealth Rock","Earth Power"],"ability":"Magic Bounce","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":830},
		"Hardy Bites The Dust (Desert, ClrBd) 2x":{"level":100,"item":"Diancite","moves":["Dazzling Gleam","Diamond Storm","Earth Power","Reflect"],"ability":"Magic Bounce","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":841},
		"Anna Millennial Puzzles (Chess: P, CBod)":{"level":100,"item":"Diancite","moves":["Stealth Rock","Ancient Power","Psychic","Moonblast"],"ability":"Magic Bounce","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":938},
		"Ace Technological Trickster (Glitch, CBod)":{"level":100,"item":"Diancite","moves":["Diamond Storm","Earth Power","Psychic","Nature Power"],"ability":"Magic Bounce","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1181},
		"Ace Fashion Forward (Chess: Q, CBod) Doub":{"level":100,"item":"Diancite","moves":["Ancient Power","Moonblast","Psychic","Calm Mind"],"ability":"Magic Bounce","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1189},
		
	},	
	"Ditto":{	
		"Elias False God (1, Holy)":{"level":100,"item":"Choice Scarf","moves":["Transform"],"ability":"Imposter","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":908},
		"Elias False God (2, Holy)":{"level":100,"item":"Choice Scarf","moves":["Transform"],"ability":"Imposter","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":909},
		"Elias False God (3, Holy)":{"level":100,"item":"Choice Scarf","moves":["Transform"],"ability":"Imposter","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":910},
		"Elias False God (4, Holy)":{"level":100,"item":"Choice Scarf","moves":["Transform"],"ability":"Imposter","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":911},
		"Elias False God (5, Holy)":{"level":100,"item":"Choice Scarf","moves":["Transform"],"ability":"Imposter","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":912},
		
	},	
	"Dodrio":{	
		"Noel Defaulted (Glitch)":{"level":100,"item":"Life Orb","moves":["Brave Bird","Swords Dance","Jump Kick","Giga Impact"],"ability":"Run Away","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":593},
		
	},	
	"Doublade":{	
		"Arclight Sole Sight (Dark Crystal Cavern)":{"level":100,"item":"Eviolite","moves":["Shadow Sneak","Gyro Ball","Swords Dance","Night Slash"],"ability":"No Guard","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":960},
		
	},	
	"Dragalge":{	
		"Boss Rush Aya (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Draco Meteor","Sludge Wave","Toxic Spikes","Surf"],"ability":"Adaptability","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":279},
		"Aya Acridity (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Venoshock","Thunderbolt","Surf","Dragon Tail"],"ability":"Adaptability","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":562},
		"Heather Dance Danger (Drag Den)":{"level":100,"item":"Black Sludge","moves":["Dragon Pulse","Hidden Power Fire","Sludge Wave","Toxic Spikes"],"ability":"Poison Point","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":879},
		
	},	
	"Dragonite":{	
		"Boss Rush Saphira (Dragon's Den)":{"level":100,"item":"Iapapa Berry","moves":["Dragon Dance","Dragon Claw","Fire Punch","Extreme Speed"],"ability":"Multiscale","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 64,"df": 0,"sa": 0,"sd": 0,"sp": 192},"index":361},
		"Ciel Beauty, Brutality (Dragon's Den) Doub":{"level":100,"item":"Iapapa Berry","moves":["Dragon Dance","Earthquake","Extreme Speed","Dragon Claw"],"ability":"Multiscale","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":720},
		"Heather Dance Danger (Drag Den)":{"level":100,"item":"Wiki Berry","moves":["Dragon Dance","Dragon Claw","Fire Punch","Extreme Speed"],"ability":"Multiscale","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":880},
		
	},	
	"Drampa":{	
		"Noel Illustrated (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Dragon Pulse","Hyper Voice","Hidden Power Fighting","Flamethrower"],"ability":"Cloud Nine","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":603},
		"Saphira King (Holy)":{"level":100,"item":"Wiki Berry","moves":["Nature Power","Dragon Pulse","Surf","Flamethrower"],"ability":"Berserk","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":862},
		"Elias Natural Consequences (Holy)":{"level":100,"item":"Wiki Berry","moves":["Nature Power","Dragon Pulse","Surf","Flamethrower"],"ability":"Berserk","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":915},
		"Elias Dabble in Distorting (Inverse)":{"level":100,"item":"Draco Plate","moves":["Hyper Voice","Ice Beam","Dragon Pulse","Thunderbolt"],"ability":"Berserk","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":924},
		"Cal Boiling Blood (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Draco Meteor","Hyper Voice","Focus Blast"],"ability":"Berserk","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1095},
		
	},	
	"Drifblim":{	
		"Heather In Memoriam (New World) Doub":{"level":100,"item":"Sitrus Berry","moves":["Calm Mind","Knock Off","Shadow Ball","Swift"],"ability":"Aftermath","nature":"Serious","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 56,"df": 0,"sa": 200,"sd": 0,"sp": 252},"index":884},
		
	},	
	"Dugtrio-Alola":{	
		"Terra SEEDZ NUTZ (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Earthquake","Iron Head","Sucker Punch","Stone Edge"],"ability":"Sand Force","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":685},
		"Titania Desert Blindness (Desert)":{"level":100,"item":"Life Orb","moves":["Earthquake","Iron Head","Sucker Punch","Rock Slide"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":768},
		
	},	
	"Dusclops":{	
		"Arclight Sole Sight (Dark Crystal Cavern)":{"level":100,"item":"Eviolite","moves":["Calm Mind","Dark Pulse","Shadow Ball","Rest"],"ability":"Pressure","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":961},
		
	},	
	"Dusknoir":{	
		"Arclight Sole Sight (Dark Crystal Cavern)":{"level":100,"item":"Amplifield Rock","moves":["Trick Room","Shadow Sneak","Sucker Punch","Will-O-Wisp"],"ability":"Pressure","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":957},
		
	},	
	"Eelektross":{	
		"Julia Deal With It (Water Surf) Doubles":{"level":100,"item":"Elemental Seed","moves":["Thunder Punch","Outrage","Aqua Tail","Rock Slide"],"ability":"Levitate","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":473},
		
	},	
	"Eevee":{	
		"Zero Reminiscence (Inverse)":{"level":100,"item":"Eevium Z","moves":["Last Resort","Protect","Baton Pass","Return"],"ability":"Adaptability","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":1154},
		
	},	
	"Electivire":{	
		"Julia Work Safety (Factory) Doubles":{"level":100,"item":"Electrium Z","moves":["Thunder Punch","Rock Slide","Hammer Arm","Ice Punch"],"ability":"Motor Drive","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 252,"sa": 0,"sd": 0,"sp": 0},"index":486},
		
	},	
	"Emboar":{	
		"Charlotte Fried Circuits (Glitch)":{"level":100,"item":"Life Orb","moves":["Blast Burn","Scald","Earthquake","Superpower"],"ability":"Blaze","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":664},
		
	},	
	"Empoleon":{	
		"Titania Legless Sea (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Hidden Power Electric","Brine","Ice Beam","Flash Cannon"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":771},
		"Titania Witch's Hut (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Aqua Jet","Surf","Knock Off","Brick Break"],"ability":"Defiant","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":789},
		"Amaria Contrary Impulses (Glitch)":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Hydro Cannon","Blizzard","Hidden Power Fire"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":794},
		"Fern Contrarian (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Aqua Jet","Stealth Rock","Knock Off","Steel Wing"],"ability":"Defiant","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":992},
		
	},	
	"Entei":{	
		"Cal Burning Pride (Rainbow)":{"level":100,"item":"Assault Vest","moves":["Extreme Speed","Sacred Fire","Hidden Power Ground","Solar Beam"],"ability":"Pressure","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 80,"df": 0,"sa": 252,"sd": 0,"sp": 176},"index":1100},
		
	},	
	"Escavalier":{	
		"Bennett A Game of Intellect (Chess: B)":{"level":100,"item":"Assault Vest","moves":["Smart Strike","Megahorn","Poison Jab","Knock Off"],"ability":"Overcoat","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":1029},
		
	},	
	"Espeon":{	
		"Boss Rush Radomus (Starlight)":{"level":100,"item":"Choice Specs","moves":["Shadow Ball","Signal Beam","Dazzling Gleam","Psychic"],"ability":"Magic Bounce","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":296},
		"Eve Intermediation (Chess: K)":{"level":100,"item":"Leftovers","moves":["Stored Power","Shadow Ball","Dazzling Gleam","Morning Sun"],"ability":"Magic Bounce","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 252,"sd": 0,"sp": 0},"index":1122},
		"Zero Reminiscence (Inverse)":{"level":100,"item":"Choice Specs","moves":["Psyshock","Signal Beam","Trick","Dazzling Gleam"],"ability":"Magic Bounce","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1156},
		"Ace Family (Holy)":{"level":100,"item":"Magical Seed","moves":["Psyshock","Hyper Voice","Dazzling Gleam","Morning Sun"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1192},
		
	},	
	"Excadrill":{	
		"Boss Rush Terra (Desert) Doubles":{"level":100,"item":"Life Orb","moves":["Swords Dance","Earthquake","Iron Head","Rapid Spin"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":323},
		"Boss Rush Titania (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Stealth Rock","Earthquake","Smart Strike","Swords Dance"],"ability":"Mold Breaker","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":338},
		"Boss Rush 2 Terra (Desert) Doubles":{"level":100,"item":"Life Orb","moves":["Swords Dance","Earthquake","Iron Head","Rapid Spin"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":430},
		"Terra SEEDZ NUTZ (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Swords Dance","Earthquake","Iron Head","Rapid Spin"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":684},
		"Terra cOARSE rOUGH (Ashen Beach)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Earthquake","Iron Head","Stealth Rock"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":688},
		"Titania Desert Blindness (Desert)":{"level":100,"item":"Life Orb","moves":["Iron Head","Earthquake","Swords Dance","Rock Slide"],"ability":"Sand Rush","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":765},
		
	},	
	"Exploud":{	
		"Arclight Make Some Noise (Big Top)":{"level":100,"item":"Life Orb","moves":["Boomburst","Blizzard","Surf","Fire Blast"],"ability":"Soundproof","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":950},
		
	},	
	"Ferrothorn":{	
		"Boss Rush Florinia (Forest)":{"level":100,"item":"Leftovers","moves":["Spikes","Power Whip","Gyro Ball","Knock Off"],"ability":"Iron Barbs","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":261},
		"Boss Rush 2 Florinia (Forest)":{"level":100,"item":"Leftovers","moves":["Spikes","Power Whip","Gyro Ball","Knock Off"],"ability":"Iron Barbs","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":368},
		"Florinia Alpine Rose (Mountain) Doubles":{"level":100,"item":"Telluric Seed","moves":["Gyro Ball","Stealth Rock","Nature Power","Power Whip"],"ability":"Iron Barbs","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":507},
		"Florinia Wetland Rose (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Gyro Ball","Leech Seed","Stealth Rock","Power Whip"],"ability":"Iron Barbs","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":512},
		"Titania Desert Blindness (Desert)":{"level":100,"item":"Telluric Seed","moves":["Pin Missile","Power Whip","Leech Seed","Protect"],"ability":"Iron Barbs","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":769},
		"Titania Legless Sea (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Leech Seed","Power Whip","Thunder Wave","Knock Off"],"ability":"Iron Barbs","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":773},
		"Titania Psychic Spindle (Psychic)":{"level":100,"item":"Leftovers","moves":["Power Whip","Gyro Ball","Knock Off","Leech Seed"],"ability":"Iron Barbs","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 0},"index":787},
		"Titania Witch's Hut (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Stealth Rock","Leech Seed","Power Whip","Gyro Ball"],"ability":"Iron Barbs","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":788},
		"Fern Hero's Journey (Fairy Tale)":{"level":100,"item":"Leftovers","moves":["Stealth Rock","Power Whip","Gyro Ball","Knock Off"],"ability":"Iron Barbs","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":998},
		
	},	
	"Flareon":{	
		"Cal Boiling Blood (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Superpower","Iron Tail","Hidden Power Dragon"],"ability":"Flash Fire","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1098},
		
	},	
	"Florges":{	
		"Laura Wisteria (Flower Gard) Doub":{"level":100,"item":"Synthetic Seed","moves":["Moonblast","Synthesis","Aromatherapy","Giga Drain"],"ability":"Flower Veil","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":890},
		
	},	
	"Flygon":{	
		"Boss Rush Terra (Desert) Doubles":{"level":100,"item":"Choice Scarf","moves":["Outrage","Earthquake","Heat Wave","Rock Slide"],"ability":"Levitate","nature":"Lonely","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":321},
		
	},	
	"Froslass":{	
		"Shade Hexes & Heroism (Starlight)":{"level":100,"item":"Focus Sash","moves":["Draining Kiss","Spikes","Hex","Thunder Wave"],"ability":"Snow Cloak","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":554},
		
	},	
	"Gallade":{	
		"Victoria Fallacy of Justice (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Night Slash","Psycho Cut","Leaf Blade","Swords Dance"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1012},
		"Victoria A Change of Pace (Big Top)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Drain Punch","Shadow Sneak","Zen Headbutt"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1025},
		
	},	
	"Gallade-Mega":{	
		"Ace Myth & Mystery (Fairy Tale, Stead)":{"level":100,"item":"Galladite","moves":["Night Slash","Psycho Cut","Leaf Blade","Close Combat"],"ability":"Inner Focus","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1164},
		
	},	
	"Galvantula":{	
		"Boss Rush Julia (Electric)":{"level":100,"item":"Life Orb","moves":["Sticky Web","Thunder","Bug Buzz","Volt Switch"],"ability":"Compound Eyes","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":254},
		"Bennett Self-Reflection (Mirror)":{"level":100,"item":"Focus Sash","moves":["Signal Beam","Charge Beam","Thunderbolt","Light Screen"],"ability":"Compound Eyes","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1041},
		
	},	
	"Garchomp":{	
		"Boss Rush Saphira (Dragon's Den)":{"level":100,"item":"Dragonium Z","moves":["Earthquake","Outrage","Poison Jab","Iron Head"],"ability":"Rough Skin","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":357},
		"Terra ENTIRE CIRCUS!! (Big Top)":{"level":100,"item":"Rocky Helmet","moves":["Dual Chop","Swords Dance","Earthquake","Poison Jab"],"ability":"Rough Skin","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":702},
		"Saphira Wyrm (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Earthquake","Dragon Claw","Swords Dance","Iron Head"],"ability":"Sand Veil","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":858},
		"Elias Dabble in Distorting (Inverse)":{"level":100,"item":"Magical Seed","moves":["Stone Edge","Dragon Claw","Aqua Tail","Earthquake"],"ability":"Rough Skin","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":923},
		"Elias Who's GM Now? (Chess: P) Doub":{"level":100,"item":"Groundium Z","moves":["Earthquake","Dragon Claw","Iron Head","Poison Jab"],"ability":"Sand Veil","nature":"Serious","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":927},
		"Taka Legacy (Dragon's Den) Doub":{"level":100,"item":"Choice Band","moves":["Earthquake","Dragon Rush","Fire Fang","Stone Edge"],"ability":"Rough Skin","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1065},
		"Ace Family (Holy)":{"level":100,"item":"Rocky Helmet","moves":["Dragon Claw","Rock Slide","Earthquake","Swords Dance"],"ability":"Rough Skin","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1193},
		
	},	
	"Garchomp-Mega":{	
		"Boss Rush Terra (Desert, SVeil) Doub":{"level":100,"item":"Garchompite","moves":["Earthquake","Rock Slide","Dragon Claw","Iron Head"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":324},
		"Boss Rush 2 Terra (Desert, SVeil) 2x":{"level":100,"item":"Garchompite","moves":["Earthquake","Rock Slide","Dragon Claw","Iron Head"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":431},
		"Terra cOARSE rOUGH (AshBe, SVeil)":{"level":100,"item":"Garchompite","moves":["Earthquake","Rock Slide","Dragon Claw","Iron Head"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":690},
		
	},	
	"Gardevoir":{	
		"Radomus Telepathy Time (Psychic)":{"level":100,"item":"Focus Sash","moves":["Calm Mind","Moonblast","Magical Leaf","Psychic"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":609},
		"Radomus Celestial Wisdom (Ashen Beach)":{"level":100,"item":"Choice Specs","moves":["Moonblast","Psychic","Focus Blast","Hidden Power Ground"],"ability":"Trace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":631},
		"Adrienn Chronomancy (Psychic)":{"level":100,"item":"Leftovers","moves":["Psyshock","Moonblast","Hypnosis","Dream Eater"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":738},
		"Adrienn Miraculous (Holy)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Psychic","Moonblast","Thunderbolt"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":760},
		"Cain Pretty Boy (Rainbow)":{"level":100,"item":"Choice Specs","moves":["Moonblast","Psyshock","Hidden Power Fire","Signal Beam"],"ability":"Synchronize","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":976},
		"Ace Myth & Mystery (Fairy Tale)":{"level":100,"item":"Choice Specs","moves":["Moonblast","Psyshock","Shadow Ball","Magical Leaf"],"ability":"Trace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1163},
		
	},	
	"Gardevoir-Mega":{	
		"Boss Rush 2 Adrienn (FTale, Synch)":{"level":100,"item":"Gardevoirite","moves":["Swift","Psyshock","Shadow Ball","Signal Beam"],"ability":"Pixilate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":443},
		"Laura Octopetala (Star, Synch)":{"level":100,"item":"Gardevoirite","moves":["Calm Mind","Hyper Voice","Psyshock","Signal Beam"],"ability":"Pixilate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":904},
		"Anna Seeing Stars (Star, Synch) 2x":{"level":100,"item":"Gardevoirite","moves":["Swift","Psychic","Hidden Power Dark","Signal Beam"],"ability":"Pixilate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":933},
		"Anna Unforseen Futurity (N World)":{"level":100,"item":"Gardevoirite","moves":["Future Sight","Moonblast","Hidden Power Dark","Psyshock"],"ability":"Pixilate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":947},
		
	},	
	"Gastrodon":{	
		"Terra cOARSE rOUGH (Ashen Beach)":{"level":100,"item":"Leftovers","moves":["Surf","Recover","Hidden Power Fire","Mud Bomb"],"ability":"Sticky Hold","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 128,"at": 0,"df": 0,"sa": 252,"sd": 128,"sp": 0},"index":687},
		"Terra gettin wet ;) (Underwater)":{"level":100,"item":"Leftovers","moves":["Scald","Recover","Toxic","Ice Beam"],"ability":"Storm Drain","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 252,"sp": 0},"index":696},
		
	},	
	"Genesect":{	
		"Boss Rush Shelly (Forest)":{"level":100,"item":"Life Orb","moves":["U-turn","Flash Cannon","Ice Beam","Psychic"],"ability":"Download","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":268},
		"Boss Rush 2 Shelly (Forest)":{"level":100,"item":"Life Orb","moves":["U-turn","Flash Cannon","Ice Beam","Psychic"],"ability":"Download","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":376},
		"Julia KABOOM! (Glitch)":{"level":100,"moves":["Explosion"],"ability":"Download","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":492},
		"Titania Witch's Hut (Swamp)":{"level":100,"item":"Life Orb","moves":["U-turn","Extreme Speed","Gunk Shot","Iron Head"],"ability":"Download","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":790},
		"Bennett Self-Reflection (Mirror)":{"level":100,"item":"Burn Drive","moves":["Flash Cannon","Techno Blast","Signal Beam","Tri Attack"],"ability":"Download","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1043},
		
	},	
	"Gengar":{	
		"Heather Polar Princess (Snow Mount)":{"level":100,"item":"Telluric Seed","moves":["Thunder","Sludge Bomb","Ominous Wind","Icy Wind"],"ability":"Cursed Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":870},
		"Ace Half-Tossed Coin (1, Dark Crys Cav)":{"level":100,"item":"Magical Seed","moves":["Nasty Plot","Shadow Ball","Dark Pulse","Focus Blast"],"ability":"Cursed Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1173},
		"Ace Half-Tossed Coin (2, Dark Crys Cav)":{"level":100,"item":"Magical Seed","moves":["Nasty Plot","Shadow Ball","Dark Pulse","Focus Blast"],"ability":"Cursed Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1175},
		
	},	
	"Gengar-Mega":{	
		"Boss Rush Shade (Dark Crys Cav, Crs Bod)":{"level":100,"item":"Gengarite","moves":["Sludge Wave","Shadow Ball","Dazzling Gleam","Taunt"],"ability":"Shadow Tag","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":273},
		"Boss Rush Aya (Swamp, Cursed Body)":{"level":100,"item":"Gengarite","moves":["Sludge Wave","Shadow Ball","Dazzling Gleam","Taunt"],"ability":"Shadow Tag","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":281},
		"Boss Rush 2 Shade (Dark Crys Cav, CBod)":{"level":100,"item":"Gengarite","moves":["Sludge Wave","Shadow Ball","Dazzling Gleam","Taunt"],"ability":"Shadow Tag","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":381},
		"Boss Rush 2 Aya (Wasteland, Cursed Body)":{"level":100,"item":"Gengarite","moves":["Venoshock","Shadow Ball","Dazzling Gleam","Taunt"],"ability":"Shadow Tag","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":387},
		"Ace Half-Tossed Coin (3, DrkCryCav, CB)":{"level":100,"item":"Gengarite","moves":["Nasty Plot","Shadow Ball","Dark Pulse","Focus Blast"],"ability":"Shadow Tag","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1177},
		
	},	
	"Gigalith":{	
		"Boss Rush Hardy (Rocky) Doubles":{"level":100,"item":"Telluric Seed","moves":["Stealth Rock","Rock Slide","Earthquake","Rock Smash"],"ability":"Sand Stream","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":350},
		"Boss Rush 2 Hardy (Rocky) Doubles":{"level":100,"item":"Telluric Seed","moves":["Stealth Rock","Rock Slide","Earthquake","Rock Smash"],"ability":"Sand Stream","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":458},
		"Hardy Bites The Dust (Desert) Doub":{"level":100,"item":"Assault Vest","moves":["Iron Head","Rock Slide","Throat Chop","Superpower"],"ability":"Sand Stream","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":838},
		
	},	
	"Giratina":{	
		"Shade Hexes & Heroism (Starlight)":{"level":100,"item":"Griseous Orb","moves":["Defog","Hex","Will-O-Wisp","Dragon Pulse"],"ability":"Pressure","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":556},
		"Saphira Naga (Psychic)":{"level":100,"item":"Griseous Orb","moves":["Aura Sphere","Defog","Hex","Dragon Pulse"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":844},
		
	},	
	"Giratina-Origin":{	
		"Boss Rush 2 Shade (Dark Crys Cav)":{"level":100,"item":"Griseous Orb","moves":["Hex","Will-O-Wisp","Dragon Pulse","Aura Sphere"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":382},
		"Boss Rush 2 Saphira (Dragon's Den)":{"level":100,"item":"Griseous Orb","moves":["Will-O-Wisp","Defog","Hex","Dragon Pulse"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":468},
		"Saphira Hydra (Water Surf)":{"level":100,"item":"Griseous Orb","moves":["Aura Sphere","Defog","Hex","Dragon Pulse"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":852},
		
	},	
	"Glaceon":{	
		"Boss Rush 2 Serra (Inverse) Doubles":{"level":100,"item":"Magical Seed","moves":["Blizzard","Shadow Ball","Signal Beam","Hyper Voice"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":397},
		"Serra Digital Imaging (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Aqua Tail","Blizzard","Ice Shard","Wish"],"ability":"Snow Cloak","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":580},
		"Blake Nice Stall Bro (Inverse)":{"level":100,"item":"Leftovers","moves":["Substitute","Protect","Hail","Blizzard"],"ability":"Ice Body","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 128,"sp": 128},"index":1080},
		"Blake Can't Touch This (Mirror)":{"level":100,"item":"Bright Powder","moves":["Hail","Ice Beam","Aurora Veil","Signal Beam"],"ability":"Snow Cloak","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1084},
		"Lumi Teamwork! (Inverse)":{"level":100,"item":"Life Orb","moves":["Barrier","Baton Pass","Blizzard","Wish"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1129},
		"Zero Reminiscence (Inverse)":{"level":100,"item":"Magical Seed","moves":["Ice Beam","Stored Power","Wish","Hidden Power Fighting"],"ability":"Snow Cloak","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 128,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 128},"index":1157},
		"Ace Family (Holy)":{"level":100,"item":"Focus Sash","moves":["Wish","Baton Pass","Ice Beam","Hyper Voice"],"ability":"Snow Cloak","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1190},
		
	},	
	"Glalie":{	
		"Blake Nice Stall Bro (Inverse)":{"level":100,"item":"Leftovers","moves":["Substitute","Protect","Ice Beam","Frustration"],"ability":"Moody","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":1081},
		"Blake Can't Touch This (Mirror)":{"level":100,"item":"Leftovers","moves":["Substitute","Protect","Double Team","Ice Beam"],"ability":"Moody","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1086},
		
	},	
	"Glalie-Mega":{	
		"Serra Digital Imaging (Glitch)":{"level":100,"item":"Glalitite","moves":["Spikes","Explosion","Hyper Beam","Hidden Power Fire"],"ability":"Refrigerate","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":578},
		
	},	
	"Gliscor":{	
		"Boss Rush Terra (Desert) Doubles":{"level":100,"item":"Toxic Orb","moves":["Roost","Rock Slide","Poison Jab","Acrobatics"],"ability":"Poison Heal","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":325},
		"Boss Rush Ciel (Murkwater) Doubles":{"level":100,"item":"Toxic Orb","moves":["Earthquake","Stealth Rock","Rock Slide","Swords Dance"],"ability":"Poison Heal","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":328},
		"Terra SEEDZ NUTZ (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Earthquake","Roost","Acrobatics","Stealth Rock"],"ability":"Poison Heal","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 252},"index":680},
		"Terra ENTIRE CIRCUS!! (Big Top)":{"level":100,"item":"Toxic Orb","moves":["Acrobatics","Earthquake","Swords Dance","Roost"],"ability":"Poison Heal","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 200,"df": 0,"sa": 0,"sd": 0,"sp": 56},"index":700},
		"Taka Topside View (Mountain) Doub":{"level":100,"item":"Toxic Orb","moves":["Rock Slide","Stealth Rock","Knock Off","Roost"],"ability":"Poison Heal","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":1060},
		
	},	
	"Golem":{	
		"Hardy Bites The Dust (Desert) Doub":{"level":100,"item":"Assault Vest","moves":["Sucker Punch","Rock Slide","Iron Head","Stomping Tantrum"],"ability":"Sand Veil","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":840},
		
	},	
	"Golisopod":{	
		"Shelly Buggie Paddle (Water Surf)":{"level":100,"item":"Life Orb","moves":["First Impression","Liquidation","Leech Life","Aqua Jet"],"ability":"Emergency Exit","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":533},
		"Bennett A Game of Intellect (Chess: B)":{"level":100,"item":"Assault Vest","moves":["First Impression","Sucker Punch","Liquidation","Knock Off"],"ability":"Emergency Exit","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":1031},
		
	},	
	"Goodra":{	
		"Lumi Bedtime Stories (Fairy Tale)":{"level":100,"item":"Leftovers","moves":["Acid Armor","Dragon Pulse","Flamethrower","Sludge Bomb"],"ability":"Gooey","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 56,"sd": 200,"sp": 0},"index":1141},
		
	},	
	"Gourgeist":{	
		"Fern Come on and Smile! (Forest)":{"level":100,"item":"Leftovers","moves":["Seed Bomb","Synthesis","Leech Seed","Rock Slide"],"ability":"Frisk","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1005},
		
	},	
	"Greninja":{	
		"Boss Rush Luna (New World)":{"level":100,"item":"Life Orb","moves":["Dark Pulse","Hydro Pump","Ice Beam","U-turn"],"ability":"Protean","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":303},
		"Boss Rush Amaria (Water Surf) Both":{"level":100,"item":"Choice Scarf","moves":["Surf","Ice Beam","Gunk Shot","Dark Pulse"],"ability":"Protean","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":348},
		"Boss Rush 2 Luna (New World)":{"level":100,"item":"Life Orb","moves":["Dark Pulse","Hydro Pump","Ice Beam","U-turn"],"ability":"Protean","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":411},
		"Boss Rush 2 Amaria (Underwater) Both":{"level":100,"item":"Elemental Seed","moves":["Surf","Blizzard","Spikes","Dark Pulse"],"ability":"Protean","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":452},
		"Luna Mermaid Depths (Water Surf)":{"level":100,"item":"Elemental Seed","moves":["Gunk Shot","Ice Beam","Hydro Pump","U-turn"],"ability":"Protean","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":641},
		"Amaria Contrary Impulses (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Hydro Cannon","Blizzard","Gunk Shot","Acrobatics"],"ability":"Protean","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":795},
		"Amaria Shadowy Anguish (Swamp)":{"level":100,"item":"Assault Vest","moves":["Surf","Ice Beam","Gunk Shot","Dark Pulse"],"ability":"Protean","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":802},
		
	},	
	"Groudon-Primal":{	
		"Boss Rush Charlotte (Burning) Doub":{"level":100,"item":"Red Orb","moves":["Stealth Rock","Precipice Blades","Eruption","Rock Slide"],"ability":"Desolate Land","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":315},
		"Boss Rush 2 Charlotte (SHeat) Doub":{"level":100,"item":"Red Orb","moves":["Solar Beam","Precipice Blades","Overheat","Rock Slide"],"ability":"Desolate Land","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":422},
		"Boss Rush 2 Terra (Desert) Doubles":{"level":100,"item":"Red Orb","moves":["Precipice Blades","Rock Slide","Solar Beam","Swords Dance"],"ability":"Desolate Land","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":432},
		"Charlotte Fire Hazard (Grassy)":{"level":100,"item":"Red Orb","moves":["Precipice Blades","Overheat","Stealth Rock","Rock Slide"],"ability":"Desolate Land","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":668},
		"Charlotte Like Mom/Pop (Dragon's Den)":{"level":100,"item":"Red Orb","moves":["Precipice Blades","Overheat","Stealth Rock","Stone Edge"],"ability":"Desolate Land","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":676},
		"Terra gettin wet ;) (Underwater)":{"level":100,"item":"Red Orb","moves":["Precipice Blades","Rock Slide","Solar Beam","Swords Dance"],"ability":"Desolate Land","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":697},
		
	},	
	"Guzzlord":{	
		"Eve Ultra-Precise Analysis (Glitch)":{"level":100,"item":"Leftovers","moves":["Outrage","Fire Blast","Rest","Hidden Power Psychic"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 252,"sd": 0,"sp": 0},"index":1114},
		
	},	
	"Gyarados":{	
		"Ciel Above Rabble (Murkwater)":{"level":100,"item":"Flyinium Z","moves":["Dragon Dance","Bounce","Waterfall","Iron Head"],"ability":"Intimidate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":709},
		
	},	
	"Gyarados-Mega":{	
		"Luna Mermaid Depths (H2O Surf, Intim)":{"level":100,"item":"Gyaradosite","moves":["Dragon Dance","Crunch","Aqua Tail","Stone Edge"],"ability":"Mold Breaker","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":642},
		
	},	
	"Hariyama":{	
		"Samson Grow Strong (Forest)":{"level":100,"item":"Telluric Seed","moves":["Bullet Punch","Belly Drum","Close Combat","Knock Off"],"ability":"Thick Fat","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":658},
		
	},	
	"Hawlucha":{	
		"Boss Rush Samson (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Roost","Flying Press","Acrobatics","Swords Dance"],"ability":"Unburden","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":309},
		"Boss Rush Ciel (Murkwater) Doubles":{"level":100,"item":"Telluric Seed","moves":["Acrobatics","Rock Slide","High Jump Kick","Hone Claws"],"ability":"Unburden","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":330},
		"Boss Rush 2 Samson (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Roost","Flying Press","Acrobatics","Swords Dance"],"ability":"Unburden","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":417},
		
	},	
	"Heatran":{	
		"Boss Rush 2 Charlotte (SHeat) Doubles":{"level":100,"item":"Elemental Seed","moves":["Solar Beam","Heat Wave","Protect","Stealth Rock"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":423},
		"Charlotte Like Mom/Pop (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Magma Storm","Torment","Substitute","Protect"],"ability":"Flash Fire","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":675},
		"Titania Desert Blindness (Desert)":{"level":100,"item":"Life Orb","moves":["Heat Wave","Stealth Rock","Earth Power","Flash Cannon"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":764},
		"Titania 40 Nights Fire (1, Corro Mist) Doub":{"level":100,"item":"Choice Scarf","moves":["Heat Wave","Heat Wave","Heat Wave","Heat Wave"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":776},
		"Titania 40 Nights Fire (2, Corro Mist) Doub":{"level":100,"item":"Air Balloon","moves":["Magma Storm","Earth Power","Flash Cannon","Stone Edge"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":777},
		"Titania 40 Nights Fire (3, Corro Mist) Doub":{"level":100,"item":"Choice Scarf","moves":["Heat Wave","Heat Wave","Heat Wave","Heat Wave"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":778},
		"Titania 40 Nights Fire (4, Corro Mist) Doub":{"level":100,"item":"Air Balloon","moves":["Heat Wave","Earth Power","Flash Cannon","Stone Edge"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":779},
		"Titania 40 Nights Fire (5, Corro Mist) Doub":{"level":100,"item":"Choice Scarf","moves":["Heat Wave","Heat Wave","Heat Wave","Heat Wave"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":780},
		"Titania 40 Nights Fire (6, Corro Mist) Doub":{"level":100,"item":"Air Balloon","moves":["Magma Storm","Earth Power","Flash Cannon","Stone Edge"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":781},
		"Elias Natural Consequences (Holy)":{"level":100,"item":"Iron Plate","moves":["Nature Power","Magma Storm","Ancient Power","Stealth Rock"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":918},
		"Bennett A Game of Intellect (Chess: K)":{"level":100,"item":"King's Rock","moves":["Nature Power","Magma Storm","Earth Power","Flash Cannon"],"ability":"Flash Fire","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1032},
		
	},	
	"Heliolisk":{	
		"Boss Rush Noel (Holy)":{"level":100,"item":"Choice Specs","moves":["Volt Switch","Hyper Voice","Surf","Dragon Pulse"],"ability":"Solar Power","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":295},
		
	},	
	"Heracross":{	
		"Boss Rush Shelly (Forest)":{"level":100,"item":"Wide Lens","moves":["Stone Edge","Megahorn","Close Combat","Swords Dance"],"ability":"Swarm","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":270},
		
	},	
	"Heracross-Mega":{	
		"Samson Grow Strong (Forest)":{"level":100,"item":"Heracronite","moves":["Rock Blast","Close Combat","Pin Missile","Bullet Seed"],"ability":"Skill Link","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":657},
		
	},	
	"Hippowdon":{	
		"Boss Rush Terra (Desert) Doubles":{"level":100,"item":"Telluric Seed","moves":["Stealth Rock","Earthquake","Rock Slide","Slack Off"],"ability":"Sand Force","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":320},
		"Boss Rush 2 Terra (Desert) Doubles":{"level":100,"item":"Telluric Seed","moves":["Stealth Rock","Earthquake","Rock Slide","Slack Off"],"ability":"Sand Force","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":428},
		
	},	
	"Ho-Oh":{	
		"Boss Rush 2 Charlotte (SHeat) Doubles":{"level":100,"item":"Elemental Seed","moves":["Sacred Fire","Recover","Brave Bird","Toxic"],"ability":"Pressure","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":426},
		"Boss Rush 2 Ciel (Mountain) Doubles":{"level":100,"item":"Assault Vest","moves":["Heat Wave","Earthquake","Gust","Thunder"],"ability":"Regenerator","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":437},
		"Ciel New Horizons (New World)":{"level":100,"item":"Magical Seed","moves":["Sacred Fire","Recover","Brave Bird","Defog"],"ability":"Regenerator","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":712},
		"Ciel Beauty, Brutality (Dragon's Den) Doubles":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Solar Beam","Earthquake","Brave Bird"],"ability":"Regenerator","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":717},
		"Taka Light My Fire (Burning) Doub":{"level":100,"item":"Leftovers","moves":["Sacred Fire","Brave Bird","Substitute","Roost"],"ability":"Regenerator","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1056},
		"Taka Topside View (Mountain) Doub":{"level":100,"item":"Life Orb","moves":["Hyper Voice","Ancient Power","Brave Bird","Sacred Fire"],"ability":"Regenerator","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 56,"df": 0,"sa": 200,"sd": 0,"sp": 252},"index":1059},
		
	},	
	"Honchkrow":{	
		"Zero Zero Gravity (New World)":{"level":100,"item":"Darkinium Z","moves":["Sucker Punch","Brave Bird","Night Slash","Superpower"],"ability":"Moxie","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1152},
		
	},	
	"Hoopa":{	
		"Ace Myth & Mystery (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Dark Pulse","Psyshock","Thunderbolt","Focus Blast"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1162},
		
	},	
	"Hoopa-Unbound":{	
		"Boss Rush 2 Radomus (Starlight)":{"level":100,"item":"Choice Band","moves":["Hyperspace Hole","Zen Headbutt","Gunk Shot","Drain Punch"],"ability":"Magician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":404},
		"Boss Rush 2 Luna (New World)":{"level":100,"item":"Darkinium Z","moves":["Hyperspace Fury","Zen Headbutt","Gunk Shot","Drain Punch"],"ability":"Magician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":415},
		"Luna Goth Lolita (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Dark Pulse","Psyshock","Thunderbolt","Focus Blast"],"ability":"Magician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":646},
		
	},	
	"Houndoom-Mega":{	
		"Zero Zero Gravity (New World, FlshFire)":{"level":100,"item":"Houndoominite","moves":["Dark Pulse","Will-O-Wisp","Flamethrower","Sludge Bomb"],"ability":"Solar Power","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1150},
		
	},	
	"Hydreigon":{	
		"Boss Rush Luna (New World)":{"level":100,"item":"Choice Specs","moves":["Heat Wave","Surf","Dark Pulse","Draco Meteor"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":307},
		"Boss Rush Saphira (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Dragon Pulse","Flamethrower","Roost","Dark Pulse"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":360},
		"Boss Rush 2 Luna (New World)":{"level":100,"item":"Choice Specs","moves":["Heat Wave","Surf","Dark Pulse","Draco Meteor"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":413},
		"Luna Mermaid Depths (Water Surf)":{"level":100,"item":"Dragonium Z","moves":["Heat Wave","Surf","Dark Pulse","Draco Meteor"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":640},
		"Luna Goth Lolita (Fairy Tale)":{"level":100,"item":"Choice Scarf","moves":["Flash Cannon","Dragon Pulse","Dark Pulse","Fire Blast"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":645},
		"Saphira Hydra (Water Surf)":{"level":100,"item":"Elemental Seed","moves":["Dark Pulse","Flash Cannon","Roost","Surf"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":853},
		
	},	
	"Incineroar":{	
		"Victoria A Change of Pace (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Acrobatics","Brutal Swing","Flare Blitz","Earthquake"],"ability":"Blaze","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1027},
		
	},	
	"Infernape":{	
		"Samson Endorphins (Ashen Beach)":{"level":100,"item":"Wiki Berry","moves":["Calm Mind","Fire Blast","Focus Blast","Hidden Power Grass"],"ability":"Blaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":651},
		"Charlotte Fried Circuits (Glitch)":{"level":100,"item":"Grassium Z","moves":["Blast Burn","Solar Beam","Stone Edge","Close Combat"],"ability":"Blaze","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":667},
		
	},	
	"Jirachi":{	
		"Anna Seeing Stars (Starlight) Doub":{"level":100,"item":"Magical Seed","moves":["Swift","Doom Desire","Icy Wind","Wish"],"ability":"Serene Grace","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 128,"sd": 0,"sp": 0},"index":935},
		"Anna Unforseen Futurity (New World)":{"level":100,"item":"Magical Seed","moves":["Future Sight","Doom Desire","Ancient Power","Meteor Mash"],"ability":"Serene Grace","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 56,"df": 0,"sa": 200,"sd": 0,"sp": 252},"index":949},
		
	},	
	"Jolteon":{	
		"Julia Work Safety (Factory) Doubles":{"level":100,"item":"Synthetic Seed","moves":["Discharge","Shadow Ball","Signal Beam","Hidden Power Ice"],"ability":"Volt Absorb","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":482},
		"Arclight The Conductor (Water Surf)":{"level":100,"item":"Elemental Seed","moves":["Thunderbolt","Hidden Power Water","Shadow Ball","Signal Beam"],"ability":"Volt Absorb","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":966},
		"Arclight Night Club (Short Circ)":{"level":100,"item":"Synthetic Seed","moves":["Shadow Ball","Thunderbolt","Signal Beam","Hidden Power Ice"],"ability":"Volt Absorb","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":973},
		"Zero Reminiscence (Inverse)":{"level":100,"item":"Life Orb","moves":["Volt Switch","Shadow Ball","Hyper Voice","Thunder"],"ability":"Volt Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1159},
		
	},	
	"Jumpluff":{	
		"Florinia Wetland Rose (Swamp)":{"level":100,"item":"Flying Gem","moves":["Substitute","Leech Seed","Acrobatics","Sleep Powder"],"ability":"Infiltrator","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":514},
		
	},	
	"Kabutops":{	
		"Hardy The Ocean (Water Surf)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Stone Edge","Liquidation","Aqua Jet"],"ability":"Swift Swim","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":821},
		
	},	
	"Kangaskhan-Mega":{	
		"Elias Dabble in Distorting (Inverse)":{"level":100,"item":"Kangaskhanite","moves":["Power-Up Punch","Earthquake","Return","Sucker Punch"],"ability":"Parental Bond","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":925},
		
	},	
	"Kartana":{	
		"Boss Rush 2 Florinia (Forest)":{"level":100,"item":"Telluric Seed","moves":["Leaf Blade","Smart Strike","Knock Off","Sacred Sword"],"ability":"Beast Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 0,"sp": 0},"index":372},
		"Boss Rush 2 Titania (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Swords Dance","Leaf Blade","Sacred Sword","Night Slash"],"ability":"Beast Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":451},
		"Laura Sakura (Fairy Tale)":{"level":100,"item":"Choice Band","moves":["Leaf Blade","Sacred Sword","Night Slash","Psycho Cut"],"ability":"Beast Boost","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":898},
		
	},	
	"Keldeo":{	
		"Boss Rush 2 Amaria (Underwater) Both":{"level":100,"item":"Leftovers","moves":["Calm Mind","Sacred Sword","Surf","Icy Wind"],"ability":"Justified","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":454},
		"Samson Endorphins (Ashen Beach)":{"level":100,"item":"Wiki Berry","moves":["Calm Mind","Surf","Focus Blast","Hidden Power Ice"],"ability":"Justified","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":653},
		"Amaria Inward Thought (Ashen Beach)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Focus Blast","Surf","Hidden Power Ice"],"ability":"Justified","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":807},
		"Victoria Fallacy of Justice (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Secret Sword","Scald","Focus Blast","Icy Wind"],"ability":"Justified","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1015},
		"Cal Across Coals (Ashen Beach)":{"level":100,"item":"Leftovers","moves":["Surf","Focus Blast","Calm Mind","Hidden Power Rock"],"ability":"Justified","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1093},
		
	},	
	"Kingdra":{	
		"Saphira Hydra (Water Surf)":{"level":100,"item":"Life Orb","moves":["Surf","Flash Cannon","Ice Beam","Dragon Pulse"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":848},
		
	},	
	"Klefki":{	
		"Adrienn Machine Dreams (Factory)":{"level":100,"item":"Light Clay","moves":["Spikes","Thunder Wave","Flash Cannon","Reflect"],"ability":"Prankster","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 104,"sa": 0,"sd": 152,"sp": 0},"index":740},
		"Adrienn Happy End (Fairy Tale)":{"level":100,"item":"Focus Sash","moves":["Spikes","Magnet Rise","Thunder Wave","Play Rough"],"ability":"Prankster","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 104,"sa": 0,"sd": 152,"sp": 0},"index":750},
		
	},	
	"Kommo-o":{	
		"Boss Rush Samson (Big Top)":{"level":100,"item":"Kommonium Z","moves":["Clanging Scales","Close Combat","Iron Tail","Stealth Rock"],"ability":"Bulletproof","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":310},
		"Boss Rush 2 Samson (Big Top)":{"level":100,"item":"Kommonium Z","moves":["Clanging Scales","Close Combat","Iron Tail","Dragon Dance"],"ability":"Bulletproof","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":418},
		"Samson Endorphins (Ashen Beach)":{"level":100,"item":"Kommonium Z","moves":["Clanging Scales","Focus Blast","Flash Cannon","Stealth Rock"],"ability":"Bulletproof","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":650},
		"Elias Who's GM Now? (Chess) Doub":{"level":100,"item":"Assault Vest","moves":["Clanging Scales","Close Combat","Fire Punch","Poison Jab"],"ability":"Bulletproof","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":931},
		"Arclight Make Some Noise (Big Top)":{"level":100,"item":"Kommonium Z","moves":["Clanging Scales","Close Combat","Earthquake","Poison Jab"],"ability":"Soundproof","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":951},
		
	},	
	"Kyogre":{	
		"Lumi Ametrine Blues (Water Surf)":{"level":100,"item":"Damp Rock","moves":["Thunder","Surf","Ice Beam","Ancient Power"],"ability":"Drizzle","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1131},
		
	},	
	"Kyogre-Primal":{	
		"Boss Rush Amaria (Water Surf) Both":{"level":100,"item":"Blue Orb","moves":["Surf","Calm Mind","Thunder","Ice Beam"],"ability":"Primordial Sea","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":346},
		"Boss Rush 2 Amaria (Underwater) Both":{"level":100,"item":"Blue Orb","moves":["Origin Pulse","Ice Beam","Thunder","Calm Mind"],"ability":"Primordial Sea","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":457},
		"Amaria Inward Thought (Ashen Beach)":{"level":100,"item":"Blue Orb","moves":["Surf","Calm Mind","Thunder","Ice Beam"],"ability":"Primordial Sea","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":806},
		"Amaria The Tumult (Psychic)":{"level":100,"item":"Blue Orb","moves":["Surf","Calm Mind","Thunder","Ice Beam"],"ability":"Primordial Sea","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":817},
		
	},	
	"Kyurem-Black":{	
		"Boss Rush 2 Serra (Inverse) Doubles":{"level":100,"item":"Icium Z","moves":["Fusion Bolt","Freeze Shock","Outrage","Rock Slide"],"ability":"Teravolt","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":395},
		
	},	
	"Kyurem-White":{	
		"Boss Rush Serra (Icy)":{"level":100,"item":"Life Orb","moves":["Fusion Flare","Icy Wind","Draco Meteor","Rock Slide"],"ability":"Turboblaze","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":285},
		"Boss Rush 2 Serra (Inverse) Doubles":{"level":100,"item":"Life Orb","moves":["Fusion Flare","Blizzard","Draco Meteor","Rock Slide"],"ability":"Turboblaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":394},
		"Boss Rush 2 Saphira (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Dragon Pulse","Fusion Flare","Flash Cannon","Earth Power"],"ability":"Turboblaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":467},
		"Serra Digital Imaging (Glitch)":{"level":100,"item":"Dragonium Z","moves":["Fusion Flare","Outrage","Blizzard","Roost"],"ability":"Turboblaze","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":581},
		
	},	
	"Landorus":{	
		"Boss Rush Terra (Desert) Doubles":{"level":100,"item":"Life Orb","moves":["Earthquake","Rock Slide","Knock Off","Iron Tail"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":322},
		"Boss Rush 2 Terra (Desert) Doubles":{"level":100,"item":"Life Orb","moves":["Earthquake","Rock Slide","Knock Off","Iron Tail"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":429},
		"Boss Rush 2 Ciel (Mountain) Doubles":{"level":100,"item":"Flyinium Z","moves":["Stealth Rock","Earthquake","Rock Slide","Fly"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":435},
		"Julia KABOOM! (Glitch)":{"level":100,"moves":["Explosion"],"ability":"Sand Force","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":489},
		"Terra cOARSE rOUGH (Ashen Beach)":{"level":100,"item":"Life Orb","moves":["Mud Shot","Psychic","Sludge Wave","Focus Blast"],"ability":"Sand Force","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":689},
		"Terra ENTIRE CIRCUS!! (Big Top)":{"level":100,"item":"Power Herb","moves":["Brutal Swing","Earthquake","Smack Down","Fly"],"ability":"Sheer Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":699},
		
	},	
	"Lanturn":{	
		"Julia Deal With It (Water Surf) Doubles":{"level":100,"item":"Elemental Seed","moves":["Dazzling Gleam","Scald","Ice Beam","Thunderbolt"],"ability":"Volt Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":471},
		"Julia Work Safety (Factory) Doubles":{"level":100,"item":"Synthetic Seed","moves":["Discharge","Scald","Ice Beam","Dazzling Gleam"],"ability":"Volt Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":485},
		"Arclight The Conductor (Water Surf)":{"level":100,"item":"Leftovers","moves":["Dive","Thunderbolt","Scald","Ice Beam"],"ability":"Volt Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":964},
		
	},	
	"Lapras":{	
		"Cain Sing For Me! (Big Top)":{"level":100,"item":"Sitrus Berry","moves":["Sing","Dragon Dance","Waterfall","Outrage"],"ability":"Water Absorb","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":981},
		"Cain Subverted Expectations (Inverse)":{"level":100,"item":"Leftovers","moves":["Waterfall","Dragon Dance","Ice Shard","Return"],"ability":"Water Absorb","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":987},
		"Lumi Ametrine Blues (Water Surf)":{"level":100,"item":"Leftovers","moves":["Thunder","Surf","Ice Beam","Perish Song"],"ability":"Water Absorb","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1135},
		
	},	
	"Latias":{	
		"Saphira Wyrm (Fairy Tale)":{"level":100,"item":"Soul Dew","moves":["Calm Mind","Mist Ball","Recover","Dragon Pulse"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":857},
		"Saphira King (Holy)":{"level":100,"item":"Soul Dew","moves":["Calm Mind","Mist Ball","Recover","Hyper Voice"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":861},
		
	},	
	"Latias-Mega":{	
		"Saphira Naga (Psychic)":{"level":100,"item":"Latiasite","moves":["Calm Mind","Psychic","Recover","Toxic"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":847},
		"Saphira Hydra (Swamp)":{"level":100,"item":"Latiasite","moves":["Calm Mind","Psyshock","Recover","Surf"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":850},
		
	},	
	"Latios":{	
		"Radomus Agnosticism (Ashen Beach)":{"level":100,"item":"Magical Seed","moves":["Luster Purge","Dragon Pulse","Surf","Energy Ball"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":636},
		"Saphira Hydra (Water Surf)":{"level":100,"item":"Soul Dew","moves":["Calm Mind","Psyshock","Recover","Surf"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":851},
		"Saphira King (Holy)":{"level":100,"item":"Soul Dew","moves":["Calm Mind","Luster Purge","Recover","Dragon Pulse"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":864},
		"Lin old habits (New World)":{"level":100,"item":"Leftovers","moves":["Luster Purge","Spacial Rend","Vacuum Wave","Tailwind"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1211},
		
	},	
	"Leafeon":{	
		"Florinia Reconsideraton (Inverse)":{"level":100,"item":"Choice Band","moves":["Knock Off","X-Scissor","Leaf Blade","Iron Tail"],"ability":"Chlorophyll","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":495},
		
	},	
	"Ledian":{	
		"Shelly Easy CompSci (Glitch)":{"level":100,"item":"Assault Vest","moves":["Giga Drain","Ice Punch","Thunder Punch","Psybeam"],"ability":"Iron Fist","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":543},
		
	},	
	"Lickilicky":{	
		"Noel Illustrated (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Wish","Protect","Toxic","Hyper Voice"],"ability":"Cloud Nine","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 252,"sp": 0},"index":607},
		
	},	
	"Lilligant":{	
		"Florinia Reconsideraton (Inverse)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Sleep Powder","Giga Drain","Hidden Power Poison"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":499},
		"Florinia Science Show (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Sleep Powder","Petal Dance","Hidden Power Rock"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":518},
		"Shelly Stage Fright (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Sleep Powder","Petal Dance","Hidden Power Rock"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":525},
		"Ciel Are We Human? (Big Top) Doubles":{"level":100,"item":"Wide Lens","moves":["Quiver Dance","Petal Dance","Hidden Power Fire","Sleep Powder"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":731},
		"Laura Wisteria (Flower Gard) Doub":{"level":100,"item":"Synthetic Seed","moves":["Quiver Dance","Giga Drain","Sleep Powder","Hidden Power Ground"],"ability":"Chlorophyll","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":893},
		"Bennett Love of Showmanship (Big Top)":{"level":100,"item":"Wide Lens","moves":["Quiver Dance","Petal Dance","Hidden Power Fire","Sleep Powder"],"ability":"Own Tempo","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1038},
		
	},	
	"Lopunny-Mega":{	
		"Noel Abnormal (Inverse, Cute Charm)":{"level":100,"item":"Lopunnite","moves":["Fake Out","High Jump Kick","Quick Attack","Return"],"ability":"Scrappy","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":589},
		"Noel Defaulted (Glitch, Cute Charm)":{"level":100,"item":"Lopunnite","moves":["Fake Out","High Jump Kick","Quick Attack","Giga Impact"],"ability":"Scrappy","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":591},
		"Noel Entrainment (Inverse, CCharm) Dub":{"level":100,"item":"Lopunnite","moves":["Entrainment","Fake Out","High Jump Kick","Return"],"ability":"Scrappy","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":600},
		"Cain Pretty Boy (Rainbow, Cute Charm)":{"level":100,"item":"Lopunnite","moves":["Return","High Jump Kick","Ice Punch","Fake Out"],"ability":"Scrappy","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":979},
		"Victoria Black and White (Chess: B)":{"level":100,"item":"Lopunnite","moves":["Fake Out","Power-Up Punch","Drain Punch","Strength"],"ability":"Scrappy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1018},
		"Lumi Teamwork! (Inverse)":{"level":100,"item":"Lopunnite","moves":["Baton Pass","Power-Up Punch","Return","Drain Punch"],"ability":"Scrappy","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1125},
		
	},	
	"Lucario":{	
		"Boss Rush Samson (Big Top)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Close Combat","Extreme Speed","Meteor Mash"],"ability":"Steadfast","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":313},
		"Boss Rush Titania (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Swords Dance","Close Combat","Extreme Speed","Bullet Punch"],"ability":"Steadfast","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":342},
		"Samson Endorphins (Ashen Beach)":{"level":100,"item":"Wiki Berry","moves":["Calm Mind","Aura Sphere","Hidden Power Flying","Vacuum Wave"],"ability":"Inner Focus","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":654},
		"Victoria Fallacy of Justice (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Bullet Punch","Meteor Mash","Close Combat"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1013},
		"Victoria Black and White (Chess: P)":{"level":100,"item":"Synthetic Seed","moves":["Calm Mind","Aura Sphere","Psychic","Flash Cannon"],"ability":"Steadfast","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1016},
		
	},	
	"Lucario-Mega":{	
		"Boss Rush 2 Samson (Big Top, Steadfast)":{"level":100,"item":"Lucarionite","moves":["Swords Dance","Close Combat","Extreme Speed","Meteor Mash"],"ability":"Adaptability","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":421},
		"Boss Rush 2 Titania (Fairy Tale, Stead)":{"level":100,"item":"Lucarionite","moves":["Swords Dance","Meteor Mash","Close Combat","Bullet Punch"],"ability":"Adaptability","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":448},
		"Taka Legacy (Dragon's Den, Just) 2x":{"level":100,"item":"Lucarionite","moves":["Dual Chop","Blaze Kick","Meteor Mash","Close Combat"],"ability":"Adaptability","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1068},
		"Cal Across Coals (Ashen Beach, Stead)":{"level":100,"item":"Lucarionite","moves":["Psychic","Focus Blast","Flash Cannon","Calm Mind"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1089},
		
	},	
	"Ludicolo":{	
		"Florinia Wetland Rose (Swamp)":{"level":100,"item":"Waterium Z","moves":["Rain Dance","Surf","Giga Drain","Ice Beam"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":513},
		
	},	
	"Lugia":{	
		"Boss Rush 2 Radomus (Starlight)":{"level":100,"item":"Leftovers","moves":["Roost","Toxic","Psychic","Dragon Tail"],"ability":"Multiscale","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":408},
		"Boss Rush 2 Ciel (Mountain) Doubles":{"level":100,"item":"Leftovers","moves":["Aeroblast","Tailwind","Thunder","Roost"],"ability":"Multiscale","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":434},
		"Radomus Stockfish Error (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Roost","Toxic","Psychic","Blizzard"],"ability":"Multiscale","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":624},
		"Radomus Celestial Wisdom (Ashen Beach)":{"level":100,"item":"Leftovers","moves":["Roost","Toxic","Psychic","Dragon Tail"],"ability":"Multiscale","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":629},
		"Ciel Above Rabble (Murkwater)":{"level":100,"item":"Leftovers","moves":["Brine","Toxic","Dragon Tail","Roost"],"ability":"Multiscale","nature":"Naughty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":706},
		"Ciel New Horizons (New World)":{"level":100,"item":"Magical Seed","moves":["Aeroblast","Toxic","Dragon Tail","Roost"],"ability":"Multiscale","nature":"Naughty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":713},
		"Ciel Suspend Disbelief (Psychic)":{"level":100,"item":"Leftovers","moves":["Aeroblast","Calm Mind","Dragon Tail","Roost"],"ability":"Multiscale","nature":"Naughty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":724},
		"Ace Eyes of Fire (Burning)":{"level":100,"item":"Leftovers","moves":["Roost","Toxic","Psychic","Dragon Tail"],"ability":"Multiscale","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":1167},
		
	},	
	"Lunala":{	
		"Boss Rush Radomus (Starlight)":{"level":100,"item":"Lunalium Z","moves":["Moongeist Beam","Psychic","Roost","Will-O-Wisp"],"ability":"Shadow Shield","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":298},
		"Boss Rush 2 Radomus (Starlight)":{"level":100,"item":"Leftovers","moves":["Moongeist Beam","Psychic","Roost","Will-O-Wisp"],"ability":"Shadow Shield","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 0,"sp": 4},"index":406},
		"Shade Hexes & Heroism (Starlight)":{"level":100,"item":"Lunalium Z","moves":["Moongeist Beam","Calm Mind","Moonblast","Air Slash"],"ability":"Shadow Shield","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":558},
		"Radomus Stockfish Error (Glitch)":{"level":100,"item":"Leftovers","moves":["Moongeist Beam","Psychic","Roost","Blizzard"],"ability":"Shadow Shield","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 0,"sp": 4},"index":621},
		"Radomus Agnosticism (Ashen Beach)":{"level":100,"item":"Magical Seed","moves":["Psyshock","Moonblast","Ice Beam","Air Slash"],"ability":"Shadow Shield","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":634},
		"Eve Intermediation (Chess: Q)":{"level":100,"item":"Leftovers","moves":["Psychic","Moongeist Beam","Moonlight","Calm Mind"],"ability":"Shadow Shield","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 200,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 52},"index":1123},
		"Ace Technological Trickster (Glitch)":{"level":100,"item":"Leftovers","moves":["Work Up","Moongeist Beam","Psyshock","Moonlight"],"ability":"Shadow Shield","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 56,"at": 0,"df": 0,"sa": 200,"sd": 0,"sp": 252},"index":1182},
		
	},	
	"Lurantis":{	
		"Fern Contrarian (Swamp)":{"level":100,"item":"Leftovers","moves":["Leaf Storm","Superpower","Synthesis","Nature Power"],"ability":"Contrary","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":994},
		
	},	
	"Lycanroc":{	
		"Boss Rush Hardy (Rocky) Doubles":{"level":100,"item":"Wide Lens","moves":["Rock Slide","Accelerock","Drill Run","Fire Fang"],"ability":"Sand Rush","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":354},
		"Hardy Bites The Dust (Desert) Doub":{"level":100,"item":"Life Orb","moves":["Stealth Rock","Brick Break","Rock Slide","Fire Fang"],"ability":"Sand Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":837},
		
	},	
	"Lycanroc-Dusk":{	
		"Boss Rush Hardy (Rocky) Doubles":{"level":100,"item":"Life Orb","moves":["Rock Slide","Drill Run","Sucker Punch","Accelerock"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":353},
		"Hardy Rocky Mount Way (Mount) Doub":{"level":100,"item":"Life Orb","moves":["Swords Dance","Rock Slide","Accelerock","Sucker Punch"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":829},
		
	},	
	"Magearna":{	
		"Boss Rush Adrienn (Misty)":{"level":100,"item":"Elemental Seed","moves":["Dazzling Gleam","Aura Sphere","Flash Cannon","Volt Switch"],"ability":"Soul-Heart","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 152,"sa": 104,"sd": 0,"sp": 0},"index":336},
		"Boss Rush 2 Adrienn (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Dazzling Gleam","Aura Sphere","Flash Cannon","Volt Switch"],"ability":"Soul-Heart","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 152,"sa": 104,"sd": 0,"sp": 0},"index":444},
		"Boss Rush 2 Titania (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Fleur Cannon","Volt Switch","Flash Cannon","Aura Sphere"],"ability":"Soul-Heart","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 104,"sd": 152,"sp": 0},"index":449},
		"Julia KABOOM! (Glitch)":{"level":100,"moves":["Explosion"],"ability":"Soul-Heart","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":488},
		"Adrienn Machine Dreams (Factory)":{"level":100,"item":"Synthetic Seed","moves":["Shift Gear","Thunderbolt","Flash Cannon","Shadow Ball"],"ability":"Soul-Heart","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":745},
		"Adrienn Happy End (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Fleur Cannon","Volt Switch","Flash Cannon","Aura Sphere"],"ability":"Soul-Heart","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 104,"sd": 152,"sp": 0},"index":751},
		"Adrienn Miraculous (Holy)":{"level":100,"item":"Magical Seed","moves":["Fleur Cannon","Aura Sphere","Flash Cannon","Volt Switch"],"ability":"Soul-Heart","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 104,"sd": 152,"sp": 0},"index":759},
		"Titania Psychic Spindle (Psychic)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Trick Room","Fleur Cannon","Aura Sphere"],"ability":"Soul-Heart","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":786},
		"Laura Sakura (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Fleur Cannon","Flash Cannon","Aura Sphere","Volt Switch"],"ability":"Soul-Heart","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":900},
		"Arclight Night Club (Short Circ)":{"level":100,"item":"Synthetic Seed","moves":["Shift Gear","Iron Head","Dazzling Gleam","Brick Break"],"ability":"Soul-Heart","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 196,"df": 0,"sa": 60,"sd": 0,"sp": 252},"index":970},
		
	},	
	"Magmortar":{	
		"Cal Burning Pride (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Solar Beam","Thunderbolt","Flamethrower","Hidden Power Ice"],"ability":"Flame Body","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1104},
		
	},	
	"Magnezone":{	
		"Boss Rush Julia (Electric)":{"level":100,"item":"Elemental Seed","moves":["Hidden Power Ice","Thunderbolt","Flash Cannon","Signal Beam"],"ability":"Magnet Pull","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":258},
		"Julia Work Safety (Factory) Doubles":{"level":100,"item":"Synthetic Seed","moves":["Discharge","Flash Cannon","Zap Cannon","Signal Beam"],"ability":"Magnet Pull","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":487},
		"Titania Legless Sea (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Thunderbolt","Flash Cannon","Signal Beam","Hidden Power Fire"],"ability":"Magnet Pull","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":775},
		
	},	
	"Malamar":{	
		"Radomus Black/Purp (Psychic) Doubles":{"level":100,"item":"Life Orb","moves":["Rock Slide","Superpower","Knock Off","Psycho Cut"],"ability":"Contrary","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":619},
		"Fern Contrarian (Swamp)":{"level":100,"item":"Leftovers","moves":["Superpower","Knock Off","Rest","Sleeptalk"],"ability":"Contrary","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":996},
		
	},	
	"Mamoswine":{	
		"Boss Rush Serra (Icy)":{"level":100,"item":"Choice Band","moves":["Icicle Crash","Earthquake","Ice Shard","Rock Slide"],"ability":"Thick Fat","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":287},
		
	},	
	"Manaphy":{	
		"Fern Come on and Smile! (Forest)":{"level":100,"item":"Expert Belt","moves":["Tail Glow","Energy Ball","Signal Beam","Scald"],"ability":"Hydration","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1006},
		
	},	
	"Manectric-Mega":{	
		"Boss Rush 2 Julia (Electric)":{"level":100,"item":"Manectite","moves":["Overheat","Thunderbolt","Volt Switch","Hidden Power Ice"],"ability":"Intimidate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":366},
		"Arclight Night Club (Short Circ, Static)":{"level":100,"item":"Manectite","moves":["Thunderbolt","Discharge","Flamethrower","Hidden Power Ice"],"ability":"Intimidate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":969},
		
	},	
	"Marowak":{	
		"Terra ENTIRE CIRCUS!! (Big Top)":{"level":100,"item":"Thick Club","moves":["Belly Drum","Stomping Tantrum","Smack Down","Fire Punch"],"ability":"Rock Head","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":701},
		
	},	
	"Marowak-Alola":{	
		"Shade Midnight Meadow (Grassy)":{"level":100,"item":"Thick Club","moves":["Swords Dance","Flare Blitz","Shadow Bone","Low Kick"],"ability":"Rock Head","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":551},
		"Heather In Memoriam (New World) Doub":{"level":100,"item":"Thick Club","moves":["Knock Off","Shadow Bone","Fire Punch","Stone Edge"],"ability":"Lightning Rod","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":885},
		"Arclight Night Club (Short Circ)":{"level":100,"item":"Thick Club","moves":["Bonemerang","Thunder Punch","Shadow Bone","Flare Blitz"],"ability":"Cursed Body","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 204,"at": 252,"df": 0,"sa": 0,"sd": 8,"sp": 44},"index":968},
		
	},	
	"Marshadow":{	
		"Boss Rush Samson (Big Top)":{"level":100,"item":"Life Orb","moves":["Spectral Thief","Close Combat","Shadow Sneak","Acrobatics"],"ability":"Technician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":312},
		"Boss Rush 2 Shade (Dark Crystal Cavern)":{"level":100,"item":"Focus Sash","moves":["Bulk Up","Shadow Sneak","Rock Tomb","Close Combat"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 252,"sa": 0,"sd": 0,"sp": 0},"index":384},
		"Boss Rush 2 Samson (Big Top)":{"level":100,"item":"Life Orb","moves":["Spectral Thief","Close Combat","Shadow Sneak","Acrobatics"],"ability":"Technician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":420},
		"Victoria Black and White (Chess: B)":{"level":100,"item":"Marshadium Z","moves":["Spectral Thief","Sucker Punch","Close Combat","Poison Jab"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1019},
		"Victoria A Change of Pace (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Shadow Sneak","Spectral Thief","Acrobatics","Close Combat"],"ability":"Technician","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1026},
		"Cal Across Coals (Ashen Beach)":{"level":100,"item":"Telluric Seed","moves":["Focus Blast","Hidden Power Ice","Spectral Thief","Shadow Sneak"],"ability":"Technician","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1092},
		"Eve Technical Expertise (Factory)":{"level":100,"item":"Electrium Z","moves":["Shadow Sneak","Shadow Punch","Thunder Punch","Drain Punch"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1109},
		
	},	
	"Mawile-Mega":{	
		"Boss Rush Adrienn (Misty, Hyper Cutter)":{"level":100,"item":"Mawilite","moves":["Swords Dance","Play Rough","Sucker Punch","Thunder Punch"],"ability":"Huge Power","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":337},
		"Adrienn Atop Olympus (Mount, HCut) Dub":{"level":100,"item":"Mawilite","moves":["Swords Dance","Rock Slide","Play Rough","Sucker Punch"],"ability":"Huge Power","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":754},
		"Laura Sakura (Fairy Talem Intim)":{"level":100,"item":"Mawilite","moves":["Play Rough","Iron Head","Sucker Punch","Brick Break"],"ability":"Huge Power","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":899},
		
	},	
	"Medicham":{	
		"Victoria Black and White (Chess: Q)":{"level":100,"item":"Life Orb","moves":["Fake Out","Strength","High Jump Kick","Zen Headbutt"],"ability":"Pure Power","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1021},
		
	},	
	"Medicham-Mega":{	
		"Radomus Celestial Wisdom (AshB, Tele)":{"level":100,"item":"Medichamite","moves":["Fake Out","Zen Headbutt","Bullet Punch","High Jump Kick"],"ability":"Pure Power","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":627},
		"Samson Endorphins (Ashen Beach)":{"level":100,"item":"Medichamite","moves":["Fake Out","High Jump Kick","Zen Headbutt","Bullet Punch"],"ability":"Pure Power","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":652},
		"Victoria A Change of Pace (Big Top)":{"level":100,"item":"Medichamite","moves":["High Jump Kick","Fake Out","Ice Punch","Zen Headbutt"],"ability":"Pure Power","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1023},
		"Cal Burning Pride (Rainbow)":{"level":100,"item":"Medichamite","moves":["Zen Headbutt","Meditate","Ice Punch","High Jump Kick"],"ability":"Pure Power","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1101},
		
	},	
	"Meganium":{	
		"Florinia Standard (Grassy)":{"level":100,"item":"Leftovers","moves":["Outrage","Giga Drain","Frenzy Plant","Reflect"],"ability":"Overgrow","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 252,"sp": 4},"index":501},
		
	},	
	"Meloetta":{	
		"Boss Rush Noel (Holy)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Psyshock","Dazzling Gleam","Energy Ball"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":294},
		"Boss Rush 2 Noel (Holy)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Psyshock","Dazzling Gleam","Energy Ball"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":401},
		"Noel Abnormal (Inverse)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Energy Ball","Psychic","Focus Blast"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":586},
		"Noel Illustrated (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Psychic","Hyper Voice","Hidden Power Ground","Dazzling Gleam"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":604},
		"Radomus Agnosticism (Ashen Beach)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Psyshock","Dazzling Gleam","Thunderbolt"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":632},
		"Elias Dabble in Distorting (Inverse)":{"level":100,"item":"Leftovers","moves":["Hyper Voice","Psyshock","Signal Beam","Energy Ball"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":922},
		"Cain Subverted Expectations (Inverse)":{"level":100,"item":"Magical Seed","moves":["Hyper Voice","Dazzling Gleam","Psyshock","Shadow Ball"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":989},
		
	},	
	"Meloetta-Pirouette":{	
		"Arclight Make Some Noise (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Relic Song","Close Combat","Acrobatics","Stone Edge"],"ability":"Serene Grace","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":954},
		"Cain Sing For Me! (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Sing","Close Combat","Acrobatics","U-turn"],"ability":"Serene Grace","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":984},
		"Victoria Black and White (Chess: B)":{"level":100,"item":"Life Orb","moves":["Secret Power","Close Combat","U-turn","Zen Headbutt"],"ability":"Serene Grace","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1017},
		
	},	
	"Metagross":{	
		"Titania Psychic Spindle (Psychic)":{"level":100,"item":"Weakness Policy","moves":["Stealth Rock","Meteor Mash","Earthquake","Zen Headbutt"],"ability":"Clear Body","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":782},
		"Ace Myth & Mystery (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Bullet Punch","Meteor Mash","Zen Headbutt","Earthquake"],"ability":"Light Metal","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1160},
		
	},	
	"Metagross-Mega":{	
		"Boss Rush Radomus (Starlight, LiteMetl)":{"level":100,"item":"Metagrossite","moves":["Meteor Mash","Zen Headbutt","Earthquake","Brick Break"],"ability":"Tough Claws","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":301},
		"Boss Rush Titania (Fairy Tale, ClrBod)":{"level":100,"item":"Metagrossite","moves":["Meteor Mash","Bullet Punch","Ice Punch","Earthquake"],"ability":"Tough Claws","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":341},
		
	},	
	"Mew":{	
		"Julia KABOOM! (Glitch)":{"level":100,"moves":["Explosion"],"ability":"Synchronize","ivs":{"hp": 10,"at": 10,"df": 10,"sa": 10,"sd": 10,"sp": 10},"evs":{"hp": 85,"at": 85,"df": 85,"sa": 85,"sd": 85,"sp": 85},"index":493},
		"Radomus Agnosticism (Ashen Beach)":{"level":100,"item":"Mewnium Z","moves":["Nasty Plot","Psychic","Fire Blast","Soft-Boiled"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":637},
		"Elias False God (Holy)":{"level":100,"item":"Mewnium Z","moves":["Psychic","Nasty Plot","Aura Sphere","Transform"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":913},
		"Lumi Teamwork! (Inverse)":{"level":100,"item":"Magical Seed","moves":["Soft-Boiled","Baton Pass","Calm Mind","Psychic"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":1126},
		
	},	
	"Mewtwo-Mega-X":{	
		"Boss Rush 2 Radomus (Star, Press)":{"level":100,"item":"Mewtwonite X","moves":["Drain Punch","Zen Headbutt","Ice Punch","Poison Jab"],"ability":"Steadfast","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":407},
		"Lin stop flinching (Ranbw, Unnrv) 2x":{"level":100,"item":"Mewtwonite X","moves":["Rock Slide","Bulldoze","Zen Headbutt","Drain Punch"],"ability":"Steadfast","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1204},
		
	},	
	"Mewtwo-Mega-Y":{	
		"Radomus Celestial Wisdom (ABch, Pres)":{"level":100,"item":"Mewtwonite Y","moves":["Psystrike","Focus Blast","Calm Mind","Ice Beam"],"ability":"Insomnia","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":628},
		"Radomus Agnosticism (Ash Beach, Pres)":{"level":100,"item":"Mewtwonite Y","moves":["Psystrike","Fire Blast","Ice Beam","Calm Mind"],"ability":"Insomnia","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":633},
		
	},	
	"Mienshao":{	
		"Victoria A Change of Pace (Big Top)":{"level":100,"item":"Focus Sash","moves":["Acrobatics","U-turn","Fake Out","High Jump Kick"],"ability":"Inner Focus","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1022},
		
	},	
	"Milotic":{	
		"Amaria The Tumult (Psychic)":{"level":100,"item":"Leftovers","moves":["Scald","Ice Beam","Recover","Hypnosis"],"ability":"Marvel Scale","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":816},
		"Fern Contrarian (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Surf","Recover","Ice Beam","Toxic"],"ability":"Competitive","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 128,"at": 0,"df": 128,"sa": 252,"sd": 0,"sp": 0},"index":993},
		
	},	
	"Mimikyu":{	
		"Boss Rush Shade (Dark Crystal Cavern)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Shadow Sneak","Play Rough","Shadow Claw"],"ability":"Disguise","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":275},
		"Boss Rush Adrienn (Misty)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Shadow Claw","Play Rough","Shadow Sneak"],"ability":"Disguise","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":335},
		"Boss Rush 2 Shade (Dark Crystal Cavern)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Shadow Sneak","Play Rough","Shadow Claw"],"ability":"Disguise","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":383},
		"Shade Hexes & Heroism (Starlight)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Shadow Sneak","Leech Life","Play Rough"],"ability":"Disguise","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":555},
		"Adrienn Machine Dreams (Factory)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Shadow Sneak","Play Rough","Shadow Claw"],"ability":"Disguise","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":743},
		"Cain Subverted Expectations (Inverse)":{"level":100,"item":"Mimikium Z","moves":["Play Rough","Swords Dance","Shadow Claw","Shadow Sneak"],"ability":"Disguise","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":988},
		
	},	
	"Minior-Meteor":{	
		"Hardy Rocky Mount Way (Mount) Doub":{"level":100,"item":"White Herb","moves":["Shell Smash","Rock Slide","Earthquake","Acrobatics"],"ability":"Shields Down","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":824},
		"Taka Light My Fire (Burning) Doub":{"level":100,"item":"Amplifield Rock","moves":["Gravity","Hidden Power Fire","Rock Slide","Acrobatics"],"ability":"Shields Down","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1052},
		"Ace Technological Trickster (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Shell Smash","Acrobatics","Rock Slide","Earthquake"],"ability":"Shields Down","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1180},
		
	},	
	"Mismagius":{	
		"Boss Rush Shade (Dark Crystal Cavern)":{"level":100,"item":"Life Orb","moves":["Nasty Plot","Power Gem","Shadow Ball","Taunt"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":276},
		"Cain Pretty Boy (Rainbow)":{"level":100,"item":"Focus Sash","moves":["Nasty Plot","Hidden Power Ghost","Mystical Fire","Power Gem"],"ability":"Levitate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":978},
		
	},	
	"Mr. Mime":{	
		"Eve Technical Expertise (Factory)":{"level":100,"item":"Life Orb","moves":["Shadow Ball","Dazzling Gleam","Charge Beam","Psyshock"],"ability":"Technician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1110},
		
	},	
	"Muk-Alola":{	
		"Boss Rush Aya (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Gunk Shot","Knock Off","Shadow Sneak","Pursuit"],"ability":"Poison Touch","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":283},
		"Boss Rush 2 Aya (Wasteland)":{"level":100,"item":"Black Sludge","moves":["Gunk Shot","Knock Off","Shadow Sneak","Pursuit"],"ability":"Poison Touch","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":391},
		"Luna Goth Lolita (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Gunk Shot","Knock Off","Poison Jab","Fire Punch"],"ability":"Power Of Alchemy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":644},
		
	},	
	"Musharna":{	
		"Radomus Telepathy Time (Psychic)":{"level":100,"item":"Focus Sash","moves":["Calm Mind","Dazzling Gleam","Psyshock","Hypnosis"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":612},
		"Radomus Black/Purp (Psychic) Doubles":{"level":100,"item":"Wiki Berry","moves":["Calm Mind","Psychic","Dazzling Gleam","Trick Room"],"ability":"Forewarn","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":617},
		"Eve Intermediation (Chess: P)":{"level":100,"item":"Synthetic Seed","moves":["Calm Mind","Baton Pass","Psychic","Moonlight"],"ability":"Synchronize","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 56,"sd": 0,"sp": 0},"index":1118},
		
	},	
	"Naganadel":{	
		"Boss Rush Saphira (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Dragon Pulse","Flamethrower","Sludge Wave","Nasty Plot"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":359},
		"Boss Rush 2 Aya (Wasteland)":{"level":100,"item":"Dragonium Z","moves":["Draco Meteor","Venoshock","Nasty Plot","Fire Blast"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":388},
		"Boss Rush 2 Saphira (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Dragon Pulse","Flamethrower","Sludge Wave","Nasty Plot"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":469},
		"Eve Ultra-Precise Analysis (Glitch)":{"level":100,"item":"Choice Specs","moves":["Outrage","Fire Blast","Thunderbolt","U-turn"],"ability":"Beast Boost","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1113},
		
	},	
	"Necrozma":{	
		"Laura Octopetala (Starlight)":{"level":100,"item":"Leftovers","moves":["Photon Geyser","Calm Mind","Moonlight","Dark Pulse"],"ability":"Prism Armor","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":907},
		
	},	
	"Necrozma-Dawn-Wings":{	
		"Boss Rush Shade (Dark Crys Cav)":{"level":100,"item":"Lunalium Z","moves":["Moongeist Beam","Photon Geyser","Stealth Rock","Flash Cannon"],"ability":"Prism Armor","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":272},
		"Boss Rush 2 Shade (D Crys Cav)":{"level":100,"item":"Lunalium Z","moves":["Moongeist Beam","Photon Geyser","Stealth Rock","Flash Cannon"],"ability":"Prism Armor","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":380},
		
	},	
	"Necrozma-Dusk-Mane":{	
		"Boss Rush 2 Titania (Fairy Tale)":{"level":100,"item":"Solganium Z","moves":["Swords Dance","Sunsteel Strike","Earthquake","Photon Geyser"],"ability":"Prism Armor","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 4},"index":450},
		"Titania Psychic Spindle (Psychic)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Sunsteel Strike","Trick Room","Photon Geyser"],"ability":"Prism Armor","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 4},"index":784},
		"Ace Fashion Forward (Chess: K) 2x":{"level":100,"item":"King's Rock","moves":["Brick Break","Smart Strike","Photon Geyser","Knock Off"],"ability":"Prism Armor","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 200,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 56},"index":1187},
		
	},	
	"Necrozma-Ultra":{	
		"Boss Rush 2 Radomus (Star, DM, PriArm)":{"level":100,"item":"Ultranecrozium Z","moves":["Photon Geyser","Earthquake","Stone Edge","Swords Dance"],"ability":"Neuroforce","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":409},
		"Boss Rush 2 Saphira (DDen, DM, PriArm)":{"level":100,"item":"Ultranecrozium Z","moves":["Swords Dance","Photon Geyser","Sunsteel Strike","Night Slash"],"ability":"Neuroforce","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":465},
		"Radomus Stockfish Error (Glitch, DM, PA)":{"level":100,"item":"Ultranecrozium Z","moves":["Photon Geyser","Earthquake","Stone Edge","Swords Dance"],"ability":"Neuroforce","nature":"Naughty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":625},
		"Saphira Naga (Psychic, Dawn W, PriArm)":{"level":100,"item":"Ultranecrozium Z","moves":["Calm Mind","Photon Geyser","Moongeist Beam","Heat Wave"],"ability":"Neuroforce","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":846},
		"Saphira Wyrm (Fairy Tale, Dusk M, PA)":{"level":100,"item":"Ultranecrozium Z","moves":["Swords Dance","Photon Geyser","Sunsteel Strike","Night Slash"],"ability":"Neuroforce","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":856},
		"Ace Myth & Mystery (FTale, DW, PrAr)":{"level":100,"item":"Ultranecrozmium Z","moves":["Photon Geyser","Moongeist Beam","Dragon Pulse","Earth Power"],"ability":"Neuroforce","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1165},
		
	},	
	"Nidoking":{	
		"Terra SEEDZ NUTZ (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Ice Beam","Earth Power","Venoshock","Flamethrower"],"ability":"Sheer Force","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":682},
		"Cain Subverted Expectations (Inverse)":{"level":100,"item":"Assault Vest","moves":["Ice Beam","Hidden Power Bug","Sludge Wave","Flamethrower"],"ability":"Sheer Force","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":991},
		
	},	
	"Nidoqueen":{	
		"Terra SEEDZ NUTZ (Corrosive Mist)":{"level":100,"item":"Elemental Seed","moves":["Stealth Rock","Earth Power","Venoshock","Flamethrower"],"ability":"Sheer Force","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":681},
		
	},	
	"Nihilego":{	
		"Boss Rush Aya (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Power Gem","Sludge Wave","Thunderbolt","Stealth Rock"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":278},
		"Boss Rush 2 Aya (Wasteland)":{"level":100,"item":"Life Orb","moves":["Power Gem","Sludge Wave","Thunderbolt","Protect"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":389},
		"Boss Rush 2 Hardy (Rocky) Doubles":{"level":100,"item":"Focus Sash","moves":["Sludge Wave","Dazzling Gleam","Toxic Spikes","Protect"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":462},
		"Hardy The Ocean (Water Surf)":{"level":100,"item":"Choice Specs","moves":["Sludge Bomb","Thunderbolt","Power Gem","Dazzling Gleam"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":820},
		"Hardy Rocky Mount Way (Mount) Doub":{"level":100,"item":"Choice Specs","moves":["Sludge Wave","Thunder","Power Gem","Dazzling Gleam"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":826},
		"Heather Purple Pois (Corrosive)":{"level":100,"item":"Life Orb","moves":["Acid Spray","Venoshock","Power Gem","Grass Knot"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":874},
		
	},	
	"Ninetales":{	
		"Charlotte Fire Hazard (Grassy)":{"level":100,"item":"Heat Rock","moves":["Solar Beam","Flamethrower","Dark Pulse","Nasty Plot"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":672},
		"Bennett Self-Reflection (Mirror)":{"level":100,"item":"Light Clay","moves":["Solar Beam","Flamethrower","Reflect","Extrasensory"],"ability":"Drought","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1040},
		
	},	
	"Ninetales-Alola":{	
		"Boss Rush Serra (Icy)":{"level":100,"item":"Light Clay","moves":["Aurora Veil","Freeze-Dry","Moonblast","Icy Wind"],"ability":"Snow Warning","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":284},
		"Boss Rush 2 Serra (Inverse) Doubles":{"level":100,"item":"Icy Rock","moves":["Psyshock","Blizzard","Dazzling Gleam","Hidden Power Poison"],"ability":"Snow Warning","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":392},
		"Boss Rush 2 Adrienn (Fairy Tale)":{"level":100,"item":"Light Clay","moves":["Aurora Veil","Aurora Beam","Dazzling Gleam","Dark Pulse"],"ability":"Snow Warning","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":440},
		"Adrienn Happy End (Fairy Tale)":{"level":100,"item":"Light Clay","moves":["Aurora Veil","Blizzard","Moonblast","Dark Pulse"],"ability":"Snow Warning","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":746},
		"Adrienn Atop Olympus (Mountain) Dub":{"level":100,"item":"Light Clay","moves":["Aurora Veil","Blizzard","Moonblast","Dark Pulse"],"ability":"Snow Warning","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":756},
		"Lumi Bedtime Stories (Fairy Tale)":{"level":100,"item":"Light Clay","moves":["Aurora Veil","Dazzling Gleam","Freeze-Dry","Blizzard"],"ability":"Snow Warning","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1136},
		
	},	
	"Ninjask":{	
		"Shelly Miscoimmunication (Inverse)":{"level":100,"item":"Focus Sash","moves":["Baton Pass","Swords Dance","Protect","Leech Life"],"ability":"Speed Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":538},
		
	},	
	"Noivern":{	
		"Boss Rush Saphira (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Boomburst","Dragon Pulse","Flamethrower","Roost"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":356},
		"Ciel Beauty, Brutality (Dragon's Den) Doubles":{"level":100,"item":"Elemental Seed","moves":["Heat Wave","Solar Beam","Dragon Pulse","Hurricane"],"ability":"Infiltrator","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":719},
		"Ciel Suspend Disbelief (Psychic)":{"level":100,"item":"Choice Scarf","moves":["Boomburst","Dragon Pulse","Flamethrower","Hurricane"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":722},
		"Saphira Naga (Psychic)":{"level":100,"item":"Choice Specs","moves":["Hurricane","Focus Blast","Flamethrower","Dragon Pulse"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":845},
		"Elias Dabble in Distorting (Inverse)":{"level":100,"item":"Choice Specs","moves":["Boomburst","Dragon Pulse","U-turn","Hurricane"],"ability":"Frisk","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":920},
		"Arclight Make Some Noise (Big Top)":{"level":100,"item":"Life Orb","moves":["Boomburst","Heat Wave","Air Slash","Psychic"],"ability":"Infiltrator","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":953},
		"Arclight The Conductor (Water Surf)":{"level":100,"item":"Elemental Seed","moves":["Hidden Power Electric","Water Pulse","Boomburst","Dragon Pulse"],"ability":"Frisk","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":963},
		
	},	
	"Omastar":{	
		"Amaria Shadowy Anguish (Swamp)":{"level":100,"item":"White Herb","moves":["Shell Smash","Surf","Mud Shot","Ice Beam"],"ability":"Swift Swim","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":804},
		"Hardy The Ocean (Water Surf)":{"level":100,"item":"White Herb","moves":["Shell Smash","Surf","Whirlpool","Hidden Power Electric"],"ability":"Swift Swim","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":822},
		
	},	
	"Oranguru":{	
		"Radomus Telepathy Time (Psychic)":{"level":100,"item":"Focus Sash","moves":["Nasty Plot","Psychic","Focus Blast","Energy Ball"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":611},
		
	},	
	"Oricorio":{	
		"Ciel Are We Human? (Big Top) Doub":{"level":100,"item":"Synthetic Seed","moves":["Revelation Dance","Roost","Air Slash","Tailwind"],"ability":"Dancer","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":732},
		
	},	
	"Oricorio-Pa'u":{	
		"Ciel Are We Human? (Big Top) Doub":{"level":100,"item":"Synthetic Seed","moves":["Revelation Dance","Roost","Air Slash","Tailwind"],"ability":"Dancer","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":730},
		
	},	
	"Oricorio-Pom-Pom":{	
		"Ciel Are We Human? (Big Top) Doub":{"level":100,"item":"Synthetic Seed","moves":["Revelation Dance","Roost","Air Slash","Tailwind"],"ability":"Dancer","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":729},
		
	},	
	"Oricorio-Sensu":{	
		"Ciel Are We Human? (Big Top) Doub":{"level":100,"item":"Synthetic Seed","moves":["Revelation Dance","Roost","Air Slash","Tailwind"],"ability":"Dancer","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":733},
		
	},	
	"Palkia":{	
		"Boss Rush 2 Amaria (Underwater) Both":{"level":100,"item":"Life Orb","moves":["Surf","Draco Meteor","Aura Sphere","Thunder"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":456},
		"Amaria Inward Thought (Ashen Beach)":{"level":100,"item":"Life Orb","moves":["Surf","Draco Meteor","Focus Blast","Fire Blast"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":811},
		"Amaria The Tumult (Psychic)":{"level":100,"item":"Life Orb","moves":["Surf","Draco Meteor","Aura Sphere","Fire Blast"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":813},
		"Saphira Naga (Psychic)":{"level":100,"item":"Lustrous Orb","moves":["Hydro Pump","Spacial Rend","Aura Sphere","Fire Blast"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 4},"index":843},
		"Saphira Hydra (Water Surf)":{"level":100,"item":"Lustrous Orb","moves":["Hydro Pump","Spacial Rend","Aura Sphere","Thunder"],"ability":"Pressure","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":849},
		"Saphira King (Holy)":{"level":100,"item":"Lustrous Orb","moves":["Hydro Pump","Spacial Rend","Aura Sphere","Hyper Voice"],"ability":"Pressure","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":863},
		
	},	
	"Palossand":{	
		"Terra cOARSE rOUGH (Ashen Beach)":{"level":100,"item":"Leftovers","moves":["Stealth Rock","Shore Up","Hidden Power Ghost","Earth Power"],"ability":"Water Compaction","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 128,"at": 0,"df": 0,"sa": 252,"sd": 128,"sp": 0},"index":686},
		
	},	
	"Pelipper":{	
		"Ciel Above Rabble (Murkwater)":{"level":100,"item":"Damp Rock","moves":["Brine","U-turn","Roost","Hurricane"],"ability":"Drizzle","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":704},
		
	},	
	"Pheromosa":{	
		"Boss Rush 2 Shelly (Forest)":{"level":100,"item":"Life Orb","moves":["High Jump Kick","U-turn","Throat Chop","Poison Jab"],"ability":"Beast Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":378},
		"Boss Rush 2 Samson (Big Top)":{"level":100,"item":"Life Orb","moves":["U-turn","High Jump Kick","Drill Run","Ice Beam"],"ability":"Beast Boost","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":419},
		"Shelly Stage Fright (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Ice Beam","Bug Buzz","High Jump Kick"],"ability":"Beast Boost","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":526},
		"Shelly Miscoimmunication (Inverse)":{"level":100,"item":"Life Orb","moves":["U-turn","High Jump Kick","Poison Jab","Return"],"ability":"Beast Boost","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":539},
		"Shelly Easy CompSci (Glitch)":{"level":100,"item":"Life Orb","moves":["High Jump Kick","Lunge","Hyper Beam","Drill Run"],"ability":"Beast Boost","nature":"Naughty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 252,"sa": 0,"sd": 0,"sp": 0},"index":546},
		"Samson Grow Strong (Forest)":{"level":100,"item":"Telluric Seed","moves":["Bug Buzz","Focus Blast","Ice Beam","U-turn"],"ability":"Beast Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":660},
		"Bennett Love of Showmanship (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Ice Beam","Bug Buzz","High Jump Kick"],"ability":"Beast Boost","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1035},
		"Eve Ultra-Precise Analysis (Glitch)":{"level":100,"item":"Life Orb","moves":["U-turn","High Jump Kick","Blizzard","Outrage"],"ability":"Beast Boost","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1115},
		
	},	
	"Pidgeot-Mega":{	
		"Boss Rush Noel (Holy, Keen Eye)":{"level":100,"item":"Pidgeotite","moves":["Hurricane","Uproar","Roost","Heat Wave"],"ability":"No Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":293},
		"Boss Rush 2 Noel (Holy, Keen Eye)":{"level":100,"item":"Pidgeotite","moves":["Hurricane","Uproar","Roost","Heat Wave"],"ability":"No Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":400},
		
	},	
	"Pinsir-Mega":{	
		"Boss Rush Shelly (Forest, Hyper Cutter)":{"level":100,"item":"Pinsirite","moves":["Swords Dance","Return","Quick Attack","Earthquake"],"ability":"Aerilate","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":271},
		"Boss Rush 2 Shelly (Forest, Hyp Cut)":{"level":100,"item":"Pinsirite","moves":["Swords Dance","Return","Quick Attack","Earthquake"],"ability":"Aerilate","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":379},
		"Shelly Buggie Paddle (Water Surf)":{"level":100,"item":"Pinsirite","moves":["Quick Attack","Close Combat","Swords Dance","Return"],"ability":"Aerilate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":534},
		
	},	
	"Porygon-Z":{	
		"Boss Rush Noel (Holy)":{"level":100,"item":"Normalium Z","moves":["Psychic","Conversion","Tri Attack","Ice Beam"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":291},
		"Boss Rush 2 Noel (Holy)":{"level":100,"item":"Normalium Z","moves":["Psychic","Conversion","Tri Attack","Ice Beam"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":398},
		"Noel Entrainment (Inverse) Doubles":{"level":100,"item":"Normalium Z","moves":["Blizzard","Conversion","Recover","Signal Beam"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":599},
		"Noel Illustrated (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Recover","Nasty Plot","Tri Attack","Hidden Power Ghost"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":602},
		"Elias Dabble in Distorting (Inverse)":{"level":100,"item":"Choice Scarf","moves":["Trick","Tri Attack","Thunderbolt","Ice Beam"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":921},
		"Anna Seeing Stars (Starlight) Doub":{"level":100,"item":"Magical Seed","moves":["Swift","Psychic","Signal Beam","Dark Pulse"],"ability":"Adaptability","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":936},
		"Blake Console Defrag (Glitch) Doub":{"level":100,"item":"Synthetic Seed","moves":["Thunderbolt","Psychic","Blizzard","Recover"],"ability":"Adaptability","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":1075},
		
	},	
	"Porygon2":{	
		"Blake Console Defrag (Glitch) Doub":{"level":100,"item":"Normalium Z","moves":["Psychic","Conversion","Blizzard","Recover"],"ability":"Download","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":1074},
		"Blake Can't Touch This (Mirror)":{"level":100,"item":"Eviolite","moves":["Double Team","Ice Beam","Toxic","Tri Attack"],"ability":"Trace","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 56,"sa": 0,"sd": 200,"sp": 0},"index":1085},
		
	},	
	"Primarina":{	
		"Boss Rush Amaria (Water Surf) Both":{"level":100,"item":"Choice Specs","moves":["Scald","Psychic","Moonblast","Ice Beam"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":349},
		"Adrienn Happy End (Fairy Tale)":{"level":100,"item":"Primarium Z","moves":["Sparkling Aria","Moonblast","Psychic","Shadow Ball"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":747},
		"Adrienn Atop Olympus (Mountain) Doubles":{"level":100,"item":"Life Orb","moves":["Hyper Voice","Moonblast","Blizzard","Shadow Ball"],"ability":"Liquid Voice","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":757},
		"Amaria Contrary Impulses (Glitch)":{"level":100,"item":"Life Orb","moves":["Hydro Cannon","Blizzard","Psychic","Energy Ball"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":799},
		"Arclight Make Some Noise (Big Top)":{"level":100,"item":"Life Orb","moves":["Sparkling Aria","Moonblast","Energy Ball","Blizzard"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":952},
		"Arclight The Conductor (Water Surf)":{"level":100,"item":"Assault Vest","moves":["Sparkling Aria","Ice Beam","Energy Ball","Moonblast"],"ability":"Torrent","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":965},
		"Cain Pretty Boy (Rainbow)":{"level":100,"item":"Assault Vest","moves":["Moonblast","Sparkling Aria","Ice Beam","Hidden Power Ground"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":975},
		"Cain Sing For Me! (Big Top)":{"level":100,"item":"Assault Vest","moves":["Sing","Sparkling Aria","Moonblast","Blizzard"],"ability":"Torrent","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":985},
		"Ace Technological Trickster (Glitch)":{"level":100,"item":"Leftovers","moves":["Amnesia","Scald","Blizzard","Energy Ball"],"ability":"Torrent","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1178},
		
	},	
	"Pyroar":{	
		"Boss Rush Noel (Holy)":{"level":100,"item":"Magical Seed","moves":["Flamethrower","Hyper Voice","Solar Beam","Sunny Day"],"ability":"Rivalry","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":290},
		"Boss Rush 2 Noel (Holy)":{"level":100,"item":"Magical Seed","moves":["Flamethrower","Hyper Voice","Taunt","Toxic"],"ability":"Rivalry","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":402},
		"Noel Entrainment (Inverse) Doubles":{"level":100,"item":"Life Orb","moves":["Heat Wave","Snarl","Entrainment","Hyper Voice"],"ability":"Moxie","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":601},
		"Elias Who's GM Now? (Chess: B) Doub":{"level":100,"item":"Flame Plate","moves":["Hyper Voice","Heat Wave","Work Up","Hidden Power Electric"],"ability":"Rivalry","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":930},
		
	},	
	"Pyukumuku":{	
		"Anna Millennial Puzzles (Chess: R)":{"level":100,"item":"Leftovers","moves":["Recover","Soak","Toxic","Block"],"ability":"Unaware","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 100,"sa": 0,"sd": 156,"sp": 0},"index":942},
		
	},	
	"Quagsire":{	
		"Terra gettin wet ;) (Underwater)":{"level":100,"item":"Leftovers","moves":["Aqua Tail","Ice Punch","Recover","Curse"],"ability":"Unaware","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":694},
		
	},	
	"Qwilfish":{	
		"Aya Acridity (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Waterfall","Swords Dance","Poison Jab","Throat Chop"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":563},
		"Amaria Shadowy Anguish (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Toxic Spikes","Poison Jab","Liquidation","Swords Dance"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":800},
		
	},	
	"Raichu-Alola":{	
		"Boss Rush Julia (Electric)":{"level":100,"item":"Aloraichium Z","moves":["Thunderbolt","Psyshock","Nasty Plot","Surf"],"ability":"Surge Surfer","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":257},
		"Julia Deal With It (Water Surf) Doubles":{"level":100,"item":"Focus Sash","moves":["Thunderbolt","Psyshock","Nasty Plot","Focus Blast"],"ability":"Surge Surfer","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":474},
		"Arclight The Conductor (Water Surf)":{"level":100,"item":"Focus Sash","moves":["Nasty Plot","Thunderbolt","Surf","Psyshock"],"ability":"Surge Surfer","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":962},
		"Fern Come on and Smile! (Forest)":{"level":100,"item":"Aloraichium Z","moves":["Grass Knot","Signal Beam","Psyshock","Thunderbolt"],"ability":"Surge Surfer","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1007},
		
	},	
	"Rampardos":{	
		"Hardy Lucy in the Sky (Crys Cav)":{"level":100,"item":"Choice Scarf","moves":["Rock Tomb","Zen Headbutt","Superpower","Strength"],"ability":"Sheer Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":833},
		
	},	
	"Rayquaza":{	
		"Ciel Beauty, Brutality (Dragon's Den) Doub":{"level":100,"item":"Life Orb","moves":["Dragon Ascent","V-Create","Earthquake","Dragon Dance"],"ability":"Air Lock","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":721},
		"Saphira Wyrm (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Dragon Ascent","Dragon Dance","Extreme Speed","Iron Head"],"ability":"Air Lock","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":859},
		"Heather Polar Princess (Snow Mount)":{"level":100,"item":"Telluric Seed","moves":["Twister","Icy Wind","Thunder","Ancient Power"],"ability":"Air Lock","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":868},
		"Heather Dance Danger (Drag Den)":{"level":100,"item":"Life Orb","moves":["Extreme Speed","V-Create","Earthquake","Dragon Claw"],"ability":"Air Lock","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":882},
		
	},	
	"Rayquaza-Mega":{	
		"Boss Rush 2 Saphira (Dragon's Den)":{"level":100,"item":"Life Orb","moves":["Dragon Ascent","Dragon Dance","Extreme Speed","Iron Head"],"ability":"Delta Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":466},
		"Ciel New Horizons (New World)":{"level":100,"item":"Life Orb","moves":["Dragon Ascent","V-Create","Earthquake","Extreme Speed"],"ability":"Delta Stream","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":715},
		"Saphira King (Holy)":{"level":100,"item":"Life Orb","moves":["Dragon Ascent","Dragon Dance","Extreme Speed","Iron Tail"],"ability":"Delta Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":865},
		
	},	
	"Regice":{	
		"Serra Noitcelfer (Inverse)":{"level":100,"item":"Magical Seed","moves":["Blizzard","Aurora Veil","Signal Beam","Explosion"],"ability":"Ice Body","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":576},
		"Serra Digital Imaging (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Rock Polish","Amnesia","Blizzard","Thunderbolt"],"ability":"Clear Body","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 128,"at": 0,"df": 0,"sa": 0,"sd": 252,"sp": 128},"index":583},
		
	},	
	"Regigigas":{	
		"Noel Abnormal (Inverse)":{"level":100,"item":"Magical Seed","moves":["Thunder Punch","Drain Punch","Return","Knock Off"],"ability":"Slow Start","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":585},
		"Noel Entrainment (Inverse) Doubles":{"level":100,"item":"Magical Seed","moves":["Drain Punch","Return","Stone Edge","Knock Off"],"ability":"Slow Start","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":598},
		
	},	
	"Regirock":{	
		"Hardy Lucy in the Sky (Crys Cav)":{"level":100,"item":"Leftovers","moves":["Stone Edge","Drain Punch","Rock Polish","Fire Punch"],"ability":"Sturdy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":835},
		"Anna Millennial Puzzles (Chess: Q)":{"level":100,"item":"Leftovers","moves":["Stone Edge","Earthquake","Drain Punch","Protect"],"ability":"Clear Body","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":943},
		
	},	
	"Reshiram":{	
		"Boss Rush 2 Charlotte (SHeat) Doubles":{"level":100,"item":"Elemental Seed","moves":["Blue Flare","Roost","Earth Power","Dragon Pulse"],"ability":"Turboblaze","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":424},
		"Charlotte Fire Hazard (Grassy)":{"level":100,"item":"Life Orb","moves":["Solar Beam","Blue Flare","Dragon Pulse","Roost"],"ability":"Turboblaze","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":669},
		"Charlotte Like Mom/Pop (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Earth Power","Blue Flare","Dragon Pulse","Roost"],"ability":"Turboblaze","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":677},
		
	},	
	"Reuniclus":{	
		"Radomus Black/Purp (Psychic) Doubles":{"level":100,"item":"Life Orb","moves":["Calm Mind","Psyshock","Shadow Ball","Focus Blast"],"ability":"Overcoat","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 252,"sp": 0},"index":614},
		"Ace Eyes of Fire (Burning)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Psyshock","Recover","Hidden Power Fire"],"ability":"Magic Guard","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":1171},
		
	},	
	"Rhyperior":{	
		"Hardy Lucy in the Sky (Crys Cav)":{"level":100,"item":"Choice Band","moves":["Drill Run","Rock Tomb","Megahorn","Hammer Arm"],"ability":"Solid Rock","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":834},
		"Hardy Bites The Dust (Desert) Doub":{"level":100,"item":"Assault Vest","moves":["Drill Run","Megahorn","Rock Slide","Superpower"],"ability":"Solid Rock","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":839},
		
	},	
	"Ribombee":{	
		"Boss Rush Shelly (Forest)":{"level":100,"item":"Telluric Seed","moves":["Sticky Web","Moonblast","Quiver Dance","Bug Buzz"],"ability":"Honey Gather","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":266},
		"Boss Rush Adrienn (Misty)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Moonblast","U-turn","Bug Buzz"],"ability":"Shield Dust","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":332},
		"Boss Rush 2 Shelly (Forest)":{"level":100,"item":"Telluric Seed","moves":["Sticky Web","Moonblast","Quiver Dance","Bug Buzz"],"ability":"Honey Gather","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":374},
		"Shelly Stage Fright (Big Top)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Quiver Dance","Moonblast","Stun Spore"],"ability":"Honey Gather","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":524},
		"Shelly Miscoimmunication (Inverse)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Quiver Dance","Stun Spore","Bug Buzz"],"ability":"Honey Gather","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":536},
		"Bennett Self-Reflection (Mirror)":{"level":100,"item":"Focus Sash","moves":["Signal Beam","Quiver Dance","Dazzling Gleam","Nature Power"],"ability":"Shield Dust","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1042},
		"Taka Legacy (Dragon's Den) Doub":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Quiver Dance","Moonblast","Pollen Puff"],"ability":"Sweet Veil","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1064},
		"Lumi Teamwork! (Inverse)":{"level":100,"item":"Focus Sash","moves":["Sticky Web","Quiver Dance","Baton Pass","Pollen Puff"],"ability":"Sweet Veil","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1124},
		
	},	
	"Roserade":{	
		"Florinia Wetland Rose (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Sleep Powder","Sludge Bomb","Giga Drain","Shadow Ball"],"ability":"Natural Cure","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":517},
		"Aya Toxicity (Corrosive)":{"level":100,"item":"Life Orb","moves":["Sleep Powder","Sludge Bomb","Giga Drain","Toxic Spikes"],"ability":"Natural Cure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":566},
		"Laura Wisteria (Flower Gard) Doub":{"level":100,"item":"Choice Specs","moves":["Sludge Bomb","Giga Drain","Extrasensory","Hidden Power Fire"],"ability":"Natural Cure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":895},
		"Cain Pretty Boy (Rainbow)":{"level":100,"item":"Focus Sash","moves":["Toxic Spikes","Spikes","Leaf Storm","Sludge Bomb"],"ability":"Natural Cure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":974},
		"Cain Subverted Expectations (Inverse)":{"level":100,"item":"Life Orb","moves":["Leaf Storm","Giga Drain","Sludge Bomb","Shadow Ball"],"ability":"Poison Point","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":990},
		"Eve Technical Expertise (Factory)":{"level":100,"item":"Life Orb","moves":["Giga Drain","Dazzling Gleam","Venoshock","Shadow Ball"],"ability":"Technician","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1106},
		
	},	
	"Rotom":{	
		"Julia Kitchen (Murkwater)":{"level":100,"item":"Wiki Berry","moves":["Hex","Volt Switch","Will-O-Wisp","Signal Beam"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":481},
		
	},	
	"Rotom-Heat":{	
		"Boss Rush Charlotte (Burning) Doubles":{"level":100,"item":"Firium Z","moves":["Discharge","Overheat","Volt Switch","Thunder Wave"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":314},
		"Julia Kitchen (Murkwater)":{"level":100,"item":"Wiki Berry","moves":["Overheat","Volt Switch","Toxic","Hidden Power Grass"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":480},
		"Blake Console Defrag (Glitch) Doub":{"level":100,"item":"Assault Vest","moves":["Volt Switch","Thunderbolt","Overheat","Hidden Power Ice"],"ability":"Levitate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":1071},
		
	},	
	"Rotom-Fan":{	
		"Julia Kitchen (Murkwater)":{"level":100,"item":"Wiki Berry","moves":["Air Slash","Volt Switch","Defog","Hidden Power Ice"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":478},
		
	},	
	"Rotom-Frost":{	
		"Boss Rush Serra (Icy)":{"level":100,"item":"Icium Z","moves":["Blizzard","Volt Switch","Dark Pulse","Thunder"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":289},
		"Julia Kitchen (Murkwater)":{"level":100,"item":"Icium Z","moves":["Blizzard","Volt Switch","Will-O-Wisp","Hidden Power Fighting"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":479},
		"Blake Console Defrag (Glitch) Doub":{"level":100,"item":"Synthetic Seed","moves":["Blizzard","Thunderbolt","Will-O-Wisp","Pain Split"],"ability":"Levitate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":1070},
		
	},	
	"Rotom-Mow":{	
		"Julia Kitchen (Murkwater)":{"level":100,"item":"Wiki Berry","moves":["Leaf Storm","Volt Switch","Toxic","Hidden Power Rock"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":477},
		"Florinia Alpine Rose (Mountain) Doubles":{"level":100,"item":"Wiki Berry","moves":["Leaf Storm","Thunder","Defog","Ominous Wind"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":510},
		"Fern Come on and Smile! (Forest)":{"level":100,"item":"White Herb","moves":["Leaf Storm","Signal Beam","Rain Dance","Thunder"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1009},
		"Blake Console Defrag (Glitch) Doub":{"level":100,"item":"Assault Vest","moves":["Volt Switch","Thunderbolt","Leaf Storm","Hidden Power Ice"],"ability":"Levitate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":1072},
		
	},	
	"Rotom-Wash":{	
		"Boss Rush Julia (Electric)":{"level":100,"item":"Elemental Seed","moves":["Hydro Pump","Thunderbolt","Will-O-Wisp","Shadow Ball"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":255},
		"Boss Rush Amaria (Water Surf) Both":{"level":100,"item":"Wiki Berry","moves":["Hydro Pump","Volt Switch","Dark Pulse","Will-O-Wisp"],"ability":"Levitate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":345},
		"Boss Rush 2 Julia (Electric)":{"level":100,"item":"Elemental Seed","moves":["Hydro Pump","Thunderbolt","Will-O-Wisp","Signal Beam"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":364},
		"Julia Deal With It (Water Surf) Both":{"level":100,"item":"Wiki Berry","moves":["Hydro Pump","Discharge","Will-O-Wisp","Signal Beam"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":470},
		"Julia Kitchen (Murkwater)":{"level":100,"item":"Wiki Berry","moves":["Hydro Pump","Volt Switch","Will-O-Wisp","Signal Beam"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":476},
		"Arclight Night Club (Short Circ)":{"level":100,"item":"Leftovers","moves":["Hydro Pump","Discharge","Pain Split","Shadow Ball"],"ability":"Levitate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":971},
		"Blake Console Defrag (Glitch) Doub":{"level":100,"item":"Leftovers","moves":["Hydro Pump","Thunderbolt","Toxic","Protect"],"ability":"Levitate","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":1073},
		"Lumi Ametrine Blues (Water Surf)":{"level":100,"item":"Elemental Seed","moves":["Hex","Pain Split","Blizzard","Thunder"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1132},
		
	},	
	"Salamence":{	
		"Ciel Beauty, Brutality (Dragon's Den) Doub":{"level":100,"item":"Flyinium Z","moves":["Dragon Claw","Earthquake","Aerial Ace","Dragon Dance"],"ability":"Intimidate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":718},
		
	},	
	"Salamence-Mega":{	
		"Boss Rush Ciel (Murk, Intim) Dub":{"level":100,"item":"Salamencite","moves":["Dragon Dance","Return","Rock Slide","Earthquake"],"ability":"Aerilate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":329},
		"Boss Rush 2 Ciel (Mount, Intim) 2x":{"level":100,"item":"Salamencite","moves":["Dragon Dance","Return","Rock Slide","Earthquake"],"ability":"Aerilate","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":438},
		"Heather Polar Princess (SMount, Int)":{"level":100,"item":"Salamencite","moves":["Hyper Voice","Hidden Power Ice","Roost","Ominous Wind"],"ability":"Aerilate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":869},
		"Heather Dance Danger (Drag Den, Int)":{"level":100,"item":"Salamencite","moves":["Return","Fire Fang","Dragon Dance","Earthquake"],"ability":"Aerilate","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":878},
		
	},	
	"Salazzle":{	
		"Aya Toxicity (Corrosive)":{"level":100,"item":"Telluric Seed","moves":["Venoshock","Nasty Plot","Fire Blast","Hidden Power Ice"],"ability":"Corrosion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":567},
		"Heather Purple Pois (Corrosive)":{"level":100,"item":"Telluric Seed","moves":["Venoshock","Flamethrower","Nasty Plot","Dragon Pulse"],"ability":"Corrosion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":872},
		"Heather Dance Danger (Drag Den)":{"level":100,"item":"Focus Sash","moves":["Fake Out","Flamethrower","Sludge Wave","Dragon Pulse"],"ability":"Corrosion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":881},
		
	},	
	"Samurott":{	
		"Amaria Contrary Impulses (Glitch)":{"level":100,"item":"Life Orb","moves":["Hydro Pump","Aqua Jet","Blizzard","Megahorn"],"ability":"Torrent","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":798},
		
	},	
	"Sandslash-Alola":{	
		"Blake Can't Touch This (Mirror)":{"level":100,"item":"Bright Powder","moves":["Double Team","Icicle Crash","Iron Head","Substitute"],"ability":"Slush Rush","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":1087},
		"Lumi Bedtime Stories (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Icicle Crash","Iron Head","Swords Dance","Aqua Tail"],"ability":"Slush Rush","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1140},
		
	},	
	"Sawsbuck":{	
		"Florinia Reconsideraton (Inverse)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Horn Leech","Jump Kick","Return"],"ability":"Chlorophyll","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":498},
		"Noel Defaulted (Glitch)":{"level":100,"item":"Life Orb","moves":["Swords Dance","Giga Impact","Megahorn","Jump Kick"],"ability":"Chlorophyll","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":594},
		"Elias Who's GM Now? (Chess: K) Doub":{"level":100,"item":"Focus Sash","moves":["Horn Leech","Return","Jump Kick","Stomping Tantrum"],"ability":"Chlorophyll","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":929},
		
	},	
	"Sceptile-Mega":{	
		"Florinia Standard (Grassy)":{"level":100,"item":"Sceptilite","moves":["Dragon Pulse","Frenzy Plant","Earthquake","Giga Drain"],"ability":"Lightning Rod","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":503},
		"Fern Hero's Journey (Fairy Tale)":{"level":100,"item":"Sceptilite","moves":["Dragon Pulse","Nature Power","Giga Drain","Focus Blast"],"ability":"Lightning Rod","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1001},
		
	},	
	"Scizor":{	
		"Boss Rush Shelly (Forest)":{"level":100,"item":"Life Orb","moves":["Bullet Punch","Bug Bite","Swords Dance","U-turn"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 252,"sa": 0,"sd": 0,"sp": 0},"index":267},
		"Boss Rush Titania (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Swords Dance","Bullet Punch","U-turn","Roost"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":343},
		"Boss Rush 2 Shelly (Forest)":{"level":100,"item":"Life Orb","moves":["Bullet Punch","Bug Bite","Swords Dance","U-turn"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":375},
		"Bennett Love of Showmanship (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Swords Dance","Bullet Punch","Roost","Bug Bite"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":1037},
		
	},	
	"Scizor-Mega":{	
		"Eve Technical Expertise (Factory)":{"level":100,"item":"Scizorite","moves":["Swords Dance","Bullet Punch","X-Scissor","Roost"],"ability":"Technician","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1108},
		
	},	
	"Scolipede":{	
		"Boss Rush 2 Aya (Wasteland)":{"level":100,"item":"Focus Sash","moves":["Swords Dance","Megahorn","Aqua Tail","Poison Jab"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":386},
		"Shelly Miscoimmunication (Inverse)":{"level":100,"item":"Focus Sash","moves":["Baton Pass","Swords Dance","Protect","Megahorn"],"ability":"Poison Point","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":541},
		"Cain Subverted Expectations (Inverse)":{"level":100,"item":"Magical Seed","moves":["Baton Pass","Protect","Megahorn","Poison Jab"],"ability":"Speed Boost","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":986},
		
	},	
	"Seismitoad":{	
		"Terra gettin wet ;) (Underwater)":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Water Pulse","Earth Power","Sludge Bomb"],"ability":"Water Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":692},
		"Terra ENTIRE CIRCUS!! (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Rain Dance","Earthquake","Scald","Drain Punch"],"ability":"Swift Swim","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 200,"df": 0,"sa": 56,"sd": 0,"sp": 252},"index":703},
		
	},	
	"Serperior":{	
		"Florinia Standard (Grassy)":{"level":100,"item":"Assault Vest","moves":["Leaf Storm","Dragon Tail","Frenzy Plant","Aqua Tail"],"ability":"Overgrow","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":505},
		"Fern Contrarian (Swamp)":{"level":100,"item":"Expert Belt","moves":["Leaf Storm","Nature Power","Hidden Power Fire","Dragon Pulse"],"ability":"Contrary","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":995},
		
	},	
	"Sharpedo":{	
		"Luna Mermaid Depths (Water Surf)":{"level":100,"item":"Life Orb","moves":["Protect","Crunch","Waterfall","Poison Jab"],"ability":"Speed Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":643},
		
	},	
	"Shaymin":{	
		"Florinia Science Show (Big Top)":{"level":100,"item":"Life Orb","moves":["Nature Power","Dazzling Gleam","Seed Flare","Earth Power"],"ability":"Natural Cure","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":521},
		
	},	
	"Shaymin-Sky":{	
		"Boss Rush Florinia (Forest)":{"level":100,"item":"Life Orb","moves":["Seed Flare","Air Slash","Earth Power","Dazzling Gleam"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":263},
		"Boss Rush Ciel (Murkwater) Doubles":{"level":100,"item":"Assault Vest","moves":["Earth Power","Seed Flare","Air Slash","Dazzling Gleam"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":331},
		"Boss Rush 2 Florinia (Forest)":{"level":100,"item":"Life Orb","moves":["Seed Flare","Air Slash","Earth Power","Dazzling Gleam"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":369},
		"Boss Rush 2 Ciel (Mountain) Doubles":{"level":100,"item":"Assault Vest","moves":["Earth Power","Seed Flare","Air Slash","Dazzling Gleam"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":439},
		"Florinia Alpine Rose (Mountain) Doubles":{"level":100,"item":"Life Orb","moves":["Air Slash","Dazzling Gleam","Nature Power","Seed Flare"],"ability":"Serene Grace","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":508},
		"Ciel New Horizons (New World)":{"level":100,"item":"Life Orb","moves":["Seed Flare","Earth Power","Dazzling Gleam","Air Slash"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":714},
		"Elias Natural Consequences (Holy)":{"level":100,"item":"Sky Plate","moves":["Nature Power","Seed Flare","Hidden Power Ice","Psychic"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":919},
		"Zero Zero Gravity (New World)":{"level":100,"item":"Yache Berry","moves":["Seed Flare","Air Slash","Dazzling Gleam","Swift"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1153},
		
	},	
	"Shedinja":{	
		"Shelly Easy CompSci (Glitch)":{"level":100,"item":"Synthetic Seed","moves":["Bug Buzz","Swords Dance","Shadow Ball","Giga Impact"],"ability":"Wonder Guard","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":545},
		"Bennett A Game of Intellect (Chess: P)":{"level":100,"item":"Safety Goggles","moves":["Will-O-Wisp","Swords Dance","Shadow Sneak","X-Scissor"],"ability":"Wonder Guard","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1028},
		
	},	
	"Shuckle":{	
		"Shelly Easy CompSci (Glitch)":{"level":100,"item":"Watmel Berry","moves":["Hidden Power Grass","Sticky Web","Stealth Rock","Natural Gift"],"ability":"Sturdy","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":542},
		
	},	
	"Sigilyph":{	
		"Ciel Suspend Disbelief (Psychic)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Air Slash","Roost","Energy Ball"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":725},
		"Anna Unforseen Futurity (New World)":{"level":100,"item":"Mind Plate","moves":["Future Sight","Cosmic Power","Roost","Ancient Power"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 0,"sp": 252},"index":946},
		"Ace Eyes of Fire (Burning)":{"level":100,"item":"Elemental Seed","moves":["Air Slash","Heat Wave","Psychic","Roost"],"ability":"Magic Guard","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1166},
		
	},	
	"Silvally":{	
		"Lin puppies! (arkus, Holy)":{"level":100,"item":"Focus Sash","moves":["Parting Shot","Multi-Attack","Thunder Wave","Swagger"],"ability":"Rks System","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1196},
		"Lin puppies! (r.seuss, Holy)":{"level":100,"item":"Leftovers","moves":["Swords Dance","Multi-Attack","Flame Charge","Rock Slide"],"ability":"Rks System","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1197},
		"Lin puppies! (orcas, Holy)":{"level":100,"item":"Magical Seed","moves":["Parting Shot","Draco Meteor","Tri Attack","Icy Wind"],"ability":"Rks System","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1198},
		"Lin puppies! (keys, Holy)":{"level":100,"item":"Magical Seed","moves":["Parting Shot","Air Slash","Flash Cannon","Flamethrower"],"ability":"Rks System","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1199},
		"Lin puppies! (barkyus, Holy)":{"level":100,"item":"Choice Band","moves":["Parting Shot","Multi-Attack","Crunch","Outrage"],"ability":"Rks System","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1200},
		
	},	
	"Silvally-Psychic":{	
		"Lin old habits (New World)":{"level":100,"item":"Psychic Memory","moves":["Multi-Attack","Shift Gear","Drain Punch","Crunch"],"ability":"Rks System","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1212},
		
	},	
	"Skarmory":{	
		"Titania Legless Sea (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Whirlwind","Roost","Brave Bird","Stealth Rock"],"ability":"Keen Eye","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":770},
		
	},	
	"Slaking":{	
		"Noel Entrainment (Inverse) Doubles":{"level":100,"item":"Life Orb","moves":["Sucker Punch","Return","Gunk Shot","Rock Slide"],"ability":"Truant","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":597},
		
	},	
	"Slowbro":{	
		"Amaria Inward Thought (Ashen Beach)":{"level":100,"item":"Assault Vest","moves":["Focus Blast","Surf","Psychic","Flamethrower"],"ability":"Regenerator","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 252,"sp": 0},"index":808},
		
	},	
	"Slowbro-Mega":{	
		"Radomus Black/Purp (Psy, Obliv) Dub":{"level":100,"item":"Slowbronite","moves":["Blizzard","Surf","Psyshock","Slack Off"],"ability":"Shell Armor","nature":"Relaxed","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":618},
		"Amaria The Tumult (Psychic, Regen)":{"level":100,"item":"Slowbronite","moves":["Focus Blast","Surf","Psychic","Flamethrower"],"ability":"Shell Armor","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 252,"sp": 0},"index":814},
		
	},	
	"Smeargle":{	
		"Noel Entrainment (Inverse) Doubles":{"level":100,"item":"Focus Sash","moves":["Entrainment","Spore","Sticky Web","Stealth Rock"],"ability":"Own Tempo","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":596},
		
	},	
	"Solgaleo":{	
		"Titania Desert Blindness (Desert)":{"level":100,"item":"Solganium Z","moves":["Sunsteel Strike","Crunch","Earthquake","Stone Edge"],"ability":"Full Metal Body","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":766},
		"Lumi Bedtime Stories (Fairy Tale)":{"level":100,"item":"Assault Vest","moves":["Sunsteel Strike","Flare Blitz","Earthquake","Zen Headbutt"],"ability":"Full Metal Body","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1138},
		
	},	
	"Stakataka":{	
		"Titania Psychic Spindle (Psychic)":{"level":100,"item":"Assault Vest","moves":["Gyro Ball","Earthquake","Stone Edge","Zen Headbutt"],"ability":"Beast Boost","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":785},
		"Anna Millennial Puzzles (Chess: R)":{"level":100,"item":"Rockium Z","moves":["Trick Room","Gyro Ball","Stone Edge","Earthquake"],"ability":"Beast Boost","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":939},
		"Taka Stack o' Taka (1, Short Circ) Doub":{"level":100,"item":"Amplifield Rock","moves":["Trick Room","Earthquake","Gyro Ball","Rock Slide"],"ability":"Beast Boost","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1046},
		"Taka Stack o' Taka (2, Short Circ) Doub":{"level":100,"item":"Synthetic Seed","moves":["Stealth Rock","Gyro Ball","Rock Slide","Sandstorm"],"ability":"Beast Boost","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":1047},
		"Taka Stack o' Taka (3, Short Circ) Doub":{"level":100,"item":"Choice Band","moves":["Gyro Ball","Earthquake","Rock Slide","Superpower"],"ability":"Beast Boost","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1048},
		"Taka Stack o' Taka (4, Short Circ) Doub":{"level":100,"item":"Synthetic Seed","moves":["Zen Headbutt","Gyro Ball","Rock Slide","Sandstorm"],"ability":"Beast Boost","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1049},
		"Taka Stack o' Taka (5, Short Circ) Doub":{"level":100,"item":"Leftovers","moves":["Gyro Ball","Toxic","Wide Guard","Rock Slide"],"ability":"Beast Boost","nature":"Sassy","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":1050},
		"Taka Stack o' Taka (6, Short Circ) Doub":{"level":100,"item":"Synthetic Seed","moves":["Brutal Swing","Gyro Ball","Rock Slide","Zen Headbutt"],"ability":"Beast Boost","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1051},
		"Eve Ultra-Precise Analysis (Glitch)":{"level":100,"item":"Leftovers","moves":["Earthquake","Stone Edge","Stealth Rock","Rest"],"ability":"Beast Boost","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 0,"sa": 0,"sd": 252,"sp": 0},"index":1117},
		
	},	
	"Staraptor":{	
		"Noel Abnormal (Inverse)":{"level":100,"item":"Choice Scarf","moves":["U-turn","Brave Bird","Double-Edge","Close Combat"],"ability":"Reckless","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":588},
		"Noel Defaulted (Glitch)":{"level":100,"item":"Life Orb","moves":["U-turn","Brave Bird","Giga Impact","Close Combat"],"ability":"Reckless","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":590},
		
	},	
	"Starmie":{	
		"Boss Rush Radomus (Starlight)":{"level":100,"item":"Life Orb","moves":["Scald","Rapid Spin","Psyshock","Dazzling Gleam"],"ability":"Illuminate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":297},
		"Radomus Celestial Wisdom (Ashen Beach)":{"level":100,"item":"Life Orb","moves":["Surf","Psychic","Hidden Power Ghost","Rapid Spin"],"ability":"Illuminate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":630},
		"Amaria Inward Thought (Ashen Beach)":{"level":100,"item":"Life Orb","moves":["Surf","Ice Beam","Psychic","Hidden Power Bug"],"ability":"Illuminate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":810},
		"Amaria The Tumult (Psychic)":{"level":100,"item":"Life Orb","moves":["Surf","Ice Beam","Psychic","Calm Mind"],"ability":"Illuminate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":815},
		"Laura Octopetala (Starlight)":{"level":100,"item":"Darkinium Z","moves":["Knock Off","Hidden Power Psychic","Giga Drain","Rock Slide"],"ability":"Gluttony","nature":"Naive","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 128,"df": 0,"sa": 128,"sd": 0,"sp": 252},"index":906},
		"Arclight Sole Sight (Dark Crystal Cavern)":{"level":100,"item":"Magical Seed","moves":["Power Gem","Flash Cannon","Hydro Pump","Dazzling Gleam"],"ability":"Natural Cure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":956},
		"Blake Can't Touch This (Mirror)":{"level":100,"item":"Light Clay","moves":["Substitute","Light Screen","Reflect","Ice Beam"],"ability":"Illuminate","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1083},
		
	},	
	"Steelix-Mega":{	
		"Terra SEEDZ NUTZ (Corrosive Mist)":{"level":100,"item":"Steelixite","moves":["Sandstorm","Gyro Ball","Earthquake","Curse"],"ability":"Sand Force","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 128,"at": 252,"df": 0,"sa": 0,"sd": 128,"sp": 0},"index":683},
		"Titania Desert Blindness (Desert)":{"level":100,"item":"Steelixite","moves":["Earthquake","Iron Head","Stone Edge","Rock Polish"],"ability":"Sand Force","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":767},
		
	},	
	"Swampert-Mega":{	
		"Boss Rush Amaria (Watr Surf, Damp) ?":{"level":100,"item":"Swampertite","moves":["Waterfall","Earthquake","Ice Punch","Stealth Rock"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":344},
		"Boss Rush 2 Amaria (Undrwat, Damp) ?":{"level":100,"item":"Swampertite","moves":["Dive","Aqua Tail","Stealth Rock","Superpower"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":455},
		"Terra gettin wet ;) (Underwater)":{"level":100,"item":"Swampertite","moves":["Waterfall","Earthquake","Stone Edge","Superpower"],"ability":"Swift Swim","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":693},
		"Amaria Contrary Impulses (Glitch)":{"level":100,"item":"Swampertite","moves":["Hydro Cannon","Earthquake","Superpower","Stone Edge"],"ability":"Swift Swim","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":797},
		"Amaria Shadowy Anguish (Swamp)":{"level":100,"item":"Swampertite","moves":["Waterfall","Earthquake","Superpower","Stealth Rock"],"ability":"Swift Swim","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 252},"index":801},
		
	},	
	"Swellow":{	
		"Noel Defaulted (Glitch)":{"level":100,"item":"Life Orb","moves":["U-turn","Boomburst","Giga Impact","Air Slash"],"ability":"Scrappy","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":595},
		
	},	
	"Swoobat":{	
		"Ciel Suspend Disbelief (Psychic)":{"level":100,"item":"Focus Sash","moves":["Calm Mind","Air Slash","Roost","Stored Power"],"ability":"Simple","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":723},
		
	},	
	"Sylveon":{	
		"Boss Rush Adrienn (Misty)":{"level":100,"item":"Leftovers","moves":["Hyper Voice","Wish","Protect","Heal Bell"],"ability":"Pixilate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":334},
		"Boss Rush 2 Adrienn (Fairy Tale)":{"level":100,"item":"Leftovers","moves":["Swift","Wish","Protect","Heal Bell"],"ability":"Pixilate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":441},
		"Adrienn Chronomancy (Psychic)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Hyper Voice","Wish","Protect"],"ability":"Pixilate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 4,"sp": 0},"index":739},
		"Anna Seeing Stars (Starlight) Doub":{"level":100,"item":"Magical Seed","moves":["Swift","Calm Mind","Psyshock","Wish"],"ability":"Pixilate","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 4,"sd": 0,"sp": 0},"index":934},
		
	},	
	"Talonflame":{	
		"Taka Light My Fire (Burning) Doub":{"level":100,"item":"Flying Gem","moves":["Acrobatics","Flamethrower","Will-O-Wisp","Tailwind"],"ability":"Flame Body","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1055},
		
	},	
	"Tangrowth":{	
		"Florinia Reconsideraton (Inverse)":{"level":100,"item":"Assault Vest","moves":["Giga Drain","Sludge Bomb","Solar Beam","Focus Blast"],"ability":"Chlorophyll","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 252,"sp": 4},"index":496},
		
	},	
	"Tapu Bulu":{	
		"Boss Rush 2 Florinia (Forest)":{"level":100,"item":"Life Orb","moves":["Megahorn","Stone Edge","Horn Leech","Superpower"],"ability":"Grassy Surge","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":371},
		"Adrienn Chronomancy (Psychic)":{"level":100,"item":"Choice Band","moves":["Megahorn","Stone Edge","Horn Leech","Zen Headbutt"],"ability":"Telepathy","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":735},
		"Laura Wisteria (Flower Gard) Doub":{"level":100,"item":"Synthetic Seed","moves":["Zen Headbutt","Horn Leech","Megahorn","Rototiller"],"ability":"Grassy Surge","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":894},
		"Elias Who's GM Now? (Chess: B) Doub":{"level":100,"item":"Amplifield Rock","moves":["Horn Leech","Nature's Madness","Superpower","Megahorn"],"ability":"Grassy Surge","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 0},"index":928},
		
	},	
	"Tapu Fini":{	
		"Boss Rush 2 Amaria (Underwater) Both":{"level":100,"item":"Leftovers","moves":["Moonblast","Water Pulse","Nature's Madness","Hidden Power Electric"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":453},
		"Adrienn Chronomancy (Psychic)":{"level":100,"item":"Choice Specs","moves":["Scald","Moonblast","Shadow Ball","Ice Beam"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":737},
		"Adrienn Happy End (Fairy Tale)":{"level":100,"item":"Choice Specs","moves":["Scald","Moonblast","Nature Power","Ice Beam"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":749},
		"Amaria The Tumult (Psychic)":{"level":100,"item":"Leftovers","moves":["Moonblast","Scald","Calm Mind","Reflect"],"ability":"Misty Surge","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":812},
		
	},	
	"Tapu Koko":{	
		"Boss Rush 2 Julia (Electric)":{"level":100,"item":"Flying Gem","moves":["Acrobatics","U-turn","Thunder Punch","Iron Head"],"ability":"Electric Surge","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":362},
		"Adrienn Chronomancy (Psychic)":{"level":100,"item":"Light Clay","moves":["Thunderbolt","Dazzling Gleam","Reflect","Light Screen"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":734},
		"Adrienn Machine Dreams (Factory)":{"level":100,"item":"Synthetic Seed","moves":["Discharge","Dazzling Gleam","Roost","Volt Switch"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":741},
		"Adrienn Atop Olympus (Mountain) Doubles":{"level":100,"item":"Fairium Z","moves":["Thunder","Dazzling Gleam","Taunt","U-turn"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":755},
		
	},	
	"Tapu Lele":{	
		"Boss Rush 2 Adrienn (Fairy Tale)":{"level":100,"item":"Magical Seed","moves":["Psyshock","Dazzling Gleam","Energy Ball","Nature's Madness"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":445},
		"Radomus Telepathy Time (Psychic)":{"level":100,"item":"Choice Specs","moves":["Psyshock","Moonblast","Thunderbolt","Shadow Ball"],"ability":"Telepathy","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":608},
		"Radomus Agnosticism (Ashen Beach)":{"level":100,"item":"Pixie Plate","moves":["Nature Power","Psyshock","Focus Blast","Hidden Power Ground"],"ability":"Psychic Surge","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":635},
		"Adrienn Chronomancy (Psychic)":{"level":100,"item":"Leftovers","moves":["Calm Mind","Psychic","Moonblast","Telekinesis"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":736},
		"Adrienn Miraculous (Holy)":{"level":100,"item":"Magical Seed","moves":["Psychic","Moonblast","Energy Ball","Nature's Madness"],"ability":"Telepathy","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":763},
		
	},	
	"Tentacruel":{	
		"Aya Acridity (Murkwater)":{"level":100,"item":"Choice Specs","moves":["Brine","Venoshock","Hidden Power Electric","Ice Beam"],"ability":"Liquid Ooze","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":560},
		"Aya Toxicity (Corrosive)":{"level":100,"item":"Black Sludge","moves":["Muddy Water","Acid Spray","Rapid Spin","Protect"],"ability":"Liquid Ooze","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":571},
		
	},	
	"Terrakion":{	
		"Boss Rush Hardy (Rocky) Doubles":{"level":100,"item":"Life Orb","moves":["Close Combat","Rock Slide","Swords Dance","Poison Jab"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":352},
		"Boss Rush 2 Samson (Big Top)":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Stone Edge","Close Combat","Swords Dance"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":416},
		"Boss Rush 2 Hardy (Rocky) Doubles":{"level":100,"item":"Life Orb","moves":["Close Combat","Rock Slide","Swords Dance","Poison Jab"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":460},
		"Hardy Rocky Mount Way (Mount) Doub":{"level":100,"item":"Fightinium Z","moves":["Swords Dance","Close Combat","Earthquake","Rock Slide"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":828},
		"Victoria Fallacy of Justice (Fairy Tale)":{"level":100,"item":"Focus Sash","moves":["Stealth Rock","Swords Dance","Stone Edge","Close Combat"],"ability":"Justified","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1010},
		
	},	
	"Thundurus":{	
		"Julia Work Safety (Factory) Doubles":{"level":100,"item":"Synthetic Seed","moves":["Agility","Psychic","Discharge","Flash Cannon"],"ability":"Prankster","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":483},
		"Ciel Above Rabble (Murkwater)":{"level":100,"item":"Wiki Berry","moves":["Thunder","Psychic","Nasty Plot","Thunder Wave"],"ability":"Defiant","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":705},
		
	},	
	"Thundurus-Therian":{	
		"Ciel Suspend Disbelief (Psychic)":{"level":100,"item":"Wiki Berry","moves":["Thunderbolt","Nasty Plot","Focus Blast","Psychic"],"ability":"Volt Absorb","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":727},
		
	},	
	"Togekiss":{	
		"Boss Rush Ciel (Murkwater) Doubles":{"level":100,"item":"Wiki Berry","moves":["Dazzling Gleam","Heat Wave","Ancient Power","Air Slash"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":327},
		"Ciel New Horizons (New World)":{"level":100,"item":"Choice Specs","moves":["Ancient Power","Dazzling Gleam","Air Slash","Signal Beam"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":710},
		"Ciel Suspend Disbelief (Psychic)":{"level":100,"item":"Wiki Berry","moves":["Nasty Plot","Magical Leaf","Aura Sphere","Air Slash"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":726},
		"Adrienn Atop Olympus (Mountain) Doubles":{"level":100,"item":"Wiki Berry","moves":["Ominous Wind","Heat Wave","Silver Wind","Air Slash"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":753},
		"Adrienn Miraculous (Holy)":{"level":100,"item":"Magical Seed","moves":["Ancient Power","Dazzling Gleam","Air Cutter","Hyper Voice"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":762},
		"Laura Sakura (Fairy Tale)":{"level":100,"item":"Leftovers","moves":["Roost","Air Slash","Dazzling Gleam","Ancient Power"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":901},
		"Laura Octopetala (Starlight)":{"level":100,"item":"Leftovers","moves":["Wish","Psyshock","Dazzling Gleam","Air Slash"],"ability":"Hustle","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":903},
		"Anna Unforseen Futurity (New World)":{"level":100,"item":"Assault Vest","moves":["Future Sight","Dazzling Gleam","Swift","Air Slash"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":944},
		"Eve Intermediation (Chess: B)":{"level":100,"item":"Synthetic Seed","moves":["Baton Pass","Ancient Power","Air Slash","Nasty Plot"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1120},
		"Lumi Ametrine Blues (Water Surf)":{"level":100,"item":"Leftovers","moves":["Shock Wave","Air Slash","Roost","Aura Sphere"],"ability":"Serene Grace","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1133},
		"Lin stop flinching (Rainbow) Doub":{"level":100,"item":"Focus Sash","moves":["Twister","Air Slash","Tri Attack","Tailwind"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1202},
		"Lin old habits (New World)":{"level":100,"item":"Choice Specs","moves":["Moonblast","Oblivion Wing","Ancient Power","Blue Flare"],"ability":"Serene Grace","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1209},
		
	},	
	"Torkoal":{	
		"Cal Boiling Blood (Dragon's Den)":{"level":100,"item":"Firium Z","moves":["Eruption","Rock Slide","Superpower","Solar Beam"],"ability":"White Smoke","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1096},
		
	},	
	"Torterra":{	
		"Fern Hero's Journey (Fairy Tale)":{"level":100,"item":"Grassium Z","moves":["Wood Hammer","Synthesis","Iron Head","Earthquake"],"ability":"Shell Armor","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1002},
		
	},	
	"Toxapex":{	
		"Boss Rush Aya (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Surf","Recover","Knock Off","Toxic Spikes"],"ability":"Regenerator","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":282},
		"Boss Rush Amaria (Water Surf) Both":{"level":100,"item":"Elemental Seed","moves":["Recover","Toxic","Scald","Haze"],"ability":"Regenerator","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":347},
		"Boss Rush 2 Aya (Wasteland)":{"level":100,"item":"Black Sludge","moves":["Scald","Recover","Haze","Toxic"],"ability":"Regenerator","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":390},
		"Aya Acridity (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Brine","Haze","Recover","Toxic"],"ability":"Regenerator","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":561},
		"Aya Toxicity (Corrosive)":{"level":100,"item":"Black Sludge","moves":["Scald","Recover","Knock Off","Toxic Spikes"],"ability":"Regenerator","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":568},
		"Amaria Shadowy Anguish (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Recover","Toxic","Gunk Shot","Smack Down"],"ability":"Regenerator","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":805},
		"Heather Purple Pois (Corrosive)":{"level":100,"item":"Black Sludge","moves":["Recover","Baneful Bunker","Scald","Venom Drench"],"ability":"Merciless","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":873},
		
	},	
	"Toxicroak":{	
		"Aya Acridity (Murkwater)":{"level":100,"item":"Elemental Seed","moves":["Swords Dance","Drain Punch","Gunk Shot","Sucker Punch"],"ability":"Dry Skin","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":564},
		"Heather In Memoriam (New World) Doub":{"level":100,"item":"Assault Vest","moves":["Vacuum Wave","Dark Pulse","Sludge Bomb","Focus Blast"],"ability":"Anticipation","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":887},
		
	},	
	"Trevenant":{	
		"Shade Midnight Meadow (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Horn Leech","Rock Slide","Shadow Claw","Synthesis"],"ability":"Harvest","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":550},
		"Shade Hexes & Heroism (Starlight)":{"level":100,"item":"Iapapa Berry","moves":["Forest's Curse","Horn Leech","Protect","Nature Power"],"ability":"Harvest","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":559},
		"Fern Hero's Journey (Fairy Tale)":{"level":100,"item":"Sitrus Berry","moves":["Forest's Curse","Earthquake","Phantom Force","Horn Leech"],"ability":"Harvest","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1003},
		
	},	
	"Tropius":{	
		"Florinia Science Show (Big Top)":{"level":100,"item":"Sitrus Berry","moves":["Dragon Dance","Nature Power","Dragon Hammer","Earthquake"],"ability":"Harvest","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":522},
		
	},	
	"Tsareena":{	
		"Florinia Science Show (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Acrobatics","High Jump Kick","Power Whip","U-turn"],"ability":"Queenly Majesty","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":519},
		"Laura Sakura (Fairy Tale)":{"level":100,"item":"Choice Scarf","moves":["U-turn","Play Rough","Power Whip","High Jump Kick"],"ability":"Queenly Majesty","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":897},
		"Fern Hero's Journey (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Play Rough","High Jump Kick","Power Whip","U-turn"],"ability":"Queenly Majesty","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":999},
		"Victoria A Change of Pace (Big Top)":{"level":100,"item":"Synthetic Seed","moves":["Power Whip","High Jump Kick","Acrobatics","U-turn"],"ability":"Queenly Majesty","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1024},
		
	},	
	"Turtonator":{	
		"Charlotte Like Mom/Pop (Dragon's Den)":{"level":100,"item":"White Herb","moves":["Shell Smash","Fire Blast","Dragon Pulse","Dragon Tail"],"ability":"Shell Armor","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":679},
		"Cal Boiling Blood (Dragon's Den)":{"level":100,"item":"Elemental Seed","moves":["Dragon Pulse","Heat Wave","Solar Beam","Flash Cannon"],"ability":"Shell Armor","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1099},
		
	},	
	"Typhlosion":{	
		"Charlotte Fried Circuits (Glitch)":{"level":100,"item":"Life Orb","moves":["Blast Burn","Solar Beam","Wild Charge","Sunny Day"],"ability":"Blaze","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":665},
		"Bennett A Game of Intellect (Chess: Q)":{"level":100,"item":"Synthetic Seed","moves":["Eruption","Nature Power","Flamethrower","Focus Blast"],"ability":"Flash Fire","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1033},
		
	},	
	"Tyranitar":{	
		"Boss Rush Hardy (Rocky) Doubles":{"level":100,"item":"Assault Vest","moves":["Rock Slide","Crunch","Aqua Tail","Thunder Punch"],"ability":"Sand Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":355},
		"Boss Rush 2 Hardy (Rocky) Doubles":{"level":100,"item":"Assault Vest","moves":["Rock Slide","Crunch","Aqua Tail","Thunder Punch"],"ability":"Sand Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":463},
		"Hardy Lucy in the Sky (Crys Cav)":{"level":100,"item":"Iapapa Berry","moves":["Rock Polish","Crunch","Stone Edge","Strength"],"ability":"Sand Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":831},
		"Hardy Bites The Dust (Desert) Doub":{"level":100,"item":"Assault Vest","moves":["Rock Slide","Crunch","Fire Punch","Superpower"],"ability":"Sand Stream","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":836},
		"Taka Legacy (Dragon's Den) Doub":{"level":100,"item":"Chople Berry","moves":["Dragon Dance","Smack Down","Earthquake","Dragon Claw"],"ability":"Unnerve","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1066},
		
	},	
	"Tyranitar-Mega":{	
		"Boss Rush Luna (New World)":{"level":100,"item":"Tyranitarite","moves":["Dragon Dance","Crunch","Stone Edge","Superpower"],"ability":"Sand Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":305},
		"Boss Rush 2 Luna (New World)":{"level":100,"item":"Tyranitarite","moves":["Dragon Dance","Crunch","Stone Edge","Stealth Rock"],"ability":"Sand Stream","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":410},
		
	},	
	"Umbreon":{	
		"Eve Intermediation (Chess: R)":{"level":100,"item":"Normalium Z","moves":["Celebrate","Baton Pass","Foul Play","Wish"],"ability":"Synchronize","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1119},
		"Zero Zero Gravity (New World)":{"level":100,"item":"Leftovers","moves":["Foul Play","Baton Pass","Wish","Protect"],"ability":"Synchronize","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 56,"sa": 0,"sd": 200,"sp": 0},"index":1149},
		"Zero Reminiscence (Inverse)":{"level":100,"item":"Leftovers","moves":["Foul Play","Wish","Protect","Toxic"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":1155},
		"Ace Family (Holy)":{"level":100,"item":"Leftovers","moves":["Foul Play","Wish","Protect","Toxic"],"ability":"Synchronize","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 200,"sa": 0,"sd": 56,"sp": 0},"index":1191},
		
	},	
	"Uxie":{	
		"Radomus Stockfish Error (Glitch)":{"level":100,"item":"Iapapa Berry","moves":["Thunderbolt","Psyshock","Energy Ball","Stealth Rock"],"ability":"Levitate","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":620},
		
	},	
	"Vaporeon":{	
		"Zero Reminiscence (Inverse)":{"level":100,"item":"Magical Seed","moves":["Scald","Heal Bell","Wish","Protect"],"ability":"Water Absorb","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":1158},
		
	},	
	"Venomoth":{	
		"Shelly Stage Fright (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Sleep Powder","Bug Buzz","Sludge Bomb"],"ability":"Tinted Lens","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":527},
		"Heather Purple Pois (Corrosive)":{"level":100,"item":"Telluric Seed","moves":["Sleep Powder","Bug Buzz","Quiver Dance","Venoshock"],"ability":"Shield Dust","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":877},
		
	},	
	"Venusaur":{	
		"Florinia Standard (Grassy)":{"level":100,"item":"Assault Vest","moves":["Outrage","Giga Drain","Frenzy Plant","Knock Off"],"ability":"Overgrow","nature":"Careful","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 252,"sp": 4},"index":502},
		"Florinia Wetland Rose (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Giga Drain","Sludge Bomb","Sleep Powder","Leech Seed"],"ability":"Overgrow","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":515},
		
	},	
	"Venusaur-Mega":{	
		"Boss Rush Florinia (Forest)":{"level":100,"item":"Venusaurite","moves":["Giga Drain","Sludge Bomb","Hidden Power Fire","Synthesis"],"ability":"Thick Fat","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":264},
		"Boss Rush 2 Florinia (Forest)":{"level":100,"item":"Venusaurite","moves":["Giga Drain","Sludge Bomb","Hidden Power Fire","Synthesis"],"ability":"Thick Fat","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 128,"sa": 0,"sd": 128,"sp": 0},"index":370},
		"Aya Toxicity (Corrosive)":{"level":100,"item":"Venusaurite","moves":["Sleep Powder","Leech Seed","Venoshock","Hidden Power Fire"],"ability":"Thick Fat","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 128,"sa": 252,"sd": 128,"sp": 0},"index":569},
		
	},	
	"Victini":{	
		"Anna Seeing Stars (Starlight) Doub":{"level":100,"item":"Magical Seed","moves":["Blue Flare","Dazzling Gleam","Psyshock","Glaciate"],"ability":"Victory Star","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":932},
		"Bennett Self-Reflection (Mirror)":{"level":100,"item":"Synthetic Seed","moves":["Blue Flare","Dazzling Gleam","Psychic","Charge Beam"],"ability":"Victory Star","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1045},
		"Taka Light My Fire (Burning) Doub":{"level":100,"item":"Life Orb","moves":["Blue Flare","Psyshock","Bolt Strike","Will-O-Wisp"],"ability":"Victory Star","nature":"Serious","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 4,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1054},
		"Cal Boiling Blood (Dragon's Den)":{"level":100,"item":"Amplifield Rock","moves":["Trick Room","V-Create","Bolt Strike","Searing Shot"],"ability":"Victory Star","nature":"Brave","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 0},"evs":{"hp": 252,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 0},"index":1094},
		"Cal Burning Pride (Rainbow)":{"level":100,"item":"Leftovers","moves":["Zen Headbutt","Blue Flare","Dazzling Gleam","Hidden Power Grass"],"ability":"Victory Star","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1105},
		"Ace Eyes of Fire (Burning)":{"level":100,"item":"Elemental Seed","moves":["Bolt Strike","V-Create","U-turn","Zen Headbutt"],"ability":"Victory Star","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":1168},
		
	},	
	"Vikavolt":{	
		"Julia Deal With It (Water Surf) Doubles":{"level":100,"item":"Elemental Seed","moves":["Bug Buzz","Energy Ball","Flash Cannon","Discharge"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":472},
		"Shelly Buggie Paddle (Water Surf)":{"level":100,"item":"Life Orb","moves":["Air Slash","Thunderbolt","Bug Buzz","Volt Switch"],"ability":"Levitate","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":530},
		
	},	
	"Vileplume":{	
		"Boss Rush Aya (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Strength Sap","Sludge Bomb","Energy Ball","Sleep Powder"],"ability":"Effect Spore","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":280},
		"Florinia Reconsideraton (Inverse)":{"level":100,"item":"Heat Rock","moves":["Sunny Day","Solar Beam","Strength Sap","Sleep Powder"],"ability":"Chlorophyll","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 252,"sp": 4},"index":497},
		"Florinia Wetland Rose (Swamp)":{"level":100,"item":"Telluric Seed","moves":["Sludge Bomb","Moonblast","Sleep Powder","Leech Seed"],"ability":"Chlorophyll","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":516},
		"Aya Toxicity (Corrosive)":{"level":100,"item":"Black Sludge","moves":["Sludge Bomb","Moonblast","Sleep Powder","Leech Seed"],"ability":"Chlorophyll","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 0,"sd": 252,"sp": 0},"index":570},
		
	},	
	"Virizion":{	
		"Samson Endorphins (Ashen Beach)":{"level":100,"item":"Wiki Berry","moves":["Calm Mind","Focus Blast","Energy Ball","Hidden Power Rock"],"ability":"Justified","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":655},
		"Samson Grow Strong (Forest)":{"level":100,"item":"Telluric Seed","moves":["Swords Dance","Cut","Close Combat","Stone Edge"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":661},
		"Victoria Fallacy of Justice (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Sacred Sword","Leaf Blade","Close Combat","Swords Dance"],"ability":"Justified","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":1014},
		
	},	
	"Vivillon":{	
		"Shelly Stage Fright (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Sleep Powder","Hurricane","Substitute"],"ability":"Compound Eyes","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":529},
		
	},	
	"Volcanion":{	
		"Amaria Shadowy Anguish (Swamp)":{"level":100,"item":"Assault Vest","moves":["Steam Eruption","Flamethrower","Earth Power","Sludge Wave"],"ability":"Water Absorb","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":803},
		
	},	
	"Volcarona":{	
		"Boss Rush Shelly (Forest)":{"level":100,"item":"Telluric Seed","moves":["Quiver Dance","Fire Blast","Bug Buzz","Hidden Power Rock"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":269},
		"Boss Rush Charlotte (Burning) Doubles":{"level":100,"item":"Elemental Seed","moves":["Bug Buzz","Heat Wave","Psychic","Giga Drain"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":319},
		"Boss Rush 2 Shelly (Forest)":{"level":100,"item":"Telluric Seed","moves":["Quiver Dance","Fire Blast","Bug Buzz","Hidden Power Rock"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":377},
		"Boss Rush 2 Charlotte (SHeat) Doubles":{"level":100,"item":"Elemental Seed","moves":["Bug Buzz","Heat Wave","Psychic","Giga Drain"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":427},
		"Shelly Stage Fright (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Fiery Dance","Bug Buzz","Roost"],"ability":"Swarm","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":528},
		"Charlotte Fire Hazard (Grassy)":{"level":100,"item":"Elemental Seed","moves":["Quiver Dance","Giga Drain","Struggle Bug","Flamethrower"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":673},
		"Ciel Are We Human? (Big Top) Doubles":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Fiery Dance","Bug Buzz","Hurricane"],"ability":"Swarm","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":728},
		"Arclight Make Some Noise (Big Top)":{"level":100,"item":"Wiki Berry","moves":["Bug Buzz","Fiery Dance","Giga Drain","Quiver Dance"],"ability":"Swarm","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":955},
		"Bennett Love of Showmanship (Big Top)":{"level":100,"item":"Focus Sash","moves":["Quiver Dance","Fiery Dance","Bug Buzz","Hurricane"],"ability":"Swarm","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1034},
		"Bennett Self-Reflection (Mirror)":{"level":100,"item":"Bright Powder","moves":["Quiver Dance","Fiery Dance","Signal Beam","Giga Drain"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1044},
		"Cal Burning Pride (Rainbow)":{"level":100,"item":"Magical Seed","moves":["Quiver Dance","Fiery Dance","Solar Beam","Silver Wind"],"ability":"Flame Body","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1103},
		
	},	
	"Walrein":{	
		"Blake Nice Stall Bro (Inverse)":{"level":100,"item":"Leftovers","moves":["Substitute","Protect","Hail","Surf"],"ability":"Ice Body","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 0,"sd": 128,"sp": 128},"index":1077},
		"Blake Can't Touch This (Mirror)":{"level":100,"item":"Synthetic Seed","moves":["Double Team","Surf","Ice Beam","Rest"],"ability":"Thick Fat","nature":"Bold","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 56,"sa": 0,"sd": 200,"sp": 0},"index":1082},
		
	},	
	"Weavile":{	
		"Boss Rush Serra (Icy)":{"level":100,"item":"Choice Band","moves":["Knock Off","Icicle Crash","Ice Shard","Brick Break"],"ability":"Pressure","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":286},
		"Boss Rush Luna (New World)":{"level":100,"item":"Life Orb","moves":["Icicle Crash","Ice Shard","Knock Off","Poison Jab"],"ability":"Pressure","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":306},
		"Boss Rush 2 Serra (Inverse) Doubles":{"level":100,"item":"Magical Seed","moves":["Knock Off","Icicle Crash","Ice Shard","Brick Break"],"ability":"Pickpocket","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":396},
		"Luna Goth Lolita (Fairy Tale)":{"level":100,"item":"Choice Band","moves":["Slash","Night Slash","Icicle Crash","Ice Shard"],"ability":"Pressure","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":649},
		"Lin old habits (New World)":{"level":100,"item":"Air Balloon","moves":["Knock Off","Icicle Crash","Extreme Speed","Zen Headbutt"],"ability":"Pickpocket","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1208},
		
	},	
	"Whimsicott":{	
		"Boss Rush Florinia (Forest)":{"level":100,"item":"Life Orb","moves":["Nature Power","Energy Ball","Moonblast","U-turn"],"ability":"Prankster","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":260},
		"Florinia Reconsideraton (Inverse)":{"level":100,"item":"Heat Rock","moves":["Sunny Day","Giga Drain","U-turn","Moonblast"],"ability":"Prankster","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":494},
		"Laura Wisteria (Flower Gard) Doub":{"level":100,"item":"Focus Sash","moves":["Rain Dance","Growth","Giga Drain","Psychic"],"ability":"Prankster","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":891},
		"Laura Sakura (Fairy Tale)":{"level":100,"item":"Focus Sash","moves":["Tailwind","Moonblast","Nature Power","Giga Drain"],"ability":"Prankster","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":896},
		"Fern Hero's Journey (Fairy Tale)":{"level":100,"item":"Life Orb","moves":["Moonblast","Nature Power","Tailwind","Energy Ball"],"ability":"Prankster","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1000},
		"Fern Come on and Smile! (Forest)":{"level":100,"item":"Focus Sash","moves":["Tailwind","Growth","Giga Drain","Dazzling Gleam"],"ability":"Prankster","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1004},
		
	},	
	"Whiscash":{	
		"Terra gettin wet ;) (Underwater)":{"level":100,"item":"Rindo Berry","moves":["Rest","Dragon Dance","Aqua Tail","Amnesia"],"ability":"Hydration","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":695},
		
	},	
	"Wormadam":{	
		"Shelly Easy CompSci (Glitch)":{"level":100,"item":"Assault Vest","moves":["Leaf Storm","Psychic","Hidden Power Ice","Giga Drain"],"ability":"Anticipation","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 252,"sa": 252,"sd": 4,"sp": 0},"index":547},
		
	},	
	"Xatu":{	
		"Anna Unforseen Futurity (New World)":{"level":100,"item":"Leftovers","moves":["Future Sight","Dazzling Gleam","Tailwind","Roost"],"ability":"Synchronize","nature":"Calm","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 56,"sd": 0,"sp": 200},"index":948},
		
	},	
	"Xerneas":{	
		"Boss Rush 2 Adrienn (Fairy Tale)":{"level":100,"item":"Wiki Berry","moves":["Geomancy","Dazzling Gleam","Thunder","Focus Blast"],"ability":"Fairy Aura","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":442},
		"Adrienn Machine Dreams (Factory)":{"level":100,"item":"Power Herb","moves":["Geomancy","Flash Cannon","Thunderbolt","Moonblast"],"ability":"Fairy Aura","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":742},
		"Elias Natural Consequences (Holy)":{"level":100,"item":"Pixie Plate","moves":["Nature Power","Psychic","Thunderbolt","Hyper Voice"],"ability":"Fairy Aura","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":914},
		"Lumi Bedtime Stories (Fairy Tale)":{"level":100,"item":"Power Herb","moves":["Geomancy","Moonblast","Nature Power","Thunderbolt"],"ability":"Fairy Aura","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 156,"at": 0,"df": 0,"sa": 100,"sd": 0,"sp": 252},"index":1139},
		"Ace Technological Trickster (Glitch)":{"level":100,"item":"Power Herb","moves":["Geomancy","Psyshock","Horn Leech","Moonblast"],"ability":"Fairy Aura","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 200,"at": 0,"df": 56,"sa": 0,"sd": 0,"sp": 252},"index":1179},
		
	},	
	"Xurkitree":{	
		"Boss Rush Julia (Electric)":{"level":100,"item":"Elemental Seed","moves":["Thunderbolt","Energy Ball","Dazzling Gleam","Tail Glow"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":259},
		"Boss Rush 2 Julia (Electric)":{"level":100,"item":"Elemental Seed","moves":["Thunderbolt","Energy Ball","Dazzling Gleam","Tail Glow"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":367},
		"Elias Natural Consequences (Holy)":{"level":100,"item":"Zap Plate","moves":["Nature Power","Energy Ball","Dazzling Gleam","Tail Glow"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":916},
		"Eve Ultra-Precise Analysis (Glitch)":{"level":100,"item":"Focus Sash","moves":["Power Whip","Thunderbolt","Tail Glow","Ingrain"],"ability":"Beast Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 252,"sa": 0,"sd": 0,"sp": 252},"index":1116},
		
	},	
	"Yanmega":{	
		"Boss Rush Ciel (Murkwater) Doubles":{"level":100,"item":"Focus Sash","moves":["Tailwind","Bug Buzz","Air Slash","Giga Drain"],"ability":"Speed Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":326},
		"Shelly Buggie Paddle (Water Surf)":{"level":100,"item":"Life Orb","moves":["Protect","Bug Buzz","Air Slash","Giga Drain"],"ability":"Speed Boost","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":535},
		"Heather Polar Princess (Snow Mount)":{"level":100,"item":"Focus Sash","moves":["Tailwind","Air Slash","Silver Wind","Ancient Power"],"ability":"Speed Boost","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":871},
		
	},	
	"Yveltal":{	
		"Boss Rush 2 Luna (New World)":{"level":100,"item":"Magical Seed","moves":["Oblivion Wing","Heat Wave","Dark Pulse","Roost"],"ability":"Dark Aura","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":414},
		"Boss Rush 2 Ciel (Mountain) Doubles":{"level":100,"item":"Life Orb","moves":["Oblivion Wing","Heat Wave","Snarl","Rock Slide"],"ability":"Dark Aura","nature":"Mild","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":436},
		"Luna Mermaid Depths (Water Surf)":{"level":100,"item":"Life Orb","moves":["Oblivion Wing","Heat Wave","Dark Pulse","Roost"],"ability":"Dark Aura","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":639},
		"Ciel New Horizons (New World)":{"level":100,"item":"Darkinium Z","moves":["Dark Pulse","Oblivion Wing","Heat Wave","U-turn"],"ability":"Dark Aura","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":711},
		"Zero Zero Gravity (New World)":{"level":100,"item":"Magical Seed","moves":["Oblivion Wing","Sucker Punch","Roost","Dark Pulse"],"ability":"Dark Aura","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1148},
		"Lin old habits (New World)":{"level":100,"item":"Darkinium Z","moves":["Dark Pulse","Oblivion Wing","Roost","Cosmic Power"],"ability":"Dark Aura","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 0,"df": 0,"sa": 252,"sd": 0,"sp": 252},"index":1210},
		
	},	
	"Zangoose":{	
		"Heather Purple Pois (Corrosive)":{"level":100,"item":"Telluric Seed","moves":["Knock Off","Close Combat","Quick Attack","Belly Drum"],"ability":"Toxic Boost","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":875},
		
	},	
	"Zapdos":{	
		"Boss Rush 2 Julia (Electric)":{"level":100,"item":"Elemental Seed","moves":["Discharge","Roost","Heat Wave","Signal Beam"],"ability":"Static","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":363},
		"Julia Deal With It (Water Surf) Doubles":{"level":100,"item":"Leftovers","moves":["Discharge","Roost","Heat Wave","Extrasensory"],"ability":"Static","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":475},
		"Ciel Above Rabble (Murkwater)":{"level":100,"item":"Leftovers","moves":["Heat Wave","Thunder","Roost","Volt Switch"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":707},
		"Arclight Night Club (Short Circ)":{"level":100,"item":"Leftovers","moves":["Thunderbolt","Heat Wave","Roost","Volt Switch"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 4,"sd": 0,"sp": 252},"index":972},
		"Taka Topside View (Mountain) Doub":{"level":100,"item":"Expert Belt","moves":["Tailwind","Ominous Wind","Thunder","Ancient Power"],"ability":"Pressure","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 252},"index":1061},
		"Zero Zed (Electric)":{"level":100,"item":"Leftovers","moves":["Roost","Heat Wave","Hidden Power Ice","Discharge"],"ability":"Static","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 0},"index":1143},
		
	},	
	"Zebstrika":{	
		"Zero Zed (Electric)":{"level":100,"item":"Light Clay","moves":["Wild Charge","Low Kick","Light Screen","Overheat"],"ability":"Motor Drive","nature":"Hasty","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1144},
		
	},	
	"Zekrom":{	
		"Boss Rush 2 Julia (Electric)":{"level":100,"item":"Dragonium Z","moves":["Bolt Strike","Outrage","Roost","Stone Edge"],"ability":"Teravolt","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":365},
		"Zero Zed (Electric)":{"level":100,"item":"Leftovers","moves":["Bolt Strike","Roost","Toxic","Dragon Tail"],"ability":"Teravolt","nature":"Impish","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 56,"sa": 0,"sd": 200,"sp": 0},"index":1145},
		
	},	
	"Zeraora":{	
		"Julia Work Safety (Factory) Doubles":{"level":100,"item":"Synthetic Seed","moves":["Plasma Fists","Drain Punch","Acrobatics","Knock Off"],"ability":"Volt Absorb","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 252,"sa": 0,"sd": 4,"sp": 0},"index":484},
		"Zero Zed (Electric)":{"level":100,"item":"Choice Band","moves":["Plasma Fists","Close Combat","Outrage","Throat Chop"],"ability":"Volt Absorb","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 4,"at": 252,"df": 0,"sa": 0,"sd": 0,"sp": 252},"index":1146},
		
	},	
	"Zoroark":{	
		"Zero Zed (Electric)":{"level":100,"item":"Focus Sash","moves":["Nasty Plot","Night Daze","Flamethrower","Sludge Bomb"],"ability":"Illusion","nature":"Modest","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 0,"df": 0,"sa": 252,"sd": 4,"sp": 0},"index":1142},
		"Ace Half-Tossed Coin (1, Dark Crys Cav)":{"level":100,"item":"Focus Sash","moves":["Nasty Plot","Shadow Ball","Dark Pulse","Focus Blast"],"ability":"Illusion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1172},
		"Ace Half-Tossed Coin (2, Dark Crys Cav)":{"level":100,"item":"Magical Seed","moves":["Nasty Plot","Shadow Ball","Dark Pulse","Focus Blast"],"ability":"Illusion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1174},
		"Ace Half-Tossed Coin (3, Dark Crys Cav)":{"level":100,"item":"Magical Seed","moves":["Nasty Plot","Shadow Ball","Dark Pulse","Focus Blast"],"ability":"Illusion","nature":"Timid","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 0,"df": 4,"sa": 252,"sd": 0,"sp": 252},"index":1176},
		
	},	
	"Zygarde":{	
		"Boss Rush 2 Terra (Desert) Doubles":{"level":100,"item":"Telluric Seed","moves":["Rest","Dragon Dance","Thousand Waves","Thousand Arrows"],"ability":"Aura Break","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":433},
		"Terra cOARSE rOUGH (Ashen Beach)":{"level":100,"item":"Telluric Seed","moves":["Rest","Dragon Dance","Thousand Waves","Thousand Arrows"],"ability":"Aura Break","nature":"Adamant","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 0,"sa": 0,"sd": 4,"sp": 252},"index":691},
		"Terra ENTIRE CIRCUS!! (Big Top)":{"level":100,"item":"Leftovers","moves":["Hyper Voice","Dragon Dance","Earthquake","Iron Tail"],"ability":"Aura Break","nature":"Rash","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 168,"df": 0,"sa": 252,"sd": 0,"sp": 88},"index":698},
		"Zero Zed (Electric)":{"level":100,"item":"Magical Seed","moves":["Thousand Arrows","Core Enforcer","Hidden Power Ice","Brick Break"],"ability":"Power Construct","nature":"Quiet","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 252,"at": 128,"df": 0,"sa": 128,"sd": 0,"sp": 0},"index":1147},
		
	},	
	"Zygarde-10%":{	
		"Elias Who's GM Now? (Chess: P) Doub":{"level":100,"item":"Choice Scarf","moves":["Stomping Tantrum"],"ability":"Aura Break","nature":"Jolly","ivs":{"hp": 31,"at": 31,"df": 31,"sa": 31,"sd": 31,"sp": 31},"evs":{"hp": 0,"at": 252,"df": 4,"sa": 0,"sd": 0,"sp": 252},"index":926},
		
	},	
};

var randoms = {};

updateSets(themeTeams);
updateSets(randoms);