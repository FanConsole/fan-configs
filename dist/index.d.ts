declare module "config/uno.config" {
    import { UserConfig } from 'unocss';
    export const FanUnoConfig: UserConfig;
}
declare module "plugin/vue-inline-style-px-transform" {
    interface TransformOptions {
        platform?: 'h5' | 'mp' | 'rn' | 'px';
        designWidth?: number;
        deviceRatio?: Record<string, number>;
        unitPrecision?: number;
        minPixelValue?: number;
        exclude?: RegExp;
        include?: RegExp;
        includeComponentJs?: boolean;
    }
    export const VuePluginInlineStylePxTransform: (options?: TransformOptions) => {
        name: string;
        transform(code: string, id: string): {
            code: string;
        };
    };
}
declare module "fan-configs" {
    export * from "config/uno.config";
    export * from "plugin/vue-inline-style-px-transform";
}
