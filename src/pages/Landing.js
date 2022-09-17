import React from 'react';
import styled from 'styled-components';
import people from '../assets/images/people.svg';
import {Logo } from '../components';

const LandingPage = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>

			<div className="container page">
				{/* Two column layout */}
				<div>
					<h1>
						Jobs <span>Tracking</span> App
					</h1>
					<p>
						I'm baby vice williamsburg thundercats, 8-bit you probably haven't heard of them chillwave
						organic food truck banh mi. Cray succulents tilde, four dollar toast health goth lyft snackwave
						tote bag retro. Edison bulb master cleanse meditation ethical. Tousled etsy selfies freegan la
						croix sustainable. Direct trade tousled austin chicharrones before they sold out yes plz
						slow-carb 8-bit hell of master cleanse. Unicorn schlitz tumblr poutine, vinyl cloud bread
						post-ironic normcore bicycle rights chicharrones echo park bruh kombucha literally.
					</p>
					<button className="btn btn-hero">Signin / Login </button>
				</div>

				<img src={people} alt="logo" className="img main-img" />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	nav {
		width: var(--fluid-width);
		max-width: var(--max-width);
		margin: 0 auto;
		display: flex;
		align-items: center;
		height: var(--nav-height);
	}

	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}

	h1 {
		font-weight: 700;

		span {
			color: var(--primary-500);
		}
	}

	p {
		color: var(--grey-600);
	}

	.main-img {
		display: none;
	}

	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}

		.main-img {
			display: block;
		}
	}
`;

export default LandingPage