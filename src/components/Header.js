import React from 'react'

import Twitter from '../assets/Twitter.png'
import Discord from '../assets/Discord.png'
import Opensea from '../assets/Opensea.png'
import HighGasLogo from '../assets/HighGasLogo.png'

const Header = () => {
	return (
		<div className="header row">
			<div className="col col-lg-6 col-12">
				<div className="left">
					<div className="img_container">
						<img src={HighGasLogo} alt="HighGasLogo" />
					</div>
				</div>
			</div>
			<div className="col col-lg-6 mt-5 mt-lg-0 col-12">
				<div className="right">
					<div className="content">
						<h1>COMING SOON</h1>

						<div className="social_links">
							<a href="https://discord.gg/highgasnft" className="icon_container">
								<img src={Twitter} alt="twitter" />
							</a>

							<a href="https://discord.gg/highgasnft" className="icon_container">
								<img src={Discord} alt="Discord" />
							</a>

							<a href="https://discord.gg/highgasnft" className="icon_container">
								<img src={Opensea} alt="Opensea" />
							</a>
						</div>

						<h2>SUPPLY 1,420</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
