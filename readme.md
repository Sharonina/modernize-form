# Requirements

## General requirements

- [ ] Pixel perfect (on given breakpoints)
- [ ] Cross-browser support (desktop and mobile)
- [x] Responsive design according to provided mockups (you can use 767px as a mobile breakpoint)
- [ ] Retina support
- [ ] Any copy on the page can be changed (in the source file) and it should NOT break the page
- [x] Background color should transition from #ECF8FB to #EFEFEF continuously with 5 sec duration: it takes 5 sec to change the color from #ECF8FB to #EFEFEF, then 5 sec from #EFEFEF to #ECF8FB, and so on
- [ ] The page should be optimized for max performance and fast loading
- [ ] "Read more" link in the bottom opens google.com in a new window

## Form requirements

- [x] Phone field should have a mask for US phone number: (XXX) XXX-XXXX
- [ ] The form should be optimized for mobile UX (do your best)
- [x] Add form validation:
  - [x] "Name" field requires 2 or more chars
  - [x] "City" and "State" are optional
  - [x] "Phone" field is required and should have validation by mask
  - [x] "Email" field is required
- [x] If there's an error, the field should change the border color to #D50303
- [x] The form should submit data to https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar via AJAX (ignore any errors)
