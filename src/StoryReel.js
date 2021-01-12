import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://o.aolcdn.com/images/dims?quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FtNrD8vrdRCaa3mYROY.Trw--%7EB%2FaD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--%2Fhttps%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252F1795b250-dfb2-11e9-bbfa-667345bbfd13%26client%3Da1acac3e1b3290917d92%26signature%3D5cecb2417060aade38045b69b6a2980310a00383&client=amp-blogside-v2&signature=ee46817cc99265d5b62cd946758a27a54c3d8be4"
				profileSrc="https://i.pinimg.com/originals/60/60/4d/60604df5aaf5148828e2570934c7cc29.png"
				title="Mario Kart"
			/>
			<Story
				image="https://images-na.ssl-images-amazon.com/images/I/A1iZyGhD-rL._AC_SX342_.jpg"
				profileSrc="https://manualdosgames.com/wp-content/uploads/2020/09/god-of-war-ragnarok.png"
				title="God of War"
			/>
			<Story
				image="https://cyberpunk.city/uploads/default/optimized/2X/3/385427ed6b0445a2809c3ed5ce9783ae11dacc5c_2_719x1024.jpeg"
				profileSrc="https://blogdojuares.com.br/images/noticias/img_50873_foto_1_g.jpg"
				title="Cyberpunk 2077"
			/>
			<Story
				image="https://images-na.ssl-images-amazon.com/images/I/81Ow0EK3azL._SL1500_.jpg"
				profileSrc="https://s2.glbimg.com/uQM9a4ONKiPm6UvwPs5kT3X6KlE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/I/v/6ixbWiS8Awe2radJgVFQ/grand-theft-auto-6-gta-agostinho-carrara-grande-familia.jpg"
				title="GTA V"
			/>
		</div>
	);
}

export default StoryReel;
