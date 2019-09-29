import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.less']
})
export class PostDetailComponent implements OnInit {

    private postId: number;
    private postContent: object;

    constructor(private route: ActivatedRoute, private postService: PostService) {
        const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
        // route.data includes both `data` and `resolve`
        const user = route.data.pipe(map(d => d.user));
        url.subscribe(res => {
            console.log(res);
        });
        console.log(this.route.routeConfig);
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: Params) => {
            this.postId = params.get('id');
        });
        this.getPostDetail();
    }

    getPostDetail() {
        this.postService.getDetail(this.postId)
            .subscribe(res => {
                if (res.code === 0) {
                    this.postContent = res.data;
                } else {
                    console.log('get post detail failed');
                }
            });
    }

}
