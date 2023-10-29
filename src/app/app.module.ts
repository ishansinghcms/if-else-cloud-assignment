import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FusionChartsModule } from 'angular-fusioncharts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TopSectionComponent } from './main-content/top-section/top-section.component';
import { BottomSectionComponent } from './main-content/bottom-section/bottom-section.component';
import { BarChartComponent } from './main-content/top-section/bar-chart/bar-chart.component';
import { PieChartComponent } from './main-content/top-section/pie-charts/pie-chart/pie-chart.component';
import { UsersComponent } from './main-content/bottom-section/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PieChartBackgroundComponent } from './main-content/top-section/pie-charts/pie-chart-background/pie-chart-background.component';
import { PieChartsComponent } from './main-content/top-section/pie-charts/pie-charts.component';
import { PieChartTextComponent } from './main-content/top-section/pie-charts/pie-chart-text/pie-chart-text.component';
import { ConfirmationDialogComponent } from './main-content/bottom-section/users/confirmation-dialog/confirmation-dialog.component';
import { EditDialogComponent } from './main-content/bottom-section/users/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    TopSectionComponent,
    BottomSectionComponent,
    BarChartComponent,
    PieChartComponent,
    UsersComponent,
    PieChartBackgroundComponent,
    PieChartsComponent,
    PieChartTextComponent,
    ConfirmationDialogComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FusionChartsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
