import Header from './components/Header'
// import ImgList from './components/ImgList'
import ThirdSection from './components/ThirdSection'
import Footer from './components/Footer'
import GreenCardSection from './components/GreenCard'

function App() {
	return (
		<div className="App">
			<div className="container">
				<Header />
				<GreenCardSection />
				{/* <ImgList /> */}
				<ThirdSection />
			</div>
			<Footer />
		</div>
	)
}

export default App
