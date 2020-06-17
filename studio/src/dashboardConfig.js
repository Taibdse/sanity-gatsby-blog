export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee9bb3096ea0896bf6f67bc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-i3ec375b',
                  apiId: 'cf61743f-3897-4580-93b6-24d475d0947c'
                },
                {
                  buildHookId: '5ee9bb3060c822cdc452f509',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zpf69z1b',
                  apiId: '1ae112a7-e6b6-44ee-b5a4-1079639213dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Taibdse/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zpf69z1b.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
