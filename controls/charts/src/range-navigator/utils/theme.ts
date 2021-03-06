import { ChartTheme, IFontMapping } from '../../index';
import { IRangeStyle } from '../model/range-navigator-interface';
import { RangeNavigator, ThumbSettingsModel } from '../index';
import { Browser, isNullOrUndefined } from '@syncfusion/ej2-base';

/**
 *
 */
export namespace RangeNavigatorTheme {
    /** @private */
    export let axisLabelFont: IFontMapping = {
        size: '12px',
        fontWeight: 'Normal',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
    /** @private */
    export let tooltipLabelFont: IFontMapping = {
        size: '12px',
        fontWeight: 'Normal',
        color: null,
        fontStyle: 'Normal',
        fontFamily: 'Segoe UI'
    };
}
/** @private */
export function getRangeThemeColor(theme: ChartTheme, range: RangeNavigator): IRangeStyle {
    let thumbSize: ThumbSettingsModel = range.navigatorStyleSettings.thumb;
    let thumbWidth: number = isNullOrUndefined(thumbSize.width) ? (Browser.isDevice ? 15 : 20) : thumbSize.width;
    let thumbHeight: number = isNullOrUndefined(thumbSize.height) ? (Browser.isDevice ? 15 : 20) : thumbSize.height;
    let darkAxisColor: string = (theme === 'Highcontrast' || theme === 'HighContrast') ? '#969696' : '#6F6C6C';
    let darkGridlineColor: string = (theme === 'Highcontrast' || theme === 'HighContrast') ? '#4A4848' : '#414040';
    let darkBackground: string = theme === 'MaterialDark' ? '#303030' : (theme === 'FabricDark' ? '#201F1F' :
        (theme === 'BootstrapDark') ? '1A1A1A' : '#000000');
    let style: IRangeStyle = {
        gridLineColor: '#E0E0E0',
        axisLineColor: '#000000',
        labelFontColor: '#686868',
        unselectedRectColor: range.series.length ? 'rgba(255, 255, 255, 0.6)' : '#EEEEEE',
        thumpLineColor: 'rgba(189, 189, 189, 1)',
        thumbBackground: 'rgba(250, 250, 250, 1)',
        gripColor: '#757575',
        background: '#FFFFFF',
        thumbHoverColor: '#EEEEEE',
        selectedRegionColor: range.series.length ? 'transparent' : '#FF4081',
        tooltipBackground: 'rgb(0, 8, 22)',
        tooltipFontColor: '#dbdbdb',
        thumbWidth: thumbWidth,
        thumbHeight: thumbHeight
    };
    switch (theme) {
        case 'Fabric':
            style.selectedRegionColor = range.series.length ? 'transparent' : '#007897';
            break;
        case 'Bootstrap':
            style.selectedRegionColor = range.series.length ? 'transparent' : '#428BCA';
            break;
        case 'HighContrastLight':
            style = {
                gridLineColor: '#bdbdbd',
                axisLineColor: '#969696',
                labelFontColor: '#ffffff',
                unselectedRectColor: range.series.length ? 'rgba(255, 255, 255, 0.3)' : '#EEEEEE',
                thumpLineColor: '#ffffff',
                thumbBackground: '#262626',
                gripColor: '#ffffff',
                background: darkBackground,
                thumbHoverColor: '#BFBFBF',
                selectedRegionColor: range.series.length ? 'transparent' : '#FFD939',
                tooltipBackground: '#ffffff',
                tooltipFontColor: '#000000',
                thumbWidth: thumbWidth,
                thumbHeight: thumbHeight
            };
            break;
        case 'MaterialDark':
        case 'FabricDark':
        case 'BootstrapDark':
        case 'Highcontrast':
        case 'HighContrast':
        style = {
            gridLineColor: darkGridlineColor,
            axisLineColor: darkAxisColor,
            labelFontColor: '#DADADA',
            unselectedRectColor: range.series.length ? 'rgba(43, 43, 43, 0.6)' : '#514F4F',
            thumpLineColor: '#969696',
            thumbBackground: '#333232',
            gripColor: '#DADADA',
            background: '#000000',
            thumbHoverColor: '#BFBFBF',
            selectedRegionColor: range.series.length ? 'rgba(22, 22, 22, 0.6)' : '#FFD939',
            tooltipBackground: '#F4F4F4',
            tooltipFontColor: '#282727',
            thumbWidth: thumbWidth,
            thumbHeight: thumbHeight
          };
          break;
        default:
            style.selectedRegionColor = range.series.length ? 'transparent' : '#FF4081';
            break;
    }
    return style;
}