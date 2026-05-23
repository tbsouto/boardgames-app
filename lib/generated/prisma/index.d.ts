
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model PlaySession
 * 
 */
export type PlaySession = $Result.DefaultSelection<Prisma.$PlaySessionPayload>
/**
 * Model Expansion
 * 
 */
export type Expansion = $Result.DefaultSelection<Prisma.$ExpansionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Games
 * const games = await prisma.game.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playSession`: Exposes CRUD operations for the **PlaySession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaySessions
    * const playSessions = await prisma.playSession.findMany()
    * ```
    */
  get playSession(): Prisma.PlaySessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expansion`: Exposes CRUD operations for the **Expansion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expansions
    * const expansions = await prisma.expansion.findMany()
    * ```
    */
  get expansion(): Prisma.ExpansionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Game: 'Game',
    PlaySession: 'PlaySession',
    Expansion: 'Expansion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "game" | "playSession" | "expansion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      PlaySession: {
        payload: Prisma.$PlaySessionPayload<ExtArgs>
        fields: Prisma.PlaySessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaySessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaySessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>
          }
          findFirst: {
            args: Prisma.PlaySessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaySessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>
          }
          findMany: {
            args: Prisma.PlaySessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>[]
          }
          create: {
            args: Prisma.PlaySessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>
          }
          createMany: {
            args: Prisma.PlaySessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaySessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>[]
          }
          delete: {
            args: Prisma.PlaySessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>
          }
          update: {
            args: Prisma.PlaySessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>
          }
          deleteMany: {
            args: Prisma.PlaySessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaySessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaySessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>[]
          }
          upsert: {
            args: Prisma.PlaySessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaySessionPayload>
          }
          aggregate: {
            args: Prisma.PlaySessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaySession>
          }
          groupBy: {
            args: Prisma.PlaySessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaySessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaySessionCountArgs<ExtArgs>
            result: $Utils.Optional<PlaySessionCountAggregateOutputType> | number
          }
        }
      }
      Expansion: {
        payload: Prisma.$ExpansionPayload<ExtArgs>
        fields: Prisma.ExpansionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpansionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpansionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>
          }
          findFirst: {
            args: Prisma.ExpansionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpansionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>
          }
          findMany: {
            args: Prisma.ExpansionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>[]
          }
          create: {
            args: Prisma.ExpansionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>
          }
          createMany: {
            args: Prisma.ExpansionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpansionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>[]
          }
          delete: {
            args: Prisma.ExpansionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>
          }
          update: {
            args: Prisma.ExpansionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>
          }
          deleteMany: {
            args: Prisma.ExpansionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpansionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpansionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>[]
          }
          upsert: {
            args: Prisma.ExpansionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpansionPayload>
          }
          aggregate: {
            args: Prisma.ExpansionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpansion>
          }
          groupBy: {
            args: Prisma.ExpansionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpansionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpansionCountArgs<ExtArgs>
            result: $Utils.Optional<ExpansionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    game?: GameOmit
    playSession?: PlaySessionOmit
    expansion?: ExpansionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    sessions: number
    expansions: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | GameCountOutputTypeCountSessionsArgs
    expansions?: boolean | GameCountOutputTypeCountExpansionsArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaySessionWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountExpansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpansionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    minAge: number | null
    rating: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    minAge: number | null
    rating: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    minAge: number | null
    players: string | null
    time: string | null
    image: string | null
    favorite: boolean | null
    category: string | null
    rating: number | null
    notes: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    minAge: number | null
    players: string | null
    time: string | null
    image: string | null
    favorite: boolean | null
    category: string | null
    rating: number | null
    notes: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    description: number
    minAge: number
    players: number
    time: number
    image: number
    favorite: number
    category: number
    rating: number
    notes: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    minAge?: true
    rating?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    minAge?: true
    rating?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    minAge?: true
    players?: true
    time?: true
    image?: true
    favorite?: true
    category?: true
    rating?: true
    notes?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    minAge?: true
    players?: true
    time?: true
    image?: true
    favorite?: true
    category?: true
    rating?: true
    notes?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    minAge?: true
    players?: true
    time?: true
    image?: true
    favorite?: true
    category?: true
    rating?: true
    notes?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite: boolean
    category: string
    rating: number
    notes: string
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    minAge?: boolean
    players?: boolean
    time?: boolean
    image?: boolean
    favorite?: boolean
    category?: boolean
    rating?: boolean
    notes?: boolean
    sessions?: boolean | Game$sessionsArgs<ExtArgs>
    expansions?: boolean | Game$expansionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    minAge?: boolean
    players?: boolean
    time?: boolean
    image?: boolean
    favorite?: boolean
    category?: boolean
    rating?: boolean
    notes?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    minAge?: boolean
    players?: boolean
    time?: boolean
    image?: boolean
    favorite?: boolean
    category?: boolean
    rating?: boolean
    notes?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    minAge?: boolean
    players?: boolean
    time?: boolean
    image?: boolean
    favorite?: boolean
    category?: boolean
    rating?: boolean
    notes?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "minAge" | "players" | "time" | "image" | "favorite" | "category" | "rating" | "notes", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Game$sessionsArgs<ExtArgs>
    expansions?: boolean | Game$expansionsArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      sessions: Prisma.$PlaySessionPayload<ExtArgs>[]
      expansions: Prisma.$ExpansionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      minAge: number
      players: string
      time: string
      image: string
      favorite: boolean
      category: string
      rating: number
      notes: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Game$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expansions<T extends Game$expansionsArgs<ExtArgs> = {}>(args?: Subset<T, Game$expansionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly description: FieldRef<"Game", 'String'>
    readonly minAge: FieldRef<"Game", 'Int'>
    readonly players: FieldRef<"Game", 'String'>
    readonly time: FieldRef<"Game", 'String'>
    readonly image: FieldRef<"Game", 'String'>
    readonly favorite: FieldRef<"Game", 'Boolean'>
    readonly category: FieldRef<"Game", 'String'>
    readonly rating: FieldRef<"Game", 'Int'>
    readonly notes: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.sessions
   */
  export type Game$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    where?: PlaySessionWhereInput
    orderBy?: PlaySessionOrderByWithRelationInput | PlaySessionOrderByWithRelationInput[]
    cursor?: PlaySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaySessionScalarFieldEnum | PlaySessionScalarFieldEnum[]
  }

  /**
   * Game.expansions
   */
  export type Game$expansionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    where?: ExpansionWhereInput
    orderBy?: ExpansionOrderByWithRelationInput | ExpansionOrderByWithRelationInput[]
    cursor?: ExpansionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpansionScalarFieldEnum | ExpansionScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model PlaySession
   */

  export type AggregatePlaySession = {
    _count: PlaySessionCountAggregateOutputType | null
    _avg: PlaySessionAvgAggregateOutputType | null
    _sum: PlaySessionSumAggregateOutputType | null
    _min: PlaySessionMinAggregateOutputType | null
    _max: PlaySessionMaxAggregateOutputType | null
  }

  export type PlaySessionAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type PlaySessionSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type PlaySessionMinAggregateOutputType = {
    id: number | null
    date: Date | null
    players: string | null
    notes: string | null
    gameId: number | null
  }

  export type PlaySessionMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    players: string | null
    notes: string | null
    gameId: number | null
  }

  export type PlaySessionCountAggregateOutputType = {
    id: number
    date: number
    players: number
    notes: number
    gameId: number
    _all: number
  }


  export type PlaySessionAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type PlaySessionSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type PlaySessionMinAggregateInputType = {
    id?: true
    date?: true
    players?: true
    notes?: true
    gameId?: true
  }

  export type PlaySessionMaxAggregateInputType = {
    id?: true
    date?: true
    players?: true
    notes?: true
    gameId?: true
  }

  export type PlaySessionCountAggregateInputType = {
    id?: true
    date?: true
    players?: true
    notes?: true
    gameId?: true
    _all?: true
  }

  export type PlaySessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaySession to aggregate.
     */
    where?: PlaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaySessions to fetch.
     */
    orderBy?: PlaySessionOrderByWithRelationInput | PlaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaySessions
    **/
    _count?: true | PlaySessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaySessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaySessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaySessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaySessionMaxAggregateInputType
  }

  export type GetPlaySessionAggregateType<T extends PlaySessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaySession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaySession[P]>
      : GetScalarType<T[P], AggregatePlaySession[P]>
  }




  export type PlaySessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaySessionWhereInput
    orderBy?: PlaySessionOrderByWithAggregationInput | PlaySessionOrderByWithAggregationInput[]
    by: PlaySessionScalarFieldEnum[] | PlaySessionScalarFieldEnum
    having?: PlaySessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaySessionCountAggregateInputType | true
    _avg?: PlaySessionAvgAggregateInputType
    _sum?: PlaySessionSumAggregateInputType
    _min?: PlaySessionMinAggregateInputType
    _max?: PlaySessionMaxAggregateInputType
  }

  export type PlaySessionGroupByOutputType = {
    id: number
    date: Date
    players: string
    notes: string
    gameId: number
    _count: PlaySessionCountAggregateOutputType | null
    _avg: PlaySessionAvgAggregateOutputType | null
    _sum: PlaySessionSumAggregateOutputType | null
    _min: PlaySessionMinAggregateOutputType | null
    _max: PlaySessionMaxAggregateOutputType | null
  }

  type GetPlaySessionGroupByPayload<T extends PlaySessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaySessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaySessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaySessionGroupByOutputType[P]>
            : GetScalarType<T[P], PlaySessionGroupByOutputType[P]>
        }
      >
    >


  export type PlaySessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    players?: boolean
    notes?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playSession"]>

  export type PlaySessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    players?: boolean
    notes?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playSession"]>

  export type PlaySessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    players?: boolean
    notes?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playSession"]>

  export type PlaySessionSelectScalar = {
    id?: boolean
    date?: boolean
    players?: boolean
    notes?: boolean
    gameId?: boolean
  }

  export type PlaySessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "players" | "notes" | "gameId", ExtArgs["result"]["playSession"]>
  export type PlaySessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PlaySessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type PlaySessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $PlaySessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaySession"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      players: string
      notes: string
      gameId: number
    }, ExtArgs["result"]["playSession"]>
    composites: {}
  }

  type PlaySessionGetPayload<S extends boolean | null | undefined | PlaySessionDefaultArgs> = $Result.GetResult<Prisma.$PlaySessionPayload, S>

  type PlaySessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaySessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaySessionCountAggregateInputType | true
    }

  export interface PlaySessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaySession'], meta: { name: 'PlaySession' } }
    /**
     * Find zero or one PlaySession that matches the filter.
     * @param {PlaySessionFindUniqueArgs} args - Arguments to find a PlaySession
     * @example
     * // Get one PlaySession
     * const playSession = await prisma.playSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaySessionFindUniqueArgs>(args: SelectSubset<T, PlaySessionFindUniqueArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaySession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaySessionFindUniqueOrThrowArgs} args - Arguments to find a PlaySession
     * @example
     * // Get one PlaySession
     * const playSession = await prisma.playSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaySessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaySessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaySession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionFindFirstArgs} args - Arguments to find a PlaySession
     * @example
     * // Get one PlaySession
     * const playSession = await prisma.playSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaySessionFindFirstArgs>(args?: SelectSubset<T, PlaySessionFindFirstArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaySession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionFindFirstOrThrowArgs} args - Arguments to find a PlaySession
     * @example
     * // Get one PlaySession
     * const playSession = await prisma.playSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaySessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaySessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaySessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaySessions
     * const playSessions = await prisma.playSession.findMany()
     * 
     * // Get first 10 PlaySessions
     * const playSessions = await prisma.playSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playSessionWithIdOnly = await prisma.playSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaySessionFindManyArgs>(args?: SelectSubset<T, PlaySessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaySession.
     * @param {PlaySessionCreateArgs} args - Arguments to create a PlaySession.
     * @example
     * // Create one PlaySession
     * const PlaySession = await prisma.playSession.create({
     *   data: {
     *     // ... data to create a PlaySession
     *   }
     * })
     * 
     */
    create<T extends PlaySessionCreateArgs>(args: SelectSubset<T, PlaySessionCreateArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaySessions.
     * @param {PlaySessionCreateManyArgs} args - Arguments to create many PlaySessions.
     * @example
     * // Create many PlaySessions
     * const playSession = await prisma.playSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaySessionCreateManyArgs>(args?: SelectSubset<T, PlaySessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaySessions and returns the data saved in the database.
     * @param {PlaySessionCreateManyAndReturnArgs} args - Arguments to create many PlaySessions.
     * @example
     * // Create many PlaySessions
     * const playSession = await prisma.playSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaySessions and only return the `id`
     * const playSessionWithIdOnly = await prisma.playSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaySessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaySessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaySession.
     * @param {PlaySessionDeleteArgs} args - Arguments to delete one PlaySession.
     * @example
     * // Delete one PlaySession
     * const PlaySession = await prisma.playSession.delete({
     *   where: {
     *     // ... filter to delete one PlaySession
     *   }
     * })
     * 
     */
    delete<T extends PlaySessionDeleteArgs>(args: SelectSubset<T, PlaySessionDeleteArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaySession.
     * @param {PlaySessionUpdateArgs} args - Arguments to update one PlaySession.
     * @example
     * // Update one PlaySession
     * const playSession = await prisma.playSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaySessionUpdateArgs>(args: SelectSubset<T, PlaySessionUpdateArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaySessions.
     * @param {PlaySessionDeleteManyArgs} args - Arguments to filter PlaySessions to delete.
     * @example
     * // Delete a few PlaySessions
     * const { count } = await prisma.playSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaySessionDeleteManyArgs>(args?: SelectSubset<T, PlaySessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaySessions
     * const playSession = await prisma.playSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaySessionUpdateManyArgs>(args: SelectSubset<T, PlaySessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaySessions and returns the data updated in the database.
     * @param {PlaySessionUpdateManyAndReturnArgs} args - Arguments to update many PlaySessions.
     * @example
     * // Update many PlaySessions
     * const playSession = await prisma.playSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaySessions and only return the `id`
     * const playSessionWithIdOnly = await prisma.playSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaySessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaySessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaySession.
     * @param {PlaySessionUpsertArgs} args - Arguments to update or create a PlaySession.
     * @example
     * // Update or create a PlaySession
     * const playSession = await prisma.playSession.upsert({
     *   create: {
     *     // ... data to create a PlaySession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaySession we want to update
     *   }
     * })
     */
    upsert<T extends PlaySessionUpsertArgs>(args: SelectSubset<T, PlaySessionUpsertArgs<ExtArgs>>): Prisma__PlaySessionClient<$Result.GetResult<Prisma.$PlaySessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionCountArgs} args - Arguments to filter PlaySessions to count.
     * @example
     * // Count the number of PlaySessions
     * const count = await prisma.playSession.count({
     *   where: {
     *     // ... the filter for the PlaySessions we want to count
     *   }
     * })
    **/
    count<T extends PlaySessionCountArgs>(
      args?: Subset<T, PlaySessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaySessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaySessionAggregateArgs>(args: Subset<T, PlaySessionAggregateArgs>): Prisma.PrismaPromise<GetPlaySessionAggregateType<T>>

    /**
     * Group by PlaySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaySessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaySessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaySessionGroupByArgs['orderBy'] }
        : { orderBy?: PlaySessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaySessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaySessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaySession model
   */
  readonly fields: PlaySessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaySession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaySessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaySession model
   */
  interface PlaySessionFieldRefs {
    readonly id: FieldRef<"PlaySession", 'Int'>
    readonly date: FieldRef<"PlaySession", 'DateTime'>
    readonly players: FieldRef<"PlaySession", 'String'>
    readonly notes: FieldRef<"PlaySession", 'String'>
    readonly gameId: FieldRef<"PlaySession", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlaySession findUnique
   */
  export type PlaySessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * Filter, which PlaySession to fetch.
     */
    where: PlaySessionWhereUniqueInput
  }

  /**
   * PlaySession findUniqueOrThrow
   */
  export type PlaySessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * Filter, which PlaySession to fetch.
     */
    where: PlaySessionWhereUniqueInput
  }

  /**
   * PlaySession findFirst
   */
  export type PlaySessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * Filter, which PlaySession to fetch.
     */
    where?: PlaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaySessions to fetch.
     */
    orderBy?: PlaySessionOrderByWithRelationInput | PlaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaySessions.
     */
    cursor?: PlaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaySessions.
     */
    distinct?: PlaySessionScalarFieldEnum | PlaySessionScalarFieldEnum[]
  }

  /**
   * PlaySession findFirstOrThrow
   */
  export type PlaySessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * Filter, which PlaySession to fetch.
     */
    where?: PlaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaySessions to fetch.
     */
    orderBy?: PlaySessionOrderByWithRelationInput | PlaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaySessions.
     */
    cursor?: PlaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaySessions.
     */
    distinct?: PlaySessionScalarFieldEnum | PlaySessionScalarFieldEnum[]
  }

  /**
   * PlaySession findMany
   */
  export type PlaySessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * Filter, which PlaySessions to fetch.
     */
    where?: PlaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaySessions to fetch.
     */
    orderBy?: PlaySessionOrderByWithRelationInput | PlaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaySessions.
     */
    cursor?: PlaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaySessions.
     */
    distinct?: PlaySessionScalarFieldEnum | PlaySessionScalarFieldEnum[]
  }

  /**
   * PlaySession create
   */
  export type PlaySessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaySession.
     */
    data: XOR<PlaySessionCreateInput, PlaySessionUncheckedCreateInput>
  }

  /**
   * PlaySession createMany
   */
  export type PlaySessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaySessions.
     */
    data: PlaySessionCreateManyInput | PlaySessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaySession createManyAndReturn
   */
  export type PlaySessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * The data used to create many PlaySessions.
     */
    data: PlaySessionCreateManyInput | PlaySessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaySession update
   */
  export type PlaySessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaySession.
     */
    data: XOR<PlaySessionUpdateInput, PlaySessionUncheckedUpdateInput>
    /**
     * Choose, which PlaySession to update.
     */
    where: PlaySessionWhereUniqueInput
  }

  /**
   * PlaySession updateMany
   */
  export type PlaySessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaySessions.
     */
    data: XOR<PlaySessionUpdateManyMutationInput, PlaySessionUncheckedUpdateManyInput>
    /**
     * Filter which PlaySessions to update
     */
    where?: PlaySessionWhereInput
    /**
     * Limit how many PlaySessions to update.
     */
    limit?: number
  }

  /**
   * PlaySession updateManyAndReturn
   */
  export type PlaySessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * The data used to update PlaySessions.
     */
    data: XOR<PlaySessionUpdateManyMutationInput, PlaySessionUncheckedUpdateManyInput>
    /**
     * Filter which PlaySessions to update
     */
    where?: PlaySessionWhereInput
    /**
     * Limit how many PlaySessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaySession upsert
   */
  export type PlaySessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaySession to update in case it exists.
     */
    where: PlaySessionWhereUniqueInput
    /**
     * In case the PlaySession found by the `where` argument doesn't exist, create a new PlaySession with this data.
     */
    create: XOR<PlaySessionCreateInput, PlaySessionUncheckedCreateInput>
    /**
     * In case the PlaySession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaySessionUpdateInput, PlaySessionUncheckedUpdateInput>
  }

  /**
   * PlaySession delete
   */
  export type PlaySessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
    /**
     * Filter which PlaySession to delete.
     */
    where: PlaySessionWhereUniqueInput
  }

  /**
   * PlaySession deleteMany
   */
  export type PlaySessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaySessions to delete
     */
    where?: PlaySessionWhereInput
    /**
     * Limit how many PlaySessions to delete.
     */
    limit?: number
  }

  /**
   * PlaySession without action
   */
  export type PlaySessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaySession
     */
    select?: PlaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaySession
     */
    omit?: PlaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaySessionInclude<ExtArgs> | null
  }


  /**
   * Model Expansion
   */

  export type AggregateExpansion = {
    _count: ExpansionCountAggregateOutputType | null
    _avg: ExpansionAvgAggregateOutputType | null
    _sum: ExpansionSumAggregateOutputType | null
    _min: ExpansionMinAggregateOutputType | null
    _max: ExpansionMaxAggregateOutputType | null
  }

  export type ExpansionAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type ExpansionSumAggregateOutputType = {
    id: number | null
    gameId: number | null
  }

  export type ExpansionMinAggregateOutputType = {
    id: number | null
    name: string | null
    gameId: number | null
  }

  export type ExpansionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    gameId: number | null
  }

  export type ExpansionCountAggregateOutputType = {
    id: number
    name: number
    gameId: number
    _all: number
  }


  export type ExpansionAvgAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type ExpansionSumAggregateInputType = {
    id?: true
    gameId?: true
  }

  export type ExpansionMinAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
  }

  export type ExpansionMaxAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
  }

  export type ExpansionCountAggregateInputType = {
    id?: true
    name?: true
    gameId?: true
    _all?: true
  }

  export type ExpansionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expansion to aggregate.
     */
    where?: ExpansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expansions to fetch.
     */
    orderBy?: ExpansionOrderByWithRelationInput | ExpansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expansions
    **/
    _count?: true | ExpansionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpansionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpansionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpansionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpansionMaxAggregateInputType
  }

  export type GetExpansionAggregateType<T extends ExpansionAggregateArgs> = {
        [P in keyof T & keyof AggregateExpansion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpansion[P]>
      : GetScalarType<T[P], AggregateExpansion[P]>
  }




  export type ExpansionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpansionWhereInput
    orderBy?: ExpansionOrderByWithAggregationInput | ExpansionOrderByWithAggregationInput[]
    by: ExpansionScalarFieldEnum[] | ExpansionScalarFieldEnum
    having?: ExpansionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpansionCountAggregateInputType | true
    _avg?: ExpansionAvgAggregateInputType
    _sum?: ExpansionSumAggregateInputType
    _min?: ExpansionMinAggregateInputType
    _max?: ExpansionMaxAggregateInputType
  }

  export type ExpansionGroupByOutputType = {
    id: number
    name: string
    gameId: number
    _count: ExpansionCountAggregateOutputType | null
    _avg: ExpansionAvgAggregateOutputType | null
    _sum: ExpansionSumAggregateOutputType | null
    _min: ExpansionMinAggregateOutputType | null
    _max: ExpansionMaxAggregateOutputType | null
  }

  type GetExpansionGroupByPayload<T extends ExpansionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpansionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpansionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpansionGroupByOutputType[P]>
            : GetScalarType<T[P], ExpansionGroupByOutputType[P]>
        }
      >
    >


  export type ExpansionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expansion"]>

  export type ExpansionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expansion"]>

  export type ExpansionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gameId?: boolean
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expansion"]>

  export type ExpansionSelectScalar = {
    id?: boolean
    name?: boolean
    gameId?: boolean
  }

  export type ExpansionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gameId", ExtArgs["result"]["expansion"]>
  export type ExpansionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type ExpansionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type ExpansionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $ExpansionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expansion"
    objects: {
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      gameId: number
    }, ExtArgs["result"]["expansion"]>
    composites: {}
  }

  type ExpansionGetPayload<S extends boolean | null | undefined | ExpansionDefaultArgs> = $Result.GetResult<Prisma.$ExpansionPayload, S>

  type ExpansionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpansionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpansionCountAggregateInputType | true
    }

  export interface ExpansionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expansion'], meta: { name: 'Expansion' } }
    /**
     * Find zero or one Expansion that matches the filter.
     * @param {ExpansionFindUniqueArgs} args - Arguments to find a Expansion
     * @example
     * // Get one Expansion
     * const expansion = await prisma.expansion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpansionFindUniqueArgs>(args: SelectSubset<T, ExpansionFindUniqueArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expansion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpansionFindUniqueOrThrowArgs} args - Arguments to find a Expansion
     * @example
     * // Get one Expansion
     * const expansion = await prisma.expansion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpansionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpansionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expansion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionFindFirstArgs} args - Arguments to find a Expansion
     * @example
     * // Get one Expansion
     * const expansion = await prisma.expansion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpansionFindFirstArgs>(args?: SelectSubset<T, ExpansionFindFirstArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expansion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionFindFirstOrThrowArgs} args - Arguments to find a Expansion
     * @example
     * // Get one Expansion
     * const expansion = await prisma.expansion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpansionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpansionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expansions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expansions
     * const expansions = await prisma.expansion.findMany()
     * 
     * // Get first 10 Expansions
     * const expansions = await prisma.expansion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expansionWithIdOnly = await prisma.expansion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpansionFindManyArgs>(args?: SelectSubset<T, ExpansionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expansion.
     * @param {ExpansionCreateArgs} args - Arguments to create a Expansion.
     * @example
     * // Create one Expansion
     * const Expansion = await prisma.expansion.create({
     *   data: {
     *     // ... data to create a Expansion
     *   }
     * })
     * 
     */
    create<T extends ExpansionCreateArgs>(args: SelectSubset<T, ExpansionCreateArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expansions.
     * @param {ExpansionCreateManyArgs} args - Arguments to create many Expansions.
     * @example
     * // Create many Expansions
     * const expansion = await prisma.expansion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpansionCreateManyArgs>(args?: SelectSubset<T, ExpansionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expansions and returns the data saved in the database.
     * @param {ExpansionCreateManyAndReturnArgs} args - Arguments to create many Expansions.
     * @example
     * // Create many Expansions
     * const expansion = await prisma.expansion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expansions and only return the `id`
     * const expansionWithIdOnly = await prisma.expansion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpansionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpansionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expansion.
     * @param {ExpansionDeleteArgs} args - Arguments to delete one Expansion.
     * @example
     * // Delete one Expansion
     * const Expansion = await prisma.expansion.delete({
     *   where: {
     *     // ... filter to delete one Expansion
     *   }
     * })
     * 
     */
    delete<T extends ExpansionDeleteArgs>(args: SelectSubset<T, ExpansionDeleteArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expansion.
     * @param {ExpansionUpdateArgs} args - Arguments to update one Expansion.
     * @example
     * // Update one Expansion
     * const expansion = await prisma.expansion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpansionUpdateArgs>(args: SelectSubset<T, ExpansionUpdateArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expansions.
     * @param {ExpansionDeleteManyArgs} args - Arguments to filter Expansions to delete.
     * @example
     * // Delete a few Expansions
     * const { count } = await prisma.expansion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpansionDeleteManyArgs>(args?: SelectSubset<T, ExpansionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expansions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expansions
     * const expansion = await prisma.expansion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpansionUpdateManyArgs>(args: SelectSubset<T, ExpansionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expansions and returns the data updated in the database.
     * @param {ExpansionUpdateManyAndReturnArgs} args - Arguments to update many Expansions.
     * @example
     * // Update many Expansions
     * const expansion = await prisma.expansion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expansions and only return the `id`
     * const expansionWithIdOnly = await prisma.expansion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpansionUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpansionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expansion.
     * @param {ExpansionUpsertArgs} args - Arguments to update or create a Expansion.
     * @example
     * // Update or create a Expansion
     * const expansion = await prisma.expansion.upsert({
     *   create: {
     *     // ... data to create a Expansion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expansion we want to update
     *   }
     * })
     */
    upsert<T extends ExpansionUpsertArgs>(args: SelectSubset<T, ExpansionUpsertArgs<ExtArgs>>): Prisma__ExpansionClient<$Result.GetResult<Prisma.$ExpansionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expansions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionCountArgs} args - Arguments to filter Expansions to count.
     * @example
     * // Count the number of Expansions
     * const count = await prisma.expansion.count({
     *   where: {
     *     // ... the filter for the Expansions we want to count
     *   }
     * })
    **/
    count<T extends ExpansionCountArgs>(
      args?: Subset<T, ExpansionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpansionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expansion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpansionAggregateArgs>(args: Subset<T, ExpansionAggregateArgs>): Prisma.PrismaPromise<GetExpansionAggregateType<T>>

    /**
     * Group by Expansion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpansionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpansionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpansionGroupByArgs['orderBy'] }
        : { orderBy?: ExpansionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpansionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpansionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expansion model
   */
  readonly fields: ExpansionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expansion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpansionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expansion model
   */
  interface ExpansionFieldRefs {
    readonly id: FieldRef<"Expansion", 'Int'>
    readonly name: FieldRef<"Expansion", 'String'>
    readonly gameId: FieldRef<"Expansion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expansion findUnique
   */
  export type ExpansionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * Filter, which Expansion to fetch.
     */
    where: ExpansionWhereUniqueInput
  }

  /**
   * Expansion findUniqueOrThrow
   */
  export type ExpansionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * Filter, which Expansion to fetch.
     */
    where: ExpansionWhereUniqueInput
  }

  /**
   * Expansion findFirst
   */
  export type ExpansionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * Filter, which Expansion to fetch.
     */
    where?: ExpansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expansions to fetch.
     */
    orderBy?: ExpansionOrderByWithRelationInput | ExpansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expansions.
     */
    cursor?: ExpansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expansions.
     */
    distinct?: ExpansionScalarFieldEnum | ExpansionScalarFieldEnum[]
  }

  /**
   * Expansion findFirstOrThrow
   */
  export type ExpansionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * Filter, which Expansion to fetch.
     */
    where?: ExpansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expansions to fetch.
     */
    orderBy?: ExpansionOrderByWithRelationInput | ExpansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expansions.
     */
    cursor?: ExpansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expansions.
     */
    distinct?: ExpansionScalarFieldEnum | ExpansionScalarFieldEnum[]
  }

  /**
   * Expansion findMany
   */
  export type ExpansionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * Filter, which Expansions to fetch.
     */
    where?: ExpansionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expansions to fetch.
     */
    orderBy?: ExpansionOrderByWithRelationInput | ExpansionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expansions.
     */
    cursor?: ExpansionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expansions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expansions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expansions.
     */
    distinct?: ExpansionScalarFieldEnum | ExpansionScalarFieldEnum[]
  }

  /**
   * Expansion create
   */
  export type ExpansionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * The data needed to create a Expansion.
     */
    data: XOR<ExpansionCreateInput, ExpansionUncheckedCreateInput>
  }

  /**
   * Expansion createMany
   */
  export type ExpansionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expansions.
     */
    data: ExpansionCreateManyInput | ExpansionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expansion createManyAndReturn
   */
  export type ExpansionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * The data used to create many Expansions.
     */
    data: ExpansionCreateManyInput | ExpansionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expansion update
   */
  export type ExpansionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * The data needed to update a Expansion.
     */
    data: XOR<ExpansionUpdateInput, ExpansionUncheckedUpdateInput>
    /**
     * Choose, which Expansion to update.
     */
    where: ExpansionWhereUniqueInput
  }

  /**
   * Expansion updateMany
   */
  export type ExpansionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expansions.
     */
    data: XOR<ExpansionUpdateManyMutationInput, ExpansionUncheckedUpdateManyInput>
    /**
     * Filter which Expansions to update
     */
    where?: ExpansionWhereInput
    /**
     * Limit how many Expansions to update.
     */
    limit?: number
  }

  /**
   * Expansion updateManyAndReturn
   */
  export type ExpansionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * The data used to update Expansions.
     */
    data: XOR<ExpansionUpdateManyMutationInput, ExpansionUncheckedUpdateManyInput>
    /**
     * Filter which Expansions to update
     */
    where?: ExpansionWhereInput
    /**
     * Limit how many Expansions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expansion upsert
   */
  export type ExpansionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * The filter to search for the Expansion to update in case it exists.
     */
    where: ExpansionWhereUniqueInput
    /**
     * In case the Expansion found by the `where` argument doesn't exist, create a new Expansion with this data.
     */
    create: XOR<ExpansionCreateInput, ExpansionUncheckedCreateInput>
    /**
     * In case the Expansion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpansionUpdateInput, ExpansionUncheckedUpdateInput>
  }

  /**
   * Expansion delete
   */
  export type ExpansionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
    /**
     * Filter which Expansion to delete.
     */
    where: ExpansionWhereUniqueInput
  }

  /**
   * Expansion deleteMany
   */
  export type ExpansionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expansions to delete
     */
    where?: ExpansionWhereInput
    /**
     * Limit how many Expansions to delete.
     */
    limit?: number
  }

  /**
   * Expansion without action
   */
  export type ExpansionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expansion
     */
    select?: ExpansionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expansion
     */
    omit?: ExpansionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpansionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    minAge: 'minAge',
    players: 'players',
    time: 'time',
    image: 'image',
    favorite: 'favorite',
    category: 'category',
    rating: 'rating',
    notes: 'notes'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const PlaySessionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    players: 'players',
    notes: 'notes',
    gameId: 'gameId'
  };

  export type PlaySessionScalarFieldEnum = (typeof PlaySessionScalarFieldEnum)[keyof typeof PlaySessionScalarFieldEnum]


  export const ExpansionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gameId: 'gameId'
  };

  export type ExpansionScalarFieldEnum = (typeof ExpansionScalarFieldEnum)[keyof typeof ExpansionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    minAge?: IntFilter<"Game"> | number
    players?: StringFilter<"Game"> | string
    time?: StringFilter<"Game"> | string
    image?: StringFilter<"Game"> | string
    favorite?: BoolFilter<"Game"> | boolean
    category?: StringFilter<"Game"> | string
    rating?: IntFilter<"Game"> | number
    notes?: StringFilter<"Game"> | string
    sessions?: PlaySessionListRelationFilter
    expansions?: ExpansionListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    minAge?: SortOrder
    players?: SortOrder
    time?: SortOrder
    image?: SortOrder
    favorite?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
    sessions?: PlaySessionOrderByRelationAggregateInput
    expansions?: ExpansionOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    description?: StringFilter<"Game"> | string
    minAge?: IntFilter<"Game"> | number
    players?: StringFilter<"Game"> | string
    time?: StringFilter<"Game"> | string
    image?: StringFilter<"Game"> | string
    favorite?: BoolFilter<"Game"> | boolean
    category?: StringFilter<"Game"> | string
    rating?: IntFilter<"Game"> | number
    notes?: StringFilter<"Game"> | string
    sessions?: PlaySessionListRelationFilter
    expansions?: ExpansionListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    minAge?: SortOrder
    players?: SortOrder
    time?: SortOrder
    image?: SortOrder
    favorite?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    description?: StringWithAggregatesFilter<"Game"> | string
    minAge?: IntWithAggregatesFilter<"Game"> | number
    players?: StringWithAggregatesFilter<"Game"> | string
    time?: StringWithAggregatesFilter<"Game"> | string
    image?: StringWithAggregatesFilter<"Game"> | string
    favorite?: BoolWithAggregatesFilter<"Game"> | boolean
    category?: StringWithAggregatesFilter<"Game"> | string
    rating?: IntWithAggregatesFilter<"Game"> | number
    notes?: StringWithAggregatesFilter<"Game"> | string
  }

  export type PlaySessionWhereInput = {
    AND?: PlaySessionWhereInput | PlaySessionWhereInput[]
    OR?: PlaySessionWhereInput[]
    NOT?: PlaySessionWhereInput | PlaySessionWhereInput[]
    id?: IntFilter<"PlaySession"> | number
    date?: DateTimeFilter<"PlaySession"> | Date | string
    players?: StringFilter<"PlaySession"> | string
    notes?: StringFilter<"PlaySession"> | string
    gameId?: IntFilter<"PlaySession"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type PlaySessionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    players?: SortOrder
    notes?: SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type PlaySessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaySessionWhereInput | PlaySessionWhereInput[]
    OR?: PlaySessionWhereInput[]
    NOT?: PlaySessionWhereInput | PlaySessionWhereInput[]
    date?: DateTimeFilter<"PlaySession"> | Date | string
    players?: StringFilter<"PlaySession"> | string
    notes?: StringFilter<"PlaySession"> | string
    gameId?: IntFilter<"PlaySession"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type PlaySessionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    players?: SortOrder
    notes?: SortOrder
    gameId?: SortOrder
    _count?: PlaySessionCountOrderByAggregateInput
    _avg?: PlaySessionAvgOrderByAggregateInput
    _max?: PlaySessionMaxOrderByAggregateInput
    _min?: PlaySessionMinOrderByAggregateInput
    _sum?: PlaySessionSumOrderByAggregateInput
  }

  export type PlaySessionScalarWhereWithAggregatesInput = {
    AND?: PlaySessionScalarWhereWithAggregatesInput | PlaySessionScalarWhereWithAggregatesInput[]
    OR?: PlaySessionScalarWhereWithAggregatesInput[]
    NOT?: PlaySessionScalarWhereWithAggregatesInput | PlaySessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlaySession"> | number
    date?: DateTimeWithAggregatesFilter<"PlaySession"> | Date | string
    players?: StringWithAggregatesFilter<"PlaySession"> | string
    notes?: StringWithAggregatesFilter<"PlaySession"> | string
    gameId?: IntWithAggregatesFilter<"PlaySession"> | number
  }

  export type ExpansionWhereInput = {
    AND?: ExpansionWhereInput | ExpansionWhereInput[]
    OR?: ExpansionWhereInput[]
    NOT?: ExpansionWhereInput | ExpansionWhereInput[]
    id?: IntFilter<"Expansion"> | number
    name?: StringFilter<"Expansion"> | string
    gameId?: IntFilter<"Expansion"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type ExpansionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
  }

  export type ExpansionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpansionWhereInput | ExpansionWhereInput[]
    OR?: ExpansionWhereInput[]
    NOT?: ExpansionWhereInput | ExpansionWhereInput[]
    name?: StringFilter<"Expansion"> | string
    gameId?: IntFilter<"Expansion"> | number
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type ExpansionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
    _count?: ExpansionCountOrderByAggregateInput
    _avg?: ExpansionAvgOrderByAggregateInput
    _max?: ExpansionMaxOrderByAggregateInput
    _min?: ExpansionMinOrderByAggregateInput
    _sum?: ExpansionSumOrderByAggregateInput
  }

  export type ExpansionScalarWhereWithAggregatesInput = {
    AND?: ExpansionScalarWhereWithAggregatesInput | ExpansionScalarWhereWithAggregatesInput[]
    OR?: ExpansionScalarWhereWithAggregatesInput[]
    NOT?: ExpansionScalarWhereWithAggregatesInput | ExpansionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Expansion"> | number
    name?: StringWithAggregatesFilter<"Expansion"> | string
    gameId?: IntWithAggregatesFilter<"Expansion"> | number
  }

  export type GameCreateInput = {
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
    sessions?: PlaySessionCreateNestedManyWithoutGameInput
    expansions?: ExpansionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
    sessions?: PlaySessionUncheckedCreateNestedManyWithoutGameInput
    expansions?: ExpansionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    sessions?: PlaySessionUpdateManyWithoutGameNestedInput
    expansions?: ExpansionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    sessions?: PlaySessionUncheckedUpdateManyWithoutGameNestedInput
    expansions?: ExpansionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type PlaySessionCreateInput = {
    date?: Date | string
    players: string
    notes?: string
    game: GameCreateNestedOneWithoutSessionsInput
  }

  export type PlaySessionUncheckedCreateInput = {
    id?: number
    date?: Date | string
    players: string
    notes?: string
    gameId: number
  }

  export type PlaySessionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type PlaySessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaySessionCreateManyInput = {
    id?: number
    date?: Date | string
    players: string
    notes?: string
    gameId: number
  }

  export type PlaySessionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type PlaySessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpansionCreateInput = {
    name: string
    game: GameCreateNestedOneWithoutExpansionsInput
  }

  export type ExpansionUncheckedCreateInput = {
    id?: number
    name: string
    gameId: number
  }

  export type ExpansionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    game?: GameUpdateOneRequiredWithoutExpansionsNestedInput
  }

  export type ExpansionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type ExpansionCreateManyInput = {
    id?: number
    name: string
    gameId: number
  }

  export type ExpansionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExpansionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlaySessionListRelationFilter = {
    every?: PlaySessionWhereInput
    some?: PlaySessionWhereInput
    none?: PlaySessionWhereInput
  }

  export type ExpansionListRelationFilter = {
    every?: ExpansionWhereInput
    some?: ExpansionWhereInput
    none?: ExpansionWhereInput
  }

  export type PlaySessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpansionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    minAge?: SortOrder
    players?: SortOrder
    time?: SortOrder
    image?: SortOrder
    favorite?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    minAge?: SortOrder
    rating?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    minAge?: SortOrder
    players?: SortOrder
    time?: SortOrder
    image?: SortOrder
    favorite?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    minAge?: SortOrder
    players?: SortOrder
    time?: SortOrder
    image?: SortOrder
    favorite?: SortOrder
    category?: SortOrder
    rating?: SortOrder
    notes?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    minAge?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type PlaySessionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    players?: SortOrder
    notes?: SortOrder
    gameId?: SortOrder
  }

  export type PlaySessionAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type PlaySessionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    players?: SortOrder
    notes?: SortOrder
    gameId?: SortOrder
  }

  export type PlaySessionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    players?: SortOrder
    notes?: SortOrder
    gameId?: SortOrder
  }

  export type PlaySessionSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ExpansionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
  }

  export type ExpansionAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type ExpansionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
  }

  export type ExpansionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gameId?: SortOrder
  }

  export type ExpansionSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
  }

  export type PlaySessionCreateNestedManyWithoutGameInput = {
    create?: XOR<PlaySessionCreateWithoutGameInput, PlaySessionUncheckedCreateWithoutGameInput> | PlaySessionCreateWithoutGameInput[] | PlaySessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlaySessionCreateOrConnectWithoutGameInput | PlaySessionCreateOrConnectWithoutGameInput[]
    createMany?: PlaySessionCreateManyGameInputEnvelope
    connect?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
  }

  export type ExpansionCreateNestedManyWithoutGameInput = {
    create?: XOR<ExpansionCreateWithoutGameInput, ExpansionUncheckedCreateWithoutGameInput> | ExpansionCreateWithoutGameInput[] | ExpansionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ExpansionCreateOrConnectWithoutGameInput | ExpansionCreateOrConnectWithoutGameInput[]
    createMany?: ExpansionCreateManyGameInputEnvelope
    connect?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
  }

  export type PlaySessionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<PlaySessionCreateWithoutGameInput, PlaySessionUncheckedCreateWithoutGameInput> | PlaySessionCreateWithoutGameInput[] | PlaySessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlaySessionCreateOrConnectWithoutGameInput | PlaySessionCreateOrConnectWithoutGameInput[]
    createMany?: PlaySessionCreateManyGameInputEnvelope
    connect?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
  }

  export type ExpansionUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<ExpansionCreateWithoutGameInput, ExpansionUncheckedCreateWithoutGameInput> | ExpansionCreateWithoutGameInput[] | ExpansionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ExpansionCreateOrConnectWithoutGameInput | ExpansionCreateOrConnectWithoutGameInput[]
    createMany?: ExpansionCreateManyGameInputEnvelope
    connect?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlaySessionUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlaySessionCreateWithoutGameInput, PlaySessionUncheckedCreateWithoutGameInput> | PlaySessionCreateWithoutGameInput[] | PlaySessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlaySessionCreateOrConnectWithoutGameInput | PlaySessionCreateOrConnectWithoutGameInput[]
    upsert?: PlaySessionUpsertWithWhereUniqueWithoutGameInput | PlaySessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlaySessionCreateManyGameInputEnvelope
    set?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    disconnect?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    delete?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    connect?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    update?: PlaySessionUpdateWithWhereUniqueWithoutGameInput | PlaySessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlaySessionUpdateManyWithWhereWithoutGameInput | PlaySessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlaySessionScalarWhereInput | PlaySessionScalarWhereInput[]
  }

  export type ExpansionUpdateManyWithoutGameNestedInput = {
    create?: XOR<ExpansionCreateWithoutGameInput, ExpansionUncheckedCreateWithoutGameInput> | ExpansionCreateWithoutGameInput[] | ExpansionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ExpansionCreateOrConnectWithoutGameInput | ExpansionCreateOrConnectWithoutGameInput[]
    upsert?: ExpansionUpsertWithWhereUniqueWithoutGameInput | ExpansionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ExpansionCreateManyGameInputEnvelope
    set?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    disconnect?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    delete?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    connect?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    update?: ExpansionUpdateWithWhereUniqueWithoutGameInput | ExpansionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ExpansionUpdateManyWithWhereWithoutGameInput | ExpansionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ExpansionScalarWhereInput | ExpansionScalarWhereInput[]
  }

  export type PlaySessionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<PlaySessionCreateWithoutGameInput, PlaySessionUncheckedCreateWithoutGameInput> | PlaySessionCreateWithoutGameInput[] | PlaySessionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: PlaySessionCreateOrConnectWithoutGameInput | PlaySessionCreateOrConnectWithoutGameInput[]
    upsert?: PlaySessionUpsertWithWhereUniqueWithoutGameInput | PlaySessionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: PlaySessionCreateManyGameInputEnvelope
    set?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    disconnect?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    delete?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    connect?: PlaySessionWhereUniqueInput | PlaySessionWhereUniqueInput[]
    update?: PlaySessionUpdateWithWhereUniqueWithoutGameInput | PlaySessionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: PlaySessionUpdateManyWithWhereWithoutGameInput | PlaySessionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: PlaySessionScalarWhereInput | PlaySessionScalarWhereInput[]
  }

  export type ExpansionUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<ExpansionCreateWithoutGameInput, ExpansionUncheckedCreateWithoutGameInput> | ExpansionCreateWithoutGameInput[] | ExpansionUncheckedCreateWithoutGameInput[]
    connectOrCreate?: ExpansionCreateOrConnectWithoutGameInput | ExpansionCreateOrConnectWithoutGameInput[]
    upsert?: ExpansionUpsertWithWhereUniqueWithoutGameInput | ExpansionUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: ExpansionCreateManyGameInputEnvelope
    set?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    disconnect?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    delete?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    connect?: ExpansionWhereUniqueInput | ExpansionWhereUniqueInput[]
    update?: ExpansionUpdateWithWhereUniqueWithoutGameInput | ExpansionUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: ExpansionUpdateManyWithWhereWithoutGameInput | ExpansionUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: ExpansionScalarWhereInput | ExpansionScalarWhereInput[]
  }

  export type GameCreateNestedOneWithoutSessionsInput = {
    create?: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutSessionsInput
    connect?: GameWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutSessionsInput
    upsert?: GameUpsertWithoutSessionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutSessionsInput, GameUpdateWithoutSessionsInput>, GameUncheckedUpdateWithoutSessionsInput>
  }

  export type GameCreateNestedOneWithoutExpansionsInput = {
    create?: XOR<GameCreateWithoutExpansionsInput, GameUncheckedCreateWithoutExpansionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutExpansionsInput
    connect?: GameWhereUniqueInput
  }

  export type GameUpdateOneRequiredWithoutExpansionsNestedInput = {
    create?: XOR<GameCreateWithoutExpansionsInput, GameUncheckedCreateWithoutExpansionsInput>
    connectOrCreate?: GameCreateOrConnectWithoutExpansionsInput
    upsert?: GameUpsertWithoutExpansionsInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutExpansionsInput, GameUpdateWithoutExpansionsInput>, GameUncheckedUpdateWithoutExpansionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlaySessionCreateWithoutGameInput = {
    date?: Date | string
    players: string
    notes?: string
  }

  export type PlaySessionUncheckedCreateWithoutGameInput = {
    id?: number
    date?: Date | string
    players: string
    notes?: string
  }

  export type PlaySessionCreateOrConnectWithoutGameInput = {
    where: PlaySessionWhereUniqueInput
    create: XOR<PlaySessionCreateWithoutGameInput, PlaySessionUncheckedCreateWithoutGameInput>
  }

  export type PlaySessionCreateManyGameInputEnvelope = {
    data: PlaySessionCreateManyGameInput | PlaySessionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type ExpansionCreateWithoutGameInput = {
    name: string
  }

  export type ExpansionUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
  }

  export type ExpansionCreateOrConnectWithoutGameInput = {
    where: ExpansionWhereUniqueInput
    create: XOR<ExpansionCreateWithoutGameInput, ExpansionUncheckedCreateWithoutGameInput>
  }

  export type ExpansionCreateManyGameInputEnvelope = {
    data: ExpansionCreateManyGameInput | ExpansionCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PlaySessionUpsertWithWhereUniqueWithoutGameInput = {
    where: PlaySessionWhereUniqueInput
    update: XOR<PlaySessionUpdateWithoutGameInput, PlaySessionUncheckedUpdateWithoutGameInput>
    create: XOR<PlaySessionCreateWithoutGameInput, PlaySessionUncheckedCreateWithoutGameInput>
  }

  export type PlaySessionUpdateWithWhereUniqueWithoutGameInput = {
    where: PlaySessionWhereUniqueInput
    data: XOR<PlaySessionUpdateWithoutGameInput, PlaySessionUncheckedUpdateWithoutGameInput>
  }

  export type PlaySessionUpdateManyWithWhereWithoutGameInput = {
    where: PlaySessionScalarWhereInput
    data: XOR<PlaySessionUpdateManyMutationInput, PlaySessionUncheckedUpdateManyWithoutGameInput>
  }

  export type PlaySessionScalarWhereInput = {
    AND?: PlaySessionScalarWhereInput | PlaySessionScalarWhereInput[]
    OR?: PlaySessionScalarWhereInput[]
    NOT?: PlaySessionScalarWhereInput | PlaySessionScalarWhereInput[]
    id?: IntFilter<"PlaySession"> | number
    date?: DateTimeFilter<"PlaySession"> | Date | string
    players?: StringFilter<"PlaySession"> | string
    notes?: StringFilter<"PlaySession"> | string
    gameId?: IntFilter<"PlaySession"> | number
  }

  export type ExpansionUpsertWithWhereUniqueWithoutGameInput = {
    where: ExpansionWhereUniqueInput
    update: XOR<ExpansionUpdateWithoutGameInput, ExpansionUncheckedUpdateWithoutGameInput>
    create: XOR<ExpansionCreateWithoutGameInput, ExpansionUncheckedCreateWithoutGameInput>
  }

  export type ExpansionUpdateWithWhereUniqueWithoutGameInput = {
    where: ExpansionWhereUniqueInput
    data: XOR<ExpansionUpdateWithoutGameInput, ExpansionUncheckedUpdateWithoutGameInput>
  }

  export type ExpansionUpdateManyWithWhereWithoutGameInput = {
    where: ExpansionScalarWhereInput
    data: XOR<ExpansionUpdateManyMutationInput, ExpansionUncheckedUpdateManyWithoutGameInput>
  }

  export type ExpansionScalarWhereInput = {
    AND?: ExpansionScalarWhereInput | ExpansionScalarWhereInput[]
    OR?: ExpansionScalarWhereInput[]
    NOT?: ExpansionScalarWhereInput | ExpansionScalarWhereInput[]
    id?: IntFilter<"Expansion"> | number
    name?: StringFilter<"Expansion"> | string
    gameId?: IntFilter<"Expansion"> | number
  }

  export type GameCreateWithoutSessionsInput = {
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
    expansions?: ExpansionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
    expansions?: ExpansionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutSessionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
  }

  export type GameUpsertWithoutSessionsInput = {
    update: XOR<GameUpdateWithoutSessionsInput, GameUncheckedUpdateWithoutSessionsInput>
    create: XOR<GameCreateWithoutSessionsInput, GameUncheckedCreateWithoutSessionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutSessionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutSessionsInput, GameUncheckedUpdateWithoutSessionsInput>
  }

  export type GameUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    expansions?: ExpansionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    expansions?: ExpansionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutExpansionsInput = {
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
    sessions?: PlaySessionCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutExpansionsInput = {
    id?: number
    name: string
    description: string
    minAge: number
    players: string
    time: string
    image: string
    favorite?: boolean
    category?: string
    rating?: number
    notes?: string
    sessions?: PlaySessionUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutExpansionsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutExpansionsInput, GameUncheckedCreateWithoutExpansionsInput>
  }

  export type GameUpsertWithoutExpansionsInput = {
    update: XOR<GameUpdateWithoutExpansionsInput, GameUncheckedUpdateWithoutExpansionsInput>
    create: XOR<GameCreateWithoutExpansionsInput, GameUncheckedCreateWithoutExpansionsInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutExpansionsInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutExpansionsInput, GameUncheckedUpdateWithoutExpansionsInput>
  }

  export type GameUpdateWithoutExpansionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    sessions?: PlaySessionUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutExpansionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    minAge?: IntFieldUpdateOperationsInput | number
    players?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    notes?: StringFieldUpdateOperationsInput | string
    sessions?: PlaySessionUncheckedUpdateManyWithoutGameNestedInput
  }

  export type PlaySessionCreateManyGameInput = {
    id?: number
    date?: Date | string
    players: string
    notes?: string
  }

  export type ExpansionCreateManyGameInput = {
    id?: number
    name: string
  }

  export type PlaySessionUpdateWithoutGameInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type PlaySessionUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type PlaySessionUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    players?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
  }

  export type ExpansionUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExpansionUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ExpansionUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}