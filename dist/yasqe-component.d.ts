/// <reference types="angular" />
import * as angular from 'angular';
export interface IYasqeComponentBindingChanges {
    content?: angular.IChangesObject<string>;
    endpoint?: angular.IChangesObject<string>;
}
export declare class YasqeComponentController implements angular.IComponentController {
    private $element;
    private $timeout;
    onQueryResults: (vars: {
        results: any;
    }) => void;
    onContentChanged: (vars: {
        content: string;
    }) => void;
    onInit: (vars: {
        yasqe: any;
    }) => void;
    endpoint: string;
    content: string;
    showQueryButton: string;
    private yasqe;
    constructor($element: angular.IAugmentedJQuery, $timeout: angular.ITimeoutService);
    $postLink(): void;
    $onChanges(changes: IYasqeComponentBindingChanges): void;
}
export declare class YasqeComponent implements angular.IComponentOptions {
    bindings: {
        [id: string]: string;
    };
    controller: (new (...args: any[]) => angular.IController);
}
