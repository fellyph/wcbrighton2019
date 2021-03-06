/**
 * BLOCK: wc-brighton-gutenberg
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	TextControl,
	PanelBody,
	PanelRow,
	Panel,
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType( 'cgb/block-wc-brighton-gutenberg', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'wc-brighton-gutenberg - Web Component' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'wc-brighton-gutenberg — Web Component' ),
		__( 'Web Component Example' ),
		__( 'create-guten-block' ),
	],

	attributes: {
		titleBlock: {
			type: 'string',
			default: 'Web component with Gutenberg',
		},
		thumbUrl: {
			type: 'string',
			default: 'https://fellyph.com.br/img/icon-512.png',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const { titleBlock, thumbUrl } = attributes;
		return (
			<Panel>
				<PanelBody title={ __( 'Web component block' ) } initialOpen={ true } >
					<PanelRow>
						<TextControl
							value={ titleBlock }
							onChange={ ( newTitle ) => {
								setAttributes( { titleBlock: newTitle } );
							} }
							label={ __( 'Title' ) } />
					</PanelRow>
					<PanelRow>
						<TextControl
							value={ thumbUrl }
							onChange={ ( newThumb ) => {
								setAttributes( { thumbUrl: newThumb } );
							} }
							label={ __( 'Thumb URL' ) } />
					</PanelRow>
				</PanelBody>
			</Panel>
		);
	},

	save: ( { attributes } ) => {
		const { titleBlock, thumbUrl } = attributes;
		return (
			<wc-brighton title={ titleBlock } src={ thumbUrl }></wc-brighton>
		);
	},
} );
