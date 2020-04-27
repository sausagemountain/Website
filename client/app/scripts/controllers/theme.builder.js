'use strict';

/**
 * @ngdoc function
 * @name woxApp.controller:ThemeBuilderCtrl
 * @description
 * # ThemeBuilderCtrl
 * Controller of the woxApp
 */
angular.module('woxApp')
    .controller('ThemeBuilderCtrl', function ($scope) {

        var template = '<ResourceDictionary  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">\
    <ResourceDictionary.MergedDictionaries>\
        <ResourceDictionary Source="Base.xaml"/>\
    </ResourceDictionary.MergedDictionaries>\
    <Style x:Key="QueryBoxStyle" BasedOn="{StaticResource BaseQueryBoxStyle}" TargetType="{x:Type TextBox}">\
        <Setter Property="Foreground" Value="{%searchFieldTextColor%}" />\
    </Style>\
        <Style x:Key="QueryTextSuggestionBoxStyle" BasedOn="{StaticResource BaseQueryTextSuggestionBoxStyle}" TargetType="{x:Type TextBox}">\
        <Setter Property="Background" Value="{%searchFieldBackgroundColor%}"/>\
    </Style>\
    <Style x:Key="WindowBorderStyle" BasedOn="{StaticResource BaseWindowBorderStyle}" TargetType="{x:Type Border}">\
        <Setter Property="Background" Value="{%backgroundColor%}"/>\
        <Setter Property="CornerRadius" Value="8" />\
        <Setter Property="BorderBrush" Value="{%borderColor%}" />\
        <Setter Property="BorderThickness" Value="10" />\
    </Style>\
    <Style x:Key="WindowStyle" TargetType="{x:Type Window}" BasedOn="{StaticResource BaseWindowStyle}" >\
        <Setter Property="Width" Value="520"/>\
    </Style>\
    <Style x:Key="PendingLineStyle" BasedOn="{StaticResource BasePendingLineStyle}" TargetType="{x:Type Line}" >\
    </Style>\
    <!-- Item Style -->\
    <Style x:Key="ItemTitleStyle" BasedOn="{StaticResource BaseItemTitleStyle}" TargetType="{x:Type TextBlock}" >\
        <Setter Property="Foreground" Value="{%resultTextColor%}"/>\
    </Style>\
    <Style x:Key="ItemSubTitleStyle" BasedOn="{StaticResource BaseItemSubTitleStyle}" TargetType="{x:Type TextBlock}" >\
        <Setter Property="Foreground"  Value="{%resultSubtextColor%}"/>\
    </Style>\
    <Style x:Key="ItemTitleSelectedStyle" BasedOn="{StaticResource BaseItemTitleSelectedStyle}" TargetType="{x:Type TextBlock}">\
        <Setter Property="Foreground" Value="{%selectedResultForeground%}" />\
    </Style>\
    <Style x:Key="ItemSubTitleSelectedStyle" BasedOn="{StaticResource BaseItemSubTitleSelectedStyle}" TargetType="{x:Type TextBlock}">\
        <Setter Property="Foreground" Value="{%selectedSubtextForeground%}" />\
    </Style>\
    <Color x:Key="ItemSelectedBackgroundColor">{%selectedResultBackgroundColor%}</Color>\
    <!-- button style in the middle of the scrollbar -->\
    <Style x:Key="ThumbStyle" BasedOn="{StaticResource BaseThumbStyle}" TargetType="{x:Type Thumb}">\
        <Setter Property="Template">\
            <Setter.Value>\
                <ControlTemplate TargetType="{x:Type Thumb}">\
                    <Border CornerRadius="2" DockPanel.Dock="Right" Background="{%scrollbarColor%}" BorderBrush="Transparent" BorderThickness="0" />\
                </ControlTemplate>\
            </Setter.Value>\
        </Setter>\
    </Style>\
    <Style x:Key="ScrollBarStyle" BasedOn="{StaticResource BaseScrollBarStyle}" TargetType="{x:Type ScrollBar}">\
    </Style>\
</ResourceDictionary>';

        $scope.defaultTheme = $scope.theme = {
            backgroundColor: "#424242",
            queryBoxBackgroundColor: "#616161",
            queryBoxTextColor: "#E3E0E3",

            resultTitleColor: "#FFFFF8",
            resultSubTitleColor: "#D9D9D4",

            resultSelectedTitleColor: "#FFFFF8",
            resultSelectedSubTitleColor: "#D9D9D4",
            resultSelectedBackgroundColor: "#4F6180"
        };

        $scope.rows = [
            {
                title: "Wox is an effective launcher for windows",
                subtitle: "Wox provide bundles of features let you access infomations quickly."
            },
            {
                title: "Search applications",
                subtitle: "Search applications, files (via everything plugin) and browser bookmarks",
                hover: true
            },
            {
                title: "Search web contents with shortcuts",
                subtitle: "e.g. search google with g keyword or youtube keyword)"
            },
            {
                title: "Wox is an open-source software",
                subtitle: "Wox benefits from the open-source community a lot"
            },
            {
                title: "Themes support",
                subtitle: "get more themes from http://www.wox.one/theme"
            }
        ];

        $scope.downloadTheme = function () {
            var content = template;
            for (var key in $scope.theme) {
                content = content.replace("<" + key + ">", $scope.theme[key])
            }

            var blob = new Blob([content], {type: "text/plain"});
            var url = URL.createObjectURL(blob);
            var a = $("#downloadThemeId")[0];
            a.download = "WoxTheme.xaml";
            a.href = url;
        };
    });
