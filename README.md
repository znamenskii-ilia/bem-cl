simple BEM class name generator

## Example

```js
const b = bemcl('button');

// key/value modifier
b({ theme: 'green' }); // "button button__theme_green"
// logical modifier
b({ loading: true }); // "button button__loading"
b({ loading: false }); // "button"
// mix
b().mix('form__button'); // "button form__button"
// element
b('icon'); // "button__icon"
// element key/value modifier
b('icon', { type: 'close' }); // "button__icon button__icon_type_close"
// element logical modifier
b('icon', { animate: true }); // "button__icon button__icon_animate"
b('icon', { animate: false }); // "button__icon"
// element mix
b('icon').mix('material-icon'); // "button__icon material-icon"
```


## React Example

```js
import bemcl from 'bem-cl';

function render() {
    const b = bemcl('button');
    const { theme, size, icon, ...rest } = this.props;

    return (
        <button className={b({ theme, size })} {...rest}>
            <i className={b('icon').mix('material-icons')}>{icon}</i>
            {thi.props.children}
        </button>
    );
}
```
