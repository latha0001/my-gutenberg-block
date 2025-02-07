import { RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    return (
        <RichText
            tagName="p"
            value={attributes.content}
            onChange={(content) => setAttributes({ content })}
            placeholder="Enter text..."
        />
    );
}