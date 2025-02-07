import { RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    return <RichText.Content tagName="p" value={attributes.content} />;
}