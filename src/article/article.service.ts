import { Injectable } from '@nestjs/common';
import { IArticle } from './interface/article.interface';
import { createArticleDto } from './dto/create-article.dto';
import { randomUUID } from 'crypto';
import { updateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  private articles: IArticle[] = [];

  createArticle(createArticleDto: createArticleDto) {
    const article: IArticle = {
      id: randomUUID(),
      ...createArticleDto,
    };
    this.articles.push(article);
    return article;
  }

  findAllArtice(): IArticle[] {
    return this.articles;
  }

  findOneByParams(id: string): IArticle | undefined {
    return this.articles.find((article) => article.id === id);
  }

  updateArticleByParams(
    article: IArticle,
    updateArticleDto: updateArticleDto,
  ): IArticle {
    Object.assign(article, updateArticleDto);
    return article;
  }

  deleteArticleByParams(articleData: IArticle): void {
    this.articles = this.articles.filter(
      (filterData) => filterData.id !== articleData.id,
    );
  }
}
