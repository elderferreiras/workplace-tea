const filter = () => {
    let Filter = require('bad-words'),
        filter = new Filter();
    filter.addWords('reddit', 'lorem', 'ipsum', 'spilled', 'tea', 'hate speech', 'script', 'farts', 'fart', 'lorem', 'ipsum', 'fück', 'hitler', 'jews', 'jewish', 'cüm', 'cünt');
    return filter;
};

export const validate = (content, params) => {
    //Check for string length
    if(params.empty && content.length <= 0) {
        return false;
    }
    //Check for string length
    if((params.minLength && content.length < params.minLength) || (params.maxLength && content.length > params.maxLength)) {
        return false;
    }

    //Check for profanity
    if(params.profanity && filter().isProfane(content)) {
        return false;
    }

    //Check for white spaces
    if(params.whiteSpace && content.indexOf(' ') === -1) {
        return false;
    }

    //Check for posts with just one word
    const words = [];

    for (let value of content.split(" ")) {
        if(value.length) {
            words.push(value);
        }
    }

    if(params.singleWord && words.length <= 1) {
        return false;
    }

    //Check for consecutive characters, such as "aaa".
    if(params.consecutive && /([a-zA-Z])\1{2,}/.test(content)) {
        return false;
    }
    //Check for special characters.
    if(params.specialCharacters && /[~`#$%^&+=\-\[\]\\/{}|"<>]/g.test(content)) {
        return false
    }

    //Check if there's not another tea with the same content
    if (params.teas && params.teas.findIndex(tea => content === tea.content) !== -1) {
        return false;
    }

    if (params.tea && params.tea.comments.items.findIndex(comment => content === comment.content) !== -1) {
        return false;
    }

    return true;
};