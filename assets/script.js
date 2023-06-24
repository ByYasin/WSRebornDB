$(document).ready(function() {
  
    const champions = [
      { name: 'Aatrox', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Aatrox.png', lane_image: 'images/topLane.png' },
      { name: 'Akali', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Akali.png', lane_image: 'images/midLane.png' },
      { name: 'Camille', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Camille.png', lane_image: 'images/topLane.png' },
      { name: 'Darius', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Darius.png', lane_image: 'images/topLane.png' },
      { name: 'Dr. Mundo', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/DrMundo.png', lane_image: 'images/topLane.png' },
      { name: 'Fiora', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Fiora.png', lane_image: 'images/topLane.png' },
      { name: 'Gangplank', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Gangplank.png', lane_image: 'images/topLane.png' },
      { name: 'Garen', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Garen.png', lane_image: 'images/topLane.png' },
      { name: 'Irelia', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Irelia.png', lane_image: 'images/topLane.png' },
      { name: 'Jax', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Jax.png', lane_image: 'images/topLane.png' },
      { name: 'Jayce', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Jayce.png', lane_image: 'images/topLane.png' },
      { name: 'Kayle', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kayle.png', lane_image: 'images/topLane.png' },
      { name: 'Kled', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kled.png', lane_image: 'images/topLane.png' },
      { name: 'Mordekaiser', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Mordekaiser.png', lane_image: 'images/topLane.png' },
      { name: 'Quinn', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Quinn.png', lane_image: 'images/topLane.png' },
      { name: 'Renekton', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Renekton.png', lane_image: 'images/topLane.png' },
      { name: 'Rengar', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Rengar.png', lane_image: 'images/jungle.png' },
      { name: 'Riven', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Riven.png', lane_image: 'images/topLane.png' },
      { name: 'Sett', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Sett.png', lane_image: 'images/topLane.png' },
      { name: 'Nasus', role: 'Tank', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Nasus.png', lane_image: 'images/topLane.png' },
      { name: 'Sion', role: 'Tank', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Sion.png', lane_image: 'images/topLane.png' },
      { name: 'Urgot', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Urgot.png', lane_image: 'images/topLane.png' },
      { name: 'Volibear', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Volibear.png', lane_image: 'images/topLane.png' },
      { name: 'Yorick', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Yorick.png', lane_image: 'images/topLane.png' },
      { name: 'Ahri', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Ahri.png', lane_image: 'images/midLane.png' },
      { name: 'Anivia', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Anivia.png', lane_image: 'images/midLane.png' },
      { name: 'Annie', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Annie.png', lane_image: 'images/midLane.png' },
      { name: 'Azir', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Azir.png', lane_image: 'images/midLane.png' },
      { name: 'Cassiopeia', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Cassiopeia.png', lane_image: 'images/midLane.png' },
      { name: 'Corki', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Corki.png', lane_image: 'images/midLane.png' },
      { name: 'Diana', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Diana.png', lane_image: 'images/jungle.png' },
      { name: 'Kassadin', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kassadin.png', lane_image: 'images/midLane.png' },
      { name: 'Katarina', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Katarina.png', lane_image: 'images/midLane.png' },
      { name: 'LeBlanc', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Leblanc.png', lane_image: 'images/midLane.png' },
      { name: 'Lissandra', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Lissandra.png', lane_image: 'images/midLane.png' },
      { name: 'Neeko', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Neeko.png', lane_image: 'images/midLane.png' },
      { name: 'Orianna', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Orianna.png', lane_image: 'images/midLane.png' },
      { name: 'Qiyana', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Qiyana.png', lane_image: 'images/midLane.png' },
      { name: 'Ryze', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Ryze.png', lane_image: 'images/midLane.png' },
      { name: 'Sylas', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Sylas.png', lane_image: 'images/midLane.png' },
      { name: 'Syndra', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Syndra.png', lane_image: 'images/midLane.png' },
      { name: 'Talon', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Talon.png', lane_image: 'images/midLane.png' },
      { name: 'Twisted Fate', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/TwistedFate.png', lane_image: 'images/midLane.png' },
      { name: 'Veigar', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Veigar.png', lane_image: 'images/midLane.png' },
      { name: 'Viktor', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Viktor.png', lane_image: 'images/midLane.png' },
      { name: 'Yasuo', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Yasuo.png', lane_image: 'images/midLane.png' },
      { name: 'Yone', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Yone.png', lane_image: 'images/midLane.png' },
      { name: 'Zed', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Zed.png', lane_image: 'images/midLane.png' },
      { name: 'Zoe', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Zoe.png', lane_image: 'images/midLane.png' },
      { name: 'Amumu', role: 'Tank', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Amumu.png', lane_image: 'images/jungle.png' },
      { name: 'Elise', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Elise.png', lane_image: 'images/jungle.png' },
      { name: 'Evelynn', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Evelynn.png', lane_image: 'images/jungle.png' },
      { name: 'Graves', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Graves.png', lane_image: 'images/jungle.png' },
      { name: 'Hecarim', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Hecarim.png', lane_image: 'images/jungle.png' },
      { name: 'Jarvan IV', role: 'Tank', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/JarvanIV.png', lane_image: 'images/jungle.png' },
      { name: 'Karthus', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Karthus.png', lane_image: 'images/jungle.png' },
      { name: 'Kayn', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kayn.png', lane_image: 'images/jungle.png' },
      { name: 'Kindred', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kindred.png', lane_image: 'images/jungle.png' },
      { name: 'Lee Sin', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/LeeSin.png', lane_image: 'images/jungle.png' },
      { name: 'Lillia', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Lillia.png', lane_image: 'images/jungle.png' },
      { name: 'Master Yi', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/MasterYi.png', lane_image: 'images/jungle.png' },
      { name: 'Warwick', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Warwick.png', lane_image: 'images/jungle.png' },
      { name: 'Xin Zhao', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/XinZhao.png', lane_image: 'images/jungle.png' },
      { name: 'Ashe', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Ashe.png', lane_image: 'images/botLane.png' },
      { name: 'Caitlyn', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Caitlyn.png', lane_image: 'images/botLane.png' },
      { name: 'Draven', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Draven.png', lane_image: 'images/botLane.png' },
      { name: 'Ezreal', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Ezreal.png', lane_image: 'images/botLane.png' },
      { name: 'Jhin', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Jhin.png', lane_image: 'images/botLane.png' },
      { name: 'Jinx', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Jinx.png', lane_image: 'images/botLane.png' },
      { name: 'Kalista', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kalista.png', lane_image: 'images/botLane.png' },
      { name: 'Kai\'Sa', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kaisa.png', lane_image: 'images/botLane.png' },
      { name: 'Kog\'Maw', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/KogMaw.png', lane_image: 'images/botLane.png' },
      { name: 'Lucian', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Lucian.png', lane_image: 'images/botLane.png' },
      { name: 'Miss Fortune', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/MissFortune.png', lane_image: 'images/botLane.png' },
      { name: 'Samira', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Samira.png', lane_image: 'images/botLane.png' },
      { name: 'Senna', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Senna.png', lane_image: 'images/support.png' },
      { name: 'Tristana', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Tristana.png', lane_image: 'images/botLane.png' },
      { name: 'Twitch', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Twitch.png', lane_image: 'images/botLane.png' },
      { name: 'Varus', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Varus.png', lane_image: 'images/botLane.png' },
      { name: 'Vayne', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Vayne.png', lane_image: 'images/botLane.png' },
      { name: 'Xayah', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Xayah.png', lane_image: 'images/botLane.png' },
      { name: 'Blitzcrank', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Blitzcrank.png', lane_image: 'images/support.png' },
      { name: 'Brand', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Brand.png', lane_image: 'images/support.png' },
      { name: 'Janna', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Janna.png', lane_image: 'images/support.png' },
      { name: 'Karma', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Karma.png', lane_image: 'images/support.png' },
      { name: 'Lulu', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Lulu.png', lane_image: 'images/support.png' },
      { name: 'Lux', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Lux.png', lane_image: 'images/support.png' },
      { name: 'Morgana', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Morgana.png', lane_image: 'images/support.png' },
      { name: 'Nautilus', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Nautilus.png', lane_image: 'images/support.png' },
      { name: 'Nami', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Nami.png', lane_image: 'images/support.png' },
      { name: 'Pyke', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Pyke.png', lane_image: 'images/support.png' },
      { name: 'Soraka', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Soraka.png', lane_image: 'images/support.png' },
      { name: 'Swain', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Swain.png', lane_image: 'images/support.png' },
      { name: 'Thresh', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Thresh.png', lane_image: 'images/support.png' },
      { name: 'Xerath', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Xerath.png', lane_image: 'images/support.png' },
      { name: 'Yuumi', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Yuumi.png', lane_image: 'images/support.png' },
      { name: 'Zilean', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Zilean.png', lane_image: 'images/support.png' },
      { name: 'Zyra', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Zyra.png', lane_image: 'images/support.png' },
      { name: 'Aphelios', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Aphelios.png', lane_image: 'images/botLane.png' },
      { name: 'Viego', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Viego.png', lane_image: 'images/jungle.png' },
      { name: 'Kennen', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Kennen.png', lane_image: 'images/topLane.png' },
      { name: 'Pantheon', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Pantheon.png', lane_image: 'images/midLane.png' },
      { name: 'Vel\'Koz', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Velkoz.png', lane_image: 'images/support.png' },
      { name: 'Rell', role: 'Tank', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Rell.png', lane_image: 'images/support.png' },
      { name: 'Gwen', role: 'Fighter', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Gwen.png', lane_image: 'images/topLane.png' },
      { name: 'Shaco', role: 'Assassin', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Shaco.png', lane_image: 'images/jungle.png' },
      { name: 'Akshan', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Akshan.png', lane_image: 'images/midLane.png' },
      { name: 'Ziggs', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Ziggs.png', lane_image: 'images/midLane.png' },
      { name: 'Vex', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Vex.png', lane_image: 'images/midLane.png' },
      { name: 'Zeri', role: 'Marksman', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Zeri.png', lane_image: 'images/botLane.png' },
      { name: 'Renata Glasc', role: 'Support', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Renata.png', lane_image: 'images/support.png' },
      { name: 'Nilah', role: 'Fighter', image: 'https://lolg-cdn.porofessor.gg/img/d/champion-icons/13.12/64/895.png', lane_image: 'images/botLane.png' },
      { name: 'Taliyah', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Taliyah.png', lane_image: 'images/midLane.png' },
      { name: 'Bel\'Veth', role: 'Fighter', image: 'https://lolg-cdn.porofessor.gg/img/d/champion-icons/13.12/64/200.png', lane_image: 'images/jungle.png' },
      { name: 'K\'Sante', role: 'Tank', image: 'https://lolg-cdn.porofessor.gg/img/d/champion-icons/13.12/64/897.png', lane_image: 'images/topLane.png' },
      { name: 'Vladimir', role: 'Mage', image: 'https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Vladimir.png', lane_image: 'images/midLane.png' },
      // other champions
    ];

  
  champions.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  
  function createChampionCards() {
    const championCardsContainer = $('#championCards');
    championCardsContainer.empty();

    champions.forEach(champion => {
      const card = $('<div>').addClass('card').attr('data-roles', champion.role);
      const image = $('<img>').addClass('card-image').attr('src', champion.image);
      const laneImage = $('<img>').addClass('card-lane-image').attr('src', champion.lane_image);
      const name = $('<div>').addClass('card-name').text(champion.name);
      const role = $('<div>').addClass('card-role').text(champion.role);

      card.append(image);
      card.append(laneImage);
      card.append(name);
      card.append(role);
      championCardsContainer.append(card);
    });

    updateCardLayout();
  }

 
  function updateCardLayout() {
    const visibleCards = $('.card').filter(':visible');
    const rowCount = Math.ceil(visibleCards.length / 3);

    visibleCards.removeClass('first-in-row');

    visibleCards.each(function(index) {
      const isFirstInRow = (index % 3 === 0);
      $(this).toggleClass('first-in-row', isFirstInRow);
    });

    if (visibleCards.length === 0) {
      $('#championCards').append('<div class="no-data">...</div>');
    } else {
      $('.no-data').remove();
    }
  }

  
  $('.filterBtn').on('click', function() {
    const role = $(this).data('role');

    if (role === 'all') {
      $('.card').show();
    } else {
      $('.card').hide();
      $('.card[data-roles="' + role + '"]').show();
    }

    $('.filterBtn').removeClass('active');
    $(this).addClass('active');

    updateCardLayout();
  });

  
  createChampionCards();
  $('.filterBtn[data-role="all"]').click();

  
  $('#searchInput').on('keyup', function() {
    const searchValue = $(this).val().toLowerCase();

    if (searchValue.trim() === '') {
      
      $('.card').show();
    } else {
      
      $('.card').hide();
      champions.forEach(champion => {
        if (champion.name.toLowerCase().includes(searchValue)) {
          $('.card[data-roles="' + champion.role + '"]').filter(function() {
            return $(this).find('.card-name').text().toLowerCase().includes(searchValue);
          }).show();
        }
      });
    }

    updateCardLayout();
  });
});