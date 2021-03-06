import { requestText } from '../../utils/request';

const URL_DRIVE_LINE = 'http://api.tianditu.gov.cn/drive';

/**
 * 关于style： 默认0 （0：最快路线，1：最短路线，2：避开高速，3：步行）
 * @param {*} startposition
 * @param {*} endposition
 */
export function planDriveLine(startposition, endposition) {
  const p = new URLSearchParams();
  p.append('type', 'search');
  p.append('tk', window.geosearchcfg.tianditu.key);
  p.append(
    'postStr',
    JSON.stringify({
      orig: startposition,
      dest: endposition,
      style: '0',
    }),
  );

  return requestText(`${URL_DRIVE_LINE}?${p.toString()}`, {
    method: 'GET',
    handleAs: 'text',
  });
}
