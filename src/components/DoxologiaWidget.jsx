import React from 'react';

const DoxologiaCalendar = () => {
  return (
    <iframe
      srcDoc={`
        <html>
          <head>
            <style>
              body { margin: 0; padding: 0; }
            </style>
          </head>
          <body>
            <table width="100%" class="doxo-table">
              <tr>
                <td>
                  <div>
                    <script type="text/javascript">
                      widgetContext_417c8830427f = {
                        "widgetid": "views_view_webwidget_ca0edb4fadfef0c9f43c54a832094b5c"
                      };
                    </script>
                    <script src="https://doxologia.ro/doxowidgetcalendar"></script>
                    <div
                      class="doxowidgetcalendar w-icoanarand w-border w-ev"
                      id="views_view_webwidget_ca0edb4fadfef0c9f43c54a832094b5c"
                    ></div>
                  </div>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `}
      style={{ width: '100%', height: '300px', border: 'none' }}
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  );
};

export default DoxologiaCalendar;
