import FeatureCards from "./Section/FeatureCards.jsx";
import { Hero } from "./Section/Hero.jsx";
import LogoShowcase from "./Section/LogoShowcase.jsx";
import ShowcaseSection from "./Section/ShowcaseSection.jsx";
import Experience from './Section/Experience.jsx'
import TechStack from './Section/TechStack.jsx'
import Contact from "./Section/Contact.jsx";


export const App = () => {
	return (
		<>
			<Hero />
			<ShowcaseSection />
			<LogoShowcase />
			<FeatureCards />
			<Experience />
			<TechStack />
			<Contact />
		</>
	)
}
