import Vibe from '../assets/Vibe.png'
import NoBullshitImg from '../assets/NoBullshitImg.png'
import TresureryImg from '../assets/TresureryImg.png'

const ThirdSection = () => {
	return (
		<div className="third_section">
			<div className="row gx-5 ">
				<div className="col-lg-6 col-12 col order-lg-1 d-flex align-items-center justify-content-center order-2 mt-lg-0 mt-4">
					<div className="img_container">
						<img src={Vibe} alt="vibe" />
					</div>
				</div>
				<div className="col-lg-6 col-12 col d-flex align-items-center justify-content-center order-lg-2 order-1 ">
					<div className="content">
						<h4>It’s a vibe</h4>
						<p>
							Each High Gas NFT is your membership to the private discord server. Hang out with fellow degens! Vent about markets, gas
							prices, share best practices and more.
						</p>
					</div>
				</div>
			</div>

			<div className="row gx-5 mt-5 pt-5">
				<div className="col-lg-6 col-12 col d-flex align-items-center justify-content-center order-2 mt-lg-0 mt-4">
					<div className="img_container">
						<img src={NoBullshitImg} alt="NoBullshitImg" />
					</div>
				</div>
				<div className="col-lg-6 col-12 col d-flex align-items-center justify-content-center order-1 ">
					<div className="content">
						<h4>No Bullshit</h4>
						<p>
							Original art and no shady grey areas. Not a derivative with a fake tesla giveaway or never-to-be game. Limited community with
							1,420 Genesis Memberships.
						</p>
					</div>
				</div>
			</div>

			<div className="row gx-5 mt-5 pt-5">
				<div className="col-lg-6 col-12 col d-flex align-items-center justify-content-center order-lg-1 order-2 mt-lg-0 mt-4">
					<div className="img_container">
						<img src={TresureryImg} alt="vibe" />
					</div>
				</div>
				<div className="col-lg-6 col-12 col d-flex align-items-center justify-content-center order-lg-2 order-1 ">
					<div className="content">
						<h4>High Gas Treasury</h4>
						<p>Each time a secondary sale is made 4.2069% of the sale price will fund the high gas treasury.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirdSection
