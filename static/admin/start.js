;(function () {
  const mergePath = (base, rest) => {
    return base ? base + '/' + rest : rest
  }

  const positionedImage = (config) => {
    return {
      name: config.name,
      label: config.label,
      hint: config.hint,
      required: config.required || false,
      widget: 'object',
      fields: [
        {
          name: 'src',
          label: 'Image',
          widget: 'image',
          required: true,
          hint: 'Select the image file you want to display.',
        },
        {
          name: 'alt',
          label: 'Alt Text',
          widget: 'string',
          required: true,
          hint: 'A short description to be read by screen readers for visitors who can\'t see the image.',
        },
        {
          name: 'position_y',
          label: 'Vertical Position',
          required: true,
          default: 'Center',
          hint: 'Which area of the image to focus on in case there is not enough vertical room for the whole thing. If the image is of a circle and you select "Top", you will see only see the top of the circle as the screen gets smaller.',
          widget: 'select',
          options: [
            'Top',
            'Center',
            'Bottom',
          ],
        },
        {
          name: 'position_x',
          label: 'Horizontal Position',
          required: true,
          default: 'Center',
          hint: 'Which area of the image to focus on in case there is not enough horizontal room for the whole thing. If the image is of a circle and you select "Left", you will see only see the left side of the circle as the screen gets smaller.',
          widget: 'select',
          options: [
            'Left',
            'Center',
            'Right',
          ],
        },
      ],
    }
  }

  const makeConfig = (config, publicPath) => ({
    backend: config.backend,
    load_config_file: false,
    media_folder: mergePath(config.base_path, 'static/images/uploads'),
    public_folder: '/images/uploads',
    collections: [
      {
        name: 'news',
        label: 'News',
        editor: { preview: false },
        folder: mergePath(config.base_path, 'content/news'),
        create: true,
        identifier_field: 'title',
        slug: '{{fields.slug}}',
        format: 'json-frontmatter',
        format_delimitter: '---',
        extension: 'md',
        fields: [
          {
            name: 'title',
            label: 'Title',
            widget: 'string',
            required: true,
          },
          {
            name: 'slug',
            label: 'Slug',
            widget: 'string',
            required: true,
          },
          positionedImage({
            name: 'featured_image',
            label: 'Featured Image',
            widget: 'image',
            required: true,
          }),
          {
            name: 'publish_date',
            label: 'Publish Date',
            widget: 'date',
            required: true,
          },
          {
            name: 'lead',
            label: 'Lead',
            widget: 'text',
            required: true,
          },
          {
            name: 'content',
            label: 'Content',
            widget: 'markdown',
            required: true,
          }
        ],
      },
      {
        name: 'pages',
        label: 'Pages',
        editor: { preview: false },
        files: [
          {
            file: mergePath(config.base_path, 'content/_index.md'),
            label: 'Home',
            name: 'home',
            format: 'json-frontmatter',
            extension: 'md',    
            fields: [
              {
                name: 'top',
                label: 'Top Section',
                widget: 'object',
                required: true,
                fields: [
                  positionedImage({
                    name: 'image',
                    label: 'Image',
                    hint: 'The large image that will appear at the top of the page. Try to use a 2000x1600 JPEG file.',
                    required: true,
                  }),
                  {
                    name: 'intro',
                    label: 'Intro Text',
                    widget: 'text',
                    hint: 'One or two sentences that appear directly below the name of the hub at the top of the page.',
                    required: true,
                  }
                ]
              },
              {
                name: 'about',
                label: 'About Section',
                widget: 'object',
                fields: [
                  {
                    name: 'details',
                    label: 'Details',
                    widget: 'markdown',
                    hint: 'Two or three paragraphs about the hub, to appear in the About section.',
                    required: true,
                  }
                ]
              },
              {
                name: 'tools',
                label: 'Tools Section',
                widget: 'list',
                hint: 'The Tools Section of the home page lets you share some links with major calls to action that you\'d like visitors to the site to take. Examples of these include signing petitions, viewing a particular and important event on action network, opening a prefilled form to tweet at representatives, and submitting a letter to the editor of a newspaper. All things that can be done right in the browser in just a few minutes but have a strong impact for your hub. Be encouraged to include a least a couple of these at all times, but don\'t have so many that peopel get overwhelmed and skip past either.',
                fields: [
                  {
                    name: 'label',
                    label: 'Label',
                    widget: 'string',
                    hint: 'Describe this tool. For example, it could be a link to a page for writing letters to the editor of the local paper. In that case, you could call someone to do that action by writing "Write a letter to the editor of the Anytown Times-Post Courier"',
                    required: true,
                  },
                  {
                    name: 'url',
                    label: 'URL',
                    widget: 'string',
                    hint: 'Link to the tool. When the square that shows this tool is clicked it will open the link in a new tab. Following on the example of writing a letter to the editor, you could link to the LTE tool on the Sunrise national site, at https://www.sunrisemovement.org/lte',
                    required: true,
                  },
                  positionedImage({
                    name: 'image',
                    label: 'Image',
                    required: true,
                    hint: 'This image will show up behind the label text. It doesn\'t have to be directly related to what the tool is, but it should reinforce the intent. If the tool is a link to tweet at local representatives you could use an image of your hub out protesting at a representative\'s office to reinforce the intent.'
                  }),
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'settings',
        label: 'Settings',
        editor: { preview: false },
        files: [
          {
            file: mergePath(config.base_path, 'data/settings/site.json'),
            label: 'Site Settings',
            name: 'site',
            fields: [
              {
                name: 'time_zone',
                label: 'Time Zone',
                widget: 'select',
                options: [
                  { label: 'Eastern', value: 'America/New_York' },
                  { label: 'Central', value: 'America/Chicago' },
                  { label: 'Mountain', value: 'America/Denver' },
                  { label: 'Pacific', value: 'America/Los_Angeles' },
                  { label: 'Hawaii', value: 'America/Honolulu' },
                ],
              },
              {
                name: 'hub_name_full',
                label: 'Full Hub Name',
                widget: 'string',
                hint: 'The full name of the hub. If you are the hub for Anytown, PA, you would fill this in with "Anytown, PA".',
                required: true,
              },
              {
                name: 'hub_name_short',
                label: 'Short Hub Name',
                widget: 'string',
                hint: 'An abbreviated hub name. If you are the hub for Anytown, PA, you might fill this in with "Anytown".',
                required: true,
              }
            ],
          },
        ],
      },
    ],
  })

  window.startCMS = function (CMS, userConfig, publicPath) {
    CMS.init({
      config: makeConfig(userConfig, publicPath),
    })
  }
}())

