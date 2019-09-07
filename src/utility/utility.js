const filter = () => {
    let Filter = require('bad-words'),
        filter = new Filter();
    filter.addWords('ssr','reddit', 'lorem', 'ipsum', 'spilled','hate speech', 'script', 'farts', 'fart', 'lorem', 'ipsum', 'fück', 'hitler', 'jews', 'jewish', 'cüm', 'cünt');
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
    if(params.consecutive && /([a-zA-Z])\1{2,}/g.test(content)) {
        return false;
    }

    //Check if there's not another tea with the same content
    if (params.teas && params.teas.findIndex(tea => content === tea.content) !== -1) {
        return false;
    }

    //Ban non ASCII characters
    const ascii = /^[ -~]+$/g;

    if (params.ascii && !ascii.test( content )) {
        return false;
    }

    if (params.tea && params.tea.comments.items.findIndex(comment => content === comment.content) !== -1) {
        return false;
    }

    return true;
};

export const updateObject = (oldObject, updatedProperties = {}) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const hasVoted = (id, dir) => {
    const vote = localStorage.getItem(`CognitoIdentityServiceProvider#${id}`);
    if (vote) {
        return vote === dir;
    } else {
        return false;
    }
};

export const checkVote = (id, dir) => {
    return hasVoted(id, dir)? ' selected' : ''
};