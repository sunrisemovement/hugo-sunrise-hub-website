;(function () {
  const defaults = {
    backend: {
      name: 'gitlab',
      repo: 'hub-websites/example-site',
      auth_type: 'implicit',
      app_id: '7e5cbbf9f25e2d3af36bce0a7c81a460968d7e1dee1685c3e1eac407faf202d0',
      api_root: 'http://localhost:1337/api/v4',
      base_url: 'http://localhost:1337',
      auth_endpoint: 'oauth/authorize',
    },
    load_config_file: false,
    media_folder: 'static/images/uploads',
    public_folder: '/images/uploads',

    collections: [
      {
        name: 'news',
        label: 'News',
        editor: { preview: false },
        folder: 'content/news',
        create: true,
        identifier_field: 'title',
        slug: '{{fields.slug}}',
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
        name: "events",
        label: "Events",
        editor: { preview: false },
        slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
        folder: 'content/events',
        create: true,
        identifier_field: 'title',
        fields: [
          {
            name: 'title',
            label: 'Title',
            widget: 'string',
            required: true,
          },
          {
            name: 'start_date',
            label: 'Start Date and Time',
            widget: 'datetime',
            required: true,
          },
          {
            name: 'end_date',
            label: 'End Date and Time',
            widget: 'datetime',
            required: true,
          },
          {
            name: 'location',
            label: 'Location',
            widget: 'object',
            fields: [
              {
                name: 'name',
                label: 'Name',
                widget: 'string',
                required: true,
              },
              {
                name: 'address',
                label: 'Address',
                widget: 'string',
                required: true,
              }
            ]
          },
          {
            name: 'is_accessible',
            label: 'Wheelchair Accessible?',
            widget: 'boolean',
            required: true,
          },
          {
            name: 'details',
            label: 'Details',
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
            file: 'content/_index.md',
            label: 'Home',
            name: 'home',
            fields: [
              {
                name: 'top',
                label: 'Top Section',
                widget: 'object',
                required: true,
                fields: [
                  {
                    name: 'image',
                    label: 'Image',
                    widget: 'image',
                    hint: 'The large image that will appear at the top of the page. Try to use a 2000x1600 JPEG file.',
                    required: true,
                  },
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
            file: 'data/settings/site.json',
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
            ]
          }
        ]
      },
    ]
  }

  window.startCMS = function (CMS, userConfig) {
    var config = Object.assign({}, defaults, userConfig)
    CMS.init({
      config: config,
    })
  }
}())

