import React, { Component, PropTypes } from 'react';
import { isFinite } from 'lodash/lang'
/**
 * Snail component to render snail
 *
 * @class Snail
 * @extends {Component}
 */
class Snail extends Component {
    /**
     * Compute a matrix with Snail content.
     *
     * @param {number} size size of the snail square
     * @returns {Array} an array of array of number
     * @memberof Snail
     */
    computeArray(size) {
        let result = new Array(size);
        result = result.fill(0).map(() => (new Array(size)).fill(0));
        let minX = 0, maxX = size - 1, minY = 0, maxY = size - 1;
        let isX = true, isIncr = true;
        let incr = 1;
        // This method fills in the matrix, alternating from X and Y
        // Also it should alternate between decreasing and increasing X and Y every two timess
        while (minX <= maxX || minY <= maxY) {
            if (isX && isIncr) {
                for (let counter = minX; counter <= maxX; counter++) {
                    result[minY][counter] = incr;
                    incr++;
                }
                minY++;
                isX = false;
            } else if (isX && !isIncr) {
                for (let counter = maxX; counter >= minX; counter--) {
                    result[maxY][counter] = incr;
                    incr++;
                }
                maxY--;
                isX = false;
            } else if (!isX && isIncr) {
                for (let counter = minY; counter <= maxY; counter++) {
                    result[counter][maxX] = incr;
                    incr++;
                }
                maxX--;
                isIncr = false;
                isX = true;
            } else if (!isX && !isIncr) {
                for (let counter = maxY; counter >= minY; counter--) {
                    result[counter][minX] = incr;
                    incr++;
                }
                minX++;
                isIncr = true;
                isX = true;
            }
        }

        return result;
    }
    // fillArray(matrix, start, end, fixed, isLine, toIncr)
    // {
    //     let incr = toIncr;
    //     let isIncr = start < end;
    //     for (let counter = start; isIncre ? counter <= end; counter++) {
    //         result[minY][counter] = incr;
    //         incr++;
    //     }

    // }
    /**
     * Render method of the component.
     *
     * @returns {JSX} the content to render. See React Doc.
     * @memberof Snail
     */
    render() {
        if (!isFinite(this.props.size) || this.props.size > 50 || this.props.size < 0) {
            return <div>{'Saisie invalide. Merci de saisir un nombre, entre 0 et 50'} </div>;
        }
        if (this.props.size === 0) {
            return null;
        }
        const arr = this.computeArray(this.props.size);
        return (
            <table className='snail'>
                {arr.map((elt, i) => <tr key={i} >{elt.map((item, idx) => <td key={idx}>{item}</td>)}</tr>)}
            </table>
        );
    }
}

Snail.propTypes = {
    size: PropTypes.number.isRequired
};

export default Snail;