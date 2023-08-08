
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Cover_image29: tryRequire('./Cover_image29.png') || require('./questionMark.png'),
	FramerSites_Vector: tryRequire('./FramerSites_Vector.png') || require('./questionMark.png'),
	FramerSites_Vector_1: tryRequire('./FramerSites_Vector_1.png') || require('./questionMark.png'),
	IconsMentoring_Vector2: tryRequire('./IconsMentoring_Vector2.png') || require('./questionMark.png'),
	IconsMentoring_Union: tryRequire('./IconsMentoring_Union.png') || require('./questionMark.png'),
	Frame1924_Vector2: tryRequire('./Frame1924_Vector2.png') || require('./questionMark.png'),
	Frame1924_Union: tryRequire('./Frame1924_Union.png') || require('./questionMark.png'),
	Homepage_Vector: tryRequire('./Homepage_Vector.png') || require('./questionMark.png'),
	Homepage_base: tryRequire('./Homepage_base.png') || require('./questionMark.png'),
	Homepage_Vector_1: tryRequire('./Homepage_Vector_1.png') || require('./questionMark.png'),
	Homepage_Vector_2: tryRequire('./Homepage_Vector_2.png') || require('./questionMark.png'),
	Homepage_Vector_3: tryRequire('./Homepage_Vector_3.png') || require('./questionMark.png'),
}