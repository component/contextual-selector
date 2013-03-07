# Contextual Selector

Create a selector for an element that includes its context.

## API

### `contextualSelector(contextSelector[, childSelector[, context]])`

- `childSelector` - by default, this is `'*'`
- `context` - by default, this is `' '`, in other words, the child is a descendant of the context

    contextualSelector('#a, #b') === '#a *, #b *'
    contextualSelector('#a, #b', 'p') === '#a p, #b p'
    contextualSelector('#a, #b', 'p', '>') === '#a>p, #b>p'
    contextualSelector('#a, #b', 'p', '~') === '#a~p, #b~p'

## Compatibility

IE9+

## License

WTFPL