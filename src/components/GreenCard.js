import GreenCard from '../assets/GreenCard.png'
import DemoGif from '../assets/DemoGif.gif'

const GreenCardSection = () => {
	return (
		<div style={{ background: '#000' }}>
			<div className="container">
				<div className="green_card">
					<div className="card_container">
						<div className="gif_img_container">
							<img className="gif_img" src={DemoGif} alt="demo" />
						</div>

						<div className="green_card_img">
							<img src={GreenCard} alt="cardimg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GreenCardSection
