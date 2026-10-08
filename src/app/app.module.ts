import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestreleasesComponent } from './navigatingcomponent/latestreleases/latestreleases.component';
import { MollywoodmoodComponent } from './navigatingcomponent/mollywoodmood/mollywoodmood.component';
import { AhaoriginalsComponent } from './navigatingcomponent/ahaoriginals/ahaoriginals.component';
import { WatchforfreeComponent } from './navigatingcomponent/watchforfree/watchforfree.component';
import { NavbarComponent } from './commoncomponent/navbar/navbar.component';
import { FooterComponent } from './commoncomponent/footer/footer.component';
import { TrendingnowComponent } from './navigatingcomponent/trendingnow/trendingnow.component';
import { Watchin4KComponent } from './navigatingcomponent/watchin4-k/watchin4-k.component';
import { CelebratingloveComponent } from './navigatingcomponent/celebratinglove/celebratinglove.component';
import { WatchinteluguandtamilComponent } from './navigatingcomponent/watchinteluguandtamil/watchinteluguandtamil.component';
import { InthespotlightComponent } from './navigatingcomponent/inthespotlight/inthespotlight.component';
import { HandpickedforyouComponent } from './navigatingcomponent/handpickedforyou/handpickedforyou.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestreleasesComponent,
    MollywoodmoodComponent,
    AhaoriginalsComponent,
    WatchforfreeComponent,
    NavbarComponent,
    FooterComponent,
    TrendingnowComponent,
    Watchin4KComponent,
    CelebratingloveComponent,
    WatchinteluguandtamilComponent,
    InthespotlightComponent,
    HandpickedforyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
