import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Nav({ isLibraryOpen, setIsLibraryOpen }) {
	function libraryButtonClickHandler() {
		setIsLibraryOpen(!isLibraryOpen);
	}
	return (
		<NavStyled isLibraryOpen={isLibraryOpen}>
			<h1>WAVES</h1>
			<button onClick={libraryButtonClickHandler}>
				Library
				<FontAwesomeIcon style={{ marginLeft: '0.4rem' }} icon={faMusic} />
			</button>
		</NavStyled>
	);
}

const NavStyled = styled.nav`
	width: 60vw;
	min-height: 5vh;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
	align-items: center;
	button {
		cursor: pointer;
		background: transparent;
		font-family: 'Montserrat', sans-serif;
		border: none;
		border: 2px solid #3f3f3f;
		font-size: 1rem;
		font-weight: 500;
		width: auto;
		height: auto;
		padding: 0.4rem 0.75rem;
		transition: all 0.5s ease;
		&:hover {
			background-color: #3f3f3f;
			color: white;
		}
	}
	h1 {
		font-weight: 500;
		font-size: 3rem;
	}
	@media screen and (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}
		button {
			z-index: 10;
		}
	}
	@media screen and (max-width: 480px) {
		width: 80vw;
		button {
			z-index: 10;
			&:hover {
				background-color: white;
				color: #3f3f3f;
			}
		}
	}
`;

export default Nav;
