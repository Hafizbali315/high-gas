import A1 from '../assets/a1.png'
import A2 from '../assets/a2.png'
import A3 from '../assets/a3.png'
import A4 from '../assets/a4.png'

const ImgList = () => {
	return (
		<div className="img_list">
			<div className="row">
				<div className="col col-lg-3 col-6 mt-lg-0 mt-3">
					<div className="img_container">
						<img src={A1} alt="a1" />
					</div>
				</div>
				<div className="col col-lg-3 col-6 mt-lg-0 mt-3">
					<div className="img_container">
						<img src={A2} alt="a1" />
					</div>
				</div>
				<div className="col col-lg-3 col-6 mt-lg-0 mt-3">
					<div className="img_container">
						<img src={A3} alt="a1" />
					</div>
				</div>
				<div className="col col-lg-3 col-6 mt-lg-0 mt-3">
					<div className="img_container">
						<img src={A4} alt="a1" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImgList
