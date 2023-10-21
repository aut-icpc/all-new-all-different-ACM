import {Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private metaService: Meta, private titleService: Title) { }

  // Sets the title of web page
  public setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

  /*
  * This meta tag causes google engine to index page in users' search results
  * @param value - its default is 'all' and it means page will be indexed.
  * 'noindex' means search engine doesn't show the page in searching results
  */
  public setPageIndexing(value: 'noindex' | 'all' = 'all') {
    this.setCustomMetaTag('robots', value);
  }

  /*
  * You may allow search engine to index your page,
  * but you might not want it to follow the links inside web page.
  * @param value - its default is 'all' which lets search engine to follow the links
  * and 'nofollow' prevents it from following them
  */
  public setPageFollowing(value: 'nofollow' | 'all' = 'all') {
    this.setCustomMetaTag('robots', value);
  }

  public setCustomMetaTag(tagName: string, tagValue: string) {
    this.metaService.addTag({name: tagName, content: tagValue});
  }
}
