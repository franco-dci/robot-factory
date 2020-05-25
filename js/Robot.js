/*
    Welcome to the Robot class

    In order to use the Robot class, you must
    supply an HTML element to be used as the parent element.

    The render() method will use this parent element to
    attach to the HTML on your page.
 */

class Robot {
    static generateId() {
        return Math.round(Math.random() * 100000).toString();
    }

    constructor(parent) {
        if(!parent) {
            throw new Error('🤖 Robot Error! No parent element provided 💩');
        }

        if(!(parent instanceof HTMLElement)) {
            throw new Error('🤖 Robot Error! Parent is not a valid HTML Element 💩');
        }

        this.parent = parent;
        this.class = 'robot';
    }

    /*
        Renders the robot into our HTML
        x - left percentage %
        y - top percentage %
     */
    render(x, y) {
        if(typeof x !== 'number' || typeof y !== 'number') {
            console.log('🤖 Robot Warning! Unable to render, invalid x / y 💩');

            return;
        }

        const node = document.createElement('div');
        const id = this.constructor.generateId();

        node.setAttribute('id', id);
        node.setAttribute('class', this.class);
        node.setAttribute('style', `top: ${y}%; left: ${x}%`)

        this.parent.append(node);

        console.log('🤖 Robot Alert! Added new robot with id', id, '✅');
    }
}
