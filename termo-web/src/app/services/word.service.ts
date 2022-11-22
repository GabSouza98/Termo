import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordValidations , Word, PossibleWords, PossibleWordsResult } from '../models/wordValidations';


@Injectable({
  providedIn: 'root'
})
export class WordService {

  apiUrl = 'http://localhost:8080/v1/words';

  constructor(private http: HttpClient) { }

  getRandomWord(): Observable<Word> {
    return this.http.get<Word>(this.apiUrl);
  }

  getValidations(word: string, correctWord: string): Observable<WordValidations> {
    return this.http.get<WordValidations>(`${this.apiUrl}/validations?word=${word}&correctWord=${correctWord}`);
  }

  getPossibleWords(possibleWords: PossibleWords): Observable<PossibleWordsResult> {
    return this.http.post<PossibleWordsResult>(`${this.apiUrl}/tips`, possibleWords);
  }  

}
