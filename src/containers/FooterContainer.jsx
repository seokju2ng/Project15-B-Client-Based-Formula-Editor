import React from "react";
import { useSelector, useDispatch } from "react-redux";
import html2canvas from "html2canvas";

import { openBubblePopup, addRecentItem } from "../slice";
import FooterLayout from "../layouts/FooterLayout";
import FooterButton from "../presentationals/FooterButton";

export default function FooterContainer() {
	const dispatch = useDispatch();
	const latexInput = useSelector(state => state.latexInput);
	const { imageDownload, linkCopy, formulaSave } = useSelector(state => state.bubblePopup);

	const handleDownloadAsImage = async () => {
		const mathquillArea = document.querySelector(".mq-root-block");

		mathquillArea.style.width = "max-content";

		const canvas = await html2canvas(mathquillArea);

		const virtualLink = document.createElement("a");

		virtualLink.href = canvas.toDataURL("image/png");
		virtualLink.download = "feditor_formula.png";

		document.body.appendChild(virtualLink);
		virtualLink.click();
		document.body.removeChild(virtualLink);

		mathquillArea.style.width = "100%";

		dispatch(openBubblePopup({ target: "imageDownload", isOpen: true }));
	};

	const handleCopyLink = () => {
		const FROM_BEGINNING = 0;
		const TO_END = 99999;

		const virtualCopyTarget = document.createElement("textarea");

		const parameter = latexInput.replace(/\\/g, "$$$");

		virtualCopyTarget.value = `${location.origin}/${parameter}`;

		document.body.appendChild(virtualCopyTarget);
		virtualCopyTarget.select();
		virtualCopyTarget.setSelectionRange(FROM_BEGINNING, TO_END);
		document.execCommand("copy");
		document.body.removeChild(virtualCopyTarget);

		dispatch(openBubblePopup({ target: "linkCopy", isOpen: true }));
	};

	const handleSaveFormula = () => {
		dispatch(addRecentItem(latexInput));
		dispatch(openBubblePopup({ target: "formulaSave", isOpen: true }));
	};

	return (
		<FooterLayout>
			<FooterButton
				name="이미지로 다운로드"
				onClick={handleDownloadAsImage}
				isPopupOn={imageDownload}
				message="수식을 이미지로 저장하였습니다"
			/>
			<FooterButton
				name="링크 복사"
				onClick={handleCopyLink}
				isPopupOn={linkCopy}
				message="수식 링크를 복사하였습니다"
			/>
			<FooterButton
				name="수식 임시저장"
				onClick={handleSaveFormula}
				isPopupOn={formulaSave}
				message="수식을 저장하였습니다"
			/>
		</FooterLayout>
	);
}
