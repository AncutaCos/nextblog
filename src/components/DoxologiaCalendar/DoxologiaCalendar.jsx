import React from 'react';
import styles from './DoxologiaCalendar.module.css';

const DoxologiaCalendar = () => {
  return (
    <div className={styles.calendarContainer}>
      <iframe
        srcDoc={`
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; }
                /* Disabilita i link nel contenuto del calendario */
                a, button, input, [role="link"] {
                  pointer-events: none;
                  cursor: default;
                }
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
                        class="doxowidgetcalendar w-icoanarand w-ev w-citat"
                        id="views_view_webwidget_ca0edb4fadfef0c9f43c54a832094b5c"
                      ></div>
                    </div>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `}
        className={styles.iframeContent}
        sandbox="allow-scripts allow-same-origin"
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default DoxologiaCalendar;
