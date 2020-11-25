import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addStyles, EditableMathField } from "react-mathquill";

import { setLatexInput } from "../slice";

addStyles();

const FormulaRepresentationStyle = styled.div`
  height: 300px;
  border: 1px solid black;
	display: flex;
	flex-direction: row;
	font-size:${props => props.fontInfo.size}px;
	color:${props => props.fontInfo.color};
`;

export default function FormulaRepresentation() {
	const dispatch = useDispatch();
	const latexInput = useSelector(state => state.latexInput);
	const fontInfo = useSelector(state => state.fontInfo);

	const handleLatexInput = mathField => {
		dispatch(setLatexInput(mathField.latex()));
	};

	return (
		<FormulaRepresentationStyle fontInfo={fontInfo}>
			<EditableMathField
				latex={latexInput}
				onChange={handleLatexInput}
			/>
		</FormulaRepresentationStyle>
	);
}
