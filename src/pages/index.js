import React from 'react'
import PageProgress from '../components/PageProgress'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import TechnicalSkills from '../components/TechnicalSkills'
import Freelancer from '../components/Freelancer'
import Community from '../components/Community'
import OnImagesLoaded from 'react-on-images-loaded';
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { initFirebase } from '../components/initFirebase'
import '../assets/scss/index.scss';
import ReactDOM from 'react-dom'
import SEO from '../components/seo'

const IndexPage = () => {

	React.useEffect(() => {
		initFirebase().then(firebase => {
			console.log(firebase)
			firebase.analytics()
		})

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	})

	const contact = React.createRef();
	const loader = React.createRef();
	const app = React.createRef();

	const [scroll, setScroll] = React.useState('0%')

	const finishLoading = () => {
		loader.current.completeLoading();
	}

	const scrollToFooter = () => {
		ReactDOM.findDOMNode(contact.current).scrollIntoView({ behavior: 'smooth' });
	}

	const handleScroll = (event) => {
		const scrollPercent = (window.scrollY * 100 / (app.current.offsetHeight - window.innerHeight));
		setScroll(scrollPercent + '%')
	}

	return (
		<>
			<div className="App" ref={app}>
				<SEO title={'About'}/>
				<PageProgress scroll={scroll} />
				<div className="theme-light">
					<OnImagesLoaded
						onLoaded={finishLoading}
						onTimeout={finishLoading}
						timeout={7000}>
						<Home />
						<About />
						<Skills />
						<TechnicalSkills />
						<Freelancer target={scrollToFooter}/>
						<Community />
						<Footer ref={contact} />
					</OnImagesLoaded>
				</div>
				<Loader ref={loader} />
			</div>
		</>
	)
}

export default IndexPage
