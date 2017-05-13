import React from 'react'
import Feature from './Feature.js'
const Home = () => (
<div>
	<div className="col-md-6">
		<p id="intro">Welcome to Adam's Art Showcase, a collection of art work I drew and painted back in High School from 2001-2002.  Enjoy a random drawing here or you can see everything on the Showcase page or read more about my thought process in the About section.  You can even search my artwork by name or filter based on categories.  Hope you all enjoy!</p>
	</div>
	<div className="col-md-6">
		<Feature />
	</div>
</div>
)
export default Home;
