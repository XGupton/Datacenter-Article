import './App.css';
import Header from './Header.jsx';
import Paragraph from './Paragraph.jsx'
import Title from './Title.jsx'
import Image from './Image.jsx'

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="mt-12 px-4">
          <article className="max-w-2xl mx-auto">
            <p className="text-sm">May 2nd, 2025</p>
            <Title>Water Whales: AI Data Centers and Water Usage</Title>
            <p className="text-base mt-2">By Xander Gupton</p>
            <Paragraph>
              28 years ago, the five-time world chess champion, Garry Kasparov, 
              stood up in defeat as he lost a 9-day long series 2.5-3.5 in one of the most 
              monumental chess matches ever played. Though, his opponent was not human, it 
              was a 1.4-ton supercomputer named Deep Blue. Developed by engineers at IBM, the 
              computer used brute-force learning algorithms to calculate over 200 million chess 
              moves per second. It was one of the first times that Artificial Intelligence’s 
              (AI’s) potential was shown to the world at large, where a machine could overcome 
              one of the smartest minds in chess.
              </Paragraph>
              <Image 
              src="/images/Garry-Kasparov-Deep-Blue-IBM-computer.jpg" 
              alt="Garry Kasparov: https://www.britannica.com/topic/Deep-Blue" 
              caption="Garry Kasparov playing a chess match against Deep Blue"
              />
              <Paragraph>
              Since then, AI has become a focal point in society, constantly dominating news 
              headlines and creating restlessness among those who fear its applications. One 
              of the most common headlines in recent years is its vast environmental impact. From 
              massive energy costs to heavy natural resource requirements, many people have begun '
              calling into question the payoff these overbearing systems have begun to have on our planet.
              Many of the multi-national corporations that control some of the largest networks in the 
              world, such as Google or Microsoft, have come under intense pressure from environmentalists
              to create more sustainable systems, or at the very least offset the considerable emissions
              created from their infrastructure.  
              </Paragraph>
              <Paragraph>
              However, even with the mounting pressure for these companies to address their emissions, 
              there is another less mainstream issue many of these large models are at the center of.  
              Water is one of the key resources necessary for data centers to properly operate, as they 
              use an immense amount of energy and thus generate a lot of heat. Overall, there is not much 
              focus on this issue, and large companies are not being regulated as they should be in regard 
              to their water usage. Policy must be guided towards finding more sustainable water 
              solutions for data centers given their high freshwater consumption and political tension in 
              local communities. 
              </Paragraph>
              <Paragraph>
              Beginning with the more energy and water intensive avenue would be scope-2, 
              where water is used off-site to generate electricity to run the data center. 
              There are two main methods water usage is measured, water consumption and water 
              withdrawal. Water consumption refers to water that is lost after being used in 
              a system, generally through evaporation. Water withdrawal is water taken from 
              local sources, circulated through a data center, and then returned later on. 
              Both are often equally important when investigating the water usage of an energy 
              generator, as water consumption leads to gradual loss of water while water 
              withdrawal can temporarily strain a given region. The actual statistics vary 
              widely on the location and availability of different types of energy generation 
              in a given region. The average water usage for electricity generation for 2015 
              was 2.18 liters per kilowatt hour (L/kWh), while the average for thermoelectric 
              systems was 1.25 L/kWh and 16.8 L/kWh for hydropower (Lee et al., 669). This shows 
              the massive difference in water consumption based on the type of power generation 
              available in a given region. Moving to more energy and water sustainable methods 
              of generation such as wind and solar is quite desirable. Estimates from the 
              International Renewable Energy Agency reveal that substantially focusing on the 
              development of renewable energy sources, especially wind and solar would have a 
              massive impact on water withdrawals from energy generation (IRENA, 5). For example, 
              the UK could see withdrawals decline by 50% and the US, Germany, and Austria could 
              see a decline of 25% by focusing development on wind and solar energy (IRENA, 5).
              </Paragraph>
              <Image 
              src="/images/water-consumption-scopes.png" 
              alt="An example of data center’s operational water usage: on-site scope-1 water usage for data center cooling (via
              cooling towers in the example), and off-site scope-2 water
              usage for electricity generation, from Making AI Less “Thirsty”" 
              caption="Example of a data center's operational water usage"
              />
              <Paragraph>
              Moving onto the less demanding avenue of data center water consumption, data centers 
              directly using water for cooling (scope-1). Understanding the underlying infrastructure 
              used to cool data centers is essential to understanding how they consume water. The main 
              method is through “chillers” which cool air down and thus reduce air temperature 
              (Li et al., 3). Other data centers have “cooling towers where external air travels across 
              a wet media so the water evaporates. Fans expel the hot, wet air and the cooled water 
              is recirculated” (Mytton). Essentially, water is either directly cooled to lower the 
              ambient air temperature or it is evaporated to cool down the servers. Either of these 
              methods result in better performance and a higher overall lifetime for the servers. 
              Of these two main methods, evaporating the water uses more water directly, but cooling 
              the ambient temperature still uses water through energy generation(scope-2).
              </Paragraph>
              <Paragraph>
              A majority of the time, clean fresh water (potable in many cases) is used to cool the 
              system to avoid deterioration or bacteria build up in the pipes for the system. There 
              have been examples of integrating chemicals into dirty water to use in the system, but 
              environmental concerns about these chemicals getting into local water sources have 
              held back this approach. That results in the majority of water used, anywhere from 57% 
              to 75%, being potable water (Mytton). Finding alternative solutions, such as using 
              seawater or reclaimed wastewater, is essential to avoid impacting potable water sources 
              near data centers. Moving onto a view of how much water is being used, US data centers 
              consume about 1.7 billion liters of water every day (Mytton). While this is extremely 
              small compared to the total water consumption of the nation, it is expected to continue 
              growing. Additionally, there are issues of transparency with less than a third of data 
              center operators measuring water consumption” (Mytton). Thus, the actual amount of water 
              consumption could be much higher than reported. Further, the source of water pulled by 
              data centers is often not publicly reported, leading to more transparency concerns. 
              There is an overall need for better clarity regarding how much water is being used by 
              data centers and where it’s being pulled from.
              </Paragraph>
              <Paragraph>
              Globally, the race for AI development is a major issue for various regions with a thirst 
              for a technological edge but few resources to achieve that. There is an obvious 
              illustriousness to developing AI infrastructure, as it can position a country or region 
              down a great avenue for growth. However, it must be done very intentionally and with a 
              wide range of factors in mind, including the water availability in a given area. There 
              are already quite a few countries which have been “expanding their data center footprints 
              while ignoring potential water risks. This trend has already resulted in increased water 
              scarcity in several regions” (Sharma). Some specific regions affected include Bengaluru, 
              India, which recently endured its worst water crisis in the city’s 500-year history. The 
              city already operates a data center capacity of 115 megawatts, which consume over 8 million 
              liters of water per day (Sharma). This problem comes with the added note that officials 
              in Bengaluru are planning to expand their cloud computing capacity, which would require 
              the construction of more data centers in the region. These plans were met with heavy 
              resistance from local citizens, with the phrase “it’s not drought, it’s pillage” gaining 
              traction to influence public opinion of the developments (Gupta). While there were proposals 
              to switch from water cooling to air cooling for the data centers, experts predicted that 
              this plan would be equally environmentally damaging (Gupta).
              </Paragraph>
              <Paragraph>
              Bengaluru is only one of many examples of regional problems that can arise from data 
              centers being built when water is already a scarce resource. Chile has recently turned 
              its attention toward the race for AI, turning the city of Santiago into one of the larger 
              hubs for data centers in Latin America. This comes during a period where Chile is facing 
              an unprecedented drought, with “more than half the country’s 19 million people living in 
              areas suffering from “severe water scarcity” (Branford). As discussed previously, data 
              centers would only serve to exacerbate this problem exponentially. Google already had 
              a data center built in Santiago and had plans to build another which would be “authorized 
              to extract 228 liters of water per second — more than 7 billion liters annually” 
              (Urquieta et al.). This amount of water being taken from an already extremely stressed 
              region would be detrimental to the local population. Not to mention the environmental 
              consequences of continuing to take water out of local ecosystems. Activist groups in 
              Santiago fought against these developments heavily, staging demonstrations against 
              the new data center. This forced the city of Santiago to look into the impact of the 
              project and suspend it until Google reassessed its environmental impact (Urquieta et al.). 
              This shows the power that local citizens have to respond to problematic developments 
              which can impact their communities. Policymakers must heed activists calls and attempt 
              to work with the local population and corporations to develop data centers in a more 
              socially and environmentally responsible way.
              </Paragraph>Chile-data-centers.jpg
              <Image 
              src="/images/Chile-data-centers.jpg" 
              alt="Overhead view of a Google data center in Quilicura, Chile" 
              caption="The Google data center in Quilicura, Chile"
              />
              <Paragraph>
              Proponents of AI often claim that AI’s use cases regarding water conservation would 
              counteract the resources required to cool data centers. There has been a growing body 
              of research dedicated to better measuring and optimizing water consumption in a variety 
              of applications. A recent literature review published in the Water Resources Management 
              journal investigated 229 different studies related to applying AI to optimize water usage. 
              The authors found that AI has a “valuable role” in assessing the water consumption in 
              various areas. However, they concluded that, “Despite numerous advantages of AI applications 
              in WC assessments, challenges associated with reproducibility, method standardization, 
              data availability, data uncertainty, and data privacy were highlighted” (Morain et al., 3128). 
              They also go on to note that finding the correct model to isolate water consumption is time 
              consuming and resource intensive and changes based on the circumstances of the problem 
              attempting to be solved. Thus, more research is required before the full benefits of AI 
              relating to water consumption are realized and until that point the water consumed by 
              data centers won’t be offset by the new models being trained. While there is an ideal world 
              where AI will soon be able to greatly assist with these sorts of problems, we are unfortunately 
              not at that endpoint quite yet.
              </Paragraph>
              <Paragraph>
              In conclusion, AI is an extremely lucrative upcoming business and already has a significant 
              number of positive outcomes around the world. However, with the high water consumption of 
              data centers required to operate AI models, this has come at the cost of environmental 
              problems and concerns of water scarcity. Over time, policy makers must address these concerns 
              and adapt to developing AI in a more community and environmentally friendly manner. Listening 
              to the concerns of local citizens and researchers and finding ways to adjust plans or by 
              developing newer technologies to help more efficiently cool these data centers is vital to 
              the boom that is occurring in the tech industry. Water is already on track to becoming one 
              of the world’s scarcest resources, however that won’t make it any less essential. We are 
              quickly approaching a world lacking water, and we all know that a world without water is a 
              world without life.
              </Paragraph>
          </article>
        </main>
    </div>
  );
}

export default App;
