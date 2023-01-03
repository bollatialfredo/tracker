import { addCollection } from '@iconify/vue';
// most used library: https://icon-sets.iconify.design/simple-line-icons
const initIcons = () => {
  addCollection({
    prefix: 'icon',
    icons: {
      account: {
        body: '<path d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z" fill="currentColor"/>',
      },
      home: {
        body: '<path d="M16 8.414l-4.5-4.5L4.414 11H6v8h3v-6h5v6h3v-8h1.586L17 9.414V6h-1v2.414zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v7.998h-5v-6h-3v6H5V12H2z" fill="currentColor"/>',
      },
      globe: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M26.58 32h-18a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M17.75 2a14 14 0 0 0-14 14c0 .45 0 .89.07 1.33A14 14 0 1 0 17.75 2Zm0 2a12 12 0 0 1 8.44 3.48v1A18.51 18.51 0 0 0 14 8.53a2.33 2.33 0 0 0-1.14-.61h-.25c-.12-.42-.23-.84-.32-1.27s-.14-.81-.19-1.22A11.92 11.92 0 0 1 17.75 4Zm-3 5.87a17 17 0 0 1 11.17.13a16.9 16.9 0 0 1-3.11 7a2.28 2.28 0 0 0-2.58.57c-.35-.2-.7-.4-1-.63a16 16 0 0 1-4.93-5.23a2.25 2.25 0 0 0 .47-1.77Zm-4-3.6c0 .21.06.43.1.64c.09.44.21.87.33 1.3a2.28 2.28 0 0 0-1.1 2.25a18.32 18.32 0 0 0-4.18 3.76a12 12 0 0 1 4.86-7.95Zm0 15.71a2.34 2.34 0 0 0-1.55 1.76h-.64a11.94 11.94 0 0 1-2.76-6.82l.11-.19a16.9 16.9 0 0 1 4.81-4.89a2.31 2.31 0 0 0 2.28.63a17.53 17.53 0 0 0 5.35 5.65c.41.27.83.52 1.25.76a2.32 2.32 0 0 0 .18 1.12a16.94 16.94 0 0 1-6.2 3.11A2.34 2.34 0 0 0 10.76 22Zm7 6a11.92 11.92 0 0 1-5.81-1.51l.28-.06a2.34 2.34 0 0 0 1.57-1.79a18.43 18.43 0 0 0 7-3.5a2.29 2.29 0 0 0 3-.62a17.41 17.41 0 0 0 4.32.56h.53A12 12 0 0 1 17.75 28Zm6.51-8.9a2.33 2.33 0 0 0-.33-1.19a18.4 18.4 0 0 0 3.39-7.37q.75.35 1.48.78a12 12 0 0 1 .42 8.2a16 16 0 0 1-4.95-.39Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>'
      },
      sidebaropen: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><g transform="rotate(90 18 18)"><path fill="currentColor" d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2ZM8.81 15L17 6.83v20.65a1 1 0 0 0 2 0V6.83L27.19 15a1 1 0 0 0 1.41-1.41L18 3L7.39 13.61A1 1 0 1 0 8.81 15Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></g></svg>'
      },
      sidebarclose: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><g transform="rotate(-90 18 18)"><path fill="currentColor" d="M31 31H5a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2ZM8.81 15L17 6.83v20.65a1 1 0 0 0 2 0V6.83L27.19 15a1 1 0 0 0 1.41-1.41L18 3L7.39 13.61A1 1 0 1 0 8.81 15Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></g></svg>'
      },
      table: {
        body:'<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M4 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4zM26 6h2v2h-2zm0 6h2v2h-2zm0 6h2v2h-2zm0 6h2v2h-2z"/></svg>'
      },
      settings: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="m32.8 14.7l-2.8-.9l-.6-1.5l1.4-2.6c.3-.6.2-1.4-.3-1.9l-2.4-2.4c-.5-.5-1.3-.6-1.9-.3l-2.6 1.4l-1.5-.6l-.9-2.8C21 2.5 20.4 2 19.7 2h-3.4c-.7 0-1.3.5-1.4 1.2L14 6c-.6.1-1.1.3-1.6.6L9.8 5.2c-.6-.3-1.4-.2-1.9.3L5.5 7.9c-.5.5-.6 1.3-.3 1.9l1.3 2.5c-.2.5-.4 1.1-.6 1.6l-2.8.9c-.6.2-1.1.8-1.1 1.5v3.4c0 .7.5 1.3 1.2 1.5l2.8.9l.6 1.5l-1.4 2.6c-.3.6-.2 1.4.3 1.9l2.4 2.4c.5.5 1.3.6 1.9.3l2.6-1.4l1.5.6l.9 2.9c.2.6.8 1.1 1.5 1.1h3.4c.7 0 1.3-.5 1.5-1.1l.9-2.9l1.5-.6l2.6 1.4c.6.3 1.4.2 1.9-.3l2.4-2.4c.5-.5.6-1.3.3-1.9l-1.4-2.6l.6-1.5l2.9-.9c.6-.2 1.1-.8 1.1-1.5v-3.4c0-.7-.5-1.4-1.2-1.6zm-.8 4.7l-3.6 1.1l-.1.5l-.9 2.1l-.3.5l1.8 3.3l-2 2l-3.3-1.8l-.5.3c-.7.4-1.4.7-2.1.9l-.5.1l-1.1 3.6h-2.8l-1.1-3.6l-.5-.1l-2.1-.9l-.5-.3l-3.3 1.8l-2-2l1.8-3.3l-.3-.5c-.4-.7-.7-1.4-.9-2.1l-.1-.5L4 19.4v-2.8l3.4-1l.2-.5c.2-.8.5-1.5.9-2.2l.3-.5l-1.7-3.3l2-2l3.2 1.8l.5-.3c.7-.4 1.4-.7 2.2-.9l.5-.2L16.6 4h2.8l1.1 3.5l.5.2c.7.2 1.4.5 2.1.9l.5.3l3.3-1.8l2 2l-1.8 3.3l.3.5c.4.7.7 1.4.9 2.1l.1.5l3.6 1.1v2.8z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>'
      },
      notification: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M32.51 27.83A14.4 14.4 0 0 1 30 24.9a12.63 12.63 0 0 1-1.35-4.81v-4.94A10.81 10.81 0 0 0 19.21 4.4V3.11a1.33 1.33 0 1 0-2.67 0v1.31a10.81 10.81 0 0 0-9.33 10.73v4.94a12.63 12.63 0 0 1-1.35 4.81a14.4 14.4 0 0 1-2.47 2.93a1 1 0 0 0-.34.75v1.36a1 1 0 0 0 1 1h27.8a1 1 0 0 0 1-1v-1.36a1 1 0 0 0-.34-.75ZM5.13 28.94a16.17 16.17 0 0 0 2.44-3a14.24 14.24 0 0 0 1.65-5.85v-4.94a8.74 8.74 0 1 1 17.47 0v4.94a14.24 14.24 0 0 0 1.65 5.85a16.17 16.17 0 0 0 2.44 3Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18 34.28A2.67 2.67 0 0 0 20.58 32h-5.26A2.67 2.67 0 0 0 18 34.28Z" class="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>'
      },
      help: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm0 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18.29 8.92a7.38 7.38 0 0 0-5.72 2.57a1 1 0 0 0-.32.71a.92.92 0 0 0 .95.92a1.08 1.08 0 0 0 .71-.29a5.7 5.7 0 0 1 4.33-2c2.36 0 3.83 1.52 3.83 3.41v.05c0 2.21-1.76 3.44-4.54 3.65a.8.8 0 0 0-.76.92s0 2.32 0 2.75a1 1 0 0 0 1 .9h.11a1 1 0 0 0 .9-1v-2.06c3-.42 5.43-2 5.43-5.28v-.05c-.03-3-2.37-5.2-5.92-5.2Z" class="clr-i-outline clr-i-outline-path-2"/><circle cx="17.78" cy="26.2" r="1.25" fill="currentColor" class="clr-i-outline clr-i-outline-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>'
      },
      logout: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194l189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72h-465.71c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z"/></svg>'
      },
      plus: {
        body: '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M30 17H19V6a1 1 0 1 0-2 0v11H6a1 1 0 0 0-1 1a.91.91 0 0 0 1 .94h11V30a1 1 0 1 0 2 0V19h11a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>'
      }
    },
    width: 24,
    height: 24,
  });
}

export default initIcons;