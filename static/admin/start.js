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
          name: 'image',
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
          {
            name: 'image',
            label: 'Featured Image',
            widget: 'image',
            required: true,
          },
          {
            name: 'publishDate',
            label: 'Publish Date',
            widget: 'date',
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
                name: 'hubNameFull',
                label: 'Full Hub Name',
                widget: 'string',
                hint: 'The full name of the hub. If you are the hub for Anytown, PA, you would fill this in with "Anytown, PA".',
                required: true,
              },
              {
                name: 'hubNameShort',
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

