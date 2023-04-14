import React, { useEffect, useRef } from 'react';
import * as pbi from 'powerbi-client';
import LeftAdmin from './LeftAdmin';

const PowerBIReportComponent = () => {
  const reportContainerRef = useRef(null);
    const accessToken ="";
    const embedUrl = "";
    const reportId = "";
  useEffect(() => {
    const embedReport = async () => {
      const config = {
        type: 'report',
        accessToken,
        embedUrl,
        id: reportId,
        permissions: pbi.models.Permissions.All,
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          }
        }
      };

      const reportContainer = reportContainerRef.current;

      const report = powerbi.embed(reportContainer, config);

      report.off('loaded');
      report.on('loaded', () => {
        console.log('Report loaded');
      });

      report.off('error');
      report.on('error', (event) => {
        console.error(event.detail);
      });
    };

    embedReport();
  }, [accessToken, embedUrl, reportId]);

  return <div ref={reportContainerRef} style={{ height: '91vh' }} />;
};

const PowerBIReport = () => {
    return (
        <div className='flex'>
            <LeftAdmin/>
            <PowerBIReportComponent />
        </div>
    )
}

export default PowerBIReport;