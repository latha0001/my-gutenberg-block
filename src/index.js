import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit.js';
import Save from './save.js';
import './style.scss';
import './editor.scss';

registerBlockType('my-plugin/my-block', {
    title: 'My Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: { type: 'string', source: 'html', selector: 'p' }
    },
    edit: Edit,
    save: Save,
});