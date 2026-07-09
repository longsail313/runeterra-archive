    const DDRAGON = "https://ddragon.leagueoflegends.com";
    const CDRAGON = "https://raw.communitydragon.org/latest";
    const DEFAULT_VERSION = "16.12.1";
    const LOCALE = "zh_CN";
    const ROLE_LABELS = {
      Assassin: "刺客",
      Fighter: "战士",
      Mage: "法师",
      Marksman: "射手",
      Support: "辅助",
      Tank: "坦克"
    };
    const REGIONS = [
      {
        id: "Runeterra",
        label: "符文之地",
        rep: "Ryze",
        url: "https://yz.lol.qq.com/zh_CN/map/index.html",
        summary: "承载英雄联盟故事的世界整体，也是无法归入单一地区或跨地区角色的归档标签。"
      },
      {
        id: "BandleCity",
        label: "班德尔城",
        rep: "Teemo",
        url: "https://yz.lol.qq.com/zh_CN/region/bandle-city/",
        summary: "约德尔人与异界通道相关的神秘领域，常与符文之地各处产生交汇。"
      },
      {
        id: "Bilgewater",
        label: "比尔吉沃特",
        rep: "MissFortune",
        url: "https://yz.lol.qq.com/zh_CN/region/bilgewater/",
        summary: "海盗、赏金猎人、港口帮派与猎海兽文化交错的海港城邦。"
      },
      {
        id: "Demacia",
        label: "德玛西亚",
        rep: "Lux",
        url: "https://yz.lol.qq.com/zh_CN/region/demacia/",
        summary: "重视秩序、荣誉和军纪的王国，对魔法与法师问题有长期社会冲突。"
      },
      {
        id: "Freljord",
        label: "弗雷尔卓德",
        rep: "Ashe",
        url: "https://yz.lol.qq.com/zh_CN/region/freljord/",
        summary: "寒冷北境，部族、臻冰、古老半神与女巫传说共同塑造其历史。"
      },
      {
        id: "Ionia",
        label: "艾欧尼亚",
        rep: "Irelia",
        url: "https://yz.lol.qq.com/zh_CN/region/ionia/",
        summary: "自然与灵界联系紧密的群岛大陆，传统、均衡与战争创伤并存。"
      },
      {
        id: "Ixtal",
        label: "以绪塔尔",
        rep: "Qiyana",
        url: "https://yz.lol.qq.com/zh_CN/region/ixtal/",
        summary: "以元素魔法与隐秘文明著称，位于东南丛林深处。"
      },
      {
        id: "Noxus",
        label: "诺克萨斯",
        rep: "Darius",
        url: "https://yz.lol.qq.com/zh_CN/region/noxus/",
        summary: "扩张主义帝国，强调力量、才能和野心，并吸纳被征服者中的强者。"
      },
      {
        id: "Piltover",
        label: "皮尔特沃夫",
        rep: "Caitlyn",
        url: "https://yz.lol.qq.com/zh_CN/region/piltover/",
        summary: "贸易、学院、海克斯科技与上城秩序构成的进步之城。"
      },
      {
        id: "ShadowIsles",
        label: "暗影岛",
        rep: "Thresh",
        url: "https://yz.lol.qq.com/zh_CN/region/shadow-isles/",
        summary: "破败之咒后的亡灵群岛，曾经的福光岛已被黑雾与诅咒吞没。"
      },
      {
        id: "Shurima",
        label: "恕瑞玛",
        rep: "Azir",
        url: "https://yz.lol.qq.com/zh_CN/region/shurima/",
        summary: "沙漠帝国遗产、飞升者、太阳圆盘与虚空灾厄共同组成其核心叙事。"
      },
      {
        id: "Targon",
        label: "巨神峰",
        rep: "Diana",
        url: "https://yz.lol.qq.com/zh_CN/region/mount-targon/",
        summary: "通往天界力量的圣山与周边民族，星灵、皎月与烈阳信仰在此交织。"
      },
      {
        id: "Void",
        label: "虚空",
        rep: "Kaisa",
        url: "https://yz.lol.qq.com/zh_CN/region/the-void/",
        summary: "现实之外的吞噬性存在与其造物，是符文之地最古老的威胁之一。"
      },
      {
        id: "Zaun",
        label: "祖安",
        rep: "Ekko",
        url: "https://yz.lol.qq.com/zh_CN/region/zaun/",
        summary: "皮城下方的工业地下城，炼金科技、底层社区与危险实验并存。"
      },
      {
        id: "Icathia",
        label: "艾卡西亚",
        rep: "Jax",
        url: "https://yz.lol.qq.com/zh_CN/map/index.html",
        summary: "与古代恕瑞玛和虚空裂隙紧密相关的历史地点，适合通过官方地图继续查阅。"
      },
      {
        id: "Camavor",
        label: "卡玛维亚",
        rep: "Viego",
        url: "https://yz.lol.qq.com/zh_CN/map/index.html",
        summary: "破败之王等故事牵涉的古老王国，相关内容以英雄传记和官方故事为准。"
      }
    ];

    const REGION_LABEL_BY_ID = Object.fromEntries(REGIONS.map((region) => [region.id, region.label]));
    const REGION_BY_ID = {
      Aatrox: "Runeterra",
      Ahri: "Ionia",
      Akali: "Ionia",
      Akshan: "Shurima",
      Alistar: "Runeterra",
      Ambessa: "Noxus",
      Amumu: "Shurima",
      Anivia: "Freljord",
      Annie: "Runeterra",
      Aphelios: "Targon",
      Ashe: "Freljord",
      AurelionSol: "Targon",
      Aurora: "Freljord",
      Azir: "Shurima",
      Bard: "Runeterra",
      Belveth: "Void",
      Blitzcrank: "Zaun",
      Brand: "Runeterra",
      Braum: "Freljord",
      Briar: "Noxus",
      Caitlyn: "Piltover",
      Camille: "Piltover",
      Cassiopeia: "Noxus",
      Chogath: "Void",
      Corki: "BandleCity",
      Darius: "Noxus",
      Diana: "Targon",
      Draven: "Noxus",
      DrMundo: "Zaun",
      Ekko: "Zaun",
      Elise: "Noxus",
      Evelynn: "Runeterra",
      Ezreal: "Piltover",
      FiddleSticks: "Runeterra",
      Fiddlesticks: "Runeterra",
      Fiora: "Demacia",
      Fizz: "Bilgewater",
      Galio: "Demacia",
      Gangplank: "Bilgewater",
      Garen: "Demacia",
      Gnar: "Freljord",
      Gragas: "Freljord",
      Graves: "Bilgewater",
      Gwen: "ShadowIsles",
      Hecarim: "ShadowIsles",
      Heimerdinger: "Piltover",
      Hwei: "Ionia",
      Illaoi: "Bilgewater",
      Irelia: "Ionia",
      Ivern: "Ionia",
      Janna: "Zaun",
      JarvanIV: "Demacia",
      Jax: "Runeterra",
      Jayce: "Piltover",
      Jhin: "Ionia",
      Jinx: "Zaun",
      Kaisa: "Void",
      Kalista: "ShadowIsles",
      Karma: "Ionia",
      Karthus: "ShadowIsles",
      Kassadin: "Void",
      Katarina: "Noxus",
      Kayle: "Demacia",
      Kayn: "Ionia",
      Kennen: "Ionia",
      Khazix: "Void",
      Kindred: "Runeterra",
      Kled: "Noxus",
      KogMaw: "Void",
      KSante: "Shurima",
      Leblanc: "Noxus",
      LeBlanc: "Noxus",
      LeeSin: "Ionia",
      Leona: "Targon",
      Lillia: "Ionia",
      Lissandra: "Freljord",
      Locke: "Runeterra",
      Lucian: "Demacia",
      Lulu: "BandleCity",
      Lux: "Demacia",
      Malphite: "Ixtal",
      Malzahar: "Void",
      Maokai: "ShadowIsles",
      MasterYi: "Ionia",
      Mel: "Noxus",
      Milio: "Ixtal",
      MissFortune: "Bilgewater",
      Mordekaiser: "Noxus",
      Morgana: "Demacia",
      Naafiri: "Shurima",
      Nami: "Runeterra",
      Nasus: "Shurima",
      Nautilus: "Bilgewater",
      Neeko: "Ixtal",
      Nidalee: "Ixtal",
      Nilah: "Bilgewater",
      Nocturne: "Runeterra",
      Norra: "BandleCity",
      Nunu: "Freljord",
      Olaf: "Freljord",
      Orianna: "Piltover",
      Ornn: "Freljord",
      Pantheon: "Targon",
      Poppy: "Demacia",
      Pyke: "Bilgewater",
      Qiyana: "Ixtal",
      Quinn: "Demacia",
      Rakan: "Ionia",
      Rammus: "Shurima",
      RekSai: "Void",
      Rell: "Noxus",
      Renata: "Zaun",
      RenataGlasc: "Zaun",
      Renekton: "Shurima",
      Rengar: "Ixtal",
      Riven: "Noxus",
      Rumble: "BandleCity",
      Ryze: "Runeterra",
      Samira: "Noxus",
      Sejuani: "Freljord",
      Senna: "Runeterra",
      Seraphine: "Piltover",
      Sett: "Ionia",
      Shaco: "Runeterra",
      Shen: "Ionia",
      Shyvana: "Demacia",
      Singed: "Zaun",
      Sion: "Noxus",
      Sivir: "Shurima",
      Skarner: "Ixtal",
      Smolder: "Runeterra",
      Sona: "Demacia",
      Soraka: "Targon",
      Swain: "Noxus",
      Sylas: "Demacia",
      Syndra: "Ionia",
      TahmKench: "Bilgewater",
      Taliyah: "Shurima",
      Talon: "Noxus",
      Taric: "Targon",
      Teemo: "BandleCity",
      Thresh: "ShadowIsles",
      Tristana: "BandleCity",
      Trundle: "Freljord",
      Tryndamere: "Freljord",
      TwistedFate: "Bilgewater",
      Twitch: "Zaun",
      Udyr: "Freljord",
      Urgot: "Zaun",
      Varus: "Ionia",
      Vayne: "Demacia",
      Veigar: "BandleCity",
      Velkoz: "Void",
      Vex: "ShadowIsles",
      Vi: "Piltover",
      Viego: "ShadowIsles",
      Viktor: "Zaun",
      Vladimir: "Noxus",
      Volibear: "Freljord",
      Warwick: "Zaun",
      MonkeyKing: "Ionia",
      Wukong: "Ionia",
      Xayah: "Ionia",
      Xerath: "Shurima",
      XinZhao: "Demacia",
      Yasuo: "Ionia",
      Yone: "Ionia",
      Yorick: "ShadowIsles",
      Yuumi: "BandleCity",
      Zac: "Zaun",
      Zed: "Ionia",
      Zeri: "Zaun",
      Ziggs: "Zaun",
      Zilean: "Runeterra",
      Zoe: "Targon",
      Zyra: "Ixtal",
      Yunara: "Ionia",
      Zaahen: "Runeterra"
    };

    const WORLD_TOPICS = [
      {
        title: "官方宇宙档案",
        body: "League Universe 是 Riot 对英雄传记、地区故事、短篇、漫画、艺术资料和多媒体设定的官方归档。",
        links: [
          ["进入国服宇宙", "https://yz.lol.qq.com/zh_CN/"],
          ["英雄索引", "https://yz.lol.qq.com/zh_CN/champions/"]
        ]
      },
      {
        title: "Runeterra 地图",
        body: "官方交互地图把地区、地标与故事放在空间关系中呈现，适合补足传记之外的地理和世界观线索。",
        links: [["打开地图", "https://yz.lol.qq.com/zh_CN/map/index.html"]]
      },
      {
        title: "符文、战争与古代史",
        body: "符文之地的现代格局与远古魔法、符文战争、飞升者、暗裔和各地历史遗产密切相关。",
        links: [["从官方宇宙阅读", "https://yz.lol.qq.com/zh_CN/"]]
      },
      {
        title: "虚空与现实边界",
        body: "虚空相关角色与艾卡西亚、恕瑞玛及多个区域的危机相连，页面中的虚空英雄会回到官方传记继续阅读。",
        links: [["虚空地区", "https://yz.lol.qq.com/zh_CN/region/the-void/"]]
      },
      {
        title: "破败、黑雾与暗影岛",
        body: "破败之咒、福光岛旧史、亡灵角色和黑雾事件构成暗影岛叙事核心。",
        links: [["暗影岛", "https://yz.lol.qq.com/zh_CN/region/shadow-isles/"]]
      },
      {
        title: "科技、炼金与双城",
        body: "皮尔特沃夫与祖安共同承载海克斯科技、炼金科技、阶层冲突与城市英雄故事。",
        links: [
          ["皮尔特沃夫", "https://yz.lol.qq.com/zh_CN/region/piltover/"],
          ["祖安", "https://yz.lol.qq.com/zh_CN/region/zaun/"]
        ]
      }
    ];

    const SYSTEM_CATEGORIES = [
      ["map", "地图与胜利"],
      ["structure", "防御建筑"],
      ["lane", "兵线与发育"],
      ["jungle", "野区与野怪"],
      ["epic", "史诗野怪"],
      ["dragon", "元素巨龙与龙魂"],
      ["vision", "视野与信息"],
      ["economy", "经济与成长"],
      ["summoner", "召唤师技能"]
    ];

    const SYSTEM_CATEGORY_LABELS = Object.fromEntries(SYSTEM_CATEGORIES);

    const SYSTEM_SOURCE_LABELS = {
      mechanic: "机制卡片",
      summoner: "召唤师技能"
    };

    const ITEM_TAG_LABELS = {
      Active: "主动",
      Armor: "护甲",
      ArmorPenetration: "护甲穿透",
      AttackSpeed: "攻速",
      Aura: "光环",
      Boots: "鞋子",
      Consumable: "消耗品",
      CooldownReduction: "技能急速",
      CriticalStrike: "暴击",
      Damage: "攻击力",
      GoldPer: "工资装",
      Health: "生命",
      HealthRegen: "生命回复",
      Jungle: "打野",
      Lane: "线上",
      LifeSteal: "生命偷取",
      MagicPenetration: "法术穿透",
      Mana: "法力",
      ManaRegen: "法力回复",
      NonbootsMovement: "移速",
      OnHit: "命中特效",
      Slow: "减速",
      SpellBlock: "魔抗",
      SpellDamage: "法术强度",
      Stealth: "隐身/侦测",
      Tenacity: "韧性",
      Trinket: "饰品",
      Vision: "视野"
    };

    const STATIC_GAME_SYSTEMS = [
      {
        type: "mechanic",
        category: "map",
        name: "召唤师峡谷",
        summary: "经典 5v5 地图，由三条兵线、双方野区、龙坑、男爵坑和基地组成。核心胜利条件是推进兵线、摧毁防御建筑，并最终摧毁敌方水晶枢纽。",
        tags: ["5v5", "地图", "推塔"],
        image: "map",
        visualMode: "cover"
      },
      {
        type: "mechanic",
        category: "map",
        name: "水晶枢纽",
        summary: "每个基地的最终核心目标。队伍必须先突破兵线与防御建筑，才能威胁敌方水晶枢纽；摧毁敌方水晶枢纽即可赢得对局。",
        tags: ["基地", "胜利条件", "核心目标"],
        image: "characters/nexus/hud/nexus_blue_square.png",
        symbol: "N"
      },
      {
        type: "mechanic",
        category: "structure",
        name: "防御塔",
        summary: "防御塔保护兵线、野区入口和基地，是推进节奏的关键节点。越塔、拆塔、换塔和利用兵线承伤，都是召唤师峡谷的核心决策。",
        tags: ["外塔", "内塔", "高地塔", "门牙塔"],
        image: "characters/sruap_turret_order5/hud/turret_blue_square.png",
        symbol: "T"
      },
      {
        type: "mechanic",
        category: "structure",
        name: "防御塔镀层",
        summary: "对局前期防御塔拥有镀层奖励。围绕镀层形成的推线、支援、先锋和换线决策，会直接影响前期经济差。",
        tags: ["前期经济", "推线", "防御塔奖励"],
        image: "characters/preseason_turret_shield/hud/preseason_turret_shield_square_0.png",
        symbol: "P"
      },
      {
        type: "mechanic",
        category: "structure",
        name: "召唤水晶",
        summary: "高地建筑被摧毁后，敌方对应兵线会出现更强的超级兵压力。召唤水晶会在一段时间后重生，因此破高地后的推进窗口很重要。",
        tags: ["高地", "超级兵", "兵线压力"],
        image: "characters/inhibitor/hud/inhibitor_blue_square.png",
        symbol: "I"
      },
      {
        type: "mechanic",
        category: "lane",
        name: "小兵与兵线",
        summary: "小兵提供金币、经验和推塔承伤。控线、推线、慢推、回推和卡线会影响换血、游走、回城与争夺地图目标的时机。",
        tags: ["近战兵", "远程兵", "炮车兵", "超级兵"],
        image: "characters/sru_orderminionsiege/hud/bluemechcannon_square.png",
        symbol: "M"
      },
      {
        type: "mechanic",
        category: "lane",
        name: "回城与补给",
        summary: "回城让英雄返回泉水购买装备和恢复状态。好的回城时间通常建立在兵线处理、视野安全和目标刷新节奏之上。",
        tags: ["回城", "泉水", "补给"],
        image: "ux/cherry/augments/icons/homeguard_large.png",
        symbol: "B"
      },
      {
        type: "mechanic",
        category: "economy",
        name: "金币、经验与等级",
        summary: "英雄通过补刀、击杀、助攻、防御塔、野怪和地图目标获得资源。装备强度与等级成长共同决定中后期作战能力。",
        tags: ["金币", "经验", "等级"],
        image: "ux/floatingtext/goldicon.png",
        symbol: "G"
      },
      {
        type: "mechanic",
        category: "economy",
        name: "赏金与终结",
        summary: "连续领先的英雄或队伍可能产生额外赏金。落后方通过终结、换资源和争夺关键目标，有机会缩小经济差。",
        tags: ["英雄赏金", "目标赏金", "翻盘"],
        image: "ux/minimap/icons/tower_blue_bounty.png",
        symbol: "$"
      },
      {
        type: "mechanic",
        category: "vision",
        name: "战争迷雾",
        summary: "地图上未被己方单位、守卫或技能揭示的位置会被战争迷雾覆盖。视野信息决定埋伏、绕后、开团和争夺龙男爵的安全性。",
        tags: ["视野", "信息", "地图控制"],
        image: "characters/sru_plant_vision/hud/sru_plant_vision_circle.png",
        symbol: "?"
      },
      {
        type: "mechanic",
        category: "vision",
        name: "守卫与饰品",
        summary: "侦查守卫、控制守卫和饰品是视野体系的基础。进攻眼位、河道眼位、野区入口眼位和排眼，会改变目标争夺的风险。",
        tags: ["侦查守卫", "控制守卫", "饰品"],
        image: "characters/visionward/hud/visionward_square.png",
        symbol: "W"
      },
      {
        type: "mechanic",
        category: "jungle",
        name: "基础野怪营地",
        summary: "野区营地为打野和队伍提供经验、金币与节奏。常见营地包括锋喙鸟、暗影狼、魔沼蛙、石甲虫等，路线规划会影响抓人和目标控制。",
        tags: ["野区", "刷野", "路线"],
        image: "characters/sru_murkwolf/hud/greatermurkwolf_square.png"
      },
      {
        type: "mechanic",
        category: "jungle",
        name: "苍蓝雕纹魔像",
        summary: "蓝色增益相关营地通常围绕法力、技能循环和野区控制展开。中单、打野与队伍节奏经常会围绕蓝区资源分配做决策。",
        tags: ["蓝 Buff", "野区资源", "技能循环"],
        image: "characters/sru_blue/hud/bluesentinel_square.png",
        symbol: "B"
      },
      {
        type: "mechanic",
        category: "jungle",
        name: "绯红印记树怪",
        summary: "红色增益相关营地通常强化普攻追击、留人和前期对抗。红区控制也常与下路、上路抓人路线绑定。",
        tags: ["红 Buff", "追击", "对抗"],
        image: "characters/sru_red/hud/brambleback_square.png",
        symbol: "R"
      },
      {
        type: "mechanic",
        category: "jungle",
        name: "峡谷迅捷蟹",
        summary: "河道目标会提供河道视野与节奏价值。中野联动、线权和河道站位，常决定迅捷蟹争夺是否安全。",
        tags: ["河道", "线权", "视野"],
        image: "characters/sru_crab/hud/crab_square_0.png",
        symbol: "S"
      },
      {
        type: "mechanic",
        category: "epic",
        name: "虚空巢虫",
        summary: "男爵坑前期史诗目标之一。击杀后队伍获得用于推进的虚空主题增益，并让上半区在前期拥有明确争夺价值。",
        tags: ["上半区", "史诗野怪", "推塔"],
        image: "characters/sru_horde/hud/sru_voidgrub_square.png",
        symbol: "V"
      },
      {
        type: "mechanic",
        category: "epic",
        name: "峡谷先锋",
        summary: "中期出现在男爵坑的史诗目标，击败后可围绕先锋进行推进、撞塔和打开边路缺口。",
        tags: ["先锋", "撞塔", "中期节奏"],
        image: "characters/sru_riftherald/hud/sruriftherald_square.png",
        symbol: "H"
      },
      {
        type: "mechanic",
        category: "epic",
        name: "阿塔坎",
        summary: "中后期出现在河道史诗野怪坑附近的高价值目标。不同形态会改变击杀后的团队奖励，争夺前通常需要先处理兵线与河道视野。",
        tags: ["阿塔坎", "史诗野怪", "团队目标"],
        image: "characters/sru_atakhan/hud/atakhan_v_square_128.png",
        symbol: "A"
      },
      {
        type: "mechanic",
        category: "epic",
        name: "纳什男爵",
        summary: "后期最重要的史诗野怪之一。男爵增益通常用于强化推进、分带汇合和结束比赛，但争夺前需要视野与兵线准备。",
        tags: ["男爵", "推进", "后期目标"],
        image: "characters/sru_baron/hud/baron_square.png",
        symbol: "B"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "元素亚龙",
        summary: "击杀元素亚龙会叠加团队增益：炼狱龙提供攻击力与法术强度，山脉龙提供护甲与魔抗，海洋龙提供每 5 秒回复已损生命值，云端龙提供减速抗性和脱战移速，海克斯龙提供技能急速与攻击速度，炼金龙提供韧性和治疗/护盾强度。",
        tags: ["龙坑", "元素增益", "团队目标"],
        image: "characters/sru_dragon/hud/dragon_square.png",
        symbol: "D"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "龙魂",
        summary: "队伍获得 4 层元素亚龙后，会取得对应龙魂。龙魂永久生效，具体数值按当前游戏数据列在各元素龙魂卡片中。",
        tags: ["永久奖励", "团队强化", "胜负转折"],
        image: "ux/minimap/icons/dragon_elder_bounty.png",
        symbol: "Ω"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "炼狱龙魂",
        summary: "每 3 秒，伤害型普攻或技能命中敌人会触发爆炸，造成 100（+22.5% 额外攻击力）（+13.5% 法术强度）（+2.75% 额外生命值）自适应伤害。",
        tags: ["炼狱", "伤害", "龙魂"],
        image: "characters/sru_dragon_fire/hud/dragon_square_fire.png",
        symbol: "火"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "山脉龙魂",
        summary: "5 秒未受到伤害后，获得 220（+16% 额外攻击力）（+12% 法术强度）（+12% 额外生命值）护盾。",
        tags: ["山脉", "生存", "龙魂"],
        image: "characters/sru_dragon_earth/hud/dragon_square_earth.png",
        symbol: "山"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "海洋龙魂",
        summary: "对敌人造成伤害后，4 秒内治疗 150（+26% 额外攻击力）（+17% 法术强度）（+7% 额外生命值）生命值，并回复 100（+3.5% 最大法力值）法力；对小兵与野怪为 30% 效率。",
        tags: ["海洋", "回复", "龙魂"],
        image: "characters/sru_dragon_water/hud/dragon_square_water.png",
        symbol: "海"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "云端龙魂",
        summary: "获得 15% 移动速度。施放终极技能后，移动速度提升至 60%，持续 6 秒；该强化有 30 秒冷却。",
        tags: ["云端", "机动", "龙魂"],
        image: "characters/sru_dragon_air/hud/dragon_air_square.png",
        symbol: "云"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "海克斯龙魂",
        summary: "伤害命中敌人会释放连锁电击，造成 25-50（基于等级）真实伤害，并使近战目标减速 45%、远程目标减速 35%，减速随时间衰减；8 秒冷却。",
        tags: ["海克斯", "连锁", "龙魂"],
        image: "characters/sru_dragon_hextech/hud/icons2d/dragon_square_hextech.png",
        symbol: "电"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "炼金龙魂",
        summary: "当英雄生命值低于 50% 最大生命值时，获得 13% 伤害提升与 13% 伤害减免。",
        tags: ["炼金", "韧性", "龙魂"],
        image: "characters/sru_dragon_chemtech/hud/icons2d/dragon_square_chemtech.png",
        symbol: "毒"
      },
      {
        type: "mechanic",
        category: "dragon",
        name: "远古巨龙",
        summary: "在龙魂阶段后出现的高价值史诗目标，通常提供极强的终结能力。远古龙争夺往往需要全队视野、兵线和召唤师技能准备。",
        tags: ["远古龙", "终结", "后期目标"],
        image: "characters/sru_dragon_elder/hud/dragon_square_elder.png",
        symbol: "E"
      }
    ];

    const THEME_KEY = "runeterra-theme";

    const state = {
      version: DEFAULT_VERSION,
      versionLoaded: false,
      champions: [],
      details: new Map(),
      selectedId: "",
      query: "",
      region: "",
      role: "",
      sort: "name",
      systemEntries: [],
      systemQuery: "",
      systemCategory: "",
      systemSource: "",
      items: [],
      itemQuery: "",
      itemCategory: ""
    };

    const els = {
      versionMetric: document.querySelector("#versionMetric"),
      countMetric: document.querySelector("#countMetric"),
      loadNotice: document.querySelector("#loadNotice"),
      searchInput: document.querySelector("#searchInput"),
      regionSelect: document.querySelector("#regionSelect"),
      sortSelect: document.querySelector("#sortSelect"),
      roleChips: document.querySelector("#roleChips"),
      championGrid: document.querySelector("#championGrid"),
      championDetail: document.querySelector("#championDetail"),
      systemsNotice: document.querySelector("#systemsNotice"),
      systemSearchInput: document.querySelector("#systemSearchInput"),
      systemCategorySelect: document.querySelector("#systemCategorySelect"),
      systemSourceSelect: document.querySelector("#systemSourceSelect"),
      systemChips: document.querySelector("#systemChips"),
      systemSummary: document.querySelector("#systemSummary"),
      systemsGrid: document.querySelector("#systemsGrid"),
      itemsNotice: document.querySelector("#itemsNotice"),
      itemSearchInput: document.querySelector("#itemSearchInput"),
      itemCategorySelect: document.querySelector("#itemCategorySelect"),
      itemSummary: document.querySelector("#itemSummary"),
      itemGrid: document.querySelector("#itemGrid"),
      regionsGrid: document.querySelector("#regionsGrid"),
      worldGrid: document.querySelector("#worldGrid"),
      themeToggle: document.querySelector("#themeToggle"),
      themeLabel: document.querySelector("#themeLabel"),
      hero: document.querySelector(".hero")
    };

    function applyTheme(theme, shouldStore = true) {
      const nextTheme = theme === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      if (els.themeLabel) {
        els.themeLabel.textContent = nextTheme === "light" ? "深色" : "浅色";
      }
      if (els.themeToggle) {
        const nextLabel = nextTheme === "light" ? "切换为深色主题" : "切换为浅色主题";
        els.themeToggle.setAttribute("aria-label", nextLabel);
        els.themeToggle.setAttribute("title", nextLabel);
      }
      if (shouldStore) {
        try {
          localStorage.setItem(THEME_KEY, nextTheme);
        } catch (error) {
          console.warn("Theme preference could not be saved", error);
        }
      }
    }

    function getCurrentTheme() {
      return document.documentElement.dataset.theme === "light" ? "light" : "dark";
    }

    function escapeHTML(value) {
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function stripDDragonHTML(value) {
      const template = document.createElement("template");
      template.innerHTML = String(value ?? "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/li>/gi, "\n");
      return template.content.textContent.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
    }

    function splashUrl(id, skin = 0) {
      return `${DDRAGON}/cdn/img/champion/splash/${id}_${skin}.jpg`;
    }

    function squareUrl(champion) {
      return `${DDRAGON}/cdn/${state.version}/img/champion/${champion.image.full}`;
    }

    function passiveIconUrl(passive) {
      return `${DDRAGON}/cdn/${state.version}/img/passive/${passive.image.full}`;
    }

    function spellIconUrl(spell) {
      return `${DDRAGON}/cdn/${state.version}/img/spell/${spell.image.full}`;
    }

    function itemIconUrl(item) {
      return `${DDRAGON}/cdn/${state.version}/img/item/${item.image.full}`;
    }

    function mapImageUrl() {
      return `${DDRAGON}/cdn/${state.version}/img/map/map11.png`;
    }

    function cdragonAsset(path) {
      return `${CDRAGON}/game/assets/${path}`;
    }

    function systemImageUrl(value) {
      if (!value) return "";
      if (value === "map") return mapImageUrl();
      if (/^https?:\/\//i.test(value)) return value;
      return cdragonAsset(value);
    }

    function regionOf(champion) {
      return REGION_BY_ID[champion.id] || REGION_BY_ID[champion.name] || "Runeterra";
    }

    function regionLabel(regionId) {
      return REGION_LABEL_BY_ID[regionId] || "符文之地";
    }

    function roleLabels(tags = []) {
      return tags.map((tag) => ROLE_LABELS[tag] || tag).join(" / ");
    }

    function normalize(value) {
      return String(value ?? "").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
    }

    function championSlug(champion) {
      const overrides = {
        MonkeyKing: "wukong",
        Nunu: "nunu",
        RenataGlasc: "renata-glasc"
      };
      if (overrides[champion.id]) return overrides[champion.id];
      return normalize(champion.name)
        .replace(/&/g, "and")
        .replace(/[.'’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }

    function leagueChampionUrl(champion) {
      return `https://lol.qq.com/data/info-defail.shtml?id=${champion.key}`;
    }

    function abilityVideoUrls(champion, abilityKey) {
      const numericId = String(champion.key).padStart(4, "0");
      const suffix = abilityKey === "P" ? "P1" : `${abilityKey}1`;
      const base = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${numericId}/ability_${numericId}_${suffix}`;
      return {
        webm: `${base}.webm`,
        mp4: `${base}.mp4`
      };
    }

    async function fetchJson(url) {
      const response = await fetch(url, { cache: "force-cache" });
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      return response.json();
    }

    async function resolveVersion() {
      try {
        const versions = await fetchJson(`${DDRAGON}/api/versions.json`);
        return versions[0] || DEFAULT_VERSION;
      } catch (error) {
        console.warn("Using fallback Data Dragon version", error);
        return DEFAULT_VERSION;
      }
    }

    async function prepareVersion() {
      if (!state.versionLoaded) {
        state.version = await resolveVersion();
        state.versionLoaded = true;
      }
      if (els.versionMetric) {
        els.versionMetric.textContent = state.version;
      }
      return state.version;
    }

    async function loadChampions() {
      await prepareVersion();
      if (!els.championGrid) return;

      try {
        const data = await fetchJson(`${DDRAGON}/cdn/${state.version}/data/${LOCALE}/champion.json`);
        state.champions = Object.values(data.data).map((champion) => ({
          ...champion,
          region: regionOf(champion)
        }));
        state.champions.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
        if (els.countMetric) els.countMetric.textContent = `${state.champions.length} 位`;
        if (els.loadNotice) els.loadNotice.textContent = `已连接 Riot Data Dragon ${state.version}。英雄资料、技能文本、图标和原画会从官方 CDN 加载；长篇宇宙内容请通过官方链接继续阅读。`;
        renderRegionOptions();
        const requestedRegion = new URLSearchParams(window.location.search).get("region");
        if (requestedRegion && REGION_LABEL_BY_ID[requestedRegion]) {
          state.region = requestedRegion;
          els.regionSelect.value = requestedRegion;
        }
        renderRoleChips();
        renderChampionGrid();
        const defaultChampion = state.champions.find((champion) => champion.id === "AurelionSol") || state.champions[0];
        if (defaultChampion) selectChampion(defaultChampion.id);
      } catch (error) {
        console.error(error);
        if (els.countMetric) els.countMetric.textContent = "未连接";
        if (els.loadNotice) els.loadNotice.textContent = "无法连接 Riot 官方 Data Dragon。请检查网络或 CDN 访问权限；页面不会使用第三方或自写资料替代官方数据。";
        els.championGrid.innerHTML = `<div class="empty">没有拿到官方英雄列表。联网后刷新页面即可加载全部英雄。</div>`;
        els.championDetail.innerHTML = `<div class="empty">等待 Riot 官方数据源。</div>`;
      }
    }

    async function loadChampionDetail(id) {
      if (state.details.has(id)) return state.details.get(id);
      const data = await fetchJson(`${DDRAGON}/cdn/${state.version}/data/${LOCALE}/champion/${id}.json`);
      const detail = data.data[id];
      detail.region = regionOf(detail);
      state.details.set(id, detail);
      return detail;
    }

    function renderRegionOptions() {
      const counts = state.champions.reduce((total, champion) => {
        total[champion.region] = (total[champion.region] || 0) + 1;
        return total;
      }, {});
      const options = REGIONS
        .map((region) => {
          const count = counts[region.id] || 0;
          const suffix = count ? `（${count}）` : "（世界观）";
          return `<option value="${region.id}">${region.label}${suffix}</option>`;
        })
        .join("");
      els.regionSelect.innerHTML = `<option value="">全部地区</option>${options}`;
    }

    function renderRoleChips() {
      const roles = Object.keys(ROLE_LABELS);
      els.roleChips.innerHTML = [
        `<button class="chip ${state.role ? "" : "is-active"}" type="button" data-role="">全部定位</button>`,
        ...roles.map((role) => `<button class="chip ${state.role === role ? "is-active" : ""}" type="button" data-role="${role}">${ROLE_LABELS[role]}</button>`)
      ].join("");
    }

    function championMatches(champion) {
      if (state.region && champion.region !== state.region) return false;
      if (state.role && !champion.tags.includes(state.role)) return false;
      if (!state.query) return true;
      const haystack = normalize([
        champion.name,
        champion.title,
        champion.id,
        champion.blurb,
        regionLabel(champion.region),
        roleLabels(champion.tags)
      ].join(" "));
      return haystack.includes(normalize(state.query));
    }

    function sortChampions(champions) {
      return [...champions].sort((a, b) => {
        if (state.sort === "region") {
          return regionLabel(a.region).localeCompare(regionLabel(b.region), "zh-Hans-CN") || a.name.localeCompare(b.name, "zh-Hans-CN");
        }
        if (state.sort === "role") {
          return roleLabels(a.tags).localeCompare(roleLabels(b.tags), "zh-Hans-CN") || a.name.localeCompare(b.name, "zh-Hans-CN");
        }
        return a.name.localeCompare(b.name, "zh-Hans-CN");
      });
    }

    function renderChampionGrid() {
      const visible = sortChampions(state.champions.filter(championMatches));
      if (!visible.length) {
        els.championGrid.innerHTML = `<div class="empty">没有符合条件的英雄。</div>`;
        return;
      }

      els.championGrid.innerHTML = visible.map((champion) => `
        <button class="champion-card ${state.selectedId === champion.id ? "is-active" : ""}" type="button" data-id="${champion.id}" aria-label="查看 ${escapeHTML(champion.name)}">
          <img src="${squareUrl(champion)}" alt="${escapeHTML(champion.name)} 头像" loading="lazy">
          <span class="champion-card-body">
            <strong>${escapeHTML(champion.name)}</strong>
            <span>${escapeHTML(regionLabel(champion.region))} · ${escapeHTML(roleLabels(champion.tags))}</span>
          </span>
        </button>
      `).join("");
    }

    function renderDetailLoading(champion) {
      state.selectedId = champion.id;
      els.hero.style.setProperty("--hero-image", `url('${splashUrl(champion.id)}')`);
      renderChampionGrid();
      els.championDetail.innerHTML = `
        <div class="detail-hero" style="--detail-image: url('${splashUrl(champion.id)}')">
          <div class="detail-hero-content">
            <div class="eyebrow">${escapeHTML(regionLabel(champion.region))}</div>
            <h2>${escapeHTML(champion.name)}</h2>
            <p class="detail-subtitle">${escapeHTML(champion.title)}</p>
          </div>
        </div>
        <div class="detail-body">
          <div class="skeleton" style="width: 70%; height: 22px;"></div>
          <div class="skeleton" style="width: 92%;"></div>
          <div class="skeleton" style="width: 82%;"></div>
        </div>
      `;
    }

    async function selectChampion(id) {
      const summary = state.champions.find((champion) => champion.id === id);
      if (!summary) return;
      renderDetailLoading(summary);
      try {
        const detail = await loadChampionDetail(id);
        renderChampionDetail(detail);
      } catch (error) {
        console.error(error);
        els.championDetail.innerHTML = `
          <div class="empty">
            无法加载 ${escapeHTML(summary.name)} 的官方详情。请稍后刷新，或打开官方英雄页继续查看。
            <div class="link-row">
              <a class="source-link" href="${leagueChampionUrl(summary)}" target="_blank" rel="noreferrer">官方英雄页</a>
            </div>
          </div>
        `;
      }
    }

    function renderChampionDetail(champion) {
      const abilities = [
        {
          key: "P",
          name: champion.passive.name,
          description: champion.passive.description,
          icon: passiveIconUrl(champion.passive),
          facts: ["被动技能"]
        },
        ...champion.spells.map((spell, index) => ({
          key: ["Q", "W", "E", "R"][index],
          name: spell.name,
          description: spell.description || spell.tooltip,
          icon: spellIconUrl(spell),
          facts: [
            spell.cooldownBurn ? `冷却：${spell.cooldownBurn}` : "",
            spell.costBurn ? `消耗：${spell.costBurn}` : "",
            spell.rangeBurn ? `范围：${spell.rangeBurn}` : ""
          ].filter(Boolean)
        }))
      ];

      const detailUrl = leagueChampionUrl(champion);
      const universeUrl = "https://yz.lol.qq.com/zh_CN/champions/";
      els.hero.style.setProperty("--hero-image", `url('${splashUrl(champion.id)}')`);
      els.championDetail.innerHTML = `
        <div class="detail-hero" style="--detail-image: url('${splashUrl(champion.id)}')">
          <div class="detail-hero-content">
            <div class="eyebrow">${escapeHTML(regionLabel(champion.region))}</div>
            <h2>${escapeHTML(champion.name)}</h2>
            <p class="detail-subtitle">${escapeHTML(champion.title)}</p>
            <p class="tagline">${escapeHTML(champion.blurb)}</p>
            <div class="meta-strip">
              <span class="meta-pill">${escapeHTML(roleLabels(champion.tags))}</span>
              <span class="meta-pill">官方 ID：${escapeHTML(champion.id)}</span>
              <span class="meta-pill">数字 ID：${escapeHTML(champion.key)}</span>
            </div>
          </div>
        </div>
        <div class="detail-body">
          <section class="text-block">
            <h3>背景故事</h3>
            <p>${escapeHTML(champion.lore || champion.blurb)}</p>
            <div class="link-row">
              <a class="source-link" href="${detailUrl}" target="_blank" rel="noreferrer">官方英雄页</a>
              <a class="source-link" href="${universeUrl}" target="_blank" rel="noreferrer">Universe 英雄索引</a>
            </div>
          </section>
          <section class="abilities">
            <h3>技能与官方演示</h3>
            <div class="abilities-list">
              ${abilities.map((ability) => renderAbility(champion, ability, detailUrl)).join("")}
            </div>
          </section>
        </div>
      `;
      attachVideoFallbacks();
    }

    function renderAbility(champion, ability, detailUrl) {
      const video = abilityVideoUrls(champion, ability.key);
      const facts = ability.facts.length
        ? `<div class="ability-facts">${ability.facts.map((fact) => `<span class="meta-pill">${escapeHTML(fact)}</span>`).join("")}</div>`
        : "";

      return `
        <article class="ability">
          <div class="ability-copy">
            <img class="ability-icon" src="${ability.icon}" alt="${escapeHTML(ability.name)} 图标" loading="lazy">
            <div>
              <div class="ability-name">
                <span class="ability-key">${ability.key}</span>
                <strong>${escapeHTML(ability.name)}</strong>
              </div>
              <p class="ability-desc">${escapeHTML(stripDDragonHTML(ability.description))}</p>
              ${facts}
            </div>
          </div>
          <div class="ability-video">
            <video controls muted loop playsinline preload="metadata" poster="${splashUrl(champion.id)}" data-video="${ability.key}">
              <source src="${video.webm}" type="video/webm">
              <source src="${video.mp4}" type="video/mp4">
            </video>
            <div class="video-fallback" hidden>
              当前浏览器未能加载该技能的官方演示视频。可能是该英雄资源尚未公开、资源命名变更，或网络拦截；可打开官方英雄页核对。
              <div class="link-row">
                <a class="source-link" href="${detailUrl}" target="_blank" rel="noreferrer">打开官方英雄页</a>
              </div>
            </div>
          </div>
        </article>
      `;
    }

    function attachVideoFallbacks() {
      document.querySelectorAll("video[data-video]").forEach((video) => {
        const fallback = video.parentElement.querySelector(".video-fallback");
        const showFallback = () => {
          if (video.readyState < 2) fallback.hidden = false;
        };
        video.addEventListener("loadeddata", () => {
          fallback.hidden = true;
        }, { once: true });
        video.addEventListener("error", showFallback);
        video.querySelectorAll("source").forEach((source) => source.addEventListener("error", showFallback));
        window.setTimeout(showFallback, 7000);
      });
    }

    function systemCategoryLabel(category) {
      return SYSTEM_CATEGORY_LABELS[category] || "游戏系统";
    }

    function systemSourceLabel(source) {
      return SYSTEM_SOURCE_LABELS[source] || "资料";
    }

    function itemTagLabels(tags = []) {
      return tags.map((tag) => ITEM_TAG_LABELS[tag] || tag);
    }

    function itemSubtype(tags = []) {
      if (tags.includes("Consumable")) return "消耗品";
      if (tags.includes("Trinket") || tags.includes("Vision")) return "视野装备";
      if (tags.includes("Boots") || tags.includes("NonbootsMovement")) return "移动装备";
      if (tags.includes("Jungle")) return "打野装备";
      if (tags.includes("GoldPer")) return "辅助/工资装";
      if (tags.includes("SpellDamage") || tags.includes("MagicPenetration")) return "法术装备";
      if (tags.includes("Damage") || tags.includes("CriticalStrike") || tags.includes("AttackSpeed")) return "攻击装备";
      if (tags.includes("Armor") || tags.includes("SpellBlock") || tags.includes("Health")) return "防御装备";
      return "装备";
    }

    function createMechanicEntries() {
      const imagePositionByCategory = {
        map: "50% 50%",
        structure: "50% 42%",
        lane: "50% 58%",
        jungle: "36% 48%",
        epic: "52% 22%",
        dragon: "68% 60%",
        vision: "42% 52%",
        economy: "50% 50%"
      };
      return STATIC_GAME_SYSTEMS.map((entry, index) => ({
        id: `mechanic-${index}`,
        source: "mechanic",
        typeLabel: systemSourceLabel("mechanic"),
        category: entry.category,
        categoryLabel: systemCategoryLabel(entry.category),
        name: entry.name,
        summary: entry.summary,
        tags: [systemCategoryLabel(entry.category), ...(entry.tags || [])],
        image: systemImageUrl(entry.image),
        visualMode: entry.visualMode || "object",
        imagePosition: entry.imagePosition || imagePositionByCategory[entry.category] || "50% 50%",
        icon: "",
        symbol: entry.symbol || "L"
      }));
    }

    function createItemEntries(items) {
      return Object.entries(items)
        .filter(([, item]) => item?.image?.full && item?.maps?.["11"] && !item.hideFromAll && item.name)
        .map(([id, item]) => {
          const cleanName = stripDDragonHTML(item.name);
          const tags = itemTagLabels(item.tags || []);
          const subtype = itemSubtype(item.tags || []);
          const price = Number.isFinite(item.gold?.total) && item.gold.total > 0 ? `${item.gold.total} 金币` : "无价格";
          const summary = stripDDragonHTML(item.plaintext || item.description || "装备资料来自 Riot Data Dragon。");
          return {
            id: `item-${id}`,
            source: "item",
            typeLabel: subtype,
            category: "item",
            categoryLabel: systemCategoryLabel("item"),
            name: cleanName || item.name,
            summary: summary || "装备资料来自 Riot Data Dragon。",
            tags: [price, subtype, ...tags].filter(Boolean).slice(0, 8),
            icon: itemIconUrl(item),
            image: "",
            symbol: "I"
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
    }

    function itemCategoryKey(tags = []) {
      if (tags.includes("Consumable")) return "consumable";
      if (tags.includes("Trinket") || tags.includes("Vision") || tags.includes("Stealth")) return "vision";
      if (tags.includes("Jungle")) return "jungle";
      if (tags.includes("GoldPer")) return "support";
      if (tags.includes("Boots") || tags.includes("NonbootsMovement")) return "movement";
      if (tags.includes("SpellDamage") || tags.includes("MagicPenetration") || tags.includes("Mana") || tags.includes("ManaRegen")) return "magic";
      if (tags.includes("Armor") || tags.includes("SpellBlock") || tags.includes("Health") || tags.includes("HealthRegen")) return "defense";
      return "attack";
    }

    function itemCategoryName(category) {
      return {
        attack: "攻击",
        magic: "法术",
        defense: "防御",
        movement: "移动",
        jungle: "打野",
        support: "辅助",
        vision: "视野",
        consumable: "消耗品"
      }[category] || "装备";
    }

    function cleanItemName(name) {
      return stripDDragonHTML(name).replace(/\s+/g, " ").trim();
    }

    function splitOfficialLines(value) {
      return stripDDragonHTML(String(value || "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/li>/gi, "\n")
        .replace(/<\/(passive|active|attention|rules|mainText|ornnBonus|rarityLegendary|subtitleLeft|stats)>/gi, "\n"))
        .split(/\n+/)
        .map((line) => line.replace(/\s+/g, " ").trim())
        .filter(Boolean);
    }

    function mergeStatLines(lines) {
      const merged = [];
      for (let index = 0; index < lines.length; index += 1) {
        const current = lines[index];
        const next = lines[index + 1];
        if (next && /^[+-]?\d+(\.\d+)?%?$/.test(current) && !/^[+-]?\d/.test(next)) {
          merged.push(`${current} ${next}`);
          index += 1;
        } else {
          merged.push(current);
        }
      }
      return merged;
    }

    function parseItemDescription(description) {
      const raw = String(description || "");
      const statsMatch = raw.match(/<stats>([\s\S]*?)<\/stats>/i);
      const statsLines = statsMatch ? mergeStatLines(splitOfficialLines(statsMatch[1])) : [];
      const effectHtml = raw.replace(/<stats>[\s\S]*?<\/stats>/i, "");
      const effectLines = splitOfficialLines(effectHtml);
      return {
        statsLines,
        effectLines
      };
    }

    function itemRecordScore(item) {
      return [
        item.gold?.purchasable ? 1000 : 0,
        item.inStore === false ? -500 : 0,
        item.requiredChampion ? -250 : 0,
        item.requiredAlly ? -150 : 0,
        Number(item.gold?.total || 0)
      ].reduce((total, value) => total + value, 0);
    }

    function buildItemTree(id, itemMap, seen = new Set()) {
      const item = itemMap.get(id);
      if (!item?.image?.full || seen.has(id)) return null;
      const nextSeen = new Set(seen);
      nextSeen.add(id);
      const children = (item.from || [])
        .map((childId) => buildItemTree(childId, itemMap, nextSeen))
        .filter(Boolean);
      return {
        id,
        name: cleanItemName(item.name),
        icon: itemIconUrl(item),
        totalPrice: Number(item.gold?.total || 0),
        basePrice: Number(item.gold?.base || 0),
        children
      };
    }

    function flattenBuildTreeNames(node) {
      if (!node) return [];
      return [
        node.name,
        ...node.children.flatMap((child) => flattenBuildTreeNames(child))
      ].filter(Boolean);
    }

    function createShopItemEntries(items) {
      const rawEntries = Object.entries(items)
        .filter(([, item]) => item?.image?.full && item?.maps?.["11"] && !item.hideFromAll && item.name)
        .filter(([, item]) => item.gold?.purchasable && item.inStore !== false && !item.requiredChampion && !item.requiredAlly)
        .map(([id, item]) => ({ id, item, name: cleanItemName(item.name), score: itemRecordScore(item) }))
        .filter((entry) => entry.name);

      const byName = new Map();
      rawEntries.forEach((entry) => {
        const current = byName.get(entry.name);
        if (!current || entry.score > current.score) byName.set(entry.name, entry);
      });

      const rawById = new Map(Object.entries(items));
      const entries = [...byName.values()].map(({ id, item, name }) => {
        const parsed = parseItemDescription(item.description || item.plaintext || "");
        const category = itemCategoryKey(item.tags || []);
        const buildTree = buildItemTree(id, rawById);
        const from = (item.from || []).map((componentId) => {
          const component = rawById.get(componentId);
          if (!component?.image?.full) return null;
          return {
            id: componentId,
            name: cleanItemName(component.name),
            icon: itemIconUrl(component)
          };
        }).filter(Boolean);
        const into = (item.into || []).map((targetId) => {
          const target = rawById.get(targetId);
          return target ? cleanItemName(target.name) : "";
        }).filter(Boolean);
        const totalPrice = Number(item.gold?.total || 0);
        const sellPrice = Number(item.gold?.sell || 0);
        const tags = itemTagLabels(item.tags || []);
        return {
          id,
          name,
          category,
          categoryName: itemCategoryName(category),
          icon: itemIconUrl(item),
          totalPrice,
          sellPrice,
          statsLines: parsed.statsLines,
          effectLines: parsed.effectLines,
          from,
          into,
          buildTree,
          tags,
          searchText: normalize([
            name,
            itemCategoryName(category),
            totalPrice,
            sellPrice,
            ...tags,
            ...parsed.statsLines,
            ...parsed.effectLines,
            ...from.map((component) => component.name),
            ...flattenBuildTreeNames(buildTree),
            ...into
          ].join(" "))
        };
      });

      return entries.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
    }

    function createSummonerEntries(spells) {
      return Object.values(spells)
        .filter((spell) => spell?.image?.full && Array.isArray(spell.modes) && spell.modes.includes("CLASSIC"))
        .map((spell) => ({
          id: `summoner-${spell.id}`,
          source: "summoner",
          typeLabel: systemSourceLabel("summoner"),
          category: "summoner",
          categoryLabel: systemCategoryLabel("summoner"),
          name: spell.name,
          summary: stripDDragonHTML(spell.description || spell.tooltip || "召唤师技能资料来自 Riot Data Dragon。"),
          tags: [
            spell.cooldownBurn ? `冷却：${spell.cooldownBurn}` : "",
            spell.summonerLevel ? `等级：${spell.summonerLevel}` : "",
            "召唤师峡谷"
          ].filter(Boolean),
          icon: spellIconUrl(spell),
          image: "",
          symbol: "S"
        }))
        .sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN"));
    }

    function renderSystemOptions() {
      els.systemCategorySelect.innerHTML = [
        `<option value="">全部分类</option>`,
        ...SYSTEM_CATEGORIES.map(([id, label]) => `<option value="${id}">${label}</option>`)
      ].join("");
    }

    function renderSystemChips() {
      const counts = state.systemEntries.reduce((total, entry) => {
        total[entry.category] = (total[entry.category] || 0) + 1;
        return total;
      }, {});
      els.systemChips.innerHTML = [
        `<button class="chip ${state.systemCategory ? "" : "is-active"}" type="button" data-system-category="">全部系统</button>`,
        ...SYSTEM_CATEGORIES.map(([id, label]) => {
          const count = counts[id] || 0;
          return `<button class="chip ${state.systemCategory === id ? "is-active" : ""}" type="button" data-system-category="${id}">${label}${count ? ` ${count}` : ""}</button>`;
        })
      ].join("");
    }

    function systemMatches(entry) {
      if (state.systemCategory && entry.category !== state.systemCategory) return false;
      if (state.systemSource && entry.source !== state.systemSource) return false;
      if (!state.systemQuery) return true;
      const haystack = normalize([
        entry.name,
        entry.summary,
        entry.typeLabel,
        entry.categoryLabel,
        entry.source,
        ...(entry.tags || [])
      ].join(" "));
      return haystack.includes(normalize(state.systemQuery));
    }

    function renderSystems() {
      const visible = state.systemEntries.filter(systemMatches);
      const total = state.systemEntries.length;
      els.systemSummary.textContent = `当前显示 ${visible.length} / ${total} 条资料。召唤师技能来自当前 Data Dragon 版本；机制卡片用于分类检索，装备精确数值请进入装备资料库。`;
      renderSystemChips();

      if (!visible.length) {
        els.systemsGrid.innerHTML = `<div class="empty">没有符合条件的系统资料。</div>`;
        return;
      }

      els.systemsGrid.innerHTML = visible.map((entry) => {
        const visualClass = escapeHTML(entry.visualMode || "object");
        const visual = entry.icon
          ? `<div class="system-visual icon"><img src="${entry.icon}" alt="${escapeHTML(entry.name)} 图标" loading="lazy" onerror="this.parentElement.innerHTML='<span class=&quot;system-symbol&quot;>${escapeHTML(entry.symbol)}</span>'"></div>`
          : entry.image
            ? `<div class="system-visual ${visualClass}"><img src="${entry.image}" alt="${escapeHTML(entry.name)} 配图" loading="lazy" style="object-position: ${escapeHTML(entry.imagePosition || "50% 50%")}" onerror="this.parentElement.innerHTML='<span class=&quot;system-symbol&quot;>${escapeHTML(entry.symbol)}</span>'"></div>`
            : `<div class="system-visual"><span class="system-symbol">${escapeHTML(entry.symbol)}</span></div>`;
        const tags = (entry.tags || []).map((tag) => `<span class="system-tag">${escapeHTML(tag)}</span>`).join("");
        return `
          <article class="system-card" data-source="${entry.source}" data-category="${entry.category}">
            ${visual}
            <div class="system-card-body">
              <div class="system-card-head">
                <h3>${escapeHTML(entry.name)}</h3>
                <span class="system-type">${escapeHTML(entry.typeLabel)}</span>
              </div>
              <p>${escapeHTML(entry.summary)}</p>
              <div class="system-tags">${tags}</div>
            </div>
          </article>
        `;
      }).join("");
    }

    async function loadGameSystems() {
      state.systemEntries = createMechanicEntries();
      renderSystemOptions();
      renderSystems();

      try {
        const summonerData = await fetchJson(`${DDRAGON}/cdn/${state.version}/data/${LOCALE}/summoner.json`);
        const summonerEntries = createSummonerEntries(summonerData.data || {});
        state.systemEntries = [
          ...createMechanicEntries(),
          ...summonerEntries
        ];
        els.systemsNotice.textContent = `已加载 Riot Data Dragon ${state.version} 的 ${summonerEntries.length} 个召唤师技能，并整理 ${STATIC_GAME_SYSTEMS.length} 条游戏机制卡片。机制配图使用 Data Dragon 与可对应游戏对象的客户端资产镜像；装备请进入独立装备资料库查看。`;
        renderSystems();
      } catch (error) {
        console.error(error);
        els.systemsNotice.textContent = "召唤师技能暂时无法从 Riot Data Dragon 加载；当前先显示机制卡片，刷新或联网后会自动补齐官方数据。";
        renderSystems();
      }
    }

    function itemMatches(entry) {
      if (state.itemCategory && entry.category !== state.itemCategory) return false;
      if (!state.itemQuery) return true;
      return entry.searchText.includes(normalize(state.itemQuery));
    }

    function renderBuildNode(node, isRoot = false) {
      if (!node) return "";
      const children = node.children.length
        ? `<div class="item-build-children">${node.children.map((child) => renderBuildNode(child)).join("")}</div>`
        : "";
      const price = node.totalPrice > 0 ? `${node.totalPrice} 金币` : "无价格";
      return `
        <div class="item-build-node ${isRoot ? "is-root" : ""}">
          <div class="item-build-entry">
            <img src="${node.icon}" alt="${escapeHTML(node.name)} 图标" loading="lazy">
            <span>${escapeHTML(node.name)}</span>
            <small>${escapeHTML(price)}</small>
          </div>
          ${children}
        </div>
      `;
    }

    function renderItemTooltip(entry) {
      const stats = entry.statsLines.length
        ? `<div class="item-tooltip-section"><strong>基础数值</strong><ul class="item-stat-list">${entry.statsLines.map((line) => `<li>${escapeHTML(line)}</li>`).join("")}</ul></div>`
        : "";
      const effects = entry.effectLines.length
        ? `<div class="item-tooltip-section"><strong>效果</strong><ul class="item-effect-list">${entry.effectLines.map((line) => `<li>${escapeHTML(line)}</li>`).join("")}</ul></div>`
        : "";
      const route = entry.buildTree?.children?.length
        ? `<div class="item-tooltip-section"><strong>合成路线</strong><div class="item-build-tree">${renderBuildNode(entry.buildTree, true)}</div></div>`
        : `<div class="item-tooltip-section"><strong>合成路线</strong><span class="item-empty-route">基础装备或无需组件。</span></div>`;
      return `
        <div class="item-tooltip" role="tooltip">
          <div class="item-tooltip-head">
            <img src="${entry.icon}" alt="${escapeHTML(entry.name)} 图标" loading="lazy">
            <div>
              <h3>${escapeHTML(entry.name)}</h3>
              <div class="item-price">总价：${entry.totalPrice} 金币</div>
            </div>
          </div>
          ${stats}
          ${effects}
          ${route}
        </div>
      `;
    }

    function renderItems() {
      if (!els.itemGrid) return;
      const visible = state.items.filter(itemMatches);
      els.itemSummary.textContent = `当前显示 ${visible.length} / ${state.items.length} 件装备。价格使用 Data Dragon 的 total 字段，即该装备的总价。`;
      if (!visible.length) {
        els.itemGrid.innerHTML = `<div class="empty">没有符合条件的装备。</div>`;
        return;
      }
      els.itemGrid.innerHTML = visible.map((entry) => `
        <button class="item-cell" type="button" aria-label="查看 ${escapeHTML(entry.name)}">
          <img src="${entry.icon}" alt="${escapeHTML(entry.name)} 图标" loading="lazy">
          <span class="item-cell-name">${escapeHTML(entry.name)}</span>
          ${renderItemTooltip(entry)}
        </button>
      `).join("");
    }

    async function loadItems() {
      if (!els.itemGrid) return;
      await prepareVersion();
      try {
        const itemData = await fetchJson(`${DDRAGON}/cdn/${state.version}/data/${LOCALE}/item.json`);
        state.items = createShopItemEntries(itemData.data || {});
        if (els.itemsNotice) {
          els.itemsNotice.textContent = `已加载 Riot Data Dragon ${state.version} 的 ${state.items.length} 件可购买召唤师峡谷装备，并按名称去重。`;
        }
        renderItems();
      } catch (error) {
        console.error(error);
        if (els.itemsNotice) els.itemsNotice.textContent = "暂时无法从 Riot Data Dragon 加载装备数据，请检查网络后刷新页面。";
        els.itemGrid.innerHTML = `<div class="empty">等待官方装备数据。</div>`;
      }
    }

    function renderRegions() {
      if (!els.regionsGrid) return;
      els.regionsGrid.innerHTML = REGIONS.map((region) => `
        <article class="region-card">
          <img src="${splashUrl(region.rep)}" alt="${escapeHTML(region.label)} 代表英雄官方原画" loading="lazy">
          <div class="region-card-body">
            <h3>${escapeHTML(region.label)}</h3>
            <p>${escapeHTML(region.summary)}</p>
            <div class="link-row">
              <a class="source-link" href="${region.url}" target="_blank" rel="noreferrer">官方资料</a>
              <a class="ghost-button" href="champions.html?region=${region.id}">筛选英雄</a>
            </div>
          </div>
        </article>
      `).join("");
    }

    function renderWorldTopics() {
      if (!els.worldGrid) return;
      els.worldGrid.innerHTML = WORLD_TOPICS.map((topic) => `
        <article class="world-card">
          <h3>${escapeHTML(topic.title)}</h3>
          <p>${escapeHTML(topic.body)}</p>
          <div class="link-row">
            ${topic.links.map(([label, url]) => `<a class="source-link" href="${url}" target="_blank" rel="noreferrer">${escapeHTML(label)}</a>`).join("")}
          </div>
        </article>
      `).join("");
    }

    function wireEvents() {
      if (els.themeToggle) els.themeToggle.addEventListener("click", () => {
        applyTheme(getCurrentTheme() === "light" ? "dark" : "light");
      });
      if (els.systemSearchInput) els.systemSearchInput.addEventListener("input", (event) => {
        state.systemQuery = event.target.value.trim();
        renderSystems();
      });
      if (els.systemCategorySelect) els.systemCategorySelect.addEventListener("change", (event) => {
        state.systemCategory = event.target.value;
        renderSystems();
      });
      if (els.systemSourceSelect) els.systemSourceSelect.addEventListener("change", (event) => {
        state.systemSource = event.target.value;
        renderSystems();
      });
      if (els.systemChips) els.systemChips.addEventListener("click", (event) => {
        const button = event.target.closest("[data-system-category]");
        if (!button) return;
        state.systemCategory = button.dataset.systemCategory;
        els.systemCategorySelect.value = state.systemCategory;
        renderSystems();
      });
      if (els.itemSearchInput) els.itemSearchInput.addEventListener("input", (event) => {
        state.itemQuery = event.target.value.trim();
        renderItems();
      });
      if (els.itemCategorySelect) els.itemCategorySelect.addEventListener("change", (event) => {
        state.itemCategory = event.target.value;
        renderItems();
      });
      if (els.searchInput) els.searchInput.addEventListener("input", (event) => {
        state.query = event.target.value.trim();
        renderChampionGrid();
      });
      if (els.regionSelect) els.regionSelect.addEventListener("change", (event) => {
        state.region = event.target.value;
        renderChampionGrid();
      });
      if (els.sortSelect) els.sortSelect.addEventListener("change", (event) => {
        state.sort = event.target.value;
        renderChampionGrid();
      });
      if (els.roleChips) els.roleChips.addEventListener("click", (event) => {
        const button = event.target.closest("[data-role]");
        if (!button) return;
        state.role = button.dataset.role;
        renderRoleChips();
        renderChampionGrid();
      });
      if (els.championGrid) els.championGrid.addEventListener("click", (event) => {
        const button = event.target.closest("[data-id]");
        if (!button) return;
        selectChampion(button.dataset.id);
      });
    }

    async function initializePage() {
      applyTheme(getCurrentTheme(), false);
      renderRegions();
      renderWorldTopics();
      wireEvents();
      if (els.championGrid) {
        await loadChampions();
      } else {
        await prepareVersion();
      }
      if (els.systemsGrid) {
        await loadGameSystems();
      }
      if (els.itemGrid) {
        await loadItems();
      }
    }

    initializePage();
