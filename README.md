http://github.com/oma/table-fixed-header

# Freeze table header at top of the page when scrolling.

jQuery Plugin for 'freezing' the table header when the page is scrolled and the header would otherwise disappear.

See LIVE example here http://rubynor.com/table-fixed-header/example.html

For solution to enable independent scrolling of table *body* only, this is not it. You might want to look at chromatable or other. To be honest, we tried those too, but they didn't handle big tables with colspans and rowspans very well.

## Works with multiple header rows and colspan

Using :colspan => 1 and :rowspan => 2 and multiple tr and th works. This was what we needed ourselves.

See example.html.haml

#Example

open example.html to check out the behavior.

The html is generated from the HAML using `haml example.html.haml > example.html`

#Usage

include the javascript or coffeescript file in your path.

add the css class 'table-fixed-header' to your table. Add the class 'header' to your thead.

    %table.table-fixed.header
      %thead.header
        %tr
          %th header1
          %th header2
      %tbody
        %tr
          %td val1
          %td val2
        %tr
          %td val3
          %td val4


Trigger the header freeze with this:

    $('.table-fixed-header').fixedHeader()


#Credits

Thanks to https://github.com/i-scorpion for the initial solution https://gist.github.com/2948136
Thanks to https://github.com/alexrolls for the skype share screen sessions and discussions