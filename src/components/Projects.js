// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/ensclone.png';
import aave from '../assets/audit.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Zuniswap</h3>
                    <img src={uniswap} alt="Zuniswap" />
                    <p>The follow repo is a set of contracts and tests that implement a Uniswap-like AMM.
                        It uses a liquidity pool contract that stores reserves of two tokens, and
                        invariant that is maintained on every trade, and a pricing function that
                        determines the exchange rate between the two tokens.
                        It then users a router contract that allows users to add and remove liquidity.
                    </p>

    
                    <a href="https://github.com/leeftk/zuniswap" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                 <h3>ENS Clone</h3>       
                    <img src={compound} alt="ENS Clone" />
                    <br />
                    <br />
                    <br />
                    <br />
                   

                    <p>This app is a simple NFT contract that allows users to mint their own ENS domain.
                        The contract itself is very simple however it showcases knowledge of contract deployment, frontend development,
                        and integration and testing using ethers.js. As well as the deployment of the frontend to IPFS.
                    </p>
                   
                    <br />
                    <br />
                    

                    <a href="https://lucky-hill-3994.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/leeftk/ens_clone" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Audit Reports</h3>
                    <img src={aave} alt="Audit Reports" />
                    <p>Below is a compilation fo audit reports I've completed. Both for auditing contests and for private audits
                        for clients. The reports are for a variety of projects and are all done in Solidity.
                 
                        
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    
                  
                   
                    <a href="https://github.com/leeftk/audit-reports" target="_blank" className="button">Reports</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;